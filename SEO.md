# DIV — SEO handbook

## 1. Image files to add (exact names)

Put these in `public/`. The code already points at these paths with alt text written. Use WebP/AVIF-ready JPGs under 300 KB (hero under 400 KB), sRGB.

| Path | Size (px) | What goes in it |
|---|---|---|
| `core/DIV-Development-Innovation-Vector-logo.avif` | 174×57 (3×) | DIV wordmark, transparent |
| `images/hero-managed-software-development-india.jpg` | 2400×1400 | Home hero (LCP — compress hard) |
| `images/how-it-works/01-audit-existing-spreadsheets-and-systems.jpg` | 600×600 | Step 1 |
| `images/how-it-works/02-engineer-led-software-project-scoping.avif` | 600×600 | Step 2 |
| `images/how-it-works/03-staged-software-delivery.jpg` | 600×600 | Step 3 |
| `images/how-it-works/04-data-migration-and-hosting-in-india.jpg` | 600×600 | Step 4 |
| `images/how-it-works/05-24x7-software-monitoring-and-support.avif` | 600×600 | Step 5 |
| `images/pillars/custom-business-software-for-indian-companies.jpg` | 1200×900 | Pillar 1 |
| `images/pillars/div-data-centre-server-racks-india.jpg` | 1200×900 | Pillar 2 |
| `images/pillars/long-term-managed-software-operations.jpg` | 1200×900 | Pillar 3 |
| `images/one-platform-crm-billing-support-background.jpg` | 2400×1200 | Platform section background |
| `images/engineer-monitoring-servers-in-data-centre.jpg` | 1400×900 | Platform card photo |
| `images/software-development-engagement-plans-background.jpg` | 2400×1200 | Engagements background |
| `images/mobile-app-development-india-background.jpg` | 2400×1000 | Mobile band background |
| `images/shots/samadhan-helpdesk-app-ticket-detail-sla.png` | 360×740 (2× = 720×1480) | App screenshot |
| `images/shots/samadhan-helpdesk-app-ticket-list.png` | 360×740 (2×) | App screenshot |
| `images/contact-div-software-development-noida.jpg` | 2400×1200 | Contact band background |
| `images/team/harsh-jha-founder-div.jpg` | 800×800 | Founder portrait (About page) |

Generated for you, no file needed: social share image `/og` (a separate one per page), favicon `/icon`, Apple touch icon `/apple-icon`.

Rules for any new image: lowercase words joined by hyphens, name what's in the photo plus one keyword, no `IMG_1234`, no keyword stuffing. Alt text should describe the image in one sentence, 125 characters or less.

## 2. What's already done in code

- **Indexing**: every page is `index, follow`. The only noindex is the one Next.js adds to real 404 responses, which is correct. `/api/` is disallowed in robots.txt.
- **Titles & descriptions**: titles are 60 characters or less (including " | DIV") and descriptions 160 or less. `clampDesc()` in `lib/seo.js` trims anything longer so nothing gets truncated in search results.
- **Headings**: each page has one `<h1>` (the home hero, or `PageHero` on inner pages), with H2 → H3 below it.
- **Schema**: Organization and WebSite on every page. The home page adds Service, WebPage and FAQPage. Service pages have Service, FAQPage and BreadcrumbList. Case studies have Article and BreadcrumbList. Contact has ProfessionalService (local business). About has Person. The services list has ItemList.
- **Internal links**: navbar and a 5-column footer (all services + all case studies), breadcrumbs, related services, service ↔ case study links, links to services from the home page, and a link hub on the 404 page.
- **HTTPS**: 301 from http → https and www → apex (only on the thediv.in host), a 2-year HSTS header with preload, and `upgrade-insecure-requests`.
- **Clean URLs**: lowercase, hyphenated, no trailing slash. Old/guessable URLs 301 to the canonical page (`/about-us`, `/case-studies/*`, `/services/<slug>`, `/privacy-policy` …).
- **Core Web Vitals**: the hero image loads with priority and AVIF/WebP. Inner-page H1s appear through a CSS animation, so they no longer wait for JS. Fonts are self-hosted and shift-free. Internal links use `next/link` for prefetching. Scripts are deferred. Images cache for a year.
- **Mobile**: the product table scrolls sideways on small screens instead of squeezing six columns. Tap targets are 44px or larger.
- **Errors**: `not-found.jsx` (404 with links), `error.jsx` (retry), `global-error.jsx`. The contact form has inline field errors, an error banner with a phone fallback, and a success state.

## 3. Launch checklist (you)

1. Deploy to production on `https://thediv.in`, and add `www.thediv.in` as a domain that redirects.
2. **Google Search Console**: Add property → *Domain* `thediv.in` → verify with the DNS TXT record at your registrar. The HTML-tag token is already in `siteConfig.googleSiteVerification` as a backup. Then:
   - Sitemaps → submit `https://thediv.in/sitemap.xml`
   - URL Inspection → *Request indexing* for `/`, `/services`, the 4 service pages and `/contact`
   - Check *Page experience* and *Core Web Vitals* after 28 days
3. **Bing Webmaster Tools**: import from Search Console (one click), or set `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
4. **Google Business Profile**: the name, address and phone must match `siteConfig` character for character. Set the category to *Software company*, add the website, 10+ photos and your services.
5. **Validate**: [Rich Results Test](https://search.google.com/test/rich-results) on `/`, a service page and a case study. Also run [PageSpeed Insights](https://pagespeed.web.dev) on mobile (aim for LCP under 2.5 s, INP under 200 ms, CLS under 0.1).
6. Add HSTS preload at hstspreload.org once HTTPS is stable on every subdomain.

## 4. Backlink strategy (first 6 months)

Aim for relevance over volume. Never buy links, use PBNs or join link exchanges; Google penalises them.

**Month 1: foundations (citations, about 20 links)**
- Google Business Profile, Bing Places, Apple Business Connect
- Indian B2B directories: JustDial, IndiaMART, Sulekha, TradeIndia
- Software directories: Clutch.co, GoodFirms, DesignRush, TechBehemoths, The Manifest. Ask 3–5 clients for Clutch reviews, since reviews drive rankings there.
- LinkedIn company page, Crunchbase, GitHub organisation, Instagram (already linked), YouTube
- Use exactly the same name, address and phone everywhere.

**Months 2–3: proof-based content**
- Publish each case study as a long-form article on LinkedIn and Medium or Dev.to, with a canonical link back to `/work/<slug>`
- Open-source one small internal tool (e.g. a GST invoice helper or a RADIUS client) on GitHub, with a link in the README
- Write guest posts for Indian tech and SME outlets (YourStory, Inc42 contributor programme, Analytics India Magazine) on topics like *"Why Indian ISPs outgrow spreadsheets"* or *"DPDP Act checklist for SaaS"*

**Months 3–6: authority**
- Get featured by partners: Vercel, Render, MongoDB and Appwrite showcase or partner pages, if you qualify
- Answer journalist requests (Qwoted, Featured.com, HARO successors) as "Founder, DIV"
- Speak at or sponsor local meetups (Noida/Delhi JS, GDG Noida, NASSCOM events) — event pages link to speakers
- Ask each client for a "Built by DIV" credit in their site footer or case study
- Find unlinked mentions of "DIV" or "thediv.in" (Google Alerts) and ask for a link

**Anchor text mix**: about 50% brand ("DIV", "thediv.in"), 25% naked URL, 15% generic ("their website"), 10% or less keyword ("managed software development in India").

**Track monthly**: referring domains (Search Console → Links), top queries, and CTR per page. Rewrite the title or description of any page with high impressions and CTR under 2%.
