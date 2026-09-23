'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { siteConfig } from '@/lib/siteConfig';

/** Route-level error boundary: friendly message + retry, inside the normal layout. */
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[page error]', error);
  }, [error]);

  return (
    <>
      <Navbar tone="light" />
      <main id="main" className="mx-auto max-w-[1320px] px-5 pt-10 pb-4 sm:px-10 sm:pt-16">
        <div role="alert" className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/5 px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-rose uppercase">
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-rose" />
            Something went wrong
          </span>
          <h1 className="mt-6 max-w-[20ch] text-[clamp(36px,6vw,84px)] leading-[0.98] font-medium tracking-[-0.05em] text-balance">
            That didn&rsquo;t load.
            <span className="block font-serif font-normal italic">We&rsquo;ve been told.</span>
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(15px,1.3vw,18px)] leading-[1.55] text-pretty text-muted">
            A temporary error stopped this page from loading. Try again — if it keeps happening, call or WhatsApp us on{' '}
            <a href={`tel:${siteConfig.phoneHref}`} className="text-ink underline decoration-line underline-offset-4">{siteConfig.phone}</a>.
          </p>
          {error?.digest ? (
            <p className="mt-3 font-mono text-[11px] text-muted">Reference: {error.digest}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex cursor-pointer items-center rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-medium text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5"
            >
              Try again
            </button>
            <Link href="/" className="inline-flex items-center rounded-full border border-line bg-white px-7 py-3.5 text-[14.5px] font-medium text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
