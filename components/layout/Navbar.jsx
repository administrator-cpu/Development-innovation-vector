'use client';

import { useState } from 'react';
import { navLinks } from '@/lib/content';
import { useBooking } from '@/components/booking/BookingProvider';

/**
 * Client Component only because of the mobile disclosure menu.
 * The glass centre rail is the design's signature: translucent white fill,
 * 16px backdrop blur, saturated, hairline border, fully pill-shaped.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <header className="relative z-30 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <a href="#top" className="flex flex-none items-center gap-2.5 text-white h-[40px] w-[100px]" aria-label="DIV — home">
          <img src="/core/Logo.webp" alt="DIV" width={58} height={19} className="block h-full object-cover w-full" />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/15 p-[5px] backdrop-blur-[16px] backdrop-saturate-150 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[13.5px] whitespace-nowrap text-white/90 transition-colors duration-300 hover:bg-white/90 hover:text-ink focus-visible:bg-white/90 focus-visible:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <button
            type="button"
            onClick={() => openBooking('navbar')}
            aria-haspopup="dialog"
            className="inline-flex cursor-pointer items-center rounded-full bg-white px-[22px] py-[11px] text-[13.5px] font-medium whitespace-nowrap text-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5"
          >
            Book a call
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-[16px] md:hidden"
          >
            <span aria-hidden="true" className="text-base leading-none">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        hidden={!open}
        className="mt-3 flex flex-col gap-1 rounded-3xl border border-white/20 bg-white/15 p-2 backdrop-blur-[16px] backdrop-saturate-150 md:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-3 text-[15px] text-white/90 hover:bg-white/90 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
