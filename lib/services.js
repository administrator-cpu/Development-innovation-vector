// Service landing pages. Each is served at /<slug> (see app/[service]/page.jsx).
// Commitments quoted here must stay consistent with /sla.

export const services = [
  {
    slug: 'cloud-native-deployments',
    name: 'Cloud Native Deployments',
    short: 'Cloud native deployments',
    metaTitle: 'Cloud Native Deployment Services in India',
    metaDescription:
      'Managed cloud native deployments on Vercel and Render: zero-downtime releases, preview environments, 24/7 monitoring and a 99.9% uptime SLA. Noida, India.',
    eyebrow: 'Cloud native deployments',
    title: 'Ship every day.',
    accent: 'Sleep every night.',
    lead:
      'We set up, run and watch your deployments on Vercel and Render — containerised builds, preview environments for every change, releases that never take the site down, and an engineer on call when something moves.',
    problem: {
      heading: 'Where deployments',
      accent: 'usually break',
      intro:
        'Most teams do not have a hosting problem. They have a release problem: nobody is sure what is running, how it got there, or how to undo it at 11pm.',
      points: [
        {
          title: 'Releases are an event',
          body: 'Deploys happen from one laptop, on a Friday, with a message in the group chat. When the person who knows the steps is away, nothing ships.',
        },
        {
          title: 'Environments drift',
          body: 'Staging stopped matching production months ago. Environment variables live in three places, and a fix that works locally fails in the cloud.',
        },
        {
          title: 'Bills without owners',
          body: 'Instances nobody remembers creating, preview builds that never sleep, bandwidth nobody budgeted. The invoice grows faster than the traffic.',
        },
        {
          title: 'Outages you hear about from customers',
          body: 'There is no alert, no status history, no runbook — so the first sign of downtime is a phone call from a client.',
        },
      ],
    },
    approach: {
      heading: 'How we run',
      accent: 'your cloud',
      intro:
        'We treat deployment as a product with its own owner — us. Every service gets the same pipeline, the same observability and the same on-call engineer, whether it runs on Vercel, Render or our own data centre in India.',
      principles: [
        {
          title: 'Right platform per workload',
          body: 'Next.js and front-end apps go to Vercel for its edge network and preview deployments. Long-running APIs, workers, cron jobs and Docker services go to Render. Systems with data-residency requirements stay in our Indian data centre. You get one bill of materials, not three vendors to manage.',
        },
        {
          title: 'Everything as code',
          body: 'Build settings, environment groups, regions, scaling rules and DNS live in the repository. Any environment can be recreated from a commit, and every change is reviewed before it reaches production.',
        },
        {
          title: 'Previews for every change',
          body: 'Each pull request gets its own live URL with production-like data. Product owners approve what they can click, not a screenshot in a ticket.',
        },
        {
          title: 'Zero-downtime by default',
          body: 'Health-checked rolling releases, instant rollback to the last good build, and database migrations written to run alongside the old version — so a release is never a maintenance window.',
        },
        {
          title: 'Watched, not just hosted',
          body: 'Uptime checks from multiple locations, error tracking and log retention are configured on day one and routed to our on-call rota. Most incidents reach us before they reach you.',
        },
        {
          title: 'Costs with a named owner',
          body: 'We right-size instances, set spend alerts and review usage monthly with you. Idle previews sleep; resources are tagged to the team that uses them.',
        },
      ],
    },
    stack: [
      { label: 'Platforms', items: ['Vercel', 'Render', 'DIV data centre (India)'] },
      { label: 'Build & release', items: ['GitHub Actions', 'Docker', 'Preview environments', 'Blue-green & rolling releases'] },
      { label: 'Edge & network', items: ['Vercel Edge Network', 'Cloudflare DNS', 'Managed TLS', 'Custom domains'] },
      { label: 'Observability', items: ['Uptime monitoring', 'Structured logs', 'Error tracking', 'Monthly availability reports'] },
    ],
    process: [
      { title: 'Audit', body: 'We map what runs where today, who deploys it, what it costs and where it has failed before.', time: 'Week 1' },
      { title: 'Pipeline', body: 'Repositories, build settings, environments and secrets are moved into code with CI checks on every change.', time: 'Weeks 1–2' },
      { title: 'Migrate', body: 'Services move one at a time behind the existing domains, with a rollback path at every step. No big-bang cutover.', time: 'Weeks 2–4' },
      { title: 'Operate', body: 'Monitoring, alerting and on-call go live. You get a monthly report on uptime, releases and spend.', time: 'Ongoing' },
    ],
    commitments: [
      { value: '99.9%', label: 'Monthly uptime, backed by service credits' },
      { value: '< 1 h', label: 'Sev 1 response, 24/7' },
      { value: 'Every PR', label: 'Gets its own preview environment' },
    ],
    faq: [
      {
        q: 'Why Vercel and Render rather than AWS directly?',
        a: 'For most web products they remove weeks of undifferentiated infrastructure work: managed TLS, previews, autoscaling and global edge delivery come built in. When a workload outgrows them or needs Indian data residency, we move it to our own data centre or to AWS — the pipeline stays the same.',
      },
      {
        q: 'Can you take over deployments another team set up?',
        a: 'Yes. We start with an audit of what exists, document it, and fix the riskiest gaps first. Nothing is rebuilt unless it needs to be.',
      },
      {
        q: 'Who owns the cloud accounts?',
        a: 'You do. Accounts are created in your company\'s name with DIV added as an operator, so you keep full ownership and billing visibility if you ever move on.',
      },
      {
        q: 'Where is our data hosted?',
        a: 'You choose. Vercel serves front-ends from its global edge with a Mumbai region available for functions; Render runs services in regions such as Singapore; systems that must stay in India run in our own data centre. We document the location of every component.',
      },
      {
        q: 'What does the 99.9% uptime cover?',
        a: 'Production services we host and operate under a managed plan. Measurement, response times, credits and exclusions are set out in full on our SLA page.',
      },
    ],
    related: ['api-backend-development', 'microservices-architecture'],
    caseStudy: 'edtech-platform',
  },

  {
    slug: 'api-backend-development',
    name: 'API-Driven Backend Development',
    short: 'API-driven backends',
    metaTitle: 'API Backend Development Company in India',
    metaDescription:
      'API-first backend development: contract-first REST and GraphQL, Node.js services, auth and docs — delivered in stages by DIV engineers in Noida, India.',
    eyebrow: 'API-driven backend development',
    title: 'One backend.',
    accent: 'Every front end.',
    lead:
      'We design the API contract first, then build the backend behind it — so your web app, mobile apps, partners and internal tools all talk to the same system, and new ones plug in without a rewrite.',
    problem: {
      heading: 'Why backends',
      accent: 'slow teams down',
      intro:
        'When the backend grew around one screen at a time, every new channel means new code paths, duplicated rules and a longer release cycle.',
      points: [
        {
          title: 'Logic lives in the UI',
          body: 'Pricing, permissions and validation are copied between the web app and the mobile app — and they no longer agree.',
        },
        {
          title: 'No contract, no parallel work',
          body: 'Front-end teams wait for the backend to be finished before they can start, because nobody wrote down what the API will return.',
        },
        {
          title: 'Integrations are one-offs',
          body: 'Each partner, payment gateway or ERP gets its own custom endpoint and its own failure mode. Nobody knows which ones are still in use.',
        },
        {
          title: 'Undocumented and untested',
          body: 'The only documentation is the code. Changes break clients silently, so the team stops changing anything.',
        },
      ],
    },
    approach: {
      heading: 'How we build',
      accent: 'API-first',
      intro:
        'Our philosophy is simple: the API is the product. Business rules live in one place, behind a versioned contract that every client — yours or a partner\'s — can rely on.',
      principles: [
        {
          title: 'Contract before code',
          body: 'We write the OpenAPI or GraphQL schema with you in the first week. Front-end and mobile teams build against a mock server from day one, so work runs in parallel instead of in sequence.',
        },
        {
          title: 'Business rules in one place',
          body: 'Pricing, permissions, workflows and validation live in the backend, not in each screen. Every client gets the same answer to the same question.',
        },
        {
          title: 'Secure by default',
          body: 'Token-based authentication, role- and tenant-level authorisation, rate limiting, input validation and audit logs are part of the first release — not a phase two.',
        },
        {
          title: 'Versioned and backward compatible',
          body: 'Breaking changes go into a new version with a deprecation window. Old mobile app builds keep working while users update.',
        },
        {
          title: 'Documented as it ships',
          body: 'Reference docs are generated from the contract and published with every release, with examples your partners can copy and run.',
        },
        {
          title: 'Fast in stages',
          body: 'We ship the first production endpoints within weeks, then add resources in small releases. You use the backend while it grows, instead of waiting for a finished one.',
        },
      ],
    },
    stack: [
      { label: 'Languages & runtimes', items: ['Node.js', 'TypeScript', 'Express / Fastify', 'Next.js route handlers'] },
      { label: 'API styles', items: ['REST (OpenAPI 3)', 'GraphQL', 'Webhooks', 'Server-sent events'] },
      { label: 'Data', items: ['MongoDB Atlas', 'Appwrite', 'PostgreSQL', 'Redis'] },
      { label: 'Security & quality', items: ['JWT / OAuth 2.0', 'Role-based access', 'Contract tests', 'Rate limiting'] },
    ],
    process: [
      { title: 'Model', body: 'We work through your entities, workflows and edge cases with the people who run them today.', time: 'Week 1' },
      { title: 'Contract', body: 'An API schema and mock server are published so every client team can start building immediately.', time: 'Week 1–2' },
      { title: 'Build in slices', body: 'Endpoints ship to production in vertical slices — data, rules, tests and docs together — every one to two weeks.', time: 'Weeks 2–8' },
      { title: 'Run and extend', body: 'We host, monitor and version the API, and add new resources as new channels and partners come on.', time: 'Ongoing' },
    ],
    commitments: [
      { value: 'Week 1', label: 'API contract and mock server published' },
      { value: '1–2 wk', label: 'Release cadence for new endpoints' },
      { value: '99.9%', label: 'Uptime SLA once we host it' },
    ],
    faq: [
      {
        q: 'REST or GraphQL?',
        a: 'REST for most business systems and partner integrations — it is simpler to cache, secure and document. GraphQL when many different clients need different shapes of the same data. We will recommend one in the modelling week and explain why.',
      },
      {
        q: 'Can you build an API on top of our existing system?',
        a: 'Yes. We often put a clean, documented API in front of a legacy database or application first, then replace what is behind it gradually without clients noticing.',
      },
      {
        q: 'How quickly will we see something working?',
        a: 'The contract and a mock server in the first week or two; the first production endpoints usually within a few weeks, depending on how much existing data needs migrating.',
      },
      {
        q: 'Do we get the source code?',
        a: 'Custom code written for you is yours under the agreement, in a repository in your organisation. Our platform products are licensed separately.',
      },
      {
        q: 'Who maintains it after launch?',
        a: 'We do, under a managed plan — hosting, monitoring, security updates and new versions — with the SLA response times. Your team can contribute alongside us if you prefer.',
      },
    ],
    related: ['microservices-architecture', 'database-integration'],
    caseStudy: 'edtech-platform',
  },

  {
    slug: 'microservices-architecture',
    name: 'Microservices Architecture',
    short: 'Microservices architecture',
    metaTitle: 'Microservices Architecture Services in India',
    metaDescription:
      'Break a monolith into microservices without a risky rewrite: domain-driven boundaries, strangler-fig migration, events and observability. DIV, Noida.',
    eyebrow: 'Microservices architecture',
    title: 'Break the monolith.',
    accent: 'Not the business.',
    lead:
      'For CTOs whose single codebase has become the bottleneck: we split it into services along real business boundaries, one piece at a time, while the existing system keeps serving customers.',
    problem: {
      heading: 'Signs the monolith',
      accent: 'is in the way',
      intro:
        'A monolith is not a mistake — it is usually how successful products start. It becomes a problem when its size starts setting the pace of the business.',
      points: [
        {
          title: 'Every release is all or nothing',
          body: 'A small change to invoicing needs a full regression test and a deploy of the whole application — so releases get bigger and rarer.',
        },
        {
          title: 'One hot path scales everything',
          body: 'Search or reporting load forces you to scale the entire application, and a slow query in one module takes down the rest.',
        },
        {
          title: 'Teams step on each other',
          body: 'Everyone works in the same codebase and the same database schema. Merge conflicts and coordination meetings replace shipping.',
        },
        {
          title: 'The rewrite that never finishes',
          body: 'A previous attempt to rebuild from scratch stalled halfway, and now there are two systems to maintain.',
        },
      ],
    },
    approach: {
      heading: 'How we split',
      accent: 'without a rewrite',
      intro:
        'We do not recommend microservices by default. We recommend the smallest number of services that removes your actual bottleneck — and we get there incrementally, with the old system live throughout.',
      principles: [
        {
          title: 'Boundaries from the business',
          body: 'We run domain-mapping sessions with the people who use the system to find natural seams — billing, identity, inventory, notifications — so each service owns one capability and its own data.',
        },
        {
          title: 'Strangler-fig migration',
          body: 'A routing layer sits in front of the monolith. One capability at a time is rebuilt as a service and traffic is shifted to it gradually, with instant fallback. There is never a big-bang cutover.',
        },
        {
          title: 'Events over tight coupling',
          body: 'Services communicate through well-defined APIs and asynchronous events, so a slow or failing service degrades one feature instead of the whole product.',
        },
        {
          title: 'Data ownership, carefully',
          body: 'Splitting the database is the hardest part. We move data per service with change-data capture and dual writes where needed, and verify consistency before retiring the old tables.',
        },
        {
          title: 'Observability first',
          body: 'Distributed tracing, correlated logs and per-service dashboards go in before the first service goes live. When something is slow, you can see which hop is responsible.',
        },
        {
          title: 'Know when to stop',
          body: 'A well-structured modular monolith is sometimes the right end state. We will tell you when the remaining pieces are cheaper to leave where they are.',
        },
      ],
    },
    stack: [
      { label: 'Services', items: ['Node.js / TypeScript', 'Docker', 'REST & gRPC', 'API gateway'] },
      { label: 'Messaging', items: ['Event bus / queues', 'Webhooks', 'Outbox pattern', 'Idempotent consumers'] },
      { label: 'Data', items: ['MongoDB Atlas', 'PostgreSQL', 'Redis', 'Change-data capture'] },
      { label: 'Operations', items: ['Render / DIV data centre', 'Distributed tracing', 'Per-service dashboards', 'Automated rollbacks'] },
    ],
    process: [
      { title: 'Assess', body: 'Code, data model, traffic and team structure are reviewed to find where the monolith actually hurts.', time: 'Weeks 1–2' },
      { title: 'Map the domain', body: 'Service boundaries and a migration order are agreed, starting with the capability that returns the most for the least risk.', time: 'Week 2–3' },
      { title: 'Extract, one by one', body: 'Each service is built, run in parallel with the old code, then given live traffic behind the routing layer.', time: 'Per service, 3–6 weeks' },
      { title: 'Retire and operate', body: 'Old code paths and tables are removed once verified; services are monitored and supported under the SLA.', time: 'Ongoing' },
    ],
    commitments: [
      { value: '0', label: 'Big-bang cutovers — every step is reversible' },
      { value: '1 at a time', label: 'Services extracted and verified independently' },
      { value: '< 1 h', label: 'Sev 1 response, 24/7, once in production' },
    ],
    faq: [
      {
        q: 'Do we actually need microservices?',
        a: 'Not always. If the main problem is code organisation rather than scaling or team independence, a modular monolith is cheaper to run. The assessment gives you a written recommendation either way.',
      },
      {
        q: 'Will customers notice the migration?',
        a: 'They should not. Traffic moves gradually to each new service behind the same URLs, with automatic fallback to the old path if error rates rise.',
      },
      {
        q: 'How do you handle the shared database?',
        a: 'Carefully, and last. Each service first reads through an API, then takes ownership of its tables with change-data capture keeping both sides in sync until the switch is verified.',
      },
      {
        q: 'Won\'t more services mean higher hosting costs?',
        a: 'It can. We size each service independently and only split out what benefits from it, so heavy components scale on their own while the rest stays small.',
      },
      {
        q: 'Can our in-house team take it over?',
        a: 'Yes. We pair with your engineers during extraction and hand over runbooks, dashboards and architecture decision records for every service.',
      },
    ],
    related: ['api-backend-development', 'cloud-native-deployments'],
    caseStudy: 'logistics-crm',
  },

  {
    slug: 'database-integration',
    name: 'Database & Integration',
    short: 'Database & integration',
    metaTitle: 'MongoDB Atlas & Appwrite Database Integration',
    metaDescription:
      'MongoDB Atlas and Appwrite development: schema design, migration, indexing, auth, real-time sync, backups and ERP/CRM integrations. DIV, Noida, India.',
    eyebrow: 'Database & integration',
    title: 'Your data,',
    accent: 'in one place, in sync.',
    lead:
      'We design, migrate and connect the databases your business runs on — MongoDB Atlas for scale and flexibility, Appwrite for auth, storage and real-time — and wire them into the tools your teams already use.',
    problem: {
      heading: 'When data',
      accent: 'becomes the bottleneck',
      intro:
        'Most operational pain traces back to data that lives in too many places, updated by hand, with nobody sure which copy is right.',
      points: [
        {
          title: 'Spreadsheets as the system of record',
          body: 'Critical numbers live in shared sheets. Two people edit the same row, formulas break, and the monthly close takes days.',
        },
        {
          title: 'Systems that do not talk',
          body: 'CRM, billing, accounting and support each hold part of the customer. Staff re-key the same data between them — and make mistakes doing it.',
        },
        {
          title: 'Slow queries, slower dashboards',
          body: 'The database grew without a model or indexes. Reports time out and the app slows down every month-end.',
        },
        {
          title: 'Backups nobody has tested',
          body: 'There is a backup job — somewhere. Nobody has ever restored from it, and nobody knows how much data would be lost.',
        },
      ],
    },
    approach: {
      heading: 'How we model',
      accent: 'and connect it',
      intro:
        'We start from the questions your business needs answered, model the data to answer them fast, then connect every system that reads or writes it — with one source of truth.',
      principles: [
        {
          title: 'MongoDB Atlas, modelled for your access patterns',
          body: 'Document schemas are designed around how the data is read, not how it looked in a spreadsheet. Indexes, schema validation, aggregation pipelines and Atlas Search are configured from the start, with dedicated clusters and regions chosen for your latency and residency needs.',
        },
        {
          title: 'Appwrite for auth, storage and real-time',
          body: 'Where a product needs user accounts, file storage, permissions and live updates, Appwrite gives us a secure, self-hostable backend in days instead of weeks — and we can run it in our Indian data centre.',
        },
        {
          title: 'Migrations you can verify',
          body: 'Data is cleaned, de-duplicated and migrated in rehearsed runs. Row counts and totals are reconciled against the source before anyone switches over.',
        },
        {
          title: 'Integrations with retries, not hope',
          body: 'Connectors to ERPs, accounting, payment gateways, WhatsApp and legacy systems use queues, idempotent writes and alerting — so a failed sync is retried and reported, never silently dropped.',
        },
        {
          title: 'Real-time where it matters',
          body: 'Change streams and real-time subscriptions push updates to dashboards and apps the moment data changes, replacing nightly exports.',
        },
        {
          title: 'Backups you have restored',
          body: 'Point-in-time recovery, encrypted backups and a tested restore drill on a schedule. You know your recovery point and recovery time — in writing.',
        },
      ],
    },
    stack: [
      { label: 'Databases', items: ['MongoDB Atlas', 'Appwrite', 'PostgreSQL', 'Redis'] },
      { label: 'MongoDB features', items: ['Aggregation pipelines', 'Atlas Search', 'Change streams', 'Schema validation'] },
      { label: 'Appwrite features', items: ['Auth & teams', 'Storage', 'Realtime', 'Functions'] },
      { label: 'Integration', items: ['REST & webhooks', 'Queues & retries', 'Google Sheets / Excel', 'ERP & accounting connectors'] },
    ],
    process: [
      { title: 'Discover', body: 'We inventory every place your data lives today and the questions each team needs it to answer.', time: 'Week 1' },
      { title: 'Model', body: 'Schemas, indexes, access rules and integration flows are designed and reviewed with you.', time: 'Week 1–2' },
      { title: 'Migrate & connect', body: 'Rehearsed migrations with reconciliation, then connectors switched on one system at a time.', time: 'Weeks 2–6' },
      { title: 'Operate', body: 'Monitoring, backups, restore drills and performance reviews run under the managed plan.', time: 'Ongoing' },
    ],
    commitments: [
      { value: '100%', label: 'Of migrated records reconciled before cutover' },
      { value: 'Tested', label: 'Restore drills, on a schedule' },
      { value: '99.9%', label: 'Uptime SLA on databases we operate' },
    ],
    faq: [
      {
        q: 'MongoDB Atlas or Appwrite — which do we need?',
        a: 'Often both. Atlas is the operational database for business data at scale; Appwrite adds authentication, file storage, permissions and real-time on top. For simpler apps, Appwrite\'s own database is enough.',
      },
      {
        q: 'Can you migrate us off spreadsheets without stopping work?',
        a: 'Yes. We run the new system alongside the sheets, sync in both directions during the transition, and switch teams over one at a time.',
      },
      {
        q: 'Can our data stay in India?',
        a: 'Yes. MongoDB Atlas offers Mumbai and other Indian regions, and Appwrite can be self-hosted in our data centre in India.',
      },
      {
        q: 'Which systems can you integrate with?',
        a: 'Anything with an API, a database connection or a file export — common ones include Tally, Zoho, Salesforce, Razorpay, WhatsApp Business and Google Workspace. Where there is no API, we build a safe, monitored bridge.',
      },
      {
        q: 'What happens if an integration fails?',
        a: 'Failed messages are queued and retried automatically, and an alert goes to our on-call engineer if they keep failing. Nothing is silently dropped.',
      },
    ],
    related: ['api-backend-development', 'cloud-native-deployments'],
    caseStudy: 'logistics-crm',
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
