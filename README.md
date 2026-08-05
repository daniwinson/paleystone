# PALEY Stone & Tile Forensics — paleystone.com

Static website built from the Claude Design mockups (July 2026). Plain HTML/CSS/JS —
no build step, no framework. Edit any page directly and re-upload.

## Files

| File | Page |
|---|---|
| `index.html` | Homepage |
| `about.html` | About James Paley |
| `services.html` | Services (5 services) |
| `case-studies/index.html` | Case studies grid with category filter |
| `case-studies/*.html` | Individual case study pages (6) |
| `contact.html` | Contact details — phone, email, address (no form) |
| `credentials.html` | Credentials list |
| `blog.html` | Blog index (empty state until articles exist) |
| `404.html` | Not-found page |
| `css/style.css` | All styling (design tokens at the top as CSS variables) |
| `js/main.js` | Mobile menu, case study filter, footer year |

## Before launch — checklist

1. **Contact details** — the contact form was removed (Aug 2026). `contact.html` now
   lists phone (714-390-5473, `tel:` — taps to call), email (info@paleystone.com,
   `mailto:`), and the Santa Ana office address (opens in Google Maps). If any of
   these change, update BOTH the visible text and the `href`.
2. **Freddy's headshot** — `img/placeholder-headshot.svg` is used on the contact and
   credentials pages until his photo arrives; swap in a real photo (square crop works
   best) and update the two `<img>` tags.
3. **Photos** — case studies now use real project photography scraped from the old
   paleystone.com (in `img/case-studies/`). The homepage and About page heroes are
   still Unsplash placeholders — search the pages for `images.unsplash.com`.
4. **Case studies** — all six pages (Shady Canyon, Hyundai HQ, Pfizer, North American
   College, First Bank, Historic Court House) use the photos and write-ups published
   on the old paleystone.com site. The Limestone Testing study was removed at James's
   request (July 2026). One old-site project remains unused: Granite Testing, Palos
   Verdes — its photos/copy can be added the same way if wanted.
5. **Client naming** — James approved naming Hyundai National Headquarters
   (July 2026); other projects are named as published on the old site.
6. **Favicon** — add a `favicon.ico` (or PNG + `<link rel="icon">` tags) to the root.

Resolved: emails are real (james@ / alfredo@ / info@ paleystone.com); credentials on
about.html + credentials.html were
rewritten to match James's CV (updated 10/24/2025); CVs are downloadable from the
credentials page (`cv/` folder).

## Deploying to Porkbun static hosting

1. In your Porkbun account, open the domain → **Hosting** → enable static hosting
   (Porkbun calls it "EZ hosting" / static site hosting).
2. Upload the *contents* of this folder (not the folder itself) so `index.html` sits
   at the site root. Keep the `css/`, `js/`, and `case-studies/` folder structure.
3. Porkbun provisions SSL automatically; make sure the site is served over
   `https://paleystone.com` and www redirects to the bare domain (or vice versa).
4. Re-upload changed files any time you edit — there's no build step.

## Editing tips

- All colors/fonts live at the top of `css/style.css` as `--variables`.
- Every page repeats the same nav and footer — if you change a nav link, change it on
  every page (a find-and-replace across files works well).
- To add a case study: copy an existing page in `case-studies/`, edit the content,
  then add a card for it in `case-studies/index.html` (set `data-category` to one of:
  `residential`, `commercial`, `expert-witness`, `restoration`) and optionally to the
  Featured Work grid on `index.html`.
