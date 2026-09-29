// Absolute paths so the same nav works on every page, not just the home page.
export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Platform', href: '/#platform' },
  { label: 'Work', href: '/work' },
  { label: 'SLA', href: '/sla' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const steps = [
  { n: 1, title: 'Read what exists', line: 'Sheets, scripts, legacy systems — we start by understanding them.', rotate: '-11deg', lift: '24px', image: '/images/how-it-works/01-audit-existing-spreadsheets-and-systems.jpg', alt: 'Engineer taking notes beside a screen while auditing existing spreadsheets and systems' },
  { n: 2, title: 'Scope with an engineer', line: 'The person who builds it prices it.', rotate: '-5.5deg', lift: '8px', image: '/images/how-it-works/02-engineer-led-software-project-scoping.avif', alt: 'Software engineer lit by a monitor while scoping a project' },
  { n: 3, title: 'Build in stages', line: 'Shipped in weeks you can use, not quarters.', rotate: '0deg', lift: '0px', image: '/images/how-it-works/03-staged-software-delivery.jpg', alt: 'Light falling through a built structure, symbolising software delivered in stages' },
  { n: 4, title: 'Migrate and host', line: 'Onto servers we run, in India.', rotate: '5.5deg', lift: '8px', image: '/images/how-it-works/04-data-migration-and-hosting-in-india.jpg', alt: 'Reflection across glass and a distant horizon, symbolising migration to hosting in India' },
  { n: 5, title: 'Watch it for years', line: 'Our monitoring, our engineers, our phone.', rotate: '11deg', lift: '24px', image: '/images/how-it-works/05-24x7-software-monitoring-and-support.avif', alt: 'Warm light in a dark operations room where software is monitored 24/7' },
];

export const pillars = [
  { n: 1, title: 'Software built to your process', body: 'Thirteen products that already fit Indian trade, service and network operations — extended, not forced, to match how you actually work.', image: '/images/pillars/custom-business-software-for-indian-companies.jpg', alt: 'Light dispersing through a prism, representing software built to your process' },
  { n: 2, title: 'Infrastructure we own', body: 'Our servers in India, our provisioning, our failover — and every piece documented, so there is nobody else to blame.', image: '/images/pillars/div-data-centre-server-racks-india.jpg', alt: 'Rows of server racks inside DIV’s data centre in India' },
  { n: 3, title: 'Operated for the long run', body: 'Daily backups, planned updates with minimal downtime, and a named engineer who answers when something moves.', image: '/images/pillars/long-term-managed-software-operations.jpg', alt: 'Trail of light crossing a dark landscape, representing software operated for the long run' },
];

export const products = [
  { name: 'Connect CRM', accent: '#FF0B55', line: 'Approval to renewal on one record.' },
  { name: 'Bharat Radius', accent: '#2F6BFF', line: 'RADIUS, resellers, subscribers.' },
  { name: 'Samadhan', accent: '#FF8A3D', line: 'SLA desk, web and field.' },
  { name: 'BahiKhata', accent: '#E23434', line: 'Ledger, GST-ready.' },
  { name: 'Drishti', accent: '#7A4DFF', line: "Every team's numbers, one source." },
  { name: 'InvoicePro', accent: '#0FA36B', line: 'Quotes to receipts.' },
  { name: 'eHastakshar', accent: '#C81E68', line: 'Signed approvals, audit trail.' },
  { name: 'TR-069', accent: '#1F9AA6', line: 'Remote config, no truck roll.' },
  { name: 'Remote desktop', accent: '#3E7FA8', line: 'Fix the box from here.' },
  { name: 'Kiosk systems', accent: '#B07B2A', line: 'Unattended counters.' },
  { name: 'E-commerce', accent: '#E0562A', line: 'Your catalogue, your margins.' },
  { name: 'Brand websites', accent: '#2AA7C4', line: 'Fast on Indian networks.' },
  { name: 'Mobile apps', accent: '#7C83C4', line: 'iOS, Android, offline-ready.' },
];

export const plans = [
  {
    tier: 'Start',
    head: 'One process',
    sub: 'Pick the thing that hurts most and get it running in weeks.',
    from: '₹14,999',
    fromUnit: 'setup + GST',
    then: 'Retainer from ₹2,499 / month + GST',
    items: ['One core process — Connect CRM or Samadhan helpdesk', 'Your sheets cleaned up and imported', 'Hosted on our servers in India', 'Team trained on it', 'Business-hours support on WhatsApp'],
    cta: 'Scope it with us',
    theme: 'light',
  },
  {
    tier: 'Platform',
    head: 'The whole operation',
    sub: 'CRM, billing, support, network and reporting on one record.',
    from: '₹49,999',
    fromUnit: 'setup + GST',
    then: 'Retainer sized to your volume',
    items: ['CRM, billing and tickets on one record', 'Bharat RADIUS + TR-069, or a customer app', 'Automated failover and daily backups', 'Custom modules and integrations', '24/7 monitoring, named engineer'],
    cta: 'Book a working session',
    theme: 'dark',
  },
];

// Estimates — shown labelled as such on the page.
export const roi = [
  { value: '₹12–18k / month', line: "the usual cost of an office data-entry clerk. Start's retainer begins at ₹2,499." },
  { value: '₹250–400 a trip', line: 'saved on every technician visit avoided with a remote router reset over TR-069.' },
  { value: 'Flat rupee billing', line: 'hosted on our own servers in India, with no surprise cloud bills in dollars.' },
];

// Keys must match product names above. `shot` = label in lib/shots.js for "See it live".
export const productGroups = [
  { label: 'Telecom & network', blurb: 'Provision links, authenticate subscribers and configure customer equipment without a truck roll.', items: ['Connect CRM', 'Bharat Radius', 'TR-069', 'Remote desktop'] },
  { label: 'Field & support', blurb: 'Tickets, SLA clocks, field visits and the numbers behind them — web, mobile and kiosk.', items: ['Samadhan', 'Drishti', 'Mobile apps', 'Kiosk systems'] },
  { label: 'Finance & compliance', blurb: 'Ledgers, GST invoices and signed approvals that hold up to an audit.', items: ['BahiKhata', 'InvoicePro', 'eHastakshar'] },
  { label: 'Web & commerce', blurb: 'The front door your customers see, built to load fast on Indian networks.', items: ['E-commerce', 'Brand websites'] },
];
export const productShot = { 'Connect CRM': 'Connect CRM', Samadhan: 'Samadhan', 'Bharat Radius': 'Bharat RADIUS', BahiKhata: 'BahiKhata', InvoicePro: 'InvoicePro' };

// Anonymised, as reported by each engagement. Keep written evidence for every number.
export const proof = [
  { industry: 'FINANCIAL SERVICES', value: '99.99%', line: 'uptime after replacing 48-hour spreadsheet reconciliation with real-time sync.', title: 'FinTech engine', href: '/work/fintech-engine' },
  { industry: 'LOGISTICS', value: '75%', line: 'faster invoicing with ten-plus workflows unified on one customer record.', title: 'Logistics CRM', href: '/work/logistics-crm' },
  { industry: 'EDUCATION', value: '0 min', line: 'of downtime through a 300% traffic surge during admissions.', title: 'EdTech platform', href: '/work/edtech-platform' },
];

// Only claims you can evidence. Add 'DPDP ACT 2023 READY' etc. once you hold proof.
export const trustBadges = ['CUSTOMER DATA IN INDIA', '99.9% UPTIME SLA', 'DAILY BACKUPS'];

export const fitQuestions = [
  { q: 'What needs fixing first?', opts: [['One process', 0], ['Two or three', 1], ['The whole operation', 2]] },
  { q: 'Where does it run today?', opts: [['Spreadsheets', 0], ['One legacy system', 1], ["Several tools that don't talk", 2]] },
  { q: 'Who needs to use it?', opts: [['Office team', 0], ['Plus field staff', 1], ['Plus our customers', 2]] },
  { q: 'What support do you need?', opts: [['Business hours', 0], ['24/7, named engineer', 2]] },
];

export const faq = [
  { q: "Can you take over someone else's system?", a: "Usually. We read what exists, say what's worth keeping, and take over hosting and support." },
  { q: 'Do we have to buy everything?', a: 'No. Start with the process that hurts most. The rest plugs into the same record later.' },
  { q: 'Where does our data live?', a: 'Managed systems run on servers we operate in India. Web and app front-ends can run on Vercel or Render — you pick the region, and we document where every piece lives.' },
  { q: 'Who answers at 2am?', a: 'The engineers who wrote it. Monitoring is ours, so usually we call you first.' },
  { q: 'How fast do we see something?', a: 'Weeks, not quarters — shipped in stages you can actually use.' },
];

export const footerColumns = [
  { title: 'SERVICES', links: [
    { label: 'All services', href: '/services' },
    { label: 'Cloud native deployments', href: '/cloud-native-deployments' },
    { label: 'API-driven backends', href: '/api-backend-development' },
    { label: 'Microservices architecture', href: '/microservices-architecture' },
    { label: 'Database & integration', href: '/database-integration' },
  ] },
  { title: 'CASE STUDIES', links: [
    { label: 'All case studies', href: '/work' },
    { label: 'FinTech engine', href: '/work/fintech-engine' },
    { label: 'Logistics CRM', href: '/work/logistics-crm' },
    { label: 'EdTech platform', href: '/work/edtech-platform' },
  ] },
  { title: 'COMPANY', links: [
    { label: 'About DIV', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Platform', href: '/#platform' },
  ] },
  { title: 'TRUST', links: [
    { label: 'Service level agreement', href: '/sla' },
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
    { label: 'Cookie policy', href: '/cookies' },
    { label: 'Refund & cancellation', href: '/refund-policy' },
  ] },
];
