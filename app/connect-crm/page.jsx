import Image from 'next/image';
import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import FaqList from '@/components/ui/FaqList';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm as p, crmHub, crmPricing, crmFeatures, ispProducts, ispProductsPath, crmLandings } from '@/lib/crm';
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
  // No offers/aggregateRating: pricing is a custom quote and there are no public reviews yet.
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
        <PillButton href={crmPricing.path}>See pricing</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="animate-rise overflow-hidden rounded-[20px] border border-line bg-white [animation-delay:0.2s]">
          <Image src={p.screenshot.src} alt={p.screenshot.alt} width={p.screenshot.width} height={p.screenshot.height} priority sizes="(max-width: 1320px) 100vw, 1320px" className="block h-auto w-full" />
        </div>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
          <span>Connect CRM with sample data</span>
          <Link href="/#inside" className="text-ink underline underline-offset-4">Try the interactive demo →</Link>
        </p>
      </section>

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

      {p.resellers ? (
        <section aria-labelledby="resellers" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <Reveal className="max-w-[820px]">
            <h2 id="resellers" className={h2}>
              {p.resellers.title} <span className="font-serif font-normal italic">{p.resellers.accent}</span>
            </h2>
            <p className="mt-4 max-w-[62ch] text-[15.5px] leading-[1.6] text-pretty text-muted">{p.resellers.lead}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {p.resellers.items.map((it, i) => (
              <Reveal key={it.title} as="article" delay={(i % 3) * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-7">
                <h3 className="text-[17px] leading-[1.3] font-medium tracking-[-0.02em]">{it.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{it.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 rounded-[18px] bg-[#F3F0E9] p-6 sm:p-7">
            <h3 className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">What Connect CRM does not do</h3>
            <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-[14.5px] leading-[1.6]">
              {p.resellers.limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="mt-4 text-[14.5px]">
              <Link href="/compare/zoho-crm-vs-connect-crm" className="text-ink underline underline-offset-4 hover:text-rose">
                Comparing with Zoho CRM? Read our honest comparison →
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            Features in <span className="font-serif font-normal italic">detail</span>
          </h2>
        </Reveal>
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          {crmFeatures.map((ft) => (
            <li key={ft.slug}>
              <Link href={`${p.path}/${ft.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{ft.name}</span>
                <span className="text-[13.5px] leading-[1.5] text-muted">{ft.title} {ft.accent}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            Also from DIV <span className="font-serif font-normal italic">for ISPs</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-[1.6] text-muted">
            Separate products, built, hosted and supported by the same team.
          </p>
        </Reveal>
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          {ispProducts.map((w) => (
            <li key={w.slug}>
              <Link href={`${ispProductsPath}/${w.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{w.name}</span>
                <span className="text-[14px] leading-[1.55] text-muted">{w.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 rounded-[22px] bg-[#F3F0E9] p-6 sm:p-10 lg:grid-cols-3">
          {crmPricing.lines.map((l) => (
            <div key={l.label} className="min-w-0">
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">{l.label}</span>
              <p className="mt-3 text-[clamp(26px,3vw,38px)] leading-none font-medium tracking-[-0.04em]">{l.value}</p>
              <p className="mt-2 text-[14px] text-muted">{l.unit} + GST</p>
            </div>
          ))}
          <div className="lg:col-span-3">
            <PillButton href={crmPricing.path} tone="dark">Full Connect CRM pricing</PillButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-12 sm:px-10">
        <p className="max-w-[70ch] text-[14.5px] leading-[1.6] text-muted">
          Not an ISP? We build Connect CRM for{' '}
          <Link href={crmLandings.serviceBusiness.path} className="text-ink underline underline-offset-4">service businesses</Link> and{' '}
          <Link href={crmLandings.productCompany.path} className="text-ink underline underline-offset-4">product companies</Link> too. See all our{' '}
          <Link href={crmHub.path} className="text-ink underline underline-offset-4">custom CRM development services in Delhi NCR</Link>.
        </p>
      </section>

      <FaqList items={p.faq} title="Connect CRM" accent="questions" />
      <CtaBand source="connect-crm" title="See Connect CRM on your data." accent="Book a 30-minute walkthrough." />
    </InnerPage>
  );
}
