# CRM SEO plan

Source checklists: `crm-seo-page-checklist.md`, `crm-seo-what-not-to-do.md`.
Rule for this repo: **no page ships with claims we can't evidence.** Prices come from `lib/content.js` `plans`; uptime/support from `/sla`; results from `lib/caseStudies.js`.

## Positioning decision (needs your sign-off)

The checklist assumes Connect CRM is a general CRM (real estate, education, healthcare…). The live product (fab5connect.com, and the demo in `lib/shots.js`) is a **connection CRM for ISPs and telecom resellers**: commercial approval → order → implementation → active billing → termination → churn. The product pages are written for that audience. If Connect CRM also ships for other industries, send real screenshots and feature lists per industry before those pages are built.

## Shipped in this patch

| Page | Primary keyword | URL | Schema |
| --- | --- | --- | --- |
| Main (services hub) | custom crm development delhi ncr | /crm-development-company-delhi-ncr | Service (areaServed: NCR cities), FAQPage, BreadcrumbList |
| Product home | crm software for isp / connect crm | /connect-crm | SoftwareApplication (no offers/rating), FAQPage, BreadcrumbList |

Also: both in sitemap; linked from the nav Services and Platform panels and the footer; cross-linked to each other, the four engineering services and the logistics CRM case study; one H1 each; self-canonical via `pageMetadata`.

## Keyword map (one keyword per page — never reuse)

| Page | Primary keyword | URL | Status |
| --- | --- | --- | --- |
| Main (services) | custom crm development delhi ncr | /crm-development-company-delhi-ncr | Live |
| Product home | crm software for isp | /connect-crm | Live |
| Pricing | connect crm pricing | /connect-crm/pricing | Needs: per-user vs per-account, limits, migration fees, cancellation/export terms |
| Demo | connect crm demo | — | Covered by booking modal (30-min slots). Add a /thank-you page if you want URL-based conversion tracking |
| Feature pages (×6) | e.g. isp billing software, lead management | /connect-crm/<feature> | Needs: real screenshots per feature; confirm which features exist today |
| Comparisons (×4) | connect crm vs zoho crm … | /connect-crm/vs-… | Blocked until pricing page is final (checklist §8) |
| Integrations (×3) | … | /connect-crm/integrations/… | Only Bharat Radius, TR-069, Samadhan are confirmed. 99acres/IndiaMART/Tally: confirm they work today |
| Industry pages (×5) | real estate crm software … | /industries/… | Blocked by the positioning question above |
| Service pages (×5) | crm customization delhi ncr … | /services/… | Needs: which CRMs you actually customise (Zoho/Salesforce/HubSpot?), real projects |
| City pages (×5) | crm development company gurugram … | /crm-development-<city> | Ship one only when you have a real client/project in that city (doorway-page risk) |
| Customer stories | — | /work/… | Logistics CRM exists. Add more with written client permission |
| Security & privacy | connect crm security | /connect-crm/security | Needs: hosting location detail, backup schedule, encryption, access controls; DPDP wording checked by a professional |
| Blog (×7) | custom crm development cost india … | /blog/… | Needs an author with a bio. Cost post can use the plan prices |

## Before investing more in the name (checklist §0)

- [ ] Google "Connect CRM" — the name is generic and other products use it.
- [ ] IP India trademark search.
- [ ] Decide on the name now; use it identically on site, app, review sites and GBP.

## Off-site (not code)

- [ ] Google Business Profile at C6/28, Sector 31, Noida, as a service-area business for NCR. No keywords in the business name.
- [ ] Listings: Clutch, GoodFirms, Justdial, IndiaMART, Sulekha, LinkedIn. Same N.A.P. as `lib/siteConfig.js`.
- [ ] Capterra, G2, GetApp, SoftwareSuggest, Techjockey listings for Connect CRM. Real user reviews only.
- [ ] Keep the app (fab5connect.com dashboard/login) `noindex` — that lives in the Connect CRM app repo, not here.
- [ ] Search Console: submit the sitemap, then URL Inspection → Request Indexing for both new pages.
- [ ] GA4: mark booking submits, WhatsApp clicks and tel: clicks as conversions. Booking sources are tagged (`crm-hub:*`, `connect-crm:*`, `navbar-menu:*`).

## Publishing cadence

A few strong pages a week, not all at once. Next up, in order: pricing → 3 feature pages → service pages → comparisons → blog (cost post first).
