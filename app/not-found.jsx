import Link from 'next/link';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import PillButton from '@/components/ui/PillButton';
import { services } from '@/lib/services';
import { caseStudies } from '@/lib/caseStudies';
import { siteConfig } from '@/lib/siteConfig';

// Next.js sends a real 404 status and its own noindex for this route — that is
// correct: a missing URL must never be indexed. Everything else is indexable.
export const metadata = {
  title: 'Page Not Found (404)',
  description: 'The page you were looking for does not exist. Browse DIV’s software development services, case studies or contact an engineer.',
};

const groups = [
  { title: 'Services', links: services.map((s) => ({ label: s.name, href: `/${s.slug}` })) },
  { title: 'Case studies', links: caseStudies.map((c) => ({ label: c.title, href: `/work/${c.slug}` })) },
  {
    title: 'Company',
    links: [
      { label: 'About DIV', href: '/about' },
      { label: 'Service level agreement', href: '/sla' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function NotFound() {
  return (
    <InnerPage>
      <PageHero
        eyebrow="Error 404 · Page not found"
        title="This page"
        accent="isn't here."
        lead="The link may be out of date or mistyped. Nothing is broken on your side — here is where most people are headed."
      >
        <PillButton href="/" tone="dark">Back to home</PillButton>
        <PillButton href="/contact">Talk to an engineer</PillButton>
      </PageHero>

      <section aria-labelledby="nf-links" className="mx-auto max-w-[1320px] px-5 pt-10 pb-4 sm:px-10 sm:pt-14">
        <h2 id="nf-links" className="font-mono text-[10.5px] font-normal tracking-[0.14em] text-muted uppercase">
          Popular pages
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title} className="rounded-[20px] border border-line bg-white p-6">
              <h3 className="text-[16px] font-medium tracking-[-0.02em]">{g.title}</h3>
              <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group inline-flex items-center gap-2 text-[14px] text-muted hover:text-ink">
                      {l.label}
                      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-6 text-[13.5px] text-muted">
          Think a link on our site is broken? Tell us at{' '}
          <a href={`mailto:${siteConfig.email}?subject=Broken%20link%20on%20thediv.in`} className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </InnerPage>
  );
}
