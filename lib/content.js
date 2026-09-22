export const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Platform', href: '#platform' },
  { label: 'Inside', href: '#inside' },
  { label: 'Engagements', href: '#engage' },
];

export const steps = [
  { n: 1, title: 'Read what exists', line: 'Sheets, scripts, legacy systems — we start by understanding them.', rotate: '-6deg', lift: '10px', image: '/images/steps/step-1.jpg', alt: 'Hands taking notes beside a glowing screen' },
  { n: 2, title: 'Scope with an engineer', line: 'The person who builds it prices it.', rotate: '-3deg', lift: '4px', image: '/images/steps/step-2.jpg', alt: 'Engineer lit by a monitor while scoping work' },
  { n: 3, title: 'Build in stages', line: 'Shipped in weeks you can use, not quarters.', rotate: '0deg', lift: '0px', image: '/images/steps/step-3.jpg', alt: 'Light falling through a built structure' },
  { n: 4, title: 'Migrate and host', line: 'Onto our own metal, in India.', rotate: '3deg', lift: '4px', image: '/images/steps/step-4.jpg', alt: 'Reflection across glass and a distant horizon' },
  { n: 5, title: 'Watch it for years', line: 'Our monitoring, our engineers, our phone.', rotate: '6deg', lift: '10px', image: '/images/steps/step-5.jpg', alt: 'Warm light in a dark operations room' },
];

export const pillars = [
  { n: 1, title: 'Software built to your process', body: 'Thirteen products that already fit Indian trade, service and network operations — extended, not forced, to match how you actually work.', image: '/images/pillar-1.jpg', alt: 'Spectrum of light dispersing through a prism' },
  { n: 2, title: 'Infrastructure we own', body: 'Our data centre, our provisioning, our failover. Nothing resold, nothing offshore, nobody else to blame.', image: '/images/pillar-2.jpg', alt: 'Rows of servers inside a data centre' },
  { n: 3, title: 'Operated for the long run', body: 'Backups, updates without downtime windows, and a named engineer who answers when something moves.', image: '/images/pillar-3.jpg', alt: 'Trail of light crossing a dark landscape' },
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
  { q: 'Where does our data live?', a: 'Our data centre in India. Not resold cloud, never outside the country.' },
  { q: 'Who answers at 2am?', a: 'The engineers who wrote it. Monitoring is ours, so usually we call you first.' },
  { q: 'How fast do we see something?', a: 'Weeks, not quarters — shipped in stages you can actually use.' },
];

export const footerColumns = [
  { title: 'PLATFORM', links: [{ label: 'Connect CRM', href: '#platform' }, { label: 'Bharat Radius', href: '#platform' }, { label: 'Samadhan', href: '#platform' }, { label: 'BahiKhata', href: '#platform' }] },
  { title: 'MORE', links: [{ label: 'Look inside', href: '#inside' }, { label: 'Engagements', href: '#engage' }, { label: 'How it works', href: '#how' }, { label: 'FAQ', href: '#faq' }] },
  { title: 'COMPANY', links: [{ label: 'Contact', href: '#contact' }, { label: 'Book a call', href: '#contact' }] },
];
