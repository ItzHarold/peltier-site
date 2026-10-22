/* Minimal iCalendar reader for a published Apple/Google calendar. No dependencies.
   Understands: DTSTART/DTEND (all-day, TZID, UTC), RRULE (DAILY/WEEKLY/MONTHLY/YEARLY,
   INTERVAL, COUNT, UNTIL, BYDAY, BYMONTHDAY), EXDATE, RECURRENCE-ID overrides, STATUS.
   Everything else in the feed is ignored on purpose. */
'use strict';

const TZ = 'Europe/Amsterdam';
const DAY = 86400000;
const WD = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

function unfold(text) {
  return text.replace(/\r\n|\r|\n/g, '\n').replace(/\n[ \t]/g, '').split('\n');
}

function unescape(v) {
  return v.replace(/\\n/gi, '\n').replace(/\\([,;\\])/g, '$1').trim();
}

/* Wall-clock time in `tz` -> UTC instant (two passes cover DST edges). */
function tzOffset(date, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).formatToParts(date);
  const o = {};
  for (const p of parts) o[p.type] = p.value;
  return Date.UTC(+o.year, +o.month - 1, +o.day, +o.hour, +o.minute, +o.second) - date.getTime();
}
function fromZoned(y, mo, d, h, mi, s, tz) {
  const wall = Date.UTC(y, mo - 1, d, h, mi, s);
  const guess = wall - tzOffset(new Date(wall), tz);
  return new Date(wall - tzOffset(new Date(guess), tz));
}

/* "20260907", "20260907T110000", "20260907T090000Z" + params -> { wall: Date(UTC-as-wall-clock), at: Date, allDay, tz } */
function parseDate(value, params) {
  const m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(value.trim());
  if (!m) return null;
  const allDay = !m[4] || /VALUE=DATE(?:;|$)/.test(params);
  const y = +m[1], mo = +m[2], d = +m[3], h = allDay ? 0 : +m[4], mi = allDay ? 0 : +m[5], s = allDay ? 0 : +(m[6] || 0);
  let tz = TZ;
  const t = /TZID=([^;:]+)/.exec(params);
  if (t) { try { new Intl.DateTimeFormat('en-US', { timeZone: t[1] }); tz = t[1]; } catch (e) { /* unknown Windows-style TZID: assume the site's zone */ } }
  const wall = new Date(Date.UTC(y, mo - 1, d, h, mi, s));
  const at = m[7] ? wall : fromZoned(y, mo, d, h, mi, s, tz);
  return { wall, at, allDay, tz, utc: !!m[7] };
}

/* Only the part of the event notes that Simon marks with "Site:" is published; the rest stays private. */
function publicText(notes) {
  const m = /(?:^|\n)\s*site\s*:\s*([\s\S]*)/i.exec(notes || '');
  return m ? m[1].trim().slice(0, 400) : '';
}

function parseRrule(v) {
  const r = {};
  v.split(';').forEach((kv) => { const [k, val] = kv.split('='); if (k && val) r[k.toUpperCase()] = val; });
  return r;
}

function parseEvents(text) {
  const events = [];
  let cur = null;
  for (const line of unfold(text)) {
    if (line === 'BEGIN:VEVENT') { cur = { exdates: [] }; continue; }
    if (line === 'END:VEVENT') { if (cur && cur.start) events.push(cur); cur = null; continue; }
    if (!cur) continue;
    const i = line.indexOf(':');
    if (i < 0) continue;
    const head = line.slice(0, i), value = line.slice(i + 1);
    const name = head.split(';')[0].toUpperCase();
    const params = head.slice(name.length);
    switch (name) {
      case 'UID': cur.uid = value.trim(); break;
      case 'SUMMARY': cur.summary = unescape(value); break;
      case 'LOCATION': cur.location = unescape(value).split('\n').map((s) => s.trim()).filter(Boolean).join(', '); break;
      case 'DESCRIPTION': cur.text = publicText(unescape(value)); break;
      case 'STATUS': cur.status = value.trim().toUpperCase(); break;
      case 'DTSTART': cur.start = parseDate(value, params); break;
      case 'DTEND': cur.end = parseDate(value, params); break;
      case 'DURATION': cur.duration = value.trim(); break;
      case 'RRULE': cur.rrule = parseRrule(value); break;
      case 'RECURRENCE-ID': cur.recurrenceId = parseDate(value, params); break;
      case 'EXDATE': value.split(',').forEach((v) => { const d = parseDate(v, params); if (d) cur.exdates.push(d.at.getTime()); }); break;
      default: break;
    }
  }
  return events;
}

