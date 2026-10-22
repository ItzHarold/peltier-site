# Peltier Crêpes & Galettes — website

Static site (HTML/CSS/vanilla JS) with two small Vercel functions. Live at
https://peltier-crepes-galettes.vercel.app (Vercel project `peltier-crepes-galettes`).

## Run

```sh
npm install
npm run build      # writes public/ (fetches the logo/portrait from peltier013.nl, needs network)
npm test           # node --test
```

Preview `public/` with any static server; the functions live in `api/` (Vercel runs them as serverless functions).

## Layout

| Path | What |
| --- | --- |
| `index.html`, `styles.css`, `main.js` | the page; NL/EN/FR strings live in the `T` object in `main.js` |
| `build.js` | copies files into `public/`, generates images, includes menu PDFs when present |
| `api/agenda.js` + `lib/ics.js` | next event from Simon's calendar feed (dependency-free iCalendar parser) |
| `api/place.js` | Google Business listing (photo, rating) through the Places API (New) |
| `photos/` | the six crêpe photos from the Figma "Crêpes" page (carousel) |
| `assets/wagon.webp` | the wagon photo used until the Google listing photo takes over |
| `menu/` | drop `street-food.pdf` and/or `oui-oui.pdf` here and the "Bekijk de kaart" buttons appear |

## Environment variables (Vercel → Settings → Environment Variables)

| Name | Purpose |
| --- | --- |
| `AGENDA_ICS_URL` | public iCloud/Google calendar feed (`webcal://` or `https://`); set |
| `GOOGLE_MAPS_API_KEY` | Places API (New) key; without it the site keeps its own wagon photo and no rating |
| `GOOGLE_PLACE_QUERY` | optional, defaults to the "Oui, Oui! - by Peltier Crêpes & Galettes" listing |

## Simon's calendar

The street-food section shows one card: the next event, or the one happening now, or the most
recent one when nothing is planned. Per event:

- **Location** field → shown as the address, plus a Route button.
- **Notes** field → everything after a line starting with `Site:` is shown (max 400 chars); the rest stays private.
- Titles starting with `[` or `(` (e.g. `[cancelled] …`) are never shown.

Feed is cached on the CDN for 15 minutes; the listing for a day; listing photos for a week.
