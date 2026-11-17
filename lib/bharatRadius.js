// Bharat Radius long-form content: the /isp-products/bharat-radius pillar, the
// daloRADIUS comparison page, the RADIUS explainer post and /llms.txt all read from here,
// so the facts stay identical everywhere.
//
// Source of every claim: the live product site (new.bharatradius.com, checked 17 Nov 2026)
// and the Bharat-Radius repo. Competitor facts: daloRADIUS's own GitHub README, linked and
// dated on the page. Do not add a claim here that neither source supports.

export const bharatRadiusSite = 'https://new.bharatradius.com/';
export const bharatRadiusChecked = '17 November 2026';
export const bharatRadiusComparePath = '/isp-products/daloradius-alternative';

// "Why ISPs switch": the everyday problems a RADIUS + billing system removes. Describes the
// problem, not client results, so it needs no case study behind it.
export const bharatRadiusWhy = [
  {
    title: 'PPPoE secrets kept router by router',
    body: 'When subscriber accounts live on each MikroTik, every new connection, plan change and expiry is typed in by hand, and a second router means a second list to keep in step. With a RADIUS server, every router asks one database, so a change made once applies everywhere.',
  },
  {
    title: 'Billing in Excel, collections on WhatsApp',
    body: 'A spreadsheet cannot cut a subscriber off when a prepaid plan runs out, number invoices for GST, or tell you who has paid this month. Bharat Radius ties the plan, the invoice and the payment to the same subscriber record, so an unpaid account stops at the next login instead of at the next audit.',
  },
  {
    title: 'Reseller statements worked out by hand',
    body: 'Local cable operators and franchise partners want to see their own subscribers and their own balance. Without separate logins and wallets, someone at head office reconciles every partner at month end. Here each partner works from their own prepaid wallet and gets their own statement.',
  },
  {
    title: 'Logs nobody can find when they are asked for',
    body: 'Requests for who had an IP address at a given time arrive months after the session ended. If session and NAT records are scattered across routers or overwritten, there is no answer to give. Bharat Radius keeps them together on servers in India, with each day sealed so you can show they were not altered.',
  },
];

export const bharatRadiusFeatures = [
  {
    id: 'pppoe',
    title: 'PPPoE authentication on FreeRADIUS',
    body: 'Subscribers log in over PPPoE and FreeRADIUS checks them against your plans. You keep the RADIUS server the industry already trusts and get a modern panel on top.',
    bullets: [
      'MikroTik setup script for PPPoE, accounting, CoA and NAT logging',
      'Static IP, IP pool and MAC lock per subscriber',
      'Live plan changes through CoA, without making the subscriber reconnect',
    ],
  },
  {
    id: 'plans-fup',
    title: 'Plans, data caps and FUP',
    body: 'Each plan sets speed, validity, data cap and the speed after the fair usage limit. Prepaid and postpaid subscribers sit on the same system.',
    bullets: ['Prepaid and postpaid plans', 'Post-FUP speed per plan', 'Different plan rates for each reseller'],
  },
  {
    id: 'resellers',
    title: 'Resellers, LCOs and franchises',
    body: 'Every partner gets their own login and prepaid wallet, and sees only the subscribers they brought in.',
    bullets: ['Wallet and statement per partner', 'Partner-specific plan rates', 'Every partner action is audit-logged'],
  },
  {
    id: 'gst-billing',
    title: 'GST invoices and online payments',
    body: 'Invoices are numbered per financial year and apply CGST + SGST or IGST from the customer’s state. Customers can pay through a link.',
    bullets: ['PDF invoices and GSTR-1 export', 'Razorpay and Cashfree payment links', 'Online recharge from a wallet'],
  },
  {
    id: 'dot-logs',
    title: 'DoT and CERT-In log archive',
    body: 'RADIUS session records and router NAT translations are kept on servers in India. Each day’s file is sealed with a SHA-256 hash, so later tampering shows up.',
    bullets: ['Session records are never deleted', 'Login attempts kept for about three years', 'Retention is configurable; confirm the period your licence needs with your adviser'],
  },
  {
    id: 'portal',
    title: 'Customer self-care portal',
    body: 'Subscribers check their bills and usage and raise support tickets themselves, which takes routine calls off your support line.',
    bullets: ['Bills and payment history', 'Usage history for the last 31 days', 'Support tickets'],
  },
  {
    id: 'reports',
    title: 'Live sessions and reports',
    body: 'See who is online now, how much each subscriber has used, and what has been billed and collected.',
    bullets: ['Revenue and collection reports', 'Per-subscriber usage', 'Server health alerts through Grafana and Prometheus'],
  },
  {
    id: 'admin',
    title: 'Staff access, import and API',
    body: 'Give each staff member only the access their job needs, and bring your existing subscriber list in from Excel.',
    bullets: ['Role-based staff access with TOTP two-factor login', 'Excel bulk import with a dry run that checks every row first', 'Multi-tenant, with a documented REST API (OpenAPI)'],
  },
];

