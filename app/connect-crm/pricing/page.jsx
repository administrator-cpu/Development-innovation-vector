import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import FaqList from '@/components/ui/FaqList';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm, crmPricing as p, crmFeatures } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: `${p.metaTitle} | ${siteConfig.name}` },
  description: p.metaDescription,
  ogTitle: 'Connect CRM pricing',
  ogSub: 'From ₹9,999 development · ₹2,499 / month',
  path: p.path,
});

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export default function ConnectCrmPricingPage() {
  return (
    <InnerPage
      trail={[
        { name: 'Connect CRM', path: connectCrm.path },
        { name: 'Pricing', path: p.path },
      ]}
      current="/#platform"
    >
      <JsonLd data={faqLd(p.faq)} />
      <PageHero
        eyebrow={`Connect CRM · Prices checked ${p.checked}`}
        title="Connect CRM pricing"
        accent="in rupees, up front."
        lead="Connect CRM is a custom service, so every setup is quoted. These are the figures the quote is built from, before GST."
      >
        <BookingButton tone="dark" source="connect-crm-pricing:hero">
          Book a free demo
        </BookingButton>
      </PageHero>

      <section aria-label="Prices" className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
          {p.lines.map((l, i) => (
            <Reveal key={l.label} as="article" delay={i * 0.06} className="flex flex-col rounded-[20px] border border-line bg-white p-6 sm:p-8">
              <h2 className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{l.label}</h2>
              <p className="mt-5 flex flex-wrap items-baseline gap-2">
                <span className="text-[clamp(30px,3.4vw,44px)] leading-none font-medium tracking-[-0.04em]">{l.value}</span>
                <span className="text-[14px] text-muted">{l.unit} + GST</span>
              </p>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-muted">{l.body}</p>
            </Reveal>
          ))}
        </div>
        <ul className="m-0 mt-6 flex list-none flex-col gap-2 p-0">
          {p.notes.map((n) => (
            <li key={n} className="flex gap-3 text-[14.5px] leading-[1.55] text-[#3A3745]">
              <span aria-hidden="true">—</span>
              {n}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className={h2}>
            What the <span className="font-serif font-normal italic">price covers</span>
          </h2>
        </Reveal>
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          {crmFeatures.map((f) => (
            <li key={f.slug}>
              <Link href={`${connectCrm.path}/${f.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{f.name}</span>
                <span className="text-[13.5px] leading-[1.5] text-muted">{f.title} {f.accent}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <PillButton href={connectCrm.path} tone="dark">See everything in Connect CRM</PillButton>
        </div>
      </section>

      <FaqList items={p.faq} title="Pricing" accent="questions" />
      <p className="mx-auto max-w-[1120px] px-5 pt-6 text-[13.5px] text-muted sm:px-10">
        Full terms: <Link href="/refund-policy" className="text-ink underline underline-offset-4">refund and cancellation policy</Link>.
      </p>
      <CtaBand source="connect-crm-pricing" title="Get your exact figure." accent="Book a 30-minute demo." />
    </InnerPage>
  );
}
