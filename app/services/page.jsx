import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import JsonLd from '@/components/seo/JsonLd';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Software Development Services in Noida, India',
  description:
    'Cloud native deployments, API-driven backends, microservices and MongoDB & Appwrite database integration — built, hosted and monitored by DIV engineers in Noida.',
  ogSub: 'Cloud · APIs · Microservices · Databases',
  path: '/services',
});

const list = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `${siteConfig.url}/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <InnerPage trail={[{ name: 'Services', path: '/services' }]} current="/services">
      <JsonLd data={list} />
      <PageHero
        eyebrow="Services"
        title="Engineering that"
        accent="stays after launch."
        lead="Four ways we work with engineering and operations teams — each delivered in stages, hosted and monitored by the engineers who built it."
      />
      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/${s.slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-line bg-white p-7 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-50px_rgba(0,0,0,0.42)] sm:p-9"
              >
                <span className="font-mono text-[11px] text-[#8B8595]">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-4 text-[clamp(24px,2.6vw,34px)] leading-[1.08] font-medium tracking-[-0.035em]">{s.name}</h2>
                <p className="mt-1 font-serif text-[clamp(18px,1.7vw,22px)] italic">
                  {s.title} {s.accent}
                </p>
                <p className="mt-4 max-w-[50ch] flex-1 text-[14.5px] leading-[1.6] text-muted">{s.lead}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink">
                  Explore <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand source="services" />
    </InnerPage>
  );
}
