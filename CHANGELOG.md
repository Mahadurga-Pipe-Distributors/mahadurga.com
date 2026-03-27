# Changelog — Mahadurga Pipe Distributors Website

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
- Phone number row in the Location/Contact section (placeholder — update `+91XXXXXXXXXX`)
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

## TODOs (Content to fill in)
- **Phone number**: replace `+91XXXXXXXXXX` in the phone `<a href="tel:...">` and display text
- **WhatsApp number**: replace `91XXXXXXXXXX` in the 3 WhatsApp `href` attributes
