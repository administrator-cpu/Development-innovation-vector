// CRM pages: the services hub (/crm-development-company-delhi-ncr) and the
// Connect CRM product home (/connect-crm). Every claim here must be backed by
// the SLA, lib/content.js plans, a case study, or the live product — see SEO-CRM.md.

export const NCR_AREAS = ['Noida', 'Greater Noida', 'Delhi', 'Gurugram', 'Ghaziabad', 'Faridabad'];

export const crmHub = {
  path: '/crm-development-company-delhi-ncr',
  name: 'Custom CRM Development',
  metaTitle: 'Custom CRM Software Development Company in Delhi NCR',
  metaDescription:
    'Custom CRM development in Delhi NCR from a Noida team that builds, hosts and supports it: your workflow on one record, data hosted in India, 24/7 support.',
  eyebrow: 'CRM development · Delhi NCR',
  title: 'Custom CRM software development',
  accent: 'in Delhi NCR.',
  lead:
    'We are a custom CRM development company based in Sector 31, Noida. We map how your team actually sells, bills and supports customers, build the CRM around it, host it in India and stay on call after launch.',
  what: {
    heading: 'What we',
    accent: 'build',
    intro:
      'A CRM is only useful if it matches the way your business moves a customer from enquiry to invoice. We build the record and the workflow first, then the screens.',
    points: [
      { title: 'One customer record', body: 'Enquiries, deals, orders, documents, invoices and tickets on the same record, so nobody re-keys data between tools.' },
      { title: 'Your pipeline, your stages', body: 'Stages, approvals and hand-offs named the way your team already talks about them — not a generic template you have to bend around.' },
      { title: 'Billing and documents', body: 'Quotes, orders and invoices generated from data that already exists in the CRM, with GST handled by our ledger and invoicing products where you need it.' },
      { title: 'Field and mobile', body: 'Field staff update the same record from a mobile app, including where the network is weak.' },
      { title: 'Integrations', body: 'REST APIs, webhooks and connectors to the accounting, ERP and spreadsheet tools you already run, with queues and retries so nothing is silently dropped.' },
      { title: 'An audit trail on everything', body: 'Drishti, our audit trail, is built into every DIV system: who changed what, when, and from where.' },
    ],
  },
  process: [
    { step: 'Discovery', body: 'An engineer reads your sheets, tools and current process with the people who use them.' },
    { step: 'Design', body: 'We agree the data model, stages and permissions in writing before building screens.' },
    { step: 'Build in stages', body: 'The process that hurts most ships first, in weeks, and you use it while the next stage is built.' },
    { step: 'Test', body: 'Every stage, permission and document is tested with your team before go-live.' },
    { step: 'Launch and train', body: 'We train your team on the live system and stay close through the first weeks.' },
    { step: 'Host and support', body: 'We host it on servers we operate in India and monitor it 24/7 under our SLA.' },
  ],
  faster: {
    heading: 'Need it',
    accent: 'sooner?',
    body:
      'If you run an ISP, telecom reseller or network business, start with Connect CRM, our ready CRM for connections from commercial approval to active billing, and we customise it to your process instead of building from zero.',
  },
  faq: [
    {
      q: 'How much does custom CRM development cost?',
      a: 'For a CRM built on Connect CRM, development starts from ₹9,999, then ₹2,499 a month for server and maintenance (up to 1,000 connections), and later changes cost ₹1,000–₹5,000 each. Larger CRMs covering several teams start at ₹49,999 setup. An engineer gives you a written quote after one scoping call.',
    },
    {
      q: 'How long does it take to build?',
      a: 'The first working stage usually ships within weeks, not quarters. We deliver in stages so you use the most important workflow while the rest is built.',
    },
    {
      q: 'What if our needs change after launch?',
      a: 'They usually do. New fields, stages, documents or reports are quoted at ₹1,000–₹5,000 per change, and you approve the quote before we start.',
    },
    {
      q: 'Who owns the CRM and the data?',
      a: 'You own your data. Architecture decisions and runbooks are documented, so if we part ways you keep everything you need to carry on.',
    },
    {
      q: 'Where is the data stored?',
      a: 'Managed systems run on servers we operate in India. Web front ends can run on Vercel or Render in a region you choose, and we document where every piece lives.',
    },
    {
      q: 'Do you work with businesses across Delhi NCR?',
      a: 'Yes. Our office is in Sector 31, Noida, and we work with teams across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad.',
    },
  ],
};

