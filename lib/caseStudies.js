// Case studies. Most clients are anonymised by industry; a client is named only with their
// written permission (`client`, `liveUrl`). Results as reported by the engagement.
export const caseStudies = [
  {
    slug: 'samridhi',
    metaTitle: 'Samridhi.si Case Study: Pre-Launch CSR Website for FAB5',
    title: 'Samridhi.si',
    client: 'FAB5',
    clientLegalName: 'Fab Five Network Private Limited',
    liveUrl: 'https://samridhi.si',
    industry: 'CSR · Non-profit',
    headline: "A pre-launch website for FAB5's CSR programme",
    summary:
      'FAB5, a Noida broadband company, needed a website for its new CSR programme before a single class had run. We designed and built samridhi.si: honest pre-launch content, one sign-up form for four audiences, and DPDP-ready consent.',
    metrics: [
      { value: '99', label: 'Desktop Lighthouse performance' },
      { value: '100', label: 'Lighthouse accessibility and SEO' },
      { value: '0', label: 'Layout shift on any screen size' },
    ],
    stack: ['Next.js', 'MongoDB Atlas', 'Resend', 'Tailwind CSS'],
    services: ['api-backend-development', 'database-integration'],
    problem:
      'Samridhi had five programmes planned (Beti, Senior, Gaon, Shakti and Rozgar) but no classes, photos, numbers or stories yet. The site had to explain the programmes to people new to the internet, sign up learners, volunteers and partners before launch, and claim nothing the programme could not yet prove.',
    solution: [
      'Designed the homepage around FAB5\'s brand: the headline "Samridhi tabhi sachchi hai, jab woh sabki ho" beside a photo cut into a Wi-Fi signal shape.',
      'Built one sign-up form for learners, volunteers, partners and village leaders, chosen with one tap. It still works on slow phones with JavaScript switched off.',
      'Replaced the usual impact counter with an "Our promise" section that commits to publishing dated, sourced results once programmes start.',
      'Added a consent tick and a privacy notice written for India\'s DPDP Act, 2023, and saved every sign-up to MongoDB Atlas before any email is sent.',
      'Protected the sign-up API with rate limiting, a honeypot field and origin checks, and shipped it search-ready: structured data, sitemap, share images and accessible markup.',
    ],
    outcome:
      'Samridhi can sign people up from launch day without a single invented claim. On the production build, Lighthouse scores 99 for desktop performance and 100 for accessibility, best practices and SEO, with zero layout shift.',
    gallery: [
      { src: '/images/work/samridhi/desktop-hero.webp', alt: 'Samridhi.si homepage: a photo inside a Wi-Fi signal shape beside five programme cards', width: 1440, height: 900 },
      { src: '/images/work/samridhi/signup.webp', alt: 'Sign-up form with one-tap choices for learners, volunteers, partners and villages', width: 1440, height: 900 },
      { src: '/images/work/samridhi/promise.webp', alt: '"Our promise" panel with three commitments about publishing results', width: 1440, height: 900 },
      { src: '/images/work/samridhi/mobile-hero.webp', alt: 'The Samridhi.si homepage on a phone', width: 780, height: 1688 },
    ],
    // Lighthouse 12, production build, 17 November 2026. Re-run on samridhi.si after launch.
    measured: 'Lighthouse 12 on the production build, 17 November 2026.',
  },
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
