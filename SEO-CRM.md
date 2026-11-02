# CRM SEO plan

Source checklists: `crm-seo-page-checklist.md`, `crm-seo-what-not-to-do.md`.
Rule for this repo: **no page ships with claims we can't evidence.** Prices come from `lib/content.js` `plans`; uptime/support from `/sla`; results from `lib/caseStudies.js`.

## Positioning

Connect CRM is a **custom-built CRM**, made to each client's requirements. ISPs are the proven use case today (with Bharat Radius, TR-069 and Samadhan built in), and the same approach works for other service businesses and product companies.

- **SEO lead:** ISP keywords ("crm software for isp", "broadband crm", "isp billing and crm"). Less competition, exact-fit buyers, and the integrations no generic CRM has.
- **Second line:** custom CRM development for any service or product business in Delhi NCR (the services hub).
- Never claim clients, results or industries we don't have. Describe what we *can build* and *how*, not who we've built it for, until there is proof.

## Facts confirmed by DIV (Nov 2026)

- Connect CRM is a **custom service**, built to requirement. Built for ISPs today; can be built for other service-based and product-based companies.
- **Pricing:** development **from ₹9,999**; server & maintenance **₹2,499/month up to 1,000 connections**; changes **₹1,000–₹5,000** each.
- **Demo only**, no free trial.
- **Connect CRM features working today:** automated follow-up reminders, document generation, reports & dashboards, payments & dues tracking.
- **Complaints live entirely in Samadhan**, not in Connect CRM.
- **Samadhan, Bharat Radius, TR-069** are separate DIV products. CRM pages mention them but **never claim they connect or sync** with Connect CRM.
- **GST** is charged on top of all prices (confirmed).
- **Connections** = any customer link on the connections list; above 1,000 the fee is sized to volume (confirmed).
- **Setup and training** are included and done remotely; no on-site claims.
- **Samadhan** ([samadhan.fab5connect.com](https://samadhan.fab5connect.com/)): DIV's customer support hub. Customers raise a ticket in seconds, it is auto-routed to an agent, tracked against an SLA, escalated automatically if delayed, and resolved and confirmed. Includes Samadhan Desk, a remote-access tool so agents can troubleshoot.
- **Data migration:** possible, but **not offered** now. No migration page or claim.
- No customisation of other CRMs (Zoho, Salesforce, HubSpot).
- Real clients in Delhi and Noida. Types of ISP clients not recorded. No publishable client stories yet.
- Blog posts carry no personal author name (Article author = Organization).
- Company: DIV Private Limited ([thediv.in](https://thediv.in)). App on fab5connect.com. Name "Connect CRM" not checked; open to renaming.

## Done

- [x] Pricing "from ₹9,999 + GST" everywhere; migration claims removed; "Migrate and host" removed from the home page.
- [x] Complaint feature page removed from Connect CRM; complaints now only on the Samadhan page.
- [x] "Integrations" pages replaced by **Software for ISPs** pages (/isp-products) with no connection claims.
- [x] Delhi and Noida pages: setup and training, nothing on-site.

## Still to confirm

- [ ] Bharat Radius website URL (page has no outbound link until then).
- [ ] Feature copy in `lib/crm.js` (`crmFeatures`, `ispProducts`, `crmLandings`): check against the live products.

## Live pages (18)

| Page | Primary keyword | URL | Schema |
| --- | --- | --- | --- |
| Main (services hub) | custom crm development delhi ncr | /crm-development-company-delhi-ncr | Service (NCR cities), FAQPage |
| Product home | crm software for isp | /connect-crm | SoftwareApplication (no offers/rating), FAQPage |
| Pricing | connect crm pricing | /connect-crm/pricing | FAQPage |
| Feature | crm with automated follow up reminders | /connect-crm/automated-follow-up-reminders | WebPage |
| Feature | crm document generation | /connect-crm/document-generation | WebPage |
| Feature | isp crm reports and dashboards | /connect-crm/reports-and-dashboards | WebPage |
| Feature | isp payment collection software | /connect-crm/payments-and-dues | WebPage |
| ISP products hub | software for isp india | /isp-products | CollectionPage |
| Product | isp complaint management software | /isp-products/samadhan | SoftwareApplication |
| Product | radius server software for isp | /isp-products/bharat-radius | SoftwareApplication |
| Product | tr-069 acs for isp | /isp-products/tr-069 | SoftwareApplication |
| Service | crm hosting and maintenance services | /crm-hosting-maintenance | Service |
| Service | custom crm for service business | /custom-crm-service-business | Service |
| Service | custom crm for product companies | /custom-crm-product-company | Service |
| City | custom crm development noida | /crm-development-noida | Service (Noida) |
| City | custom crm development delhi | /crm-development-delhi | Service (Delhi) |
| Blog index | — | /blog | — |
| Blog | custom crm development cost india | /blog/custom-crm-development-cost-india | Article |

All have BreadcrumbList, self-canonicals and sitemap entries, and are linked from their hub. The nav Platform panel links Samadhan, Bharat Radius and TR-069 to their pages.

## Next

Blog (1–2 a week, Article schema, author = Organization):

1. How Long Does It Take to Build a Custom CRM?
2. ISP-Specific CRM vs Generic CRM (Zoho, Salesforce): What Small ISPs Need
3. How to Reduce Broadband Customer Churn: A Guide for Small ISPs
4. Automating Renewal and Dues Reminders for Broadband Subscribers
5. What Is TR-069 and Why Small ISPs Should Care
6. Handling Customer Complaints at a Small ISP: Tickets, SLAs and Escalation
7. 10 Signs Your Business Has Outgrown Excel and Needs a CRM
8. How to Choose a CRM Development Company in Delhi NCR: A Checklist

The comparison article (#2) compares approaches, not prices, so it doesn't break the "pricing must be final" rule. Use only facts from competitors' official sites, linked and dated.

## Still blocked, and why

| Page group | Blocked by |
| --- | --- |
| ISP segment pages (cable operators, FTTH, wireless) | Client types not recorded. Ask current clients first; build only segments we actually serve |
| Other industry pages (real estate, education…) | No clients there. Covered for now by the two "custom CRM for service/product businesses" pages |
| Price comparisons (vs Zoho, Salesforce, LeadSquared) | Custom-quote pricing; build later if needed |
| Data migration page | Not offered now |
| Zoho/Salesforce/HubSpot customisation | Not offered |
| Other cities (Gurugram, Greater Noida, Faridabad, Ghaziabad) | No clients there yet |
| Customer stories | Need written client permission |
| Security & privacy page | Need hosting, backup, encryption and access-control details; DPDP wording checked by a professional |

## Proof to start collecting now

- [ ] Ask each Delhi and Noida client for a Google review.
- [ ] Ask each for written permission for a short story; an anonymous one ("an ISP with ~800 connections in East Delhi") is fine if they agree.
- [ ] Record each client's business type and size, so ISP segment pages can be built on facts.
- [ ] Record a 2–3 minute demo video of Connect CRM for the product home and feature pages.
- [ ] About page: DIV's founders, real names, photos, LinkedIn, past experience.

## The name (checklist §0)

- [ ] Google "Connect CRM": the name is generic and other products use it.
- [ ] IP India trademark search.
- [ ] Consider a distinct name tied to your brand (e.g. "Fab5 Connect CRM"). Decide **before** review-site listings and GBP, since renaming later means redoing all of them.

## Off-site (not code)

- [ ] Google Business Profile at C6/28, Sector 31, Noida, as a service-area business for NCR. No keywords in the business name.
- [ ] Listings: Clutch, GoodFirms, Justdial, IndiaMART, Sulekha, LinkedIn. Same N.A.P. as `lib/siteConfig.js`.
- [ ] Capterra, G2, GetApp, SoftwareSuggest, Techjockey listings for Connect CRM, after the name is settled. Real user reviews only.
- [ ] Keep the app (fab5connect.com dashboard/login) `noindex`; that lives in the Connect CRM app repo.
- [ ] Cross-link: Samadhan, Bharat Radius and TR-069 sites link to their Connect CRM integration pages, and back.
- [ ] Search Console: submit the sitemap, then URL Inspection → Request Indexing for each new page.
- [ ] GA4: mark booking submits, WhatsApp clicks and tel: clicks as conversions. Booking sources are tagged (`crm-hub:*`, `connect-crm:*`, `navbar-menu:*`).

## Publishing cadence

A few strong pages a week. Next, in order: fix pricing → ticket and payments feature pages → integrations hub + Samadhan → Bharat Radius and TR-069 → hosting service page → the two custom-CRM service pages → Delhi → blog alongside, 1–2 a week.