export const connectCrm = {
  path: '/connect-crm',
  name: 'Connect CRM',
  metaTitle: 'Connect CRM: CRM Software for ISPs and Telecom in India',
  metaDescription:
    'Connect CRM runs every customer connection from commercial approval to active billing on one record. Built for ISPs and telecom resellers in India, hosted by DIV.',
  eyebrow: 'Connect CRM',
  title: 'CRM software for ISPs',
  accent: 'and telecom resellers.',
  lead:
    'Connect CRM is a custom-built CRM that tracks every customer connection on one record, from commercial approval through provisioning to active billing, renewal and termination. Built for ISPs, made to your requirements, and hosted and supported by DIV in India.',
  screenshot: {
    src: '/images/connect-crm/connect-crm-connection-pipeline.webp',
    width: 1533,
    height: 667,
    alt: 'Connect CRM connections screen with demo data: revenue banner, six pipeline stages from commercial approval to churned, and a list of connections with bandwidth, status and telco',
  },
  stages: [
    { n: '1', title: 'Commercial approval', body: 'New connections wait here for sign-off, so nothing is provisioned before it is approved.' },
    { n: '2', title: 'Order approved', body: 'Approved orders are ready for their documents to be generated.' },
    { n: '3', title: 'Implementation', body: 'Links being provisioned in the field, tracked until they go live.' },
    { n: '4', title: 'Active', body: 'Live links that are billing, with service, bandwidth and upstream carrier on the record.' },
    { n: '5', title: 'Termination pending', body: 'Notice served but still billing, so revenue is not lost before the disconnect date.' },
    { n: '6', title: 'Churned', body: 'Disconnected customers stay on record, so you can see churn and win them back.' },
  ],
  modules: [
    { title: 'Connections', body: 'Every link with its order ID, customer, service type, bandwidth, status and carrier, searchable by customer or circuit ID.' },
    { title: 'Leads', body: 'Enquiries tracked alongside connections, so a lead becomes a customer without re-entering it.' },
    { title: 'Customers', body: 'One record per customer with all their connections and history.' },
    { title: 'Billing', body: 'Billing follows the connection status, from active to termination.' },
    { title: 'Reports', body: 'Revenue and pipeline views across every stage.' },
    { title: 'Activity audit', body: 'Drishti records who changed what and when, on every record.' },
  ],
  faq: [
    {
      q: 'Who is Connect CRM for?',
      a: 'Internet service providers, telecom resellers and network businesses that manage customer connections, from approval and provisioning through billing and renewal.',
    },
    {
      q: 'How much does Connect CRM cost?',
      a: 'Development starts from ₹9,999, then ₹2,499 a month for server and maintenance for up to 1,000 connections. Later changes cost ₹1,000–₹5,000 each depending on the requirement. Every setup is quoted after a demo.',
    },
    {
      q: 'We are not an ISP. Can we still use it?',
      a: 'Yes. Connect CRM is built to each client’s requirements. ISPs are where it is proven today, and the same approach works for service businesses and product companies.',
    },
    {
      q: 'Where is our data hosted?',
      a: 'On servers DIV operates in India, with daily backups and 24/7 monitoring under our SLA.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Not at the moment. Book a 30-minute demo with an engineer instead, or open the interactive demo on our home page.',
    },
  ],
};

// Prices as stated by DIV, Nov 2026. Re-check every 3–6 months and update `checked`.
export const crmPricing = {
  path: '/connect-crm/pricing',
  checked: 'November 2026',
  metaTitle: 'Connect CRM Pricing: Costs in ₹ for ISPs',
  metaDescription:
    'Connect CRM pricing: development from ₹9,999, then ₹2,499 a month for server and maintenance up to 1,000 connections. Changes from ₹1,000. Free demo.',
  lines: [
    { label: 'Development', value: 'From ₹9,999', unit: 'one-time', body: 'Connect CRM built to your requirements: your stages, fields, documents and reports.' },
    { label: 'Server & maintenance', value: '₹2,499', unit: 'per month', body: 'Hosting on our servers in India, daily backups, monitoring and maintenance, for up to 1,000 connections.' },
    { label: 'Updates & changes', value: '₹1,000–₹5,000', unit: 'per change', body: 'New fields, stages, documents or reports after launch, priced by the size of the requirement before we start.' },
  ],
  notes: [
    'Every setup is a custom quote. You get the exact figure in writing after a demo.',
    'More than 1,000 connections? We size the server and maintenance fee to your volume.',
    'There is no free trial. The demo uses a live Connect CRM with sample data.',
  ],
  faq: [
    { q: 'Is GST included?', a: 'No. GST is charged on top of the prices shown.' },
    { q: 'What counts as a connection?', a: 'One customer link on the connections list, whatever its stage. The ₹2,499 monthly fee covers up to 1,000 of them.' },
    { q: 'Why is development “from” ₹9,999?', a: 'Because Connect CRM is built to each business’s requirements. ₹9,999 covers the simplest setup; more stages, documents or reports cost more. You get the exact figure in writing before we start.' },
    { q: 'How are later changes priced?', a: 'Each change is quoted between ₹1,000 and ₹5,000 depending on the requirement, and you approve the quote before work begins.' },
    { q: 'Can we cancel, and what happens to our data?', a: 'Cancellation and refunds follow our refund and cancellation policy. Your data stays yours, and we document the system so you can carry on without us.' },
  ],
};

