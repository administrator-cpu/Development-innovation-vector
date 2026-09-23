'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/content';
import { useBooking } from '@/components/booking/BookingProvider';

/**
 * Client Component only because of the mobile disclosure menu.
 * The glass centre rail is the design's signature: translucent white fill,
 * 16px backdrop blur, saturated, hairline border, fully pill-shaped.
 */
const TONES = {
  // Over the dark hero image.
  dark: {
    logo: 'text-white',
    rail: 'border-white/20 bg-white/15',
    link: 'text-white/90 hover:bg-white/90 hover:text-ink focus-visible:bg-white/90 focus-visible:text-ink',
    active: 'bg-white/90 text-ink',
    cta: 'bg-white text-ink',
    burger: 'border-white/25 bg-white/15 text-white',
  },
  // Inner pages on paper.
  light: {
    logo: 'text-ink',
    rail: 'border-line bg-white/70',
    link: 'text-muted hover:bg-ink hover:text-white focus-visible:bg-ink focus-visible:text-white',
    active: 'bg-ink text-white',
    cta: 'bg-ink text-white',
    burger: 'border-line bg-white text-ink',
  },
};

export default function Navbar({ tone = 'dark', current }) {
  const t = TONES[tone] ?? TONES.dark;
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="relative z-30 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link href="/" className={`flex flex-none items-center gap-2.5 ${t.logo}`} aria-label="DIV — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/core/DIV-Development-Innovation-Vector-logo.avif" alt="DIV-Development-Innovation-Vector-logo" width={58} height={19} className="block h-[19px] w-auto" />
        </Link>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-1 rounded-full border p-[5px] backdrop-blur-[16px] backdrop-saturate-150 md:flex ${t.rail}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current === link.href ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-[13.5px] whitespace-nowrap transition-colors duration-300 ${current === link.href ? t.active : t.link}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <button
            type="button"
            onClick={() => openBooking('navbar')}
            aria-haspopup="dialog"
            className={`inline-flex cursor-pointer items-center rounded-full px-[22px] py-[11px] text-[13.5px] font-medium whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 ${t.cta}`}
          >
            Book a call
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-[16px] md:hidden ${t.burger}`}
          >
            <span aria-hidden="true" className="text-base leading-none">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        hidden={!open}
        className={`mt-3 flex flex-col gap-1 rounded-3xl border p-2 backdrop-blur-[16px] backdrop-saturate-150 md:hidden ${t.rail}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`rounded-full px-4 py-3 text-[15px] ${t.link}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
