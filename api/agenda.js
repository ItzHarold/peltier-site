/* GET /api/agenda -> { events: [{ title, location, text, start, end, allDay }] }  (next three one-off events, or [])
   Reads the public calendar feed in AGENDA_ICS_URL (a webcal:// or https:// .ics link from
   Apple/Google Calendar). Cached on Vercel's CDN for 15 minutes, so the feed is hit rarely. */
'use strict';
const { agendaFromIcs } = require('../lib/ics');

const UA = 'PeltierSite/1.0 (+https://peltier-crepes-galettes.vercel.app)';

module.exports = async (req, res) => {
  const url = (process.env.AGENDA_ICS_URL || '').trim().replace(/^webcal:/i, 'https:');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (!url) {
    res.setHeader('Cache-Control', 'public, s-maxage=300');
    return res.status(200).json({ events: [] });
  }
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error('feed returned ' + r.status);
    const out = agendaFromIcs(await r.text(), new Date());
    res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=86400');
    return res.status(200).json(out);
  } catch (e) {
    console.error('agenda feed failed:', e.message);
    res.setHeader('Cache-Control', 'public, s-maxage=120');
    return res.status(200).json({ events: [] }); // site hides the block; retried by the CDN in 2 min
  }
};
