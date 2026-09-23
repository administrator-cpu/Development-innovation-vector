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
  { n: 1, title: 'Read what exists', line: 'Sheets, scripts, legacy systems — we start by understanding them.', rotate: '-6deg', lift: '10px', image: '/images/how-it-works/01-audit-existing-spreadsheets-and-systems.jpg', alt: 'Engineer taking notes beside a screen while auditing existing spreadsheets and systems' },
  { n: 2, title: 'Scope with an engineer', line: 'The person who builds it prices it.', rotate: '-3deg', lift: '4px', image: '/images/how-it-works/02-engineer-led-software-project-scoping.avif', alt: 'Software engineer lit by a monitor while scoping a project' },
  { n: 3, title: 'Build in stages', line: 'Shipped in weeks you can use, not quarters.', rotate: '0deg', lift: '0px', image: '/images/how-it-works/03-staged-software-delivery.jpg', alt: 'Light falling through a built structure, symbolising software delivered in stages' },
  { n: 4, title: 'Migrate and host', line: 'Onto our own metal, in India.', rotate: '3deg', lift: '4px', image: '/images/how-it-works/04-data-migration-and-hosting-in-india.jpg', alt: 'Reflection across glass and a distant horizon, symbolising migration to hosting in India' },
  { n: 5, title: 'Watch it for years', line: 'Our monitoring, our engineers, our phone.', rotate: '6deg', lift: '10px', image: '/images/how-it-works/05-24x7-software-monitoring-and-support.avif', alt: 'Warm light in a dark operations room where software is monitored 24/7' },
];

export const pillars = [
  { n: 1, title: 'Software built to your process', body: 'Thirteen products that already fit Indian trade, service and network operations — extended, not forced, to match how you actually work.', image: '/images/pillars/custom-business-software-for-indian-companies.jpg', alt: 'Light dispersing through a prism, representing software built to your process' },
  { n: 2, title: 'Infrastructure we own', body: 'Our data centre, our provisioning, our failover. Nothing resold, nothing offshore, nobody else to blame.', image: '/images/pillars/div-data-centre-server-racks-india.jpg', alt: 'Rows of server racks inside DIV’s data centre in India' },
  { n: 3, title: 'Operated for the long run', body: 'Backups, updates without downtime windows, and a named engineer who answers when something moves.', image: '/images/pillars/long-term-managed-software-operations.jpg', alt: 'Trail of light crossing a dark landscape, representing software operated for the long run' },
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
    items: ['One product, fully configured', 'Data migrated from your sheets', 'Hosted in our data centre', 'Team trained on it', 'Support on business hours'],
    cta: 'Scope it with us',
    theme: 'light',
  },
  {
    tier: 'Platform',
    head: 'The whole operation',
    sub: 'CRM, billing, support, network and reporting on one record.',
    items: ['Everything in Start', 'Products connected end to end', 'Custom modules and integrations', 'Mobile apps for staff and customers', '24/7 monitoring, named engineer'],
    cta: 'Book a working session',
    theme: 'dark',
  },
];

export const faq = [
  { q: "Can you take over someone else's system?", a: "Usually. We read what exists, say what's worth keeping, and take over hosting and support." },
  { q: 'Do we have to buy everything?', a: 'No. Start with the process that hurts most. The rest plugs into the same record later.' },
  { q: 'Where does our data live?', a: 'Managed systems run in our own data centre in India. Web and app front-ends can run on Vercel or Render — you pick the region, and we document where every piece lives.' },
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
  ] },
];
