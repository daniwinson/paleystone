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
| `contact.html` | Contact form + details |
| `credentials.html` | Credentials list |
| `blog.html` | Blog index (empty state until articles exist) |
| `404.html` | Not-found page |
| `css/style.css` | All styling (design tokens at the top as CSS variables) |
| `js/main.js` | Mobile menu, case study filter, footer year |

## Before launch — checklist

1. **Contact form** — the form in `contact.html` posts to Formspree. Sign up free at
   formspree.io, create a form, and replace `YOUR_FORM_ID` in `contact.html` with the
   real form ID. (Web3Forms or Basin work the same way if you prefer.)
2. **Freddy's headshot** — `img/placeholder-headshot.svg` is used on the contact and
   credentials pages until his photo arrives; swap in a real photo (square crop works
   best) and update the two `<img>` tags.
3. **Photos** — scenery images are still Unsplash placeholders hot-linked from
   unsplash.com. Replace with real project photography: put files in `img/` and update
   the `<img src>` tags. Search the pages for `images.unsplash.com` to find them all.
4. **Case study write-ups** — all six case studies now correspond to real projects
   from James's CV, but only Shady Canyon has body copy (kept general — have James
   confirm/expand it). The other five have a "coming soon" placeholder; search for
   `TODO` in each file. Also confirm which residential project the Newport Beach page
   should cover.
5. **Client permission** — projects are named as they appear in James's public CV
   (Shady Canyon CC, Sierra Nevada Brewing, Merritt Mansion). The Fountain Valley page
   is kept anonymous ("Corporate Headquarters") even though the CV names Hyundai —
   confirm James is comfortable naming clients on the website itself.
6. **Favicon** — add a `favicon.ico` (or PNG + `<link rel="icon">` tags) to the root.

Resolved: emails are real (james@ / alfredo@ paleystone.com, from the CVs); phone was
removed at Danielle's request; credentials on about.html + credentials.html were
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
