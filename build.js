/* Build: copy static files into public/ and generate the site's images from the brand
   assets on peltier013.nl (logo, portrait, photo collage). Menu PDFs are included when present. */
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const SRC = 'https://peltier013.nl/assets/images/';
const UA = 'PeltierSiteBuild/1.0 (https://peltier-crepes-galettes.vercel.app; Ponte Digital) node-fetch';
const OUT = 'public';
const IMG = path.join(OUT, 'images');
const BUTTER = '#FEEA92';

// Menu PDFs. Drop the files in menu/ and the matching button appears (the brunch menu needs both languages).
const PDFS = { street: ['street-food.pdf'], ouioui: ['oui-oui-en.pdf', 'oui-oui-nl.pdf'] };

async function get(name) {
  const r = await fetch(SRC + name, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`Download failed: ${name} (${r.status})`);
  return Buffer.from(await r.arrayBuffer());
}

async function main() {
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(IMG, { recursive: true });

  for (const f of ['styles.css', 'main.js', 'manifest.json', 'robots.txt', 'sitemap.xml']) {
    await fs.copyFile(f, path.join(OUT, f));
  }

  let html = await fs.readFile('index.html', 'utf8');
  for (const [key, files] of Object.entries(PDFS)) {
    const present = await Promise.all(files.map((f) => fs.stat(path.join('menu', f)).then(() => true).catch(() => false)));
    const has = present.every(Boolean);
    if (has) {
      await fs.mkdir(path.join(OUT, 'menu'), { recursive: true });
      for (const f of files) await fs.copyFile(path.join('menu', f), path.join(OUT, 'menu', f));
      html = html.replace(`<!--pdf:${key}-->`, '').replace(`<!--/pdf:${key}-->`, '');
    } else {
      html = html.replace(new RegExp(`\\s*<!--pdf:${key}-->[\\s\\S]*?<!--/pdf:${key}-->`), '');
    }
    console.log(`${files.join(' + ')}: ${has ? 'included' : 'not there yet, button omitted'}`);
  }
  await fs.writeFile(path.join(OUT, 'index.html'), html);

  const [banner, avatar, logo512, favicon] = await Promise.all([
    get('banner.webp'), get('avatar.webp'), get('logo-512x512.png'), get('logo-32x32-bg.png')
  ]);

  await fs.writeFile(path.join(IMG, 'simon.webp'), avatar);
  await fs.writeFile(path.join(IMG, 'favicon-32.png'), favicon);
  await fs.writeFile(path.join(IMG, 'logo.png'), logo512);
  await sharp(logo512).resize(192, 192).png().toFile(path.join(IMG, 'logo-192.png'));
  await sharp(logo512).resize(180, 180).png().toFile(path.join(IMG, 'apple-touch-icon.png'));

  // Simon's own photo, cut from the 1920x500 collage on peltier013.nl (inside the torn edges).
  await sharp(banner).extract({ left: 310, top: 0, width: 480, height: 500 }).webp({ quality: 84 }).toFile(path.join(IMG, 'street.webp')); // Simon at the griddle, crowd
  // The wagon at Fabriek 59 (Simon's photo, sent by Harold). Replace assets/wagon.webp with a larger original when there is one.
  await fs.copyFile('assets/wagon.webp', path.join(IMG, 'wagon.webp'));
  // The wagon video for the Oui, Oui! stage (scrubbed by scroll): full size, a phone size, and its first frame
  await fs.mkdir(path.join(OUT, 'video'), { recursive: true });
  for (const f of ['wagon-720.mp4', 'wagon-540.mp4']) await fs.copyFile(path.join('assets', f), path.join(OUT, 'video', f));
  await fs.copyFile('assets/wagon-poster.webp', path.join(IMG, 'wagon-poster.webp'));
  // The six crêpe photos, square around the whole crêpe (from the originals). Rename when they change: images are cached for a year
  for (const f of await fs.readdir('photos')) {
    if (f.endsWith('.webp')) await fs.copyFile(path.join('photos', f), path.join(IMG, 'crepe-polaroid-' + f));
  }

  // Social share image: butter background, logo, oval portrait (matches the site's frames)
  const ovalMask = Buffer.from('<svg width="360" height="540"><ellipse cx="180" cy="270" rx="180" ry="270" fill="#fff"/></svg>');
  const ring = await sharp({ create: { width: 360, height: 540, channels: 4, background: '#FBFAF5' } })
    .composite([{ input: ovalMask, blend: 'dest-in' }]).png().toBuffer();
  const innerMask = Buffer.from('<svg width="340" height="510"><ellipse cx="170" cy="255" rx="170" ry="255" fill="#fff"/></svg>');
  const inner = await sharp(avatar).resize(340, 510, { fit: 'cover' })
    .composite([{ input: innerMask, blend: 'dest-in' }]).png().toBuffer();
  const photo = await sharp(ring).composite([{ input: inner, left: 10, top: 15 }]).png().toBuffer();
  const logo = await sharp(logo512).resize(300, 300).png().toBuffer();
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: BUTTER } })
    .composite([{ input: logo, left: 110, top: 165 }, { input: photo, left: 750, top: 45 }])
    .jpeg({ quality: 86 }).toFile(path.join(IMG, 'og.jpg'));

  const files = await fs.readdir(IMG);
  console.log('Built public/ with images:', files.join(', '));
}

main().catch((e) => { console.error(e); process.exit(1); });
