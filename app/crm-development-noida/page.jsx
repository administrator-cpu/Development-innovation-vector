import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { crmHub, crmNoida as c, connectCrm } from '@/lib/crm';
import { siteConfig, fullAddress } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: `${c.metaTitle} | ${siteConfig.name}` },
  description: c.metaDescription,
  ogTitle: 'Custom CRM development in Noida',
  ogSub: 'C6/28, Sector 31, Noida',
  path: c.path,
});

export default function CrmNoidaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}${c.path}#service`,
    name: c.metaTitle,
    serviceType: 'Custom CRM software development',
    url: `${siteConfig.url}${c.path}`,
    provider: orgRef,
    areaServed: { '@type': 'City', name: 'Noida' },
  };

  return (
    <InnerPage
      trail={[
        { name: 'CRM development', path: crmHub.path },
        { name: 'Noida', path: c.path },
      ]}
      current="/services"
    >
      <JsonLd data={schema} />
      <PageHero eyebrow="CRM development · Noida" title={c.title} accent={c.accent} lead={c.lead}>
        <BookingButton tone="dark" source="crm-noida:hero">
          Get a free consultation
        </BookingButton>
        <PillButton href={crmHub.path}>All CRM services</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {c.points.map((p, i) => (
            <Reveal key={p.title} as="article" delay={i * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <h2 className="font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{p.title}</h2>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
        <Reveal className="grid grid-cols-1 gap-6 rounded-[22px] bg-[#F3F0E9] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <address className="flex flex-col gap-2 not-italic">
            <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">Our Noida office</span>
            <span className="text-[clamp(20px,2vw,26px)] leading-[1.25] font-medium tracking-[-0.02em]">{fullAddress()}</span>
            <a href={`tel:${siteConfig.phoneHref}`} className="text-[15px] text-ink underline-offset-4 hover:underline">{siteConfig.phone}</a>
            <span className="text-[14px] text-muted">{siteConfig.hours.label}</span>
          </address>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[14.5px] font-medium underline underline-offset-4">
            Open in Google Maps ↗
          </a>
        </Reveal>
        <p className="mt-8 max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
          Run an ISP or network business? Start with <Link href={connectCrm.path} className="text-ink underline underline-offset-4">Connect CRM</Link>.
          Everything else we build is on our <Link href={crmHub.path} className="text-ink underline underline-offset-4">custom CRM development</Link> page.
        </p>
      </section>

      <CtaBand source="crm-noida" title="Come and see us in Sector 31." accent="Or book a call from your desk." />
    </InnerPage>
  );
}
