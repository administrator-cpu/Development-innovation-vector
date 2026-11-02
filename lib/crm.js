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
    'We are a custom CRM development company based in Sector 31, Noida. We map how your team actually sells, bills and supports customers, build the CRM around it, migrate your spreadsheets, host it in India and stay on call after launch.',
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
    { step: 'Test and migrate', body: 'Your existing records are cleaned, imported and reconciled before cutover.' },
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
      a: 'Our Start plan begins at ₹14,999 setup + GST with a retainer from ₹2,499 a month + GST, for one core process. Larger CRMs covering several teams start at ₹49,999 setup + GST. An engineer gives you a written quote after one scoping call.',
    },
    {
      q: 'How long does it take to build?',
      a: 'The first working stage usually ships within weeks, not quarters. We deliver in stages so you use the most important workflow while the rest is built.',
    },
    {
      q: 'Can you move our data from Excel or another CRM?',
      a: 'Yes. We clean and import spreadsheets and exports from existing tools, and reconcile every migrated record before cutover so nothing is lost.',
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
      a: 'Yes. Our office is in Sector 31, Noida, and we work with teams across Delhi, Gurugram, Noida, Greater Noida, Ghaziabad and Faridabad, on-site where it helps and remotely the rest of the time.',
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
    'Connect CRM tracks every customer connection on one record, from commercial approval through provisioning to active billing, renewal and termination. It is built, hosted and supported by DIV in India.',
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
  works: [
    { name: 'Bharat Radius', body: 'Subscriber authentication and reseller management.' },
    { name: 'TR-069', body: 'Remote configuration of customer equipment, without a truck roll.' },
    { name: 'Samadhan', body: 'Support tickets with SLA clocks, on web and in the field.' },
  ],
  faq: [
    {
      q: 'Who is Connect CRM for?',
      a: 'Internet service providers, telecom resellers and network businesses that manage customer connections, from approval and provisioning through billing and renewal.',
    },
    {
      q: 'How much does Connect CRM cost?',
      a: 'Connect CRM is available on our Start plan from ₹14,999 setup + GST, with a retainer from ₹2,499 a month + GST. That includes importing your existing sheets, hosting in India and training your team.',
    },
    {
      q: 'Can it be customised to our process?',
      a: 'Yes. We extend Connect CRM to match your stages, documents and integrations rather than rebuilding it. Bigger changes are scoped with an engineer.',
    },
    {
      q: 'Where is our data hosted?',
      a: 'On servers DIV operates in India, with daily backups and 24/7 monitoring under our SLA.',
    },
    {
      q: 'Can we see it before we commit?',
      a: 'Yes. Book a 30-minute walkthrough with an engineer, or open the interactive demo on our home page.',
    },
  ],
};
