import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import JsonLd from '@/components/seo/JsonLd';
import CompareTable from '@/components/isp/CompareTable';
import { connectCrm, ispProducts, ispProductsPath as base, getIspProduct } from '@/lib/crm';
import { plans } from '@/lib/content';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, orgRef, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return ispProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getIspProduct(slug);
  if (!p) return {};
  return pageMetadata({
    title: { absolute: `${p.metaTitle} | ${siteConfig.name}` },
    description: p.metaDescription,
    ogTitle: p.name,
    ogSub: p.line,
    path: `${base}/${p.slug}`,
  });
}

const H2 = ({ id, children }) => (
  <h2 id={id} className="scroll-mt-8 text-[clamp(26px,3.2vw,44px)] leading-[1.06] font-medium tracking-[-0.04em] text-balance">
    {children}
  </h2>
);

export default async function IspProductPage({ params }) {
  const { slug } = await params;
  const p = getIspProduct(slug);
  if (!p) notFound();
  const others = ispProducts.filter((x) => x.slug !== p.slug);
  const url = `${siteConfig.url}${base}/${p.slug}`;
  const platform = p.pricingBands ? plans.find((x) => x.tier === 'Platform') : null;

  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: p.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: p.metaDescription,
    url,
    ...(p.url ? { sameAs: p.url } : {}),
    ...(p.features ? { featureList: p.features.map((f) => f.title) } : {}),
    areaServed: { '@type': 'Country', name: 'India' },
    publisher: orgRef,
    provider: orgRef,
  };

  return (
    <InnerPage
      trail={[
        { name: 'Software for ISPs', path: base },
        { name: p.name, path: `${base}/${p.slug}` },
      ]}
      current="/#platform"
    >
      <JsonLd data={p.faqs ? [app, faqLd(p.faqs)] : app} />
      <PageHero eyebrow={p.name} title={p.title} accent={p.accent} lead={p.lead}>
        <BookingButton tone="dark" source={`isp-product:${p.slug}`}>
          Book a free demo
        </BookingButton>
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-6 text-[14.5px] font-medium transition-colors hover:border-ink"
          >
            {p.urlLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {p.points.map((pt, n) => (
            <Reveal key={pt.title} as="article" delay={n * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <h2 className="font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{pt.title}</h2>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{pt.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {p.why ? (
        <section aria-labelledby="why" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="why">Why ISPs move to {p.name}</H2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {p.why.map((w) => (
              <div key={w.title}>
                <h3 className="text-[clamp(18px,1.6vw,22px)] leading-[1.2] font-medium tracking-[-0.025em]">{w.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {p.features ? (
        <section aria-labelledby="features" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="features">What {p.name} does</H2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {p.features.map((f, n) => (
              <Reveal key={f.id} as="article" delay={(n % 2) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
                <h3 id={f.id} className="text-[clamp(18px,1.6vw,22px)] leading-[1.2] font-medium tracking-[-0.025em]">{f.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{f.body}</p>
                <ul className="mt-4 flex list-disc flex-col gap-1.5 pl-5 text-[14px] leading-[1.55]">
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {p.integrations ? (
        <section aria-labelledby="integrations" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="integrations">Works with your network and payments</H2>
          <dl className="mt-8 grid grid-cols-1 gap-x-10 border-t border-line sm:grid-cols-2">
            {p.integrations.map((i) => (
              <div key={i.name} className="border-b border-line py-5">
                <dt className="text-[16px] font-medium tracking-[-0.02em]">{i.name}</dt>
                <dd className="m-0 mt-1 text-[14.5px] leading-[1.6] text-muted">{i.note}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
            Need to configure customer routers remotely as well? DIV’s{' '}
            <Link href={`${base}/tr-069`} className="text-ink underline underline-offset-4 hover:text-rose">
              TR-069 product
            </Link>{' '}
            is a separate product for that job.
          </p>
        </section>
      ) : null}

      {p.compare ? (
        <section aria-labelledby="compare" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="compare">{p.name} vs daloRADIUS vs Excel</H2>
          <p className="mt-4 max-w-[70ch] text-[15.5px] leading-[1.65] text-muted">
            {p.name} is not a replacement for FreeRADIUS; it runs on it. The difference is everything around the RADIUS server:
            billing, resellers, compliance and who keeps it running.
          </p>
          <CompareTable compare={p.compare} />
          <p className="mt-5 text-[14.5px]">
            <Link href={p.comparePath} className="text-ink underline underline-offset-4 hover:text-rose">
              Read the full daloRADIUS comparison →
            </Link>
          </p>
        </section>
      ) : null}

      {p.setup ? (
        <section aria-labelledby="setup" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="setup">How you get started</H2>
          <ol className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {p.setup.map((s, n) => (
              <li key={s.title} className="rounded-[18px] border border-line bg-white p-6">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">Step {n + 1}</span>
                <h3 className="mt-3 text-[17px] font-medium tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {p.pricingBands ? (
        <section aria-labelledby="pricing" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <H2 id="pricing">Pricing</H2>
          <p className="mt-4 max-w-[70ch] text-[15.5px] leading-[1.65] text-muted">
            {p.name} is priced by the number of subscribers you run on it. Hosting in India, updates and support are included in
            the price, and GST is charged on top. You get a written quote after a 30-minute demo.
          </p>
          <ul className="m-0 mt-6 flex list-none flex-wrap gap-2 p-0">
            {p.pricingBands.map((b) => (
              <li key={b} className="rounded-full border border-line bg-white px-4 py-2 text-[14px]">
                {b} subscribers
              </li>
            ))}
          </ul>
          {platform ? (
            <p className="mt-6 max-w-[70ch] text-[15.5px] leading-[1.65] text-muted">
              Want CRM, billing, support tickets and the network on one record? DIV’s {platform.tier} engagement includes{' '}
              {p.name} and TR-069 alongside the CRM, from {platform.from} {platform.fromUnit}.
            </p>
          ) : null}
        </section>
      ) : null}

      {p.faqs ? <FaqList items={p.faqs} title="Questions" accent="ISPs ask" /> : null}

      {p.reading ? (
        <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
          <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-medium tracking-[-0.03em]">Further reading</h2>
          <ul className="m-0 mt-5 flex list-none flex-col gap-2 p-0 text-[15px]">
            {p.reading.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-ink underline underline-offset-4 hover:text-rose">
                  {r.label}
                </Link>
              </li>
            ))}
            {p.url ? (
              <li>
                <a href={p.url} target="_blank" rel="noopener" className="text-ink underline underline-offset-4 hover:text-rose">
                  {p.name} ISP billing software: product site
                </a>
              </li>
            ) : null}
          </ul>
          {p.checked ? (
            <p className="mt-6 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">Facts checked {p.checked}</p>
          ) : null}
        </section>
      ) : null}

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
        <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-medium tracking-[-0.03em]">More software for ISPs</h2>
        <ul className="m-0 mt-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          <li>
            <Link href={connectCrm.path} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
              <span className="text-[16px] font-medium tracking-[-0.02em]">Connect CRM</span>
              <span className="text-[13.5px] leading-[1.5] text-muted">Every connection from approval to billing, on one record.</span>
            </Link>
          </li>
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`${base}/${o.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{o.name}</span>
                <span className="text-[13.5px] leading-[1.5] text-muted">{o.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand source={`isp-product:${p.slug}`} title={`See ${p.name} working.`} accent="Book a 30-minute demo." />
    </InnerPage>
  );
}
