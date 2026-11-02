import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { crmHub } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export const landingMetadata = (d) =>
  pageMetadata({
    title: { absolute: `${d.metaTitle} | ${siteConfig.name}` },
    description: d.metaDescription,
    ogTitle: `${d.title} ${d.accent}`,
    ogSub: d.eyebrow,
    path: d.path,
  });

/** Shared layout for CRM service, audience and city pages (data in lib/crm.js `crmLandings`). */
export default function CrmLandingPage({ d }) {
  const parent = d.parent ?? { name: 'CRM development', path: crmHub.path };
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}${d.path}#service`,
    name: d.metaTitle,
    serviceType: d.keyword,
    description: d.metaDescription,
    url: `${siteConfig.url}${d.path}`,
    provider: orgRef,
    areaServed: d.city ? { '@type': 'City', name: d.city } : { '@type': 'Country', name: 'India' },
  };

  return (
    <InnerPage
      trail={[
        parent,
        { name: d.crumb, path: d.path },
      ]}
      current="/services"
    >
      <JsonLd data={schema} />
      <PageHero eyebrow={d.eyebrow} title={d.title} accent={d.accent} lead={d.lead}>
        <BookingButton tone="dark" source={`${d.source}:hero`}>
          Get a free consultation
        </BookingButton>
        {d.links?.[0] ? <PillButton href={d.links[0].href}>{d.links[0].label}</PillButton> : null}
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {d.points.map((p, i) => (
            <Reveal key={p.title} as="article" delay={(i % 3) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <h2 className="font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{p.title}</h2>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {d.city ? null : (
        <section className="px-3 pt-16 sm:px-4 sm:pt-28">
          <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
            <Reveal>
              <h2 className={h2}>
                How we <span className="font-serif font-normal italic">work</span>
              </h2>
            </Reveal>
            <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-x-10 gap-y-10 p-0 md:grid-cols-2 lg:grid-cols-3">
              {crmHub.process.map((p, i) => (
                <Reveal key={p.step} as="li" delay={(i % 3) * 0.06} className="border-t border-white/15 pt-6">
                  <span className="font-mono text-[11px] text-white/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{p.step}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {d.price ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
          <Reveal className="grid grid-cols-1 gap-6 rounded-[22px] bg-[#F3F0E9] p-6 sm:grid-cols-2 sm:p-10">
            {d.price.map((l) => (
              <div key={l.label} className="min-w-0">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">{l.label}</span>
                <p className="mt-3 text-[clamp(26px,3vw,38px)] leading-none font-medium tracking-[-0.04em]">{l.value}</p>
                <p className="mt-2 text-[14px] text-muted">{l.unit}</p>
              </div>
            ))}
          </Reveal>
        </section>
      ) : null}

      {d.links?.length ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
          <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-medium tracking-[-0.03em]">Related</h2>
          <ul className="m-0 mt-6 flex list-none flex-wrap gap-2.5 p-0">
            {d.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 text-[14px] transition-colors hover:border-ink">
                  {l.label} <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <CtaBand source={d.source} />
    </InnerPage>
  );
}
