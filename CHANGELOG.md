# Changelog — Mahadurga Pipe Distributors Website

---

## [2.4.1] — 2026-04-16

### Fixed — 404 page
- **Language + theme controls were non-functional** — Unicode-heavy Devanagari and Kannada strings inside an inline `<script>` block caused silent parse failures in some browsers (a ZWNJ U+200C in the Kannada desc was a likely trigger). All JavaScript extracted to `404.js` (external file, same approach as `main.js`) with all non-ASCII characters written as `\uXXXX` escape sequences to be fully ASCII-safe.
- **Logo looked visually wrong** — `mix-blend-mode: multiply` interacts with `backdrop-filter: blur()` on the parent topbar by compositing against the blurred surface rather than the page background, producing an unexpected rendering. Removed blend mode from `.topbar-logo img`; added `border-radius: 3px` for a clean badge appearance. The `mix-blend-mode` fix applies to the main site nav where there is no backdrop-filter parent.

---

## [2.4.0] — 2026-04-16

### Added
- **`404.html`** — custom GitHub Pages 404 page matching the main site design:
  - Inline theme + language restoration script (same logic as `theme-init.js`) runs before first paint to prevent flash
  - Minimal i18n table with English, Hindi, and Kannada translations for all page strings (tag, title, description, CTAs, quick links, footer)
  - Language switcher (हिंदी | EN | ಕನ್ನಡ) and theme toggle (☀/☽) matching the main nav controls
  - Animated broken-pipe SVG illustration: two disconnected pipe sections (with flanges, ridges, and jagged broken ends) that float independently, sparks pulsing in the gap, and an animated water drip falling from the break
  - "THIS PIPE LEADS NOWHERE" headline with the same Bebas Neue gradient style as the main site
  - Quick links row to Products, Industries, Why Us, Contact
  - Responsive layout: two-column on desktop (content + visual), single-column on mobile (visual above content)
  - `[data-lang="hi"]` Devanagari font overrides for `.title` and `.topbar-logo-text` (same fix as main site)
  - `mix-blend-mode: multiply` on logo image (with `[data-theme="dark"]` revert), matching the main site fix
  - `<meta name="robots" content="noindex">` so the error page is not indexed by search engines

---

## [2.3.2] — 2026-04-16

### Fixed
- **Logo images displayed with a visible white background** — `MDP-Final_Logo.png` is an indexed-color PNG with no alpha channel (`tRNS` chunk absent); white background is baked into the image pixels. Applied `mix-blend-mode: multiply` to all three logo `<img>` elements (nav, hero showcase, footer). In light mode (`--bg: #f4f6fb`), multiply composites white logo pixels with the near-white page background, making the white box mathematically invisible while preserving the logo's colours. Added `[data-theme="dark"]` override to revert to `mix-blend-mode: normal` because multiply on a near-black background (`#07090f`) crushes the logo's own colour channels to near-zero, making the logo itself invisible — which is worse than showing the white background.

---

## [2.3.1] — 2026-04-16

### Fixed
- **Hindi translations were visually invisible** in all heading elements — root cause: `Bebas Neue` has no Devanagari glyphs; combined with `-webkit-text-fill-color: transparent` (gradient clip) used on `h1 .word-blue` and `.why-left h2 span`, characters with no glyph rendered as completely invisible. Kannada was unaffected because macOS provides a Kannada system font that Bebas Neue falls back to correctly; Devanagari fallback behaved differently.
- Added `Noto Sans Devanagari` (weights 300/400/500) to the Google Fonts import
- Added `[data-lang="hi"]` CSS overrides that switch `h1 .word-blue`, `.hero-sub`, `.section-title`, `.product-title`, `.industry-title`, `.why-left h2`, and `.location-info h2` to `Noto Sans Devanagari` with `letter-spacing: 0` (Bebas Neue uses wide letter-spacing designed for Latin glyphs, which looks wrong on Devanagari)

---

## [2.3.0] — 2026-04-16

### Added
- **Hindi language support** — full `hi` (Devanagari) translation block added to `main.js`, covering all 60+ `data-i18n` keys across nav, hero, stats, products, industries, why us, location, and footer sections
- Language switcher order updated to **हिंदी | EN | ಕನ್ನಡ** (Hindi first, as the new addition)
- `applyTranslations()` now sets `lang="hi"` on `<html>` when Hindi is active (correct for screen readers and search engines)

---

## [2.2.0] — 2026-04-13

### Added
- **Dark / light mode toggle** — `☀` / `☽` button in the nav bar; preference persisted in `localStorage`
- **English / Kannada language switcher** — `EN | ಕನ್ನಡ` pill in the nav bar; full Kannada (`kn`) translation block covering all `data-i18n` keys site-wide; preference persisted in `localStorage`
- `theme-init.js` — tiny `<head>` script that restores stored theme and language before first paint, preventing flash-of-wrong-theme on reload
- `.nav-right` flex group wrapping nav links, lang pill, and theme button; visible on both desktop and hamburger mobile layout

