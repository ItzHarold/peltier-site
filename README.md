# Peltier Crêpes & Galettes — website

Static site (HTML/CSS/vanilla JS) with two small Vercel functions. Live at
https://peltier-crepes-galettes.vercel.app (Vercel project `peltier-crepes-galettes`).

## Run

```sh
npm install
npm run build      # writes public/ from assets/, photos/ and menu/ (no network needed)
npm test           # node --test
```

Preview `public/` with any static server; the functions live in `api/` (Vercel runs them as serverless functions).

## Layout

| Path | What |
| --- | --- |
| `index.html`, `styles.css`, `main.js` | the page; NL/EN/FR strings live in the `T` object in `main.js` |
| `build.js` | copies files into `public/`, generates images, includes menu PDFs when present |
| `api/agenda.js` + `lib/ics.js` | next three one-off events from Simon's calendar feed (dependency-free iCalendar parser) |
| `api/place.js` | Google Business listing (photo, rating) through the Places API (New) |
| `photos/` | the six crêpe photos from the Figma "Crêpes" page (carousel) |
| `assets/logo-512x512.png`, `assets/favicon.ico`, `assets/favicon-32.png` | the logo and the tab icon (the mark cut from it) |
| `assets/about-simon.webp` | the About portrait, full size |
| `assets/hero-*.webp` | the two landing photos (wagon at dusk, Simon at the stall), pre-cropped; rename on change (cached a year) |
| `assets/wagon.webp` | the wagon photo used until the Google listing photo takes over |
| `menu/` | `oui-oui-en.pdf` + `oui-oui-nl.pdf` (the brunch menu, served by language; French gets English); drop `street-food.pdf` here and the Food Stall "Check the menu" button appears |

## Environment variables (Vercel → Settings → Environment Variables)

| Name | Purpose |
| --- | --- |
| `AGENDA_ICS_URL` | public iCloud/Google calendar feed (`webcal://` or `https://`) of the event calendar; set |
| `GOOGLE_MAPS_API_KEY` | Places API (New) key; without it the site keeps its own wagon photo and no rating |
| `GOOGLE_PLACE_QUERY` | optional, defaults to the "Oui, Oui! - by Peltier Crêpes & Galettes" listing |

## Simon's calendar

The Food Stall section lists the weekly spots itself (Saturday market, The City on Mondays) and shows
"Coming up": the next three events from Simon's "Event days" calendar (`AGENDA_ICS_URL`). Fewer planned →
fewer boxes; none → the block is not shown. Per event:

- Every one-off event shows, with its title exactly as typed. Skipped: events marked cancelled, and any title containing "maybe" (e.g. `[MAYBE] …`) until the word is removed.
- Repeating events (the weekly series) are never shown.
- **Location** field → shown as the address, plus a Route button.
- **Notes** field → everything after a line starting with `Site:` is shown (max 400 chars); the rest stays private.

Feed is cached on the CDN for 15 minutes; the listing for a day; listing photos for a week.
