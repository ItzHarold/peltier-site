'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');

function fakeRes() {
  const r = { headers: {}, code: 200, body: null };
  r.setHeader = (k, v) => { r.headers[k] = v; };
  r.status = (c) => { r.code = c; return r; };
  r.json = (o) => { r.body = o; return r; };
  r.send = (b) => { r.body = b; return r; };
  r.end = () => r;
  return r;
}
function load() { delete require.cache[require.resolve('../api/place.js')]; return require('../api/place.js'); }

test('without a key the endpoint says ok:false and the site keeps its own photo', async () => {
  delete process.env.GOOGLE_MAPS_API_KEY;
  const res = fakeRes();
  await load()({ query: {} }, res);
  assert.deepEqual(res.body, { ok: false });
});

test('with a key: listing JSON and photo proxy from the Places API (New)', async () => {
  process.env.GOOGLE_MAPS_API_KEY = 'test-key';
  const calls = [];
  const realFetch = global.fetch;
  global.fetch = async (url, opts) => {
    calls.push(String(url));
    if (String(url).includes('places:searchText')) {
      assert.equal(opts.headers['X-Goog-Api-Key'], 'test-key');
      return { ok: true, json: async () => ({ places: [{ id: 'ChIJx', displayName: { text: 'Oui, Oui! - by Peltier Crêpes & Galettes' }, formattedAddress: 'Lovense Kanaaldijk 45-5, 5013 BJ Tilburg', rating: 5, userRatingCount: 14, googleMapsUri: 'https://maps.google.com/?cid=1', photos: [{ name: 'places/ChIJx/photos/abc', authorAttributions: [{ displayName: 'Simon P' }] }] }] }) };
    }
    return { ok: true, headers: { get: () => 'image/jpeg' }, arrayBuffer: async () => new Uint8Array([255, 216, 255]).buffer };
  };
  try {
    const handler = load();
    const res = fakeRes();
    await handler({ query: {} }, res);
    assert.equal(res.body.ok, true);
    assert.equal(res.body.name, 'Oui, Oui! - by Peltier Crêpes & Galettes');
    assert.equal(res.body.rating, 5);
    assert.deepEqual(res.body.photos, [{ src: '/api/place?photo=0', by: 'Simon P' }]);
    const img = fakeRes();
    await handler({ query: { photo: '0' } }, img);
    assert.equal(img.headers['Content-Type'], 'image/jpeg');
    assert.equal(Buffer.from(img.body)[0], 255);
    assert.ok(calls.some((u) => u.includes('/photos/abc/media?maxWidthPx=1200')));
    assert.equal(calls.filter((u) => u.includes('searchText')).length, 1, 'listing is cached between calls');
    const missing = fakeRes();
    await handler({ query: { photo: '9' } }, missing);
    assert.equal(missing.code, 404);
  } finally { global.fetch = realFetch; delete process.env.GOOGLE_MAPS_API_KEY; }
});