### Changed
- **Default theme switched to light** — site now loads in light mode for new visitors (previously dark)
- All JavaScript extracted from `index.html` into `main.js` (for `script-src 'self'` CSP compliance); JSON-LD block unaffected

### Fixed
- Light mode CSS variable overrides added for nav, mobile menu, map embed, product number ghost text, and active lang button background
- Hero-tag border (`rgba` colour) was invisible in light mode — corrected to use an opaque-enough blue tint

### Added — Contact details (same session)
- Real phone number wired up: **080-49734555** — `tel:08049734555` href + `+918049734555` in JSON-LD schema
- Real WhatsApp number wired up: **+91 93438 33940** — `wa.me/919343833940` in location section and FAB
- Email display updated to `mahadurgapipes+web@gmail.com` everywhere; `mailto:` href routes to `mahadurgapipes+web@gmail.com?subject=Inquiry%20from%20mahadurga.com%20Website`
- All `TODO` placeholder comments removed from the codebase

---

## [2.1.0] — 2026-04-11

### Added
- **Email contact row** in the "Visit Our Warehouse" location section (between Phone and Website rows) — `✉️` icon, displays `mahadurgapipes+web@gmail.com`, mailto href with pre-filled subject for Gmail label filtering
- **Google Rating stat made clickable** — wraps the 4.4★ stat block in `<a class="stat">` linking to the Google Business Profile reviews page (`https://share.google/SkPvAURwc6F8KMJ31`), `target="_blank" rel="noopener"`; added `a.stat` CSS reset so it renders identically to non-link stat blocks
- **`robots.txt`** — allows all crawlers (`User-agent: *`), points to sitemap at `https://mahadurga.com/sitemap.xml`
- **`sitemap.xml`** — lists homepage and all 4 anchor sections (`/#products`, `/#industries`, `/#why`, `/#location`) with priority weights
- **`CLAUDE.md`** — project context, section map, contact details, and changelog instructions for Claude Code sessions
- **LocalBusiness JSON-LD schema** (`application/ld+json`) for rich results and local SEO — includes name, URL, logo, address, geo coordinates, phone, email, opening hours, aggregate rating, and `sameAs` links
- **Real GSTIN** (`29ABEFM8097N1ZA`) added to JSON-LD `taxID` field and footer bottom bar

---

## [2.0.0] — 2026-03-27

### Fixed
- Removed "Site Under Construction" banner from the hero section
- Resolved year inconsistency: unified to **Est. 2008** across all sections (hero tag, description, footer, stats)
- Stats bar now correctly shows **15+ Years** in business (up from inaccurate "10+")
- Replaced bare `&` characters with proper `&amp;` HTML entities
- Added `rel="noopener"` to all `target="_blank"` links for security

### Added — SEO & Meta
- `<meta name="description">` for search engine snippets
- `<meta name="keywords">` with relevant local search terms
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`) for social sharing
- `<link rel="icon">` favicon using the MDP logo

### Added — Navigation
- Mobile **hamburger menu** with smooth slide-in/out animation
- Body scroll lock when mobile menu is open
- **Active nav link highlighting** — updates on scroll to reflect current section
- Nav background opacity increases on scroll (`.scrolled` state)
- Underline hover animation on desktop nav links

### Added — Hero
- **Scroll indicator** (animated pulsing line with "Scroll" label) at hero bottom

### Added — Sections
- **Industries We Supply** — new section with 6 industry cards:
  Construction & Infrastructure, Industrial Manufacturing, Plumbing & Sanitation,
  Utilities & MEP, Real Estate & Housing, Fabricators & Contractors

### Added — Products
- Each product card now includes a **spec list** with 4 bullet points and real Indian standards references (IS 1239, IS 3589, IS 4985, IS 15778)

### Added — Why Us
- Fifth point added: **Expert Guidance**
- "Get In Touch" CTA button added to the Why Us section

### Added — Contact
- Phone number row in the Location/Contact section
- WhatsApp CTA button in the contact actions row

### Added — Floating UI
- **WhatsApp FAB** (green floating action button, bottom-right) — links to WhatsApp chat
- **Back-to-top button** — appears after scrolling 400px, smooth-scrolls to top

### Added — Animations & Interactions
- **Scroll-reveal animations** on all sections via Intersection Observer API:
  - `.reveal` — fade up
  - `.reveal-left` — fade from left
  - `.reveal-right` — fade from right
  - `.stagger` — staggered children delays (0.12s increments)
- **Stat counter animation** — numbers count up with ease-out cubic when scrolled into view

### Added — Footer
- Expanded footer with three columns: Brand description, Quick Links, Contact info
- Footer bottom bar with copyright and GST registration note

### Improved — Code Quality
- CSS reorganized with clear section comments
- All layout paddings made consistent with a `--nav-h` CSS variable
- Responsive breakpoints cleaned up and extended (1100px, 900px, 560px)
- Mobile stats grid fixed: 2×2 layout with correct border handling

---

## [1.x] — Pre-2026 (initial commits)

- `init` — initial repo setup
- CNAME configured (multiple iterations) for `mahadurga.com`
- Logo added (`MDP-Final_Logo.png`)
- Minor tweaks and "Site Under Construction" placeholder period
