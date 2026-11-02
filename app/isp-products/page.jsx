import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm, ispProducts, ispProductsPath as path } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: `Software for ISPs in India: CRM, RADIUS, TR-069 | ${siteConfig.name}` },
  description: 'DIV’s software for ISPs in India: Connect CRM, Samadhan for complaints, Bharat Radius for subscriber authentication and TR-069 for remote router configuration.',
  ogTitle: 'Software for ISPs',
  ogSub: 'Connect CRM · Samadhan · Bharat Radius · TR-069',
  path,
});

export default function IspProductsPage() {
  const all = [{ slug: null, name: connectCrm.name, line: 'Every connection from approval to billing, on one record.', href: connectCrm.path }, ...ispProducts.map((p) => ({ ...p, href: `${path}/${p.slug}` }))];
  return (
    <InnerPage trail={[{ name: 'Software for ISPs', path }]} current="/#platform">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'DIV software for ISPs',
          url: `${siteConfig.url}${path}`,
          hasPart: all.map((p) => ({ '@type': 'WebPage', name: p.name, url: `${siteConfig.url}${p.href}` })),
        }}
      />
      <PageHero
        eyebrow="Software for ISPs"
        title="Software for ISPs,"
        accent="from one team."
        lead="Four DIV products for internet service providers. Each is built, hosted and supported by DIV in India."
      >
        <BookingButton tone="dark" source="isp-products:hero">
          Book a free demo
        </BookingButton>
      </PageHero>
      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4">
          {all.map((p, n) => (
            <Reveal key={p.href} as="li" delay={(n % 2) * 0.06}>
              <Link href={p.href} className="flex h-full flex-col gap-3 rounded-[20px] border border-line bg-white p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
                <h2 className="text-[clamp(22px,2.2vw,28px)] leading-[1.1] font-medium tracking-[-0.03em]">{p.name}</h2>
                <p className="flex-1 text-[14.5px] leading-[1.6] text-muted">{p.line}</p>
                <span className="text-[14px] font-medium">Learn more →</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
      <CtaBand source="isp-products" title="Tell us how your network runs." accent="We'll show you what fits." />
    </InnerPage>
  );
}
