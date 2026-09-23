import Link from 'next/link';
import Navbar from './Navbar';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbLd } from '@/lib/seo';

/**
 * Shell for every page except the home page: light navbar, visible
 * breadcrumbs (+ BreadcrumbList schema), and the <main> landmark.
 */
export default function InnerPage({ trail = [], current, children }) {
  const full = [{ name: 'Home', path: '/' }, ...trail];
  return (
    <>
      <JsonLd data={breadcrumbLd(full)} />
      <Navbar tone="light" current={current} />
      <main id="main">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mx-auto max-w-[1320px] px-5 pt-6 sm:px-10 sm:pt-10">
            <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase">
              {full.map((item, i) => (
                <li key={item.path} className="flex items-center gap-2">
                  {i < full.length - 1 ? (
                    <>
                      <Link href={item.path} className="hover:text-ink">
                        {item.name}
                      </Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {item.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {children}
      </main>
    </>
  );
}