// One feature per page. Copy must match what the product does today — check with the product team before editing.
export const crmFeatures = [
  {
    slug: 'automated-follow-up-reminders',
    name: 'Automated follow-up reminders',
    keyword: 'crm with automated follow up reminders',
    metaTitle: 'CRM with Automated Follow-up Reminders for ISPs',
    metaDescription:
      'Connect CRM reminds your team when a lead, approval, renewal or termination needs action, so no follow-up or deadline slips. Built for ISPs in India.',
    title: 'Never miss',
    accent: 'a follow-up.',
    lead:
      'In an ISP, money is lost in the gaps: a lead nobody called back, an approval that sat for a week, a termination date nobody noticed. Connect CRM reminds the right person when a record needs action.',
    problem: 'Follow-ups live in people’s heads, WhatsApp chats and sticky notes. When someone is busy or on leave, the customer waits, and sometimes leaves.',
    points: [
      { title: 'Leads that get called back', body: 'Every enquiry has an owner and a next step, so a lead does not go cold because nobody remembered it.' },
      { title: 'Approvals that keep moving', body: 'Connections waiting for commercial approval are flagged before they stall, so provisioning starts on time.' },
      { title: 'Deadlines you see coming', body: 'Renewals and termination notice dates surface ahead of time, while you can still act on them.' },
    ],
    example: 'A sales executive logs a new enquiry and sets the next call. On the day, the reminder is waiting on their list; if the lead is approved, it moves to the connection pipeline without being re-entered.',
    related: ['document-generation', 'reports-and-dashboards'],
  },
  {
    slug: 'document-generation',
    name: 'Document generation',
    keyword: 'crm document generation',
    metaTitle: 'CRM Document Generation for ISP Orders',
    metaDescription:
      'Generate order documents in Connect CRM straight from the connection record: customer, service, bandwidth and carrier filled in, no retyping. For ISPs in India.',
    title: 'Documents from the record,',
    accent: 'not from scratch.',
    lead:
      'Once an order is approved, Connect CRM generates its documents from the data already on the connection record. Customer, service type, bandwidth and carrier are filled in for you.',
    problem: 'Copying details from a spreadsheet into a Word template is slow, and every retyped bandwidth figure or customer name is a chance for a mistake that reaches the customer.',
    points: [
      { title: 'Filled from real data', body: 'Documents pull from the same record your team works on, so what you send matches what is in the system.' },
      { title: 'At the right stage', body: 'Orders reach the “Order approved” stage with their documents ready to generate, so paperwork never runs ahead of approval.' },
      { title: 'Your templates', body: 'We set up the documents your process needs during onboarding, in your format.' },
    ],
    example: 'Commercial approval comes through for a 155 Mbps link. The order moves to “Order approved”, and its documents are generated with the customer, service and bandwidth already in place.',
    related: ['automated-follow-up-reminders', 'reports-and-dashboards'],
  },
  {
    slug: 'reports-and-dashboards',
    name: 'Reports & dashboards',
    keyword: 'isp crm reports and dashboards',
    metaTitle: 'ISP CRM Reports and Dashboards',
    metaDescription:
      'See revenue, pipeline stages and every connection on one Connect CRM dashboard: month-on-month revenue, links per stage and filters by status. For ISPs.',
    title: 'Know where every link stands,',
    accent: 'at a glance.',
    lead:
      'The Connect CRM dashboard shows revenue against last month, how many connections sit in each stage and how that changed, with the full connection list one click away.',
    problem: 'When numbers live in spreadsheets, someone has to compile them before anyone can decide anything, and by then they are already out of date.',
    points: [
      { title: 'Revenue, month on month', body: 'Current revenue with the change against last month, so a dip is visible as soon as it starts.' },
      { title: 'Every stage, counted', body: 'Live counts for commercial approval, order approved, implementation, active, termination pending and churned, with recent movement.' },
      { title: 'Filter and search', body: 'Filter connections by status, or search by customer or circuit ID, to go from a number to the records behind it.' },
    ],
    example: 'A manager sees 24 links in “Termination pending”, opens the stage, and calls the biggest accounts before their notice period runs out.',
    related: ['automated-follow-up-reminders', 'document-generation'],
  },
  {
    slug: 'payments-and-dues',
    name: 'Payments & dues tracking',
    keyword: 'isp payment collection software',
    metaTitle: 'ISP Payment and Dues Tracking Software | Connect CRM',
    metaDescription:
      'Record subscriber payments and see outstanding dues against each customer in Connect CRM, with reminders so dues are chased on time. For ISPs in India.',
    title: 'Know who has paid,',
    accent: 'and who hasn’t.',
    lead:
      'Connect CRM records payments against each customer and shows what is still due, so collections are not tracked in a separate register.',
    problem: 'Payments noted in a notebook or a spreadsheet drift away from the customer list. Dues get missed, the same subscriber is chased twice, and month-end totals never quite match.',
    points: [
      { title: 'On the customer record', body: 'Payments sit with the customer and their connection, so anyone on the team can see the account’s status.' },
      { title: 'Dues at a glance', body: 'See what is outstanding without adding up a register by hand.' },
      { title: 'Reminders that follow up', body: 'Pair dues with automated follow-up reminders, so the right person chases the right account on time.' },
    ],
    example: 'At the start of the month, the team opens the list of customers with dues, works through the follow-ups, and records each payment against the account as it comes in.',
    related: ['automated-follow-up-reminders', 'reports-and-dashboards'],
  },
];
export const getCrmFeature = (slug) => crmFeatures.find((f) => f.slug === slug);

