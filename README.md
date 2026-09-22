# DIV — Next.js 15 (App Router, JavaScript)

Production build of the DIV home page: Server Components by default, Tailwind CSS v4,
next/font, next/image, Metadata API and JSON-LD.

## Install

```bash
npm install
npm run dev
```

## File structure

```
app/
  layout.jsx                 root layout, font variables, base metadata, skip link
  page.jsx                   home route — static `metadata` export + section composition
  fonts.js                   next/font: Instrument Sans / Serif, IBM Plex Mono
  globals.css                Tailwind v4 @theme tokens, keyframes, base layer
  sitemap.js                 /sitemap.xml
  robots.js                  /robots.txt
components/
  layout/Navbar.jsx          "use client" — mobile disclosure; glassmorphism rail
  layout/SiteFooter.jsx      server
  seo/StructuredData.jsx     Organization + Service + WebSite JSON-LD (@graph)
  sections/HeroSection.jsx   <h1>, LCP image (priority)
  sections/HowItWorksSection.jsx
  sections/PlatformSection.jsx
  sections/PillarsSection.jsx
  sections/LookInsideSection.jsx   "use client" — product tabs, search, sort, filters
  sections/ProductsSection.jsx
  sections/EngagementsSection.jsx
  sections/FaqSection.jsx    "use client" — accordion
  sections/ContactSection.jsx
  ui/PillButton.jsx          pill CTA + rotating arrow chip (server, CSS-only hover)
  ui/Eyebrow.jsx  ui/ArrowIcon.jsx  ui/Serif.jsx
lib/
  siteConfig.js              NAP, canonical URL, social profiles
  content.js                 nav, steps, pillars, products, plans, FAQ, footer
  shots.js                   demo datasets for the "Look inside" browser
public/images/               see below
```

## Required assets (`public/`)

| Path | Notes |
| --- | --- |
| `images/hero-managed-software-development-india.jpg` | LCP hero, ≥2400px wide |
| `images/platform-hills.jpg`, `images/platform-engineer.jpg` | platform panel |
| `images/pillars/pillar-1..3.jpg` | 4:3 |
| `images/steps/step-1..5.jpg` | 1:1 |
| `images/mobile-dusk.jpg`, `images/shots/samadhan-app.png`, `images/shots/samadhan-app-list.png` | mobile band |
| `images/engagements-hills.jpg`, `images/contact-first-light.jpg` | closing sections |
| `images/og-div-managed-software-development-india.jpg` | 1200×630 |
| `images/div-logo.png`, `favicon.ico`, `apple-touch-icon.png` | brand |

## SEO notes

- Primary keyword *Managed Software Development Services India* sits in the `<title>`,
  meta description, OG title, the `Service` schema `name`, and the H1's supporting copy
  (the H1 itself stays the brand line — there is exactly one `<h1>` on the page).
- `metadataBase` + `alternates.canonical` emit an absolute canonical.
- JSON-LD is one `@graph` so `Organization`, `Service` and `WebSite` cross-reference by `@id`;
  `areaServed` and `PostalAddress` carry the geographic signal, `hasOfferCatalog` enumerates
  the thirteen products as services.
- Replace the placeholders in `lib/siteConfig.js` (phone, street, social) before shipping —
  incomplete NAP data weakens the Organization entity.

## Core Web Vitals

- Hero image: `fill` + `priority` + `fetchPriority="high"` + `sizes="100vw"`; every other
  image is lazy by default with explicit `sizes`.
- `next/font` self-hosts all three families and reserves fallback metrics — no FOUT shift.
- Client JS is limited to three components (Navbar, LookInside, Faq); hover, focus and the
  marquee are CSS-only.
- Decorative animations collapse under `prefers-reduced-motion`.

## Accessibility

- Skip link, single H1, sequential heading levels, `aria-label` on icon-only and ambiguous
  controls, `aria-expanded`/`aria-controls` on the mobile menu and FAQ, `aria-sort` on table
  headers, `aria-pressed` on filter chips, `role="img"` + labels on data graphics.
- Body copy on dark grounds is white at ≥0.9 alpha over a ≥0.42 scrim to hold 4.5:1.
