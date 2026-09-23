import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/motion/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import BookingButton from '@/components/booking/BookingButton';
import WhatsAppButton from '@/components/booking/WhatsAppButton';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig, fullAddress } from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact DIV — Software Development Company, Noida',
  description: `Talk to a DIV engineer about your software project. Call or WhatsApp ${siteConfig.phone} (24/7), email ${siteConfig.email}, or visit us in Sector 31, Noida.`,
  ogSub: `${siteConfig.phone} · ${siteConfig.email}`,
  path: '/contact',
});

// LocalBusiness schema — mirrors the Google Business Profile N.A.P. exactly.
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  hasMap: siteConfig.mapsUrl,
  areaServed: { '@type': 'Country', name: 'India' },
  parentOrganization: { '@id': `${siteConfig.url}/#organization` },
  sameAs: siteConfig.sameAs,
};

const channels = [
  { label: 'Call', value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}`, note: 'Open 24/7 — an engineer answers.' },
  { label: 'WhatsApp', value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}`, note: 'Fastest for quick questions.', external: true },
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, note: 'Reply within one business day.' },
];

export default function ContactPage() {
  return (
    <InnerPage trail={[{ name: 'Contact', path: '/contact' }]} current="/contact">
      <JsonLd data={localBusiness} />
      <PageHero
        eyebrow="Contact"
        title="Talk to the people"
        accent="who'll build it."
        lead="No sales desk. Your message goes to an engineer, who replies with what we'd keep, what we'd build and roughly what it takes."
      >
        <BookingButton tone="dark" source="contact-page">
          Book a call
        </BookingButton>
        <WhatsAppButton />
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-16">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8">
          <Reveal>
            <h2 className="sr-only">Send us a message</h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-5">
            <div className="rounded-[22px] bg-navy p-7 text-white sm:p-9">
              <h2 className="font-mono text-[10.5px] tracking-[0.16em] text-white/70 uppercase">Office</h2>
              <address className="mt-4 text-[clamp(19px,1.8vw,24px)] leading-[1.35] font-medium tracking-[-0.02em] not-italic">
                {siteConfig.legalName}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                <br />
                {siteConfig.address.countryName}
              </address>
              <p className="mt-4 text-[13.5px] text-white/80">{siteConfig.hours.label}</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-medium text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <ul className="m-0 flex list-none flex-col rounded-[22px] border border-line bg-white p-0">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-line last:border-0">
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center justify-between gap-4 px-6 py-5 sm:px-7"
                  >
                    <span className="min-w-0">
                      <span className="block font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">{c.label}</span>
                      <span className="mt-1 block truncate text-[16px] font-medium text-ink">{c.value}</span>
                      <span className="mt-0.5 block text-[12.5px] text-muted">{c.note}</span>
                    </span>
                    <span aria-hidden="true" className="text-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ink">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
