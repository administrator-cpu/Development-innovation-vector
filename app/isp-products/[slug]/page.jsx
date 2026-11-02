import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm, ispProducts, ispProductsPath as base, getIspProduct } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

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

export default async function IspProductPage({ params }) {
  const { slug } = await params;
  const p = getIspProduct(slug);
  if (!p) notFound();
  const others = ispProducts.filter((x) => x.slug !== p.slug);

  return (
    <InnerPage
      trail={[
        { name: 'Software for ISPs', path: base },
        { name: p.name, path: `${base}/${p.slug}` },
      ]}
      current="/#platform"
    >
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: p.name,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: p.metaDescription,
          url: `${siteConfig.url}${base}/${p.slug}`,
          ...(p.url ? { sameAs: p.url } : {}),
          publisher: orgRef,
        }}
      />
      <PageHero eyebrow={p.name} title={p.title} accent={p.accent} lead={p.lead}>
        <BookingButton tone="dark" source={`isp-product:${p.slug}`}>
          Book a free demo
        </BookingButton>
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
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
