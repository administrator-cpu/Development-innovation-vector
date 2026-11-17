import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import { blogPosts } from '@/lib/crm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Blog: CRM, ISP and Business Software in India',
  description: 'Straight answers on CRM, ISP and business software in India: costs in rupees, how RADIUS and billing work, and how to choose, from DIV engineers.',
  ogSub: 'Costs, timelines and how to choose',
  path: '/blog',
});

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogIndex() {
  return (
    <InnerPage trail={[{ name: 'Blog', path: '/blog' }]}>
      <PageHero eyebrow="Blog" title="Straight answers" accent="on business software." />
      <section className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
          {[...blogPosts].sort((a, b) => b.published.localeCompare(a.published)).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="flex h-full flex-col gap-3 rounded-[20px] border border-line bg-white p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <time dateTime={p.published} className="font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">{fmt(p.published)}</time>
                <h2 className="text-[clamp(22px,2.2vw,30px)] leading-[1.12] font-medium tracking-[-0.03em] text-balance">{p.title}</h2>
                <p className="text-[14.5px] leading-[1.6] text-muted">{p.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </InnerPage>
  );
}
