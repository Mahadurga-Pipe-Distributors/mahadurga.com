# CLAUDE.md — Mahadurga Pipe Distributors Website

Instructions and context for Claude Code when working in this repo.

---

## MANDATORY: Changelog Rule

**Every commit must be accompanied by an update to `CHANGELOG.md`.**

- Add a new version section (bump the minor version for features, patch for fixes) with today's date
- Document every change made: what was added, changed, or fixed — be specific (file names, key names, behaviour)
- Do this **before** committing — `CHANGELOG.md` must be included in the same commit as the code changes
- Never push without updating `CHANGELOG.md` first

---

## Project Overview

**Client:** Mahadurga Pipe Distributors (MDP)
**Domain:** mahadurga.com (GitHub Pages, custom domain via CNAME)
**Stack:** Pure HTML/CSS/JS — single `index.html`, no build step, no frameworks
**Hosting:** GitHub Pages → `main` branch, auto-deploys on push

---

## Infrastructure: Cloudflare

`mahadurga.com` is **proxied through Cloudflare** (orange-cloud / full proxy mode). Cloudflare sits in front of GitHub Pages and handles:

- **DDoS protection & WAF** — security rules applied at the edge
- **SSL/TLS** — Cloudflare terminates HTTPS; traffic to GitHub Pages may be HTTP internally
- **Caching** — static assets cached at Cloudflare edge nodes
- **Browser Insights analytics** — Cloudflare injects `beacon.min.js` from `static.cloudflareinsights.com` into pages for real-user monitoring
- **HTTP response headers** — the `Content-Security-Policy` (CSP) header is set via a **Cloudflare Transform Rule** (Rules → Transform Rules → Response Header Modification), NOT in the repo. GitHub Pages does not support custom HTTP response headers.

### Current CSP (as of 2026-04-23)

Set in Cloudflare Transform Rules:

```
default-src 'self';
script-src 'self' https://static.cloudflareinsights.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://cloudflareinsights.com;
frame-src https://www.google.com;
```

> **IMPORTANT for future changes:** If a new third-party script, font, or iframe is added to any page, the CSP in Cloudflare must also be updated — go to Cloudflare → mahadurga.com → Rules → Transform Rules → find the CSP rule → add the new origin to the correct directive. The repo alone is not enough.

### Email tag routing

| Tag | Purpose |
|---|---|
| `+web` | Inquiries from the website contact section |
| `+hr` | Job applications from careers pages |

---

## Repo Structure

```
index.html          — Entire website (styles, markup, scripts all inline)
MDP-Final_Logo.png  — Company logo (used in nav and favicon)
robots.txt          — Allows all crawlers, points to sitemap
sitemap.xml         — Lists homepage + anchor sections for SEO
CNAME               — mahadurga.com (GitHub Pages custom domain)
CHANGELOG.md        — Human-readable version history
CLAUDE.md           — This file
.claude/            — Claude Code project settings
```

---

## Key Page Sections (IDs)

| Section | ID | Notes |
|---|---|---|
| Hero | `#home` | Est. 2008, tagline, scroll indicator |
| Stats Bar | _(no id)_ | 500+ clients, 50+ products, 4.4★ Google Rating (clickable), GST |
| Products | `#products` | 4 product cards with IS standard specs |
| Industries | `#industries` | 6 industry cards |
| Why Us | `#why` | 5 points + CTA |
| Location / Contact | `#location` | Address, hours, phone, email, website, Google Maps embed |

---

## Contact Details

- **Phone (landline):** `080-49734555` — `tel:08049734555`, schema telephone `+918049734555`
- **WhatsApp:** `+91 93438 33940` — `wa.me/919343833940`
- **Email displayed:** `mahadurgapipes+web@gmail.com`
- **mailto href:** `mahadurgapipes+web@gmail.com?subject=Inquiry%20from%20mahadurga.com%20Website`
  - The `+web` tag lets Gmail filter website-originated emails with a label

---

## SEO Files

- `robots.txt` — `User-agent: * / Allow: / / Sitemap: https://mahadurga.com/sitemap.xml`
- `sitemap.xml` — Lists `/`, `/#products`, `/#industries`, `/#why`, `/#location`

> **IMPORTANT:** If a new named section with its own `id` is added to `index.html`,
> also add a corresponding `<url>` entry to `sitemap.xml` and update the priority weights.
> Forgetting this means new sections won't be submitted to search engines.

---

## Changelog

### [2.1.0] — 2026-04-11 *(Claude Code session)*

- **Email contact row** added to the "Visit Our Warehouse" location section, between Phone and Website rows. Uses `✉️` emoji icon, displays `mahadurgapipes@gmail.com`, mailto href routes to `mahadurgapipes+web@gmail.com` with pre-filled subject for Gmail label filtering.
- **Google Rating stat made clickable** — wraps the 4.4★ stat block in an `<a class="stat">` linking to the Google Business Profile reviews page (`https://share.google/SkPvAURwc6F8KMJ31`), `target="_blank" rel="noopener"`. Added `a.stat` CSS reset so it renders identically to non-link stat blocks.
- **`robots.txt` added** — allows all crawlers, points to sitemap at `https://mahadurga.com/sitemap.xml`.
- **`sitemap.xml` added** — lists homepage and all 4 anchor sections with priority weights.

---

### [2.0.0] — 2026-03-27

Full website overhaul. See `CHANGELOG.md` for the complete breakdown.

**Summary:**
- Removed "Site Under Construction" banner
- Fixed Est. year inconsistency → unified to **Est. 2008**, stats show **15+ Years**
- Added mobile hamburger menu, active nav highlighting, scroll-state nav opacity
- Scroll-reveal animations (fade up/left/right) + stat counter animation via Intersection Observer
- New **Industries We Supply** section (6 cards)
- Product cards expanded with spec lists and IS standard references
- WhatsApp FAB + back-to-top button + hero scroll indicator
- Expanded footer (3 columns: brand, quick links, contact)
- SEO meta tags, Open Graph tags, favicon

---

### [1.x] — Pre-2026 (initial commits)

- `init` — initial repo setup
- CNAME configured (multiple iterations) for `mahadurga.com`
- Logo added (`MDP-Final_Logo.png`)
- Minor tweaks and "Site Under Construction" placeholder period
