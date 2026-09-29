# Compliance & risk review — 30 Sep 2026

Not legal advice. Have counsel review `lib/legal.js` (every doc is marked `draft: true`) before launch.

## Fixed in code
- **Cookie consent**: GA, Vercel Analytics and Speed Insights now load only after "Allow analytics" (`components/consent/CookieConsent.jsx`). The banner offers "Allow analytics" and "Essential only" as equal choices. Withdrawing consent clears the `_ga` cookies. The footer has a "Cookie settings" link to reopen it. The preconnect to googletagmanager, which fired before consent, is removed.
- **Cookie policy** at `/cookies` and **refund & cancellation policy** at `/refund-policy`. Both are linked in the footer and listed in the sitemap.
- **Form consent**: the contact and booking forms have an unticked, required consent checkbox, and the API routes reject submissions without it (DPDP Act s.6).
- **Third-party embeds**: none. WhatsApp, Instagram and Maps are plain links. Fonts are self-hosted through next/font.
- **False or contradictory claims**:
  - "Nothing offshore / 100% data in India" contradicted the site's own SLA and FAQ, which say front-ends run on Vercel and Render, and form data goes through Vercel and Resend, which are US companies. It now reads "Core systems and customer data hosted in India".
  - "Updates without downtime windows" is softened. The hero chip now says "99.9% uptime SLA", which the SLA page backs.
- **Accessibility**:
  - Visible focus rings on form fields.
  - Clearer button labels ("Send message to DIV", "Continue to pick a time").
  - Footer grey `#8B8595` (≈3.4:1 contrast) changed to the muted token.
- **Business details**: `siteConfig.cin` and `gstin` fields added. The CIN renders in the footer once you fill it in (Companies Act s.12(3)(c)).

## You must act on these
1. **CIN / GSTIN**: add them from your MCA master data. Check that the legal name matches the MCA record exactly.
2. **Case studies vs. founding year**: `foundingYear: 2026` sits alongside case studies reporting 99.99% uptime and "for years" copy. If those results are not from real, documented engagements, remove them. Misleading ads are an offence under the Consumer Protection Act 2019 and the CCPA 2022 guidelines. Keep written evidence for every number.
3. **"Our own data centre"**: FAQ and SLA copy still say this. Keep it only if DIV owns or leases the racks; otherwise say "servers we manage in India".
4. **Hours "Open 24 hours, 7 days"** in the schema and Google Business Profile: keep it only if the phone is actually answered 24/7.
5. **Image copyright**: the design files use downloaded images of unknown licence, including Mark Boardman's British Airways / Meiklejohn illustrations, which are commissioned artwork and must not be used. The same goes for "sunset stock photos", "modern data center … by serge" and "tree-and-hill illustration". Replace them with licensed stock (keep the licence file) or your own photos before launch. The founder photo needs a signed release if the photographer isn't you.
6. **Pricing**: public prices must say whether GST is included; the design now shows "+ GST". Keep the invoices consistent with this.
7. **Cross-border transfer**: the privacy policy already names Resend, Google and Vercel. Also state that enquiry data is processed outside India (DPDP s.16 allows this unless a country is notified as restricted).
8. **Grievance officer**: the DPDP Rules expect a named contact for data requests. Add a name and email to the privacy policy.
9. **Compliance badges**: DPDP-ready, CERT-In and ISO badges stay off until you hold evidence (an ISO certificate number, a CERT-In empanelment).
10. **Reviews**: there are none on the site. If you add any, use only real, attributable ones; paid or incentivised reviews breach the BIS IS 19000:2022 online-review standard.
