import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/layout/InnerPage';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import JsonLd from '@/components/seo/JsonLd';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import { getService } from '@/lib/services';
import { siteConfig } from '@/lib/siteConfig';
import { ogImageUrl, orgRef, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle ?? `${c.title} Case Study`,
    description: c.summary,
    path: `/work/${c.slug}`,
    ogTitle: `${c.title}: ${c.headline}`,
    ogSub: `Case study · ${c.industry} · ${c.stack.slice(0, 3).join(', ')}`,
    type: 'article',
  });
}

const label = 'font-mono text-[10.5px] font-normal tracking-[0.14em] text-muted uppercase';

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const others = caseStudies.filter((x) => x.slug !== c.slug);
  const services = c.services.map(getService).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${c.title}: ${c.headline}`,
    description: c.summary,
    url: `${siteConfig.url}/work/${c.slug}`,
    mainEntityOfPage: `${siteConfig.url}/work/${c.slug}`,
    image: `${siteConfig.url}${ogImageUrl(`${c.title}: ${c.headline}`)}`,
    inLanguage: 'en-IN',
    author: orgRef,
    publisher: orgRef,
    about: services.map((s) => ({ '@type': 'Service', name: s.name, url: `${siteConfig.url}/${s.slug}` })),
    keywords: c.stack.join(', '),
  };

  return (
    <InnerPage
      trail={[
        { name: 'Work', path: '/work' },
        { name: c.title, path: `/work/${c.slug}` },
      ]}
      current="/work"
    >
      <JsonLd data={schema} />

      <article>
        <header className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-16">
          <div className="animate-rise">
            <Eyebrow>Case study · {c.industry}</Eyebrow>
            <h1 className="mt-6 max-w-[22ch] text-[clamp(34px,5.4vw,76px)] leading-[1] font-medium tracking-[-0.05em] text-balance">
              {c.title}
              <span className="block font-serif font-normal italic">{c.headline}</span>
            </h1>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {c.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="flex flex-col rounded-[18px] bg-navy px-6 py-6 text-white">
                <dt className="order-2 mt-2 text-[13.5px] text-white/75">{m.label}</dt>
                <dd className="order-1 m-0 text-[clamp(30px,3.4vw,46px)] leading-none font-medium tracking-[-0.04em]">{m.value}</dd>
              </Reveal>
            ))}
          </dl>
        </header>

        <div className="mx-auto max-w-[1320px] px-5 pt-14 sm:px-10 sm:pt-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
            <aside className="flex flex-col gap-8 lg:sticky lg:top-8 lg:self-start">
              <div>
                <h2 className={label}>Stack</h2>
                <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 p-0">
                  {c.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-white px-3 py-1.5 text-[13px]">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={label}>Services</h2>
                <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="text-[14px] text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex max-w-[720px] min-w-0 flex-col gap-12">
              <Reveal as="section">
                <h2 className={label}>Before</h2>
                <p className="mt-4 text-[clamp(18px,1.6vw,22px)] leading-[1.5] tracking-[-0.01em] text-pretty">{c.problem}</p>
              </Reveal>
              <Reveal as="section">
                <h2 className={label}>What we built</h2>
                <ol className="m-0 mt-5 flex list-none flex-col gap-4 p-0">
                  {c.solution.map((step, i) => (
                    <li key={step} className="flex gap-4 text-[15.5px] leading-[1.65] text-[#3A3745]">
                      <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink font-mono text-[11px] text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal as="section" className="rounded-[20px] border border-line bg-white p-6 sm:p-8">
                <h2 className={label}>After</h2>
                <p className="mt-4 text-[clamp(18px,1.6vw,22px)] leading-[1.5] tracking-[-0.01em] text-pretty">{c.outcome}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      <section aria-label="More case studies" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-24">
        <h2 className={label}>More work</h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/work/${o.slug}`}
              className="group flex items-center justify-between gap-6 rounded-[18px] border border-line bg-white px-6 py-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-44px_rgba(0,0,0,0.4)]"
            >
              <span>
                <span className="block text-[18px] font-medium tracking-[-0.02em]">{o.title}</span>
                <span className="mt-1 block text-[13.5px] text-muted">{o.headline}</span>
              </span>
              <span aria-hidden="true" className="text-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ink">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand source={`work:${c.slug}`} />
    </InnerPage>
  );
}