export const crmNoida = {
  path: '/crm-development-noida',
  metaTitle: 'Custom CRM Development Services in Noida',
  metaDescription:
    'Custom CRM development in Noida from a team based in Sector 31. Meet the engineers who build your CRM, then host and support it in India.',
  title: 'Custom CRM development',
  accent: 'in Noida.',
  lead:
    'DIV is based at C6/28, Sector 31, Noida. Noida businesses can meet the engineers who will scope, build and support their CRM at our office, and we already run CRM systems for clients in the city.',
  points: [
    { title: 'Meet the people who build it', body: 'Scoping sessions happen with the engineer who will do the work, by call or at our Sector 31 office.' },
    { title: 'Same team after launch', body: 'The engineers who build your CRM host it on our servers in India and stay on call for it.' },
    { title: 'Start with Connect CRM', body: 'ISPs and network businesses in Noida can start from Connect CRM and have it customised, instead of building from zero.' },
  ],
};

export const blogPosts = [
  {
    slug: 'custom-crm-development-cost-india',
    title: 'How Much Does Custom CRM Development Cost in India in 2026?',
    h1: 'How much does custom CRM development cost in India?',
    metaDescription:
      'What custom CRM development costs in India in 2026, what drives the price, and real figures from DIV: development from ₹9,999 and hosting from ₹2,499 a month.',
    published: '2026-11-02',
    updated: '2026-11-02',
  },
];


