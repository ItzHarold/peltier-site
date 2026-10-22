'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { agendaFromIcs, fromZoned } = require('../lib/ics');

const feed = (body) => 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\n' + body + '\r\nEND:VCALENDAR\r\n';
const ev = (lines) => 'BEGIN:VEVENT\r\n' + lines.join('\r\n') + '\r\nEND:VEVENT';

test('zoned wall-clock to UTC, summer and winter', () => {
  assert.equal(fromZoned(2026, 7, 1, 12, 0, 0, 'Europe/Amsterdam').toISOString(), '2026-07-01T10:00:00.000Z');
  assert.equal(fromZoned(2026, 1, 1, 12, 0, 0, 'Europe/Amsterdam').toISOString(), '2026-01-01T11:00:00.000Z');
});

test('weekly all-day series with INTERVAL, UNTIL, EXDATE and a cancelled override', () => {
  const ics = feed([
    ev(['UID:a', 'SUMMARY:Crêpes Stand @ The City', 'DTSTART;VALUE=DATE:20260209', 'DTEND;VALUE=DATE:20260210',
      'RRULE:FREQ=WEEKLY;UNTIL=20260629;INTERVAL=2', 'EXDATE;VALUE=DATE:20260309']),
    ev(['UID:a', 'RECURRENCE-ID;VALUE=DATE:20260223', 'SUMMARY:[cancelled] Crêpes Stand @ The City',
      'DTSTART;VALUE=DATE:20260223', 'DTEND;VALUE=DATE:20260224'])
  ].join('\r\n'));
  // Mon 9 Feb, (23 Feb cancelled), (9 Mar excluded), 23 Mar ...
  let r = agendaFromIcs(ics, new Date('2026-02-10T12:00:00Z'));
  assert.equal(r.mode, 'next');
  assert.equal(r.event.start, '2026-03-22T23:00:00.000Z'); // 23 March 00:00 Amsterdam
  assert.equal(r.event.allDay, true);
  // during the last occurrence (29 June) it is "now"
  r = agendaFromIcs(ics, new Date('2026-06-29T15:00:00Z'));
  assert.equal(r.mode, 'now');
  // after the series ended: the most recent one, so the block never goes stale
  r = agendaFromIcs(ics, new Date('2026-08-01T00:00:00Z'));
  assert.equal(r.mode, 'latest');
  assert.equal(r.event.start, '2026-06-28T22:00:00.000Z');
});

test('timed event with TZID keeps its wall time; location lines are joined; brackets hide', () => {
  const ics = feed([
    ev(['UID:b', 'SUMMARY:FeelGood Market', 'LOCATION:Strijp-S\\nEindhoven\\, Netherlands',
      'DTSTART;TZID=Europe/Amsterdam:20261018T120000', 'DTEND;TZID=Europe/Amsterdam:20261018T173000']),
    ev(['UID:c', 'SUMMARY:[MAYBE] Xmas market', 'DTSTART;VALUE=DATE:20261010', 'DTEND;VALUE=DATE:20261011']),
    ev(['UID:d', 'SUMMARY:Private thing', 'STATUS:CANCELLED', 'DTSTART;VALUE=DATE:20261012', 'DTEND;VALUE=DATE:20261013'])
  ].join('\r\n'));
  const r = agendaFromIcs(ics, new Date('2026-10-01T00:00:00Z'));
  assert.equal(r.mode, 'next');
  assert.equal(r.event.title, 'FeelGood Market');
  assert.equal(r.event.location, 'Strijp-S, Eindhoven, Netherlands');
  assert.equal(r.event.start, '2026-10-18T10:00:00.000Z');
  assert.equal(r.event.end, '2026-10-18T15:30:00.000Z');
  assert.equal(r.event.allDay, false);
});

test('monthly "third Sunday" rule and empty feed', () => {
  const ics = feed(ev(['UID:e', 'SUMMARY:FeelGood Market', 'DTSTART;VALUE=DATE:20260118', 'DTEND;VALUE=DATE:20260119',
    'RRULE:FREQ=MONTHLY;BYDAY=3SU']));
  const r = agendaFromIcs(ics, new Date('2026-09-30T20:00:00Z'));
  assert.equal(r.event.start, '2026-10-17T22:00:00.000Z'); // Sun 18 Oct 2026
  assert.equal(agendaFromIcs(feed(''), new Date()).mode, 'none');
});

test('only the "Site:" part of the notes is published', () => {
  const { publicText } = require('../lib/ics');
  assert.equal(publicText('Call the organiser about power.\nSite: Crêpes from 10:00, next to the main stage.'), 'Crêpes from 10:00, next to the main stage.');
  assert.equal(publicText('site: Tot 17:00!'), 'Tot 17:00!');
  assert.equal(publicText('Private note only'), '');
  assert.equal(publicText(''), '');
});