export const bharatRadiusIntegrations = [
  { name: 'MikroTik RouterOS', note: 'The main supported NAS, with a ready setup script.' },
  { name: 'Other standard-RADIUS NAS', note: 'Name your hardware in the demo and we will confirm it.' },
  { name: 'Razorpay and Cashfree', note: 'Payment links on invoices and online recharge.' },
  { name: 'SMS on DLT templates', note: 'Notifications sent on your registered DLT templates.' },
  { name: 'Grafana and Prometheus', note: 'Server health dashboards and alerts.' },
];

export const bharatRadiusSetup = [
  { title: 'Demo and quote', body: 'A 30-minute call. Tell us your subscriber count and your NAS hardware, and we give you a written quote.' },
  { title: 'Your own domain', body: 'Each ISP runs on its own domain, on servers DIV operates in India.' },
  { title: 'Import subscribers', body: 'Upload your subscriber and plan list from Excel. The dry run flags bad rows before anything is saved.' },
  { title: 'Point your NAS at it', body: 'Run the MikroTik setup script, test a few subscribers, then move the rest across.' },
];

// Subscriber bands used for pricing. Prices are quoted, not published.
export const bharatRadiusPricingBands = ['Under 500', '500–2,000', '2,000–10,000', '10,000–50,000', 'Over 50,000'];

export const bharatRadiusFaqs = [
  {
    q: 'What is Bharat Radius?',
    a: 'Bharat Radius is RADIUS and billing software for broadband ISPs in India. It authenticates PPPoE subscribers through FreeRADIUS, bills prepaid and postpaid plans with GST, gives resellers and LCOs their own wallets, and archives session and NAT logs. DIV builds, hosts and supports it.',
  },
  {
    q: 'Does Bharat Radius work with MikroTik?',
    a: 'Yes. MikroTik RouterOS is the main supported NAS, and a setup script configures PPPoE, accounting, CoA for live plan changes and NAT logging. Other NAS devices that speak standard RADIUS may work; name your hardware in the demo and we will confirm.',
  },
  {
    q: 'Is Bharat Radius a daloRADIUS alternative?',
    a: 'Yes. Both run on FreeRADIUS. Bharat Radius adds Indian GST invoicing with GSTR-1 export, Razorpay and Cashfree payments, reseller wallets, a DoT log archive and hosting and support by DIV. daloRADIUS is free and open source but you host and maintain it yourself.',
  },
  {
    q: 'Can I move from daloRADIUS or Excel?',
    a: 'Yes. Subscribers and plans are imported from an Excel file, and a dry run checks every row before anything is saved. We plan the cut-over with you in the demo so subscribers are not logged out.',
  },
  {
    q: 'Does it keep logs for DoT and CERT-In?',
    a: 'RADIUS sessions are never deleted, login attempts are kept for about three years, and router NAT translations are archived on servers in India. Each day’s file is sealed with SHA-256. Retention is configurable; confirm the period your licence requires with your legal adviser.',
  },
  {
    q: 'How many subscribers can it handle?',
    a: 'It has been tested with more than 100,000 subscribers on a single 4-vCPU server, with subscriber search still returning in under a second.',
  },
  {
    q: 'Where is the data hosted?',
    a: 'On servers in India. Data is encrypted in transit, and sensitive fields and backups are encrypted at rest. Each ISP runs on its own domain.',
  },
  {
    q: 'How much does Bharat Radius cost?',
    a: 'It is priced by subscriber count, in bands from under 500 to over 50,000, and the price includes hosting, updates and support. You get a written quote after a 30-minute demo. GST is charged on top.',
  },
];

// Comparison rows. daloRADIUS column: from its GitHub README (link + date shown on the page).
export const bharatRadiusCompare = {
  columns: ['Bharat Radius', 'FreeRADIUS + daloRADIUS', 'Excel / manual billing'],
  rows: [
    ['RADIUS server', 'FreeRADIUS', 'FreeRADIUS', 'None'],
    ['Licence and cost', 'Paid, priced by subscribers', 'Free, open source (GPLv2)', 'Free'],
    ['Who hosts and patches it', 'DIV, in India', 'You', 'You'],
    ['Prepaid and postpaid plans', 'Yes', 'Yes (billing engine)', 'Manual'],
    ['GST invoices and GSTR-1 export', 'Yes', 'Not in its feature list', 'Manual'],
    ['Razorpay / Cashfree payment links', 'Yes', 'PayPal only', 'No'],
    ['Reseller / LCO wallets and rates', 'Yes', 'Not in its feature list', 'Manual'],
    ['Customer self-care portal', 'Yes', 'Yes (users portal)', 'No'],
    ['Live plan change without reconnect (CoA)', 'Yes', 'Do it yourself', 'No'],
    ['DoT / CERT-In log archive, sealed daily', 'Yes', 'Do it yourself', 'No'],
    ['Support when it breaks', 'DIV engineers', 'Community forums', 'None'],
  ],
};

export const daloradiusSource = {
  url: 'https://github.com/lirantal/daloradius',
  label: 'daloRADIUS on GitHub',
};