// Other DIV products for ISPs. Separate products: do NOT claim they connect to or sync with Connect CRM.
export const ispProductsPath = '/isp-products';
export const ispProducts = [
  {
    slug: 'samadhan',
    name: 'Samadhan',
    keyword: 'isp complaint management software',
    url: 'https://samadhan.fab5connect.com/',
    urlLabel: 'Visit Samadhan',
    metaTitle: 'Samadhan: Complaint Management Software for ISPs',
    metaDescription:
      'Samadhan is DIV’s customer support hub for ISPs: complaints raised in seconds, auto-routed to an agent, tracked against an SLA and escalated if delayed.',
    line: 'Complaints and support tickets with SLA tracking and escalation.',
    title: 'Every complaint,',
    accent: 'tracked to resolved.',
    lead:
      'Samadhan is DIV’s customer support hub. Customers raise a complaint in seconds, it is routed to an agent automatically, tracked against an SLA, escalated if delayed, and resolved and confirmed.',
    points: [
      { title: 'Raised in seconds', body: 'Customers raise a complaint quickly, so it is recorded instead of lost in a phone call or chat.' },
      { title: 'Routed and timed', body: 'Each ticket goes to an agent automatically and runs against an SLA, with automatic escalation if it is delayed.' },
      { title: 'Samadhan Desk', body: 'A remote-access tool so agents can troubleshoot the customer’s system without a site visit.' },
    ],
  },
  {
    slug: 'bharat-radius',
    name: 'Bharat Radius',
    keyword: 'radius server software for isp',
    metaTitle: 'Bharat Radius: RADIUS Software for ISPs in India',
    metaDescription:
      'Bharat Radius is DIV’s RADIUS product for ISPs in India: subscriber authentication, subscriber management and reseller management, hosted and supported by DIV.',
    line: 'Subscriber authentication, subscribers and resellers.',
    title: 'RADIUS for ISPs,',
    accent: 'built in India.',
    lead:
      'Bharat Radius is DIV’s RADIUS product for ISPs: subscriber authentication, subscriber management and reseller management, built, hosted and supported by the same team.',
    points: [
      { title: 'Subscriber authentication', body: 'Authenticates your subscribers on the network.' },
      { title: 'Subscribers and resellers', body: 'Manage subscribers and the resellers who bring them in.' },
      { title: 'Built and run by DIV', body: 'Hosted and supported by DIV, so there is one team to call.' },
    ],
  },
  {
    slug: 'tr-069',
    name: 'TR-069',
    keyword: 'tr-069 acs for isp',
    url: 'https://tr069-api.thediv.in/',
    urlLabel: 'Open the TR-069 portal',
    metaTitle: 'TR-069 Remote Router Configuration for ISPs',
    metaDescription:
      'DIV’s TR-069 product lets ISPs configure customer routers remotely, so many problems are fixed without a truck roll. Hosted and supported in India.',
    line: 'Remote configuration of customer equipment, without a truck roll.',
    title: 'Fix the router',
    accent: 'from the office.',
    lead:
      'DIV’s TR-069 product lets ISPs configure customer equipment remotely, so many router problems are fixed without sending a technician.',
    points: [
      { title: 'Remote configuration', body: 'Change customer router settings remotely instead of sending a technician.' },
      { title: 'Fewer truck rolls', body: 'Every configuration issue fixed from the office is a site visit you do not pay for.' },
      { title: 'Built and run by DIV', body: 'Hosted and supported by DIV, so there is one team to call.' },
    ],
  },
];
export const getIspProduct = (slug) => ispProducts.find((i) => i.slug === slug);

