/* Build: copy static files into public/ and generate the site's images from assets/ (logo, photos).
   Menu PDFs are included when present. No network needed. */
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const OUT = 'public';
const IMG = path.join(OUT, 'images');
const BUTTER = '#FEEA92';

// Menu PDFs. Drop the files in menu/ and the matching button appears (the brunch menu needs both languages).
const PDFS = { street: ['street-food.pdf'], ouioui: ['oui-oui-en.pdf', 'oui-oui-nl.pdf'] };

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

  const [logo512, favicon] = await Promise.all([fs.readFile('assets/logo-512x512.png'), fs.readFile('assets/logo-32x32-bg.png')]);
  const avatar = await fs.readFile('assets/about-simon.webp'); // Simon with a crêpe (photo from Harold), full size

  await fs.writeFile(path.join(IMG, 'about-simon.webp'), avatar);
  await fs.writeFile(path.join(IMG, 'favicon-32.png'), favicon);
  await fs.writeFile(path.join(IMG, 'logo.png'), logo512);
  await sharp(logo512).resize(192, 192).png().toFile(path.join(IMG, 'logo-192.png'));
  await sharp(logo512).resize(180, 180).png().toFile(path.join(IMG, 'apple-touch-icon.png'));

  // Landing halves: the wagon at Fabriek 59 at dusk and Simon at the stall (photos from Harold, cropped in assets/).
  // Rename when they change: images are cached for a year.
  await fs.copyFile('assets/hero-ouioui.webp', path.join(IMG, 'hero-ouioui.webp'));
  await fs.copyFile('assets/hero-street.webp', path.join(IMG, 'hero-street.webp'));
  await fs.copyFile('assets/street-bg.webp', path.join(IMG, 'street-bg.webp')); // Food Stall section background
  // The wagon photo the listing block shows until the Google listing photo takes over.
  await fs.copyFile('assets/wagon.webp', path.join(IMG, 'wagon.webp'));
  // The wagon video for the Oui, Oui! stage (scrubbed by scroll): upscaled 1080p for desktop, 540p for phones, and its first frame
  await fs.mkdir(path.join(OUT, 'video'), { recursive: true });
  for (const f of ['wagon-1080.mp4', 'wagon-540.mp4']) await fs.copyFile(path.join('assets', f), path.join(OUT, 'video', f));
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
