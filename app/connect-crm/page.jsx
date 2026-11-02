import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import FaqList from '@/components/ui/FaqList';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm as p, crmHub } from '@/lib/crm';
import { plans } from '@/lib/content';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: `${p.metaTitle} | ${siteConfig.name}` },
  description: p.metaDescription,
  ogTitle: 'Connect CRM',
  ogSub: 'Approval to renewal on one record',
  path: p.path,
});

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export default function ConnectCrmPage() {
  const start = plans.find((x) => x.tier === 'Start');
  // No price or rating in schema on purpose: offers/aggregateRating only once a pricing page and real reviews are visible.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteConfig.url}${p.path}#software`,
    name: p.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'CRM',
    operatingSystem: 'Web',
    description: p.metaDescription,
    url: `${siteConfig.url}${p.path}`,
    publisher: orgRef,
  };

  return (
    <InnerPage trail={[{ name: 'Connect CRM', path: p.path }]} current="/#platform">
      <JsonLd data={[schema, faqLd(p.faq)]} />

      <PageHero eyebrow={p.eyebrow} title={p.title} accent={p.accent} lead={p.lead}>
        <BookingButton tone="dark" source="connect-crm:hero">
          Book a free demo
        </BookingButton>
        <PillButton href="/#inside">Try the interactive demo</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="max-w-[820px]">
          <h2 className={h2}>
            Every connection, <span className="font-serif font-normal italic">one pipeline</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-[1.6] text-pretty text-muted">
            Each customer link moves through six stages. Your team sees exactly where every order is, and finance sees what is billing.
          </p>
        </Reveal>
        <ol className="m-0 mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {p.stages.map((s, i) => (
            <Reveal key={s.title} as="li" delay={(i % 3) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-7">
              <span className="font-mono text-[11px] text-[#8B8595]">{s.n.padStart(2, '0')}</span>
              <h3 className="mt-3 text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="px-3 pt-16 sm:px-4 sm:pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
          <Reveal>
            <h2 className={h2}>
              What&rsquo;s <span className="font-serif font-normal italic">inside</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {p.modules.map((m, i) => (
              <Reveal key={m.title} as="article" delay={(i % 3) * 0.06} className="border-t border-white/15 pt-6">
                <h3 className="text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{m.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            Works with the rest of <span className="font-serif font-normal italic">your network stack</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-[1.6] text-muted">
            Connect CRM shares one record with DIV&rsquo;s other telecom and support products.
          </p>
        </Reveal>
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          {p.works.map((w) => (
            <li key={w.name} className="rounded-[18px] border border-line bg-white p-6">
              <span className="text-[16px] font-medium tracking-[-0.02em]">{w.name}</span>
              <p className="mt-2 text-[14px] leading-[1.55] text-muted">{w.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {start ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <Reveal className="grid grid-cols-1 gap-8 rounded-[22px] bg-[#F3F0E9] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">Pricing</span>
              <p className="mt-4 text-[clamp(32px,4vw,52px)] leading-none font-medium tracking-[-0.04em]">
                {start.from} <span className="text-[15px] font-normal tracking-normal text-muted">{start.fromUnit}</span>
              </p>
              <p className="mt-3 text-[15px] text-muted">{start.then}</p>
            </div>
            <ul className="m-0 flex list-none flex-col gap-2.5 self-end p-0">
              {start.items.map((it) => (
                <li key={it} className="flex gap-3 text-[14.5px] leading-[1.5]">
                  <span aria-hidden="true">—</span>
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1320px] px-5 pt-12 sm:px-10">
        <p className="max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
          Need a CRM for a different kind of business? See our{' '}
          <Link href={crmHub.path} className="text-ink underline underline-offset-4">custom CRM development services in Delhi NCR</Link>.
        </p>
      </section>

      <FaqList items={p.faq} title="Connect CRM" accent="questions" />
      <CtaBand source="connect-crm" title="See Connect CRM on your data." accent="Book a 30-minute walkthrough." />
    </InnerPage>
  );
}
