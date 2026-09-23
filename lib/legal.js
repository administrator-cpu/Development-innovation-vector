import { siteConfig, fullAddress } from './siteConfig';

// Draft for Indian law — must be reviewed by counsel before relying on it.
export const sla = {
  draft: true,
  version: '1.0',
  effective: '1 October 2026',
  sections: [
    {
      id: 'scope',
      title: 'Scope',
      body: [
        `This Service Level Agreement ("SLA") forms part of the master services agreement between ${siteConfig.legalName} ("DIV", "we") and the customer ("you"). It applies to production systems that DIV hosts and operates for you under an active managed-services plan — in DIV's own data centre or on cloud platforms (such as Vercel, Render or MongoDB Atlas) that DIV manages on your behalf.`,
        'It does not apply to staging, development or trial environments, or to systems you host and operate yourself.',
      ],
    },
    {
      id: 'uptime',
      title: 'Uptime commitment',
      body: [
        'DIV commits to 99.9% monthly availability for each covered production service.',
        { table: { head: ['Measure', 'Commitment'], rows: [['Monthly availability', '99.9%'], ['Allowed downtime (30-day month)', '≈ 43 minutes'], ['Measurement window', 'Calendar month, IST']] } },
      ],
    },
    {
      id: 'measurement',
      title: 'How downtime is measured',
      body: [
        'Availability = (Total minutes in the month − Downtime minutes) ÷ Total minutes in the month × 100.',
        'Downtime is any period of more than 5 consecutive minutes during which the service is totally unavailable — it returns no successful response to external health checks run by DIV\'s monitoring from at least two locations. Degraded performance, partial feature failure and single-user issues are handled under the response-time commitments below and do not count as Downtime.',
        'DIV\'s monitoring records are the system of record. You may request the monthly availability report for any covered service at any time.',
      ],
    },
    {
      id: 'response',
      title: 'Support response times',
      body: [
        'Severity is assigned when the incident is raised and may be adjusted by agreement as facts emerge.',
        {
          table: {
            head: ['Severity', 'Definition', 'First response', 'Coverage'],
            rows: [
              ['Sev 1 — Critical', 'Production down or unusable; no workaround', 'Under 1 hour', '24/7'],
              ['Sev 2 — High', 'Major function impaired; workaround exists', 'Under 4 hours', '24/7'],
              ['Sev 3 — Normal', 'Minor issue, question or change request', 'Under 24 hours', 'Business days'],
            ],
          },
        },
        `"First response" means a DIV engineer has acknowledged the incident and begun work — not an automated reply. Raise Sev 1 incidents by phone or WhatsApp on ${siteConfig.phone}; Sev 2 and Sev 3 by phone, WhatsApp or ${siteConfig.email}.`,
      ],
    },
    {
      id: 'credits',
      title: 'Service credits',
      body: [
        'If monthly availability for a covered service falls below 99.9%, you are entitled to a credit against that service\'s monthly fee:',
        { table: { head: ['Monthly availability', 'Credit'], rows: [['99.0% – 99.89%', '10% of monthly fee'], ['95.0% – 98.99%', '25% of monthly fee'], ['Below 95.0%', '50% of monthly fee']] } },
        'Credits are applied to the next invoice and are not paid as cash. Total credits in any month will not exceed 50% of the monthly fee for the affected service. Request a credit in writing within 30 days of the end of the affected month.',
        'Service credits are your sole and exclusive remedy for failure to meet the uptime commitment, except where the master services agreement says otherwise.',
      ],
    },
    {
      id: 'exclusions',
      title: 'Exclusions',
      body: [
        'Downtime caused by the following is excluded from availability calculations and does not qualify for credits:',
        {
          list: [
            'Scheduled maintenance, notified at least 48 hours in advance.',
            'Outages of upstream cloud or network providers outside DIV\'s reasonable control (for example, a regional outage at a hosting platform or telecom carrier).',
            'Defects in code, configuration or content supplied or changed by you or your contractors.',
            'Distributed denial-of-service (DDoS) attacks and other malicious traffic.',
            'Force majeure events, including natural disasters, government action, power-grid failure and civil unrest.',
            'Suspension of service for non-payment or breach of the terms of service.',
          ],
        },
      ],
    },
    {
      id: 'responsibilities',
      title: 'Your responsibilities',
      body: [
        {
          list: [
            'Keep a named technical contact reachable for Sev 1 incidents.',
            'Report incidents through the channels above with enough detail to reproduce them.',
            'Give DIV reasonable notice before changes that may affect load or integrations.',
          ],
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: [`${siteConfig.legalName}, ${fullAddress()}. Phone and WhatsApp ${siteConfig.phone} (24/7). Email ${siteConfig.email}.`],
    },
  ],
};

export const privacy = {
  draft: true,
  version: '1.0',
  effective: '1 October 2026',
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: [
        `${siteConfig.legalName} ("DIV", "we") is a company registered in India with its office at ${fullAddress()}. For personal data collected through ${siteConfig.url.replace('https://', '')} and in the course of selling our services, DIV is the Data Fiduciary under the Digital Personal Data Protection Act, 2023 ("DPDP Act").`,
        'Where we process personal data inside systems we build or host for a customer, that customer is the Data Fiduciary and DIV acts as its Data Processor under a separate agreement. This policy does not cover that processing.',
      ],
    },
    {
      id: 'data-we-collect',
      title: 'Personal data we collect',
      body: [
        {
          list: [
            'Contact details you give us — name, work email, phone number, company and message — when you book a call, submit an enquiry or message us on WhatsApp.',
            'Booking details — the date and time you pick for a call.',
            'Usage data — pages viewed, device, browser, approximate location and referral source, collected through Google Analytics and Vercel Analytics.',
            'Communications — emails, call notes and WhatsApp messages exchanged with us.',
          ],
        },
        'We do not knowingly collect personal data from children under 18, and we do not collect sensitive personal data such as financial or health information through this website.',
      ],
    },
    {
      id: 'purposes',
      title: 'Why we use it',
      body: [
        {
          list: [
            'To respond to your enquiry, schedule and hold the call you booked, and send confirmations.',
            'To prepare proposals and contracts if you ask us to.',
            'To understand how the site is used and improve it.',
            'To meet legal, tax and regulatory obligations.',
          ],
        },
        'We process your data on the basis of the consent you give when you submit a form or message us, and for legitimate uses permitted under Section 7 of the DPDP Act. We do not sell personal data and do not use it for third-party advertising.',
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      body: [
        'We share personal data only with processors that help us run the business, under contracts that require them to protect it:',
        {
          list: [
            'Resend — transactional email delivery for booking and enquiry confirmations.',
            'Google (Analytics) and Vercel (hosting, analytics) — website hosting and usage measurement.',
            'Meta (WhatsApp) — if you choose to contact us on WhatsApp.',
          ],
        },
        'Some of these providers process data outside India. We transfer data only to countries not restricted by the Central Government under Section 16 of the DPDP Act. We may also disclose data where required by law or a lawful request from a government authority.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      body: [
        'Enquiry and booking data is kept for up to 24 months after our last contact with you, unless you become a customer, in which case it is kept for the life of the contract plus the period required by Indian tax and company law. Analytics data is kept in aggregate form for up to 26 months.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      body: [
        'Under the DPDP Act you have the right to:',
        {
          list: [
            'Access a summary of the personal data we hold about you and how it is processed.',
            'Correct, complete, update or erase your personal data.',
            'Withdraw consent at any time — this does not affect processing already carried out.',
            'Nominate another person to exercise your rights in the event of death or incapacity.',
            'Have grievances redressed, and escalate to the Data Protection Board of India if you are not satisfied with our response.',
          ],
        },
        `To exercise any of these rights, email ${siteConfig.email} with the subject "Data request". We respond within 30 days.`,
      ],
    },
    {
      id: 'security',
      title: 'Security',
      body: [
        'We use reasonable security safeguards as required by the DPDP Act and the Information Technology Act, 2000 — encryption in transit, access controls, least-privilege access for staff and logged administrative access. If a personal data breach occurs, we will notify affected users and the Data Protection Board as the law requires.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      body: [
        'We use essential cookies to run the site and analytics cookies from Google Analytics to measure usage. You can block or delete cookies in your browser settings; the site will still work.',
      ],
    },
    {
      id: 'grievance',
      title: 'Grievance officer',
      body: [
        `Grievance Officer: Harsh Jha, Founder. ${siteConfig.legalName}, ${fullAddress()}. Email ${siteConfig.email}. Phone ${siteConfig.phone}. We acknowledge grievances within 48 hours and resolve them within 30 days.`,
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: ['We will post any changes on this page with a new effective date. Material changes will be highlighted on the site for 30 days.'],
    },
  ],
};

export const terms = {
  draft: true,
  version: '1.0',
  effective: '1 October 2026',
  sections: [
    {
      id: 'agreement',
      title: 'Agreement',
      body: [
        `These terms govern your use of ${siteConfig.url.replace('https://', '')} (the "Site") operated by ${siteConfig.legalName} ("DIV"). By using the Site you agree to them. Services DIV delivers to customers — software development, hosting and support — are governed by a separate signed master services agreement, statement of work and the Service Level Agreement, which take precedence over these terms.`,
      ],
    },
    {
      id: 'use-of-site',
      title: 'Using the site',
      body: [
        'You may use the Site to learn about DIV and to contact us. You agree not to:',
        {
          list: [
            'Submit false information or book calls on behalf of others without their consent.',
            'Attempt to gain unauthorised access to the Site, its servers or connected systems.',
            'Use automated tools to scrape, overload or disrupt the Site.',
            'Use the Site for any unlawful purpose under Indian law.',
          ],
        },
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual property',
      body: [
        'All content on the Site — text, design, graphics, logos and product names such as Connect CRM, Bharat Radius and Samadhan — is owned by or licensed to DIV and protected by Indian and international intellectual property law. You may not copy or reuse it without written permission.',
        'Ownership of software built for a customer is set out in that customer\'s agreement, not in these terms.',
      ],
    },
    {
      id: 'information',
      title: 'Information on the site',
      body: [
        'Content on the Site, including case-study results and service descriptions, is provided for general information. It is not an offer or a binding commitment. Prices, scope, timelines and service levels are binding only when set out in a signed agreement.',
      ],
    },
    {
      id: 'third-parties',
      title: 'Third-party links and services',
      body: [
        'The Site links to third-party services such as WhatsApp and Google Maps. DIV is not responsible for their content or privacy practices; your use of them is governed by their own terms.',
      ],
    },
    {
      id: 'liability',
      title: 'Limitation of liability',
      body: [
        'The Site is provided "as is". To the fullest extent permitted by law, DIV is not liable for any indirect, incidental or consequential loss arising from your use of the Site. Nothing in these terms limits liability that cannot be limited under Indian law.',
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      body: ['Our handling of personal data is described in the Privacy Policy, which forms part of these terms.'],
    },
    {
      id: 'law',
      title: 'Governing law and jurisdiction',
      body: [
        'These terms are governed by the laws of India. Courts at Gautam Buddh Nagar (Noida), Uttar Pradesh have exclusive jurisdiction over any dispute arising from them.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes',
      body: ['We may update these terms by posting a new version on this page. Continued use of the Site after changes means you accept them.'],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: [`${siteConfig.legalName}, ${fullAddress()}. ${siteConfig.email} · ${siteConfig.phone}.`],
    },
  ],
};
