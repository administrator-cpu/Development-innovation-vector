import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import { caseStudies } from '@/lib/caseStudies';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Software Development Case Studies & Results',
  description:
    'Real DIV results: real-time fintech sync at 99.99% uptime, a logistics CRM with 75% faster invoicing, and zero downtime through a 300% edtech traffic surge.',
  ogSub: 'The problem, the stack, and what changed.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <InnerPage trail={[{ name: 'Work', path: '/work' }]} current="/work">
      <PageHero
        eyebrow="Case studies"
        title="The problem, the stack,"
        accent="and what changed."
        lead="Anonymised by industry at our clients' request. Every number below is measured on the running system."
      />
      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="flex flex-col gap-4">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={0.04 * i}>
              <Link
                href={`/work/${c.slug}`}
                className="group grid grid-cols-1 gap-8 rounded-[22px] border border-line bg-white p-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_40px_70px_-50px_rgba(0,0,0,0.42)] sm:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
                    {c.industry} · {c.stack.join(' · ')}
                  </p>
                  <h2 className="mt-4 text-[clamp(26px,3vw,42px)] leading-[1.06] font-medium tracking-[-0.04em] text-balance">
                    {c.title}
                    <span className="block font-serif text-[0.72em] font-normal italic">{c.headline}</span>
                  </h2>
                  <p className="mt-4 max-w-[54ch] text-[14.5px] leading-[1.6] text-muted">{c.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink">
                    Read the case study <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <dl className="grid grid-cols-1 content-center gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col rounded-2xl bg-paper px-5 py-4">
                      <dt className="order-2 mt-1 text-[13px] text-muted">{m.label}</dt>
                      <dd className="order-1 m-0 text-[30px] leading-none font-medium tracking-[-0.04em]">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand source="work" title="Have a system like these?" accent="Tell us what it runs on." />
    </InnerPage>
  );
}