function durationMs(str) {
  const m = /^(-)?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(str || '');
  if (!m) return 0;
  const ms = ((+m[2] || 0) * 7 + (+m[3] || 0)) * DAY + (+m[4] || 0) * 3600000 + (+m[5] || 0) * 60000 + (+m[6] || 0) * 1000;
  return m[1] ? -ms : ms;
}

function endOf(ev, startWall, startAt) {
  if (ev.end) {
    const len = ev.end.at - ev.start.at;
    return new Date(startAt.getTime() + len);
  }
  if (ev.duration) return new Date(startAt.getTime() + durationMs(ev.duration));
  return new Date(startAt.getTime() + (ev.start.allDay ? DAY : 0));
}

/* Recurrence expansion by walking the calendar day by day in the event's own wall-clock
   (so a 12:00 event stays 12:00 across DST). Simple and plenty fast for a feed of this size. */
function expand(ev, windowStart, windowEnd) {
  const r = ev.rrule;
  const freq = (r.FREQ || '').toUpperCase();
  const interval = Math.max(1, parseInt(r.INTERVAL || '1', 10));
  const count = r.COUNT ? parseInt(r.COUNT, 10) : Infinity;
  const until = r.UNTIL ? parseDate(r.UNTIL, r.UNTIL.length === 8 ? 'VALUE=DATE' : '') : null;
  const untilMs = until ? (until.allDay ? until.wall.getTime() + DAY - 1 : until.at.getTime()) : Infinity;
  const byDay = r.BYDAY ? r.BYDAY.split(',').map((s) => { const m = /^([+-]?\d)?([A-Z]{2})$/.exec(s); return m ? { ord: m[1] ? +m[1] : 0, wd: WD.indexOf(m[2]) } : null; }).filter(Boolean) : null;
  const byMonthDay = r.BYMONTHDAY ? r.BYMONTHDAY.split(',').map(Number) : null;

  const w0 = ev.start.wall; // wall-clock as UTC
  const day0 = new Date(Date.UTC(w0.getUTCFullYear(), w0.getUTCMonth(), w0.getUTCDate()));
  const weekStart = (d) => { const x = new Date(d); x.setUTCDate(x.getUTCDate() - ((x.getUTCDay() + 6) % 7)); return x; }; // WKST=MO
  const week0 = weekStart(day0);
  const out = [];
  let n = 0;
  let day = day0;
  const hardStop = new Date(Math.min(windowEnd.getTime() + DAY, day0.getTime() + 3650 * DAY));
  for (let guard = 0; day <= hardStop && n < count && guard < 20000; guard++, day = new Date(day.getTime() + DAY)) {
    let hit = false;
    const dow = day.getUTCDay();
    if (freq === 'DAILY') {
      hit = Math.round((day - day0) / DAY) % interval === 0;
    } else if (freq === 'WEEKLY') {
      const weeks = Math.round((weekStart(day) - week0) / (7 * DAY));
      hit = weeks % interval === 0 && (byDay ? byDay.some((b) => b.wd === dow) : dow === w0.getUTCDay());
    } else if (freq === 'MONTHLY') {
      const months = (day.getUTCFullYear() - w0.getUTCFullYear()) * 12 + day.getUTCMonth() - w0.getUTCMonth();
      if (months % interval === 0) {
        if (byDay) {
          hit = byDay.some((b) => {
            if (b.wd !== dow) return false;
            if (!b.ord) return true;
            const dim = new Date(Date.UTC(day.getUTCFullYear(), day.getUTCMonth() + 1, 0)).getUTCDate();
            const nth = Math.floor((day.getUTCDate() - 1) / 7) + 1;
            const nthFromEnd = Math.floor((dim - day.getUTCDate()) / 7) + 1;
            return b.ord > 0 ? nth === b.ord : nthFromEnd === -b.ord;
          });
        } else if (byMonthDay) {
          hit = byMonthDay.includes(day.getUTCDate());
        } else {
          hit = day.getUTCDate() === w0.getUTCDate();
        }
      }
    } else if (freq === 'YEARLY') {
      hit = (day.getUTCFullYear() - w0.getUTCFullYear()) % interval === 0 && day.getUTCMonth() === w0.getUTCMonth() && day.getUTCDate() === w0.getUTCDate();
    }
    if (!hit) continue;
    const wall = new Date(Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), w0.getUTCHours(), w0.getUTCMinutes(), w0.getUTCSeconds()));
    const at = ev.start.utc ? wall : fromZoned(wall.getUTCFullYear(), wall.getUTCMonth() + 1, wall.getUTCDate(), wall.getUTCHours(), wall.getUTCMinutes(), wall.getUTCSeconds(), ev.start.tz);
    if (at.getTime() > untilMs) break;
    n++;
    if (ev.exdates.includes(at.getTime())) continue;
    const end = endOf(ev, wall, at);
    if (end < windowStart) continue;
    out.push({ ev, start: at, end });
  }
  return out;
}

