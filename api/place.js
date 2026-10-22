/* GET /api/place          -> { ok, name, address, rating, count, mapsUrl, photos: [{ src, by }] }
   GET /api/place?photo=0  -> the listing's photo (proxied, so the key stays here and the CDN caches it)
   Reads the Google Business listing ("Oui, Oui! - by Peltier Crêpes & Galettes") through the
   Places API (New) with GOOGLE_MAPS_API_KEY. Without a key the site keeps its own wagon photo. */
'use strict';

const KEY = (process.env.GOOGLE_MAPS_API_KEY || '').trim();
const QUERY = process.env.GOOGLE_PLACE_QUERY || 'Oui, Oui! - by Peltier Crêpes & Galettes, Lovense Kanaaldijk 45-5, 5013 BJ Tilburg';
const FIELDS = 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri,places.photos';
let cache = { at: 0, place: null }; // per warm instance; photo names expire, so refetched every few hours

async function place() {
  if (cache.place && Date.now() - cache.at < 6 * 3600e3) return cache.place;
  const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': KEY, 'X-Goog-FieldMask': FIELDS },
    body: JSON.stringify({ textQuery: QUERY, languageCode: 'nl', maxResultCount: 1 }),
    signal: AbortSignal.timeout(8000)
  });
  if (!r.ok) throw new Error('search returned ' + r.status);
  const p = ((await r.json()).places || [])[0];
  if (!p) throw new Error('listing not found for: ' + QUERY);
  cache = { at: Date.now(), place: p };
  return p;
}

module.exports = async (req, res) => {
  const off = (age) => { res.setHeader('Cache-Control', 'public, s-maxage=' + age); return res.status(200).json({ ok: false }); };
  if (!KEY) return off(600);
  try {
    const p = await place();
    const i = (req.query || {}).photo;
    if (i !== undefined) {
      const ph = (p.photos || [])[+i];
      if (!ph) return res.status(404).end();
      const r = await fetch('https://places.googleapis.com/v1/' + ph.name + '/media?maxWidthPx=1200&maxHeightPx=1200&key=' + KEY, { signal: AbortSignal.timeout(8000) });
      if (!r.ok) throw new Error('photo returned ' + r.status);
      res.setHeader('Content-Type', r.headers.get('content-type') || 'image/jpeg');
      res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=2592000'); // a week on the CDN
      return res.status(200).send(Buffer.from(await r.arrayBuffer()));
    }
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json({
      ok: true,
      name: (p.displayName && p.displayName.text) || '',
      address: p.formattedAddress || '',
      rating: p.rating || null,
      count: p.userRatingCount || 0,
      mapsUrl: p.googleMapsUri || '',
      photos: (p.photos || []).slice(0, 4).map((ph, k) => ({
        src: '/api/place?photo=' + k,
        by: (ph.authorAttributions || []).map((a) => a.displayName).filter(Boolean).join(', ')
      }))
    });
  } catch (e) {
    console.error('place failed:', e.message);
    return off(300);
  }
};
