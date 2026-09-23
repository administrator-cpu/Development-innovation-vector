import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import FaqList from '@/components/ui/FaqList';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { faqLd, orgRef } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';
import { getService } from '@/lib/services';
import { getCaseStudy } from '@/lib/caseStudies';

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export default function ServicePage({ service: s }) {
  const study = s.caseStudy ? getCaseStudy(s.caseStudy) : null;
  const related = s.related.map(getService).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: `${siteConfig.url}/${s.slug}`,
    provider: orgRef,
    areaServed: { '@type': 'Country', name: 'India' },
    audience: { '@type': 'BusinessAudience', audienceType: 'CTOs, engineering and operations leaders' },
  };

  return (
    <InnerPage
      trail={[
        { name: 'Services', path: '/services' },
        { name: s.name, path: `/${s.slug}` },
      ]}
      current="/services"
    >
      <JsonLd data={[schema, faqLd(s.faq)]} />

      <PageHero eyebrow={s.eyebrow} title={s.title} accent={s.accent} lead={s.lead}>
        <BookingButton tone="dark" source={`service:${s.slug}`}>
          Book a call
        </BookingButton>
        <PillButton href="#approach">See how we work</PillButton>
      </PageHero>

      {/* Commitments — every figure is backed by the SLA or our delivery process. */}
      <section aria-label="Commitments" className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {s.commitments.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06} className="flex flex-col rounded-[18px] border border-line bg-white px-6 py-6">
              <dt className="order-2 mt-2 text-[13.5px] leading-[1.45] text-muted">{c.label}</dt>
              <dd className="order-1 m-0 text-[clamp(28px,3vw,40px)] leading-none font-medium tracking-[-0.04em]">{c.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className={h2}>
            {s.problem.heading} <span className="font-serif font-normal italic">{s.problem.accent}</span>
          </h2>
          <p className="max-w-[56ch] self-end text-[15.5px] leading-[1.6] text-pretty text-muted">{s.problem.intro}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {s.problem.points.map((p, i) => (
            <Reveal key={p.title} as="article" delay={(i % 2) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <span className="font-mono text-[11px] text-[#8B8595]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{p.title}</h3>
              <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-8 px-3 pt-16 sm:px-4 sm:pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
          <Reveal className="max-w-[760px]">
            <h2 className={h2}>
              {s.approach.heading} <span className="font-serif font-normal italic">{s.approach.accent}</span>
            </h2>
            <p className="mt-5 max-w-[60ch] text-[15.5px] leading-[1.6] text-pretty text-white/80">{s.approach.intro}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {s.approach.principles.map((p, i) => (
              <Reveal key={p.title} as="article" delay={(i % 3) * 0.06} className="border-t border-white/15 pt-6">
                <h3 className="text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            The <span className="font-serif font-normal italic">stack</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {s.stack.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05} className="rounded-[18px] border border-line bg-white p-6">
              <h3 className="font-mono text-[10.5px] font-normal tracking-[0.14em] text-muted uppercase">{g.label}</h3>
              <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            How an engagement <span className="font-serif font-normal italic">runs</span>
          </h2>
        </Reveal>
        <ol className="m-0 mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {s.process.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 0.06} className="flex flex-col rounded-[18px] border border-line bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-white">{i + 1}</span>
                <span className="font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">{step.time}</span>
              </div>
              <h3 className="mt-5 text-[18px] font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Proof */}
      {study ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <Reveal className="grid grid-cols-1 gap-8 rounded-[22px] border border-line bg-white p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">Case study · {study.industry}</p>
              <h2 className="mt-4 text-[clamp(24px,2.8vw,38px)] leading-[1.1] font-medium tracking-[-0.035em] text-balance">
                {study.headline}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.6] text-muted">{study.summary}</p>
              <Link
                href={`/work/${study.slug}`}
                className="mt-6 inline-flex text-[14px] font-medium text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink"
              >
                Read the {study.title} case study →
              </Link>
            </div>
            <dl className="grid grid-cols-1 content-center gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col rounded-2xl bg-paper px-5 py-4">
                  <dt className="order-2 mt-1 text-[13px] text-muted">{m.label}</dt>
                  <dd className="order-1 m-0 text-[28px] leading-none font-medium tracking-[-0.04em]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>
      ) : null}

      <FaqList items={s.faq} />

      {/* Internal links between services */}
      <section aria-label="Related services" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
        <h2 className="font-mono text-[10.5px] font-normal tracking-[0.14em] text-muted uppercase">Related services</h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/${r.slug}`}
              className="group flex items-center justify-between gap-6 rounded-[18px] border border-line bg-white px-6 py-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-44px_rgba(0,0,0,0.4)]"
            >
              <span>
                <span className="block text-[18px] font-medium tracking-[-0.02em]">{r.name}</span>
                <span className="mt-1 block text-[13.5px] text-muted">
                  {r.title} {r.accent}
                </span>
              </span>
              <span aria-hidden="true" className="text-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ink">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand source={`service:${s.slug}`} />
    </InnerPage>
  );
}