function hidden(ev) {
  return ev.status === 'CANCELLED' || !ev.summary || /^\s*[\[(]/.test(ev.summary); // "[cancelled] …", "(maybe) …" stay private
}

/* All concrete occurrences between windowStart and windowEnd. */
function occurrences(events, windowStart, windowEnd) {
  const overrides = new Map(); // uid -> Set(instant of the instance replaced)
  for (const ev of events) {
    if (!ev.recurrenceId) continue;
    if (!overrides.has(ev.uid)) overrides.set(ev.uid, new Set());
    overrides.get(ev.uid).add(ev.recurrenceId.at.getTime());
  }
  const out = [];
  for (const ev of events) {
    if (hidden(ev)) continue;
    if (ev.rrule) {
      const replaced = overrides.get(ev.uid);
      for (const o of expand(ev, windowStart, windowEnd)) {
        if (!(replaced && replaced.has(o.start.getTime()))) out.push(o);
      }
    } else {
      const end = endOf(ev, ev.start.wall, ev.start.at);
      if (end >= windowStart && ev.start.at <= windowEnd && !hidden(ev)) out.push({ ev, start: ev.start.at, end });
    }
  }
  return out;
}

/* The one thing the site shows: the next event, or the one happening now, or — when nothing
   is planned — the most recent one, so the block never gets stuck on stale "upcoming" text. */
function pick(occ, now) {
  const live = occ.filter((o) => o.end > now).sort((a, b) => a.start - b.start)[0];
  if (live) return { mode: live.start <= now ? 'now' : 'next', event: shape(live) };
  const past = occ.filter((o) => o.end <= now).sort((a, b) => b.start - a.start)[0];
  return past ? { mode: 'latest', event: shape(past) } : { mode: 'none' };
}

function shape(o) {
  return {
    title: o.ev.summary,
    location: o.ev.location || '',
    text: o.ev.text || '',
    start: o.start.toISOString(),
    end: o.end.toISOString(),
    allDay: !!o.ev.start.allDay
  };
}

function agendaFromIcs(text, now) {
  now = now || new Date();
  const events = parseEvents(text);
  const occ = occurrences(events, new Date(now.getTime() - 400 * DAY), new Date(now.getTime() + 400 * DAY));
  return pick(occ, now);
}

module.exports = { agendaFromIcs, parseEvents, occurrences, pick, publicText, fromZoned, TZ };