// Landing pages rendered by components/crm/CrmLandingPage.jsx. Capability, not client claims.
export const crmLandings = {
  hosting: {
    path: '/crm-hosting-maintenance',
    keyword: 'crm hosting and maintenance services',
    crumb: 'CRM hosting & maintenance',
    metaTitle: 'CRM Hosting and Maintenance Services in India',
    metaDescription:
      'CRM hosting and maintenance from ₹2,499 a month for up to 1,000 connections: servers in India, daily backups, monitoring and a 99.9% uptime SLA.',
    eyebrow: 'CRM hosting & maintenance',
    title: 'Your CRM, hosted',
    accent: 'and looked after.',
    lead:
      'Every CRM we build is hosted on servers we operate in India and maintained by the engineers who built it, for ₹2,499 a month for up to 1,000 connections.',
    points: [
      { title: 'Servers in India', body: 'Your CRM and its data run on servers DIV operates in India.' },
      { title: 'Daily backups', body: 'Backed up every day, so a bad day is recoverable.' },
      { title: 'Monitored 24/7', body: 'Our monitoring watches it around the clock, so usually we know about a problem before you do.' },
      { title: '99.9% uptime, in writing', body: 'Monthly uptime is backed by service credits under our SLA.' },
      { title: 'Sev 1 response under an hour', body: 'An engineer responds to a critical issue within one hour, 24/7.' },
      { title: 'Updates handled', body: 'Security and maintenance updates are part of the fee. New features are quoted separately.' },
    ],
    price: [
      { label: 'Server & maintenance', value: '₹2,499', unit: 'per month + GST, up to 1,000 connections' },
      { label: 'Changes after launch', value: '₹1,000–₹5,000', unit: 'per change + GST' },
    ],
    links: [
      { label: 'Read the SLA', href: '/sla' },
      { label: 'Connect CRM pricing', href: '/connect-crm/pricing' },
    ],
    source: 'crm-hosting',
  },
  serviceBusiness: {
    path: '/custom-crm-service-business',
    keyword: 'custom crm for service business',
    crumb: 'For service businesses',
    metaTitle: 'Custom CRM for Service Businesses in Delhi NCR',
    metaDescription:
      'A custom CRM built around how your service business works: enquiries, jobs, follow-ups, documents, payments and dues on one record. From ₹9,999.',
    eyebrow: 'Custom CRM · Service businesses',
    title: 'A CRM built around',
    accent: 'the service you deliver.',
    lead:
      'If you sell a service, your CRM has to follow the job, not just the sale. We build Connect CRM to your stages, from first enquiry to delivered, billed and renewed.',
    points: [
      { title: 'Your stages, your names', body: 'Enquiry, quote, approval, scheduled, delivered, renewed: whatever your process is called, the pipeline uses it.' },
      { title: 'Follow-ups on time', body: 'Automated reminders on leads, approvals and renewals, so customers are not forgotten.' },
      { title: 'Documents from the record', body: 'Quotes and order documents generated from data already in the CRM.' },
      { title: 'Payments and dues', body: 'Payments against each customer and a clear view of what is outstanding.' },
      { title: 'Complaints, separately', body: 'Need complaint handling too? Samadhan, our support hub, handles tickets with SLA timing and escalation.' },
    ],
    links: [
      { label: 'Connect CRM', href: '/connect-crm' },
      { label: 'Pricing', href: '/connect-crm/pricing' },
      { label: 'For product companies', href: '/custom-crm-product-company' },
    ],
    source: 'crm-service-business',
  },
  productCompany: {
    path: '/custom-crm-product-company',
    keyword: 'custom crm for product companies',
    crumb: 'For product companies',
    metaTitle: 'Custom CRM for Product Companies in Delhi NCR',
    metaDescription:
      'A custom CRM for companies that sell products: leads, orders, documents, payments and dues on one record, built to your process. From ₹9,999.',
    eyebrow: 'Custom CRM · Product companies',
    title: 'A CRM built around',
    accent: 'how you sell products.',
    lead:
      'Product companies need a CRM that follows a customer from lead to order to after-sales. We build Connect CRM to your stages and documents, and host and support it for you.',
    points: [
      { title: 'Lead to order', body: 'Every lead moves through your own stages to an approved order, without re-entering data.' },
      { title: 'Order documents', body: 'Order documents generated from the customer and order details already on the record.' },
      { title: 'After-sales, separately', body: 'Customer complaints can run in Samadhan, our support hub, with SLA timing and escalation.' },
      { title: 'Payments and dues', body: 'See who has paid and what is outstanding, per customer.' },
      { title: 'Reminders', body: 'Automated follow-ups for leads, approvals and dues.' },
      { title: 'Dashboards', body: 'Pipeline and revenue views for the people who run the business.' },
    ],
    links: [
      { label: 'Connect CRM', href: '/connect-crm' },
      { label: 'Pricing', href: '/connect-crm/pricing' },
      { label: 'For service businesses', href: '/custom-crm-service-business' },
    ],
    source: 'crm-product-company',
  },
  delhi: {
    path: '/crm-development-delhi',
    keyword: 'custom crm development delhi',
    crumb: 'Delhi',
    parent: { name: 'CRM development', path: '/crm-development-company-delhi-ncr' },
    city: 'Delhi',
    metaTitle: 'Custom CRM Development Company in Delhi',
    metaDescription:
      'Custom CRM development for Delhi businesses: built to your process, with setup and training included, hosted in India and supported 24/7.',
    eyebrow: 'CRM development · Delhi',
    title: 'Custom CRM development',
    accent: 'for Delhi businesses.',
    lead:
      'We support businesses across Delhi from our office in Sector 31, Noida. The engineers who scope your CRM set it up, train your team, host it and support it.',
    points: [
      { title: 'Setup and training', body: 'We set your CRM up and train your team on it, without you needing to visit us.' },
      { title: 'Built to your process', body: 'Your stages, documents and reports, not a template you bend around.' },
      { title: 'Hosted and supported', body: 'On servers we operate in India, monitored 24/7 under our SLA.' },
    ],
    links: [
      { label: 'All CRM services', href: '/crm-development-company-delhi-ncr' },
      { label: 'Connect CRM for ISPs', href: '/connect-crm' },
      { label: 'Our Noida office', href: '/crm-development-noida' },
    ],
    source: 'crm-delhi',
  },
};
