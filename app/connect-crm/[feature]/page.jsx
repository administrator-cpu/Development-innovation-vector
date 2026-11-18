import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import FaqList from '@/components/ui/FaqList';
import Reveal from '@/components/motion/Reveal';
import BookingButton from '@/components/booking/BookingButton';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { connectCrm, crmFeatures, crmPricing, getCrmFeature } from '@/lib/crm';
import { siteConfig } from '@/lib/siteConfig';
import { faqLd, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return crmFeatures.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({ params }) {
  const { feature } = await params;
  const f = getCrmFeature(feature);
  if (!f) return {};
  return pageMetadata({
    title: { absolute: `${f.metaTitle} | ${siteConfig.name}` },
    description: f.metaDescription,
    ogTitle: `Connect CRM · ${f.name}`,
    ogSub: `${f.title} ${f.accent}`,
    path: `${connectCrm.path}/${f.slug}`,
  });
}

const h2 = 'text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance';

export default async function ConnectCrmFeaturePage({ params }) {
  const { feature } = await params;
  const f = getCrmFeature(feature);
  if (!f) notFound();
  const related = f.related.map(getCrmFeature).filter(Boolean);
  const shot = connectCrm.screenshot;

  return (
    <InnerPage
      trail={[
        { name: 'Connect CRM', path: connectCrm.path },
        { name: f.name, path: `${connectCrm.path}/${f.slug}` },
      ]}
      current="/#platform"
    >
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: f.metaTitle,
            url: `${siteConfig.url}${connectCrm.path}/${f.slug}`,
            about: { '@id': `${siteConfig.url}${connectCrm.path}#software` },
          },
          ...(f.faq ? [faqLd(f.faq)] : []),
        ]}
      />
      <PageHero eyebrow={`Connect CRM · ${f.name}`} title={f.title} accent={f.accent} lead={f.lead}>
        <BookingButton tone="dark" source={`connect-crm-feature:${f.slug}`}>
          Book a free demo
        </BookingButton>
        <PillButton href={crmPricing.path}>See pricing</PillButton>
      </PageHero>

      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <Reveal className="overflow-hidden rounded-[20px] border border-line bg-white">
          <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 1320px) 100vw, 1320px" className="block h-auto w-full" />
        </Reveal>
        <p className="mt-3 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">Connect CRM with sample data</p>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className={h2}>
            The problem <span className="font-serif font-normal italic">it solves</span>
          </h2>
          <p className="max-w-[56ch] self-end text-[15.5px] leading-[1.6] text-pretty text-muted">{f.problem}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {f.points.map((pt, i) => (
            <Reveal key={pt.title} as="article" delay={i * 0.06} className="rounded-[18px] border border-line bg-white p-6 sm:p-8">
              <h3 className="font-serif text-[clamp(20px,1.9vw,26px)] leading-[1.15] font-normal italic">{pt.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">{pt.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {f.automations ? (
        <section aria-labelledby="automated" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
          <h2 id="automated" className={h2}>
            What runs <span className="font-serif font-normal italic">automatically today</span>
          </h2>
          <div className="mt-8 overflow-x-auto rounded-[18px] border border-line bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-[14.5px]">
              <caption className="sr-only">Connect CRM automations: trigger, action, who is told and when it runs</caption>
              <thead>
                <tr className="border-b border-line font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
                  <th scope="col" className="px-5 py-3 font-normal">Automation</th>
                  <th scope="col" className="px-5 py-3 font-normal">When it fires</th>
                  <th scope="col" className="px-5 py-3 font-normal">What it does</th>
                  <th scope="col" className="px-5 py-3 font-normal">Who</th>
                  <th scope="col" className="px-5 py-3 font-normal">Schedule</th>
                </tr>
              </thead>
              <tbody>
                {f.automations.map((a) => (
                  <tr key={a.name} className="border-b border-line align-top last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium">{a.name}</th>
                    <td className="px-5 py-4 text-muted">{a.trigger}</td>
                    <td className="px-5 py-4 text-muted">{a.action}</td>
                    <td className="px-5 py-4 text-muted">{a.who}</td>
                    <td className="px-5 py-4 text-muted">{a.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {f.notYet ? <p className="mt-5 max-w-[75ch] text-[14.5px] leading-[1.65] text-muted">{f.notYet}</p> : null}
        </section>
      ) : null}

      <section className="px-3 pt-16 sm:px-4 sm:pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
          <Reveal className="max-w-[760px]">
            <h2 className={h2}>
              How it <span className="font-serif font-normal italic">looks in practice</span>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-pretty text-white/85">{f.example}</p>
          </Reveal>
        </div>
      </section>

      {f.faq ? <FaqList items={f.faq} title="Questions" accent="about reminders" /> : null}

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <h2 className="text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-medium tracking-[-0.03em]">More in Connect CRM</h2>
        <ul className="m-0 mt-6 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`${connectCrm.path}/${r.slug}`} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
                <span className="text-[16px] font-medium tracking-[-0.02em]">{r.name}</span>
                <span className="text-[13.5px] leading-[1.5] text-muted">{r.title} {r.accent}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link href={connectCrm.path} className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
              <span className="text-[16px] font-medium tracking-[-0.02em]">Connect CRM overview</span>
              <span className="text-[13.5px] leading-[1.5] text-muted">The full connection pipeline for ISPs.</span>
            </Link>
          </li>
        </ul>
      </section>

      <CtaBand source={`connect-crm-feature:${f.slug}`} title={`See ${f.name.toLowerCase()} on your data.`} accent="Book a 30-minute demo." />
    </InnerPage>
  );
}
