// Case studies. Clients are anonymised by industry; results as reported by the engagement.
export const caseStudies = [
  {
    slug: 'fintech-engine',
    metaTitle: 'FinTech Case Study: 48-Hour Delays to Real-Time Sync',
    title: 'FinTech Engine',
    industry: 'Financial services',
    headline: 'From 48-hour spreadsheet delays to real-time sync',
    summary:
      'A financial services team ran reconciliation on shared spreadsheets. We replaced them with a containerised engine on MongoDB and Render that syncs in real time.',
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: 'Real-time', label: 'Data sync, down from 48 h' },
      { value: '35%', label: 'Lower running cost' },
    ],
    stack: ['Docker', 'MongoDB', 'Render'],
    services: ['cloud-native-deployments', 'database-integration'],
    problem:
      'Transaction data arrived from several sources and was merged into shared spreadsheets by hand. Each cycle took up to 48 hours, errors surfaced only at month-end, and nobody could see an up-to-date position during the day.',
    solution: [
      'Modelled transactions, accounts and reconciliation rules in MongoDB with indexes designed for the queries finance runs most.',
      'Built the ingestion and reconciliation engine as Docker services, so every environment runs the same image.',
      'Deployed on Render with health-checked releases, autoscaling workers and alerting routed to our on-call rota.',
      'Replaced batch uploads with continuous sync, so dashboards reflect new transactions as they land.',
    ],
    outcome:
      'The team now works from a live position instead of a two-day-old one. The service has held 99.99% uptime, and consolidating onto right-sized containers cut running costs by 35%.',
  },
  {
    slug: 'logistics-crm',
    metaTitle: 'Logistics CRM Case Study: 75% Faster Invoicing',
    title: 'Logistics CRM',
    industry: 'Logistics',
    headline: 'Ten-plus workflows on one record, invoicing 75% faster',
    summary:
      'A logistics operator had customer, shipment and billing data siloed across tools and re-keyed by hand. We unified it into one CRM on Appwrite, MongoDB and Vercel.',
    metrics: [
      { value: '10+', label: 'Workflows unified' },
      { value: '75%', label: 'Faster invoicing' },
      { value: '1', label: 'Source of truth' },
    ],
    stack: ['Appwrite', 'MongoDB', 'Vercel'],
    services: ['database-integration', 'microservices-architecture'],
    problem:
      'Bookings, shipment status, customer records and invoices lived in separate tools. Staff copied data between them, which caused billing errors and made it impossible to see a customer\'s full history in one place.',
    solution: [
      'Mapped more than ten operational workflows — from enquiry and booking through dispatch, delivery and invoicing — onto a single customer record.',
      'Used Appwrite for staff authentication, role-based permissions, document storage and real-time status updates.',
      'Modelled shipments and billing in MongoDB so invoices are generated directly from delivery data, not re-keyed.',
      'Deployed the CRM front end on Vercel with preview environments so operations leads approved each workflow before release.',
    ],
    outcome:
      'Manual re-entry is gone, more than ten workflows run on one record, and invoicing is 75% faster because invoices are raised from the data that already exists.',
  },
  {
    slug: 'edtech-platform',
    metaTitle: 'EdTech Case Study: Zero Downtime at 300% Traffic',
    title: 'EdTech Platform',
    industry: 'Education',
    headline: 'Zero downtime through a 300% traffic surge',
    summary:
      'An education platform\'s legacy servers crashed during exam and admission spikes. We rebuilt it API-first on Vercel\'s edge network.',
    metrics: [
      { value: '0', label: 'Downtime during a 300% surge' },
      { value: '120 ms', label: 'Response time' },
      { value: 'API-first', label: 'Web and mobile on one backend' },
    ],
    stack: ['API-driven backend', 'Vercel Edge', 'Next.js'],
    services: ['api-backend-development', 'cloud-native-deployments'],
    problem:
      'Traffic arrived in sharp peaks around results, admissions and live classes. The legacy servers could not scale fast enough, so the platform went down exactly when students needed it most.',
    solution: [
      'Designed an API-first backend so the web platform and mobile apps share the same contract and business rules.',
      'Moved the front end to Vercel\'s edge network, serving pages and cached API responses close to students.',
      'Separated read-heavy paths — timetables, results, content — from writes, and cached them at the edge.',
      'Added load testing to the release pipeline so every deploy is verified against peak traffic.',
    ],
    outcome:
      'The next peak brought a 300% traffic surge with zero downtime, and typical responses now return in around 120 ms.',
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
