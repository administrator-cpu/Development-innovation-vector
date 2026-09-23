import { siteConfig } from '@/lib/siteConfig';
import { products, faq } from '@/lib/content';

const ld = (data) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
);

/**
 * Organization + WebSite — rendered on EVERY page from the root layout so the
 * `#organization` / `#website` @ids that other schemas reference always resolve.
 */
export function SiteSchema() {
  const organization = {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}${siteConfig.logo}` },
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    foundingDate: String(siteConfig.foundingYear),
    founder: { '@type': 'Person', name: 'Ayush Pathak' },
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingLocation: { '@type': 'Place', name: 'India' },
    sameAs: siteConfig.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        telephone: siteConfig.phone,
        areaServed: 'IN',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: 'en-IN',
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };

  return ld({ '@context': 'https://schema.org', '@graph': [organization, website] });
}

/** Home page only: Service + WebPage + FAQPage. */
export default function StructuredData() {
  const service = {
    '@type': 'Service',
    '@id': `${siteConfig.url}/#managed-software-development`,
    name: 'Managed Software Development Services India',
    serviceType: 'Managed custom software development, hosting and support',
    description:
      'End-to-end managed software development: discovery, engineering-led scoping, staged delivery, migration, hosting in our own Indian data centre, and 24/7 monitoring with a named engineer.',
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'APAC' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Enterprise and mid-market businesses' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteConfig.url}/contact`,
      servicePhone: siteConfig.phone,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'DIV platform and managed services',
      itemListElement: products.map((product) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: product.name, description: product.line },
      })),
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: 'Managed Software Development Company in India | DIV',
    description: siteConfig.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${siteConfig.url}${siteConfig.ogImage}` },
  };

  return ld({ '@context': 'https://schema.org', '@graph': [service, webPage, faqPage] });
}
