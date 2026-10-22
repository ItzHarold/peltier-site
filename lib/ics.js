/* Minimal iCalendar reader for a published Apple/Google calendar. No dependencies.
   Understands DTSTART/DTEND/DURATION (all-day, TZID, UTC), STATUS, LOCATION and the "Site:" part
   of the notes. Repeating events (RRULE) and their edited instances (RECURRENCE-ID) are skipped on
   purpose: those are the weekly spots, which the site lists itself. Everything else is ignored. */
'use strict';

const TZ = 'Europe/Amsterdam';
const DAY = 86400000;

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

/* "20260907", "20260907T110000", "20260907T090000Z" + params -> { at: Date, allDay } */
function parseDate(value, params) {
  const m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(value.trim());
  if (!m) return null;
  const allDay = !m[4] || /VALUE=DATE(?:;|$)/.test(params);
  const y = +m[1], mo = +m[2], d = +m[3], h = allDay ? 0 : +m[4], mi = allDay ? 0 : +m[5], s = allDay ? 0 : +(m[6] || 0);
  let tz = TZ;
  const t = /TZID=([^;:]+)/.exec(params);
  if (t) { try { new Intl.DateTimeFormat('en-US', { timeZone: t[1] }); tz = t[1]; } catch (e) { /* unknown Windows-style TZID: assume the site's zone */ } }
  const at = m[7] ? new Date(Date.UTC(y, mo - 1, d, h, mi, s)) : fromZoned(y, mo, d, h, mi, s, tz);
  return { at, allDay };
}

/* Only the part of the event notes that Simon marks with "Site:" is published; the rest stays private. */
function publicText(notes) {
  const m = /(?:^|\n)\s*site\s*:\s*([\s\S]*)/i.exec(notes || '');
  return m ? m[1].trim().slice(0, 400) : '';
}

function parseEvents(text) {
  const events = [];
  let cur = null;
  for (const line of unfold(text)) {
    if (line === 'BEGIN:VEVENT') { cur = {}; continue; }
    if (line === 'END:VEVENT') { if (cur && cur.start && !cur.series) events.push(cur); cur = null; continue; }
    if (!cur) continue;
    const i = line.indexOf(':');
    if (i < 0) continue;
    const head = line.slice(0, i), value = line.slice(i + 1);
    const name = head.split(';')[0].toUpperCase();
    const params = head.slice(name.length);
    switch (name) {
      case 'SUMMARY': cur.summary = unescape(value); break;
      case 'LOCATION': cur.location = unescape(value).split('\n').map((s) => s.trim()).filter(Boolean).join(', '); break;
      case 'DESCRIPTION': cur.text = publicText(unescape(value)); break;
      case 'STATUS': cur.status = value.trim().toUpperCase(); break;
      case 'DTSTART': cur.start = parseDate(value, params); break;
      case 'DTEND': cur.end = parseDate(value, params); break;
      case 'DURATION': cur.duration = value.trim(); break;
      case 'RRULE': case 'RECURRENCE-ID': cur.series = true; break;
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

function endOf(ev) {
  if (ev.end) return ev.end.at;
  if (ev.duration) return new Date(ev.start.at.getTime() + durationMs(ev.duration));
  return new Date(ev.start.at.getTime() + (ev.start.allDay ? DAY : 0));
}

function hidden(ev) {
  return ev.status === 'CANCELLED' || !ev.summary || /^\s*[\[(]/.test(ev.summary); // "[cancelled] …", "(maybe) …" stay private
}

function shape(ev) {
  return {
    title: ev.summary,
    location: ev.location || '',
    text: ev.text || '',
    start: ev.start.at.toISOString(),
    end: endOf(ev).toISOString(),
    allDay: !!ev.start.allDay
  };
}

/* What the site shows: the next events (up to `max`, one happening right now included), or — when
   nothing is planned — the most recent ones, so the block never gets stuck on stale "upcoming" text. */
function agendaFromIcs(text, now, max) {
  now = now || new Date();
  max = max || 3;
  const all = parseEvents(text).filter((ev) => !hidden(ev));
  const live = all.filter((ev) => endOf(ev) > now).sort((a, b) => a.start.at - b.start.at);
  if (live.length) return { mode: 'next', events: live.slice(0, max).map(shape) };
  const past = all.filter((ev) => endOf(ev) <= now).sort((a, b) => b.start.at - a.start.at);
  return past.length ? { mode: 'latest', events: past.slice(0, max).map(shape) } : { mode: 'none', events: [] };
}

module.exports = { agendaFromIcs, parseEvents, publicText, fromZoned, TZ };
