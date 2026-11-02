import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import FaqList from '@/components/ui/FaqList';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { crmHub as c, connectCrm, NCR_AREAS } from '@/lib/crm';
import { getCaseStudy } from '@/lib/caseStudies';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: `${c.metaTitle} | ${siteConfig.name}` },
  description: c.metaDescription,
  ogTitle: 'Custom CRM development in Delhi NCR',
  ogSub: 'Built, hosted and supported from Noida',
  path: c.path,
});

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export default function CrmDevelopmentPage() {
  const study = getCaseStudy('logistics-crm');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}${c.path}#service`,
    name: c.metaTitle,
    serviceType: 'Custom CRM software development',
    description: c.metaDescription,
    url: `${siteConfig.url}${c.path}`,
    provider: orgRef,
    areaServed: NCR_AREAS.map((name) => ({ '@type': 'City', name })),
  };

  return (
    <InnerPage trail={[{ name: 'CRM development', path: c.path }]} current="/services">
      <JsonLd data={[schema, faqLd(c.faq)]} />

      <PageHero eyebrow={c.eyebrow} title={c.title} accent={c.accent} lead={c.lead}>
        <BookingButton tone="dark" source="crm-hub:hero">
          Get a free consultation
        </BookingButton>
        <PillButton href="#process">See how we work</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className={h2}>
            {c.what.heading} <span className="font-serif font-normal italic">{c.what.accent}</span>
          </h2>
          <p className="max-w-[56ch] self-end text-[15.5px] leading-[1.6] text-pretty text-muted">{c.what.intro}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {c.what.points.map((p, i) => (
            <Reveal key={p.title} as="article" delay={(i % 3) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <h3 className="font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{p.title}</h3>
              <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-8 px-3 pt-16 sm:px-4 sm:pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
          <Reveal>
            <h2 className={h2}>
              How a CRM project <span className="font-serif font-normal italic">runs with us</span>
            </h2>
          </Reveal>
          <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-x-10 gap-y-10 p-0 md:grid-cols-2 lg:grid-cols-3">
            {c.process.map((p, i) => (
              <Reveal key={p.step} as="li" delay={(i % 3) * 0.06} className="border-t border-white/15 pt-6">
                <span className="font-mono text-[11px] text-white/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{p.step}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {study ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <Reveal as="article" className="grid grid-cols-1 gap-8 rounded-[22px] border border-line bg-white p-6 sm:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">Case study · {study.industry}</span>
              <h2 className="mt-4 text-[clamp(24px,2.6vw,36px)] leading-[1.1] font-medium tracking-[-0.035em] text-balance">{study.headline}</h2>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.6] text-muted">{study.summary}</p>
              <div className="mt-6">
                <PillButton href={`/work/${study.slug}`} tone="dark">Read the logistics CRM case study</PillButton>
              </div>
            </div>
            <dl className="m-0 grid grid-cols-3 gap-3 self-end">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col rounded-[16px] bg-paper p-4">
                  <dt className="order-2 mt-2 text-[12.5px] leading-[1.4] text-muted">{m.label}</dt>
                  <dd className="order-1 m-0 text-[clamp(22px,2.4vw,32px)] leading-none font-medium tracking-[-0.04em]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 rounded-[22px] bg-[#F3F0E9] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <h2 className={h2}>
              {c.faster.heading} <span className="font-serif font-normal italic">{c.faster.accent}</span>
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15.5px] leading-[1.6] text-pretty text-muted">{c.faster.body}</p>
          </div>
          <PillButton href={connectCrm.path} tone="dark">Explore Connect CRM</PillButton>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            The engineering <span className="font-serif font-normal italic">behind it</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-[1.6] text-muted">
            Every CRM we build uses the same engineering services we sell on their own.
          </p>
        </Reveal>
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{s.name}</span>
                <span className="text-[13.5px] leading-[1.5] text-muted">{s.title} {s.accent}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
          We work with businesses across {NCR_AREAS.slice(0, -1).join(', ')} and {NCR_AREAS.at(-1)}, from our office in Sector 31, Noida.
        </p>
      </section>

      <FaqList items={c.faq} title="CRM questions" accent="buyers ask" />
      <CtaBand source="crm-hub" title="Tell us how you sell today." accent="We'll scope the CRM in one call." />
    </InnerPage>
  );
}
