'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { agendaFromIcs, publicText, fromZoned } = require('../lib/ics');

const feed = (body) => 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\n' + body + '\r\nEND:VCALENDAR\r\n';
const ev = (lines) => 'BEGIN:VEVENT\r\n' + lines.join('\r\n') + '\r\nEND:VEVENT';

test('zoned wall-clock to UTC, summer and winter', () => {
  assert.equal(fromZoned(2026, 7, 1, 12, 0, 0, 'Europe/Amsterdam').toISOString(), '2026-07-01T10:00:00.000Z');
  assert.equal(fromZoned(2026, 1, 1, 12, 0, 0, 'Europe/Amsterdam').toISOString(), '2026-01-01T11:00:00.000Z');
});

test('the next three one-off events, in order; weekly series, cancelled and "maybe" events are skipped', () => {
  const ics = feed([
    ev(['UID:a', 'SUMMARY:Tilburg Market', 'DTSTART;VALUE=DATE:20260207', 'DTEND;VALUE=DATE:20260208', 'RRULE:FREQ=WEEKLY']),
    ev(['UID:a', 'RECURRENCE-ID;VALUE=DATE:20261121', 'SUMMARY:Tilburg Market (Kermis)', 'DTSTART;VALUE=DATE:20261121', 'DTEND;VALUE=DATE:20261122']),
    ev(['UID:b', 'SUMMARY:Winter Market Eindhoven', 'DTSTART;VALUE=DATE:20261212', 'DTEND;VALUE=DATE:20261214']),
    ev(['UID:c', 'SUMMARY:FeelGood Market Eindhoven Xmas edition', 'LOCATION:Strijp-S\\nEindhoven\\, Netherlands',
      'DTSTART;TZID=Europe/Amsterdam:20261205T120000', 'DTEND;TZID=Europe/Amsterdam:20261205T173000',
      'DESCRIPTION:Ask about power.\\nSite: Crêpes from 12:00\\, next to the main stage.']),
    ev(['UID:d', 'SUMMARY:MTM Xmas Market @ BOS&Co', 'DTSTART;VALUE=DATE:20261220', 'DTEND;VALUE=DATE:20261221']),
    ev(['UID:e', 'SUMMARY:Spring fair', 'DTSTART;VALUE=DATE:20270418', 'DTEND;VALUE=DATE:20270419']),
    ev(['UID:f', 'SUMMARY:[MAYBE] Xmas market', 'DTSTART;VALUE=DATE:20261210', 'DTEND;VALUE=DATE:20261211']), // hidden until the tag goes
    ev(['UID:g', 'SUMMARY:Cancelled thing', 'STATUS:CANCELLED', 'DTSTART;VALUE=DATE:20261211', 'DTEND;VALUE=DATE:20261212'])
  ].join('\r\n'));
  const r = agendaFromIcs(ics, new Date('2026-10-22T18:00:00Z'));
  assert.deepEqual(r.events.map((e) => e.title), ['FeelGood Market Eindhoven Xmas edition', 'Winter Market Eindhoven', 'MTM Xmas Market @ BOS&Co']);
  // the same event without the tag shows
  assert.ok(agendaFromIcs(ics.replace('[MAYBE] Xmas market', 'Xmas market'), new Date('2026-10-22T18:00:00Z')).events.some((e) => e.title === 'Xmas market'));
  assert.deepEqual(r.events[0], {
    title: 'FeelGood Market Eindhoven Xmas edition', location: 'Strijp-S, Eindhoven, Netherlands',
    text: 'Crêpes from 12:00, next to the main stage.',
    start: '2026-12-05T11:00:00.000Z', end: '2026-12-05T16:30:00.000Z', allDay: false
  });
  assert.equal(r.events[1].allDay, true);
  // halfway through the two-day market it is still listed first
  assert.equal(agendaFromIcs(ics, new Date('2026-12-13T10:00:00Z')).events[0].title, 'Winter Market Eindhoven');
  // fewer than three left: just those; nothing planned: an empty list (the site hides the block)
  assert.deepEqual(agendaFromIcs(ics, new Date('2026-12-25T00:00:00Z')).events.map((e) => e.title), ['Spring fair']);
  assert.deepEqual(agendaFromIcs(ics, new Date('2027-06-01T00:00:00Z')), { events: [] });
  assert.deepEqual(agendaFromIcs(feed(''), new Date()), { events: [] });
});

test('only the "Site:" part of the notes is published', () => {
  assert.equal(publicText('Call the organiser about power.\nSite: Crêpes from 10:00, next to the main stage.'), 'Crêpes from 10:00, next to the main stage.');
  assert.equal(publicText('site: Tot 17:00!'), 'Tot 17:00!');
  assert.equal(publicText('Private note only'), '');
  assert.equal(publicText(''), '');
});
