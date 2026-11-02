'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks, productGroups } from '@/lib/content';
import { services } from '@/lib/services';
import { crmHub, connectCrm, ispProducts, ispProductsPath } from '@/lib/crm';
import { useBooking } from '@/components/booking/BookingProvider';

/**
 * Client Component only because of the mobile disclosure menu.
 * The glass centre rail is the design's signature: translucent white fill,
 * 16px backdrop blur, saturated, hairline border, fully pill-shaped.
 */
const SHEEN =
  "before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)] before:content-['']";

const WATER = {
  rail: `border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.12)_100%)] shadow-[inset_1.5px_1.5px_0_-0.5px_#fff,inset_-1px_-1px_0_-0.5px_rgba(255,255,255,0.7),inset_0_0_22px_rgba(255,255,255,0.45),inset_0_-8px_16px_-10px_rgba(10,14,22,0.12),0_12px_32px_-16px_rgba(10,14,22,0.28)] backdrop-blur-[10px] backdrop-saturate-[1.8] ${SHEEN}`,
  link: 'text-ink/65',
  on: 'text-ink',
  lens: 'rounded-[20px] bg-[radial-gradient(130%_110%_at_50%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.12)_60%,rgba(255,255,255,0.35)_100%)] backdrop-blur-[1px] backdrop-saturate-[1.8] shadow-[inset_1.5px_1.5px_0_-0.5px_#fff,inset_-1px_-1px_0_-0.5px_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(10,14,22,0.06),inset_0_0_12px_rgba(255,255,255,0.5),0_10px_24px_-12px_rgba(10,14,22,0.3)]',
  lensPad: 8,
  liquid: true,
  burger: 'border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.15))] text-ink shadow-[inset_1px_1px_0_#fff,0_8px_22px_-12px_rgba(10,14,22,0.3)] backdrop-saturate-[1.8]',
  panel: 'border-white/80 bg-white/55 shadow-[inset_0_1px_0_#fff,0_20px_50px_-24px_rgba(10,14,22,0.35)] backdrop-blur-[24px] backdrop-saturate-[1.8]',
  mlink: 'text-ink/75 hover:bg-white/60 hover:text-ink focus-visible:bg-white/60',
};

const productHref = (name) => {
  if (name === connectCrm.name) return connectCrm.path;
  const p = ispProducts.find((x) => x.name === name);
  return p ? `${ispProductsPath}/${p.slug}` : '/#inside';
};

// Hover panels. Keyed by nav label; links without an entry have no panel.
const MENUS = {
  Services: {
    width: 620,
    cols: 'grid-cols-1',
    groups: [
      {
        items: [
          { label: 'Custom CRM development', sub: 'Built, hosted and supported in Delhi NCR.', href: crmHub.path },
          ...services.map((s) => ({ label: s.name, sub: `${s.title} ${s.accent}`, href: `/${s.slug}` })),
        ],
      },
    ],
    footer: { label: 'All services', href: '/services' },
    image: { src: '/images/engineer-monitoring-servers-in-data-centre.jpg', alt: 'DIV engineer monitoring servers in the data centre', caption: 'Built, hosted and watched by one team in India.' },
    cta: { kicker: 'Not sure which fits?', head: 'Tell us what hurts. We’ll scope it in one call.', label: 'Book a call' },
  },
  Platform: {
    width: 820,
    cols: 'grid-cols-4',
    groups: productGroups.map((g) => ({ title: g.label, items: g.items.map((name) => ({ label: name, href: productHref(name) })) })),
    footer: { label: 'See the platform', href: '/#platform' },
    image: { src: '/images/one-platform-crm-billing-support-background.jpg', alt: 'One DIV platform for CRM, billing and support', caption: 'One record across every product. Drishti audit trail in all.' },
    cta: { kicker: 'See it working', head: 'Walk through the live products with an engineer.', label: 'Book a demo' },
  },
};

const MENU_TONE = {
  dark: {
    panel: 'border-white/25 bg-[linear-gradient(180deg,rgba(18,24,34,0.62),rgba(18,24,34,0.48))] text-white shadow-[inset_1px_1px_0_rgba(255,255,255,0.35),inset_0_0_24px_rgba(255,255,255,0.06),0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-[28px] backdrop-saturate-[1.6]',
    title: 'text-white/55',
    item: 'hover:bg-white/10 focus-visible:bg-white/10',
    sub: 'text-white/65',
    rule: 'border-white/15',
    card: 'border-white/15 bg-white/[0.06]',
  },
  water: {
    panel: 'border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.6))] text-ink shadow-[inset_1px_1px_0_#fff,inset_0_0_24px_rgba(255,255,255,0.5),0_24px_60px_-24px_rgba(10,14,22,0.35)] backdrop-blur-[28px] backdrop-saturate-[1.8]',
    title: 'text-ink/50',
    item: 'hover:bg-white/80 focus-visible:bg-white/80',
    sub: 'text-ink/60',
    rule: 'border-ink/10',
    card: 'border-white bg-white/60',
  },
};

const TONES = {
  // Over the dark hero image — frosted glass, soft glow, monochrome.
  dark: {
    logo: 'text-white',
    rail: `border-white/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.08),0_12px_40px_-14px_rgba(0,0,0,0.5),0_0_36px_-10px_rgba(255,255,255,0.22)] backdrop-blur-[24px] backdrop-saturate-[1.6] ${SHEEN}`,
    link: 'text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]',
    on: 'text-white [text-shadow:0_0_12px_rgba(255,255,255,0.65)]',
    lens: 'rounded-[20px] bg-[radial-gradient(130%_110%_at_50%_0%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_55%,rgba(255,255,255,0.12)_100%)] backdrop-blur-[2px] backdrop-brightness-110 backdrop-saturate-[1.6] shadow-[inset_1.5px_1.5px_0_-0.5px_rgba(255,255,255,0.85),inset_-1px_-1px_0_-0.5px_rgba(255,255,255,0.55),inset_0_0_0_1px_rgba(255,255,255,0.18),inset_0_0_12px_rgba(255,255,255,0.15),0_8px_24px_-10px_rgba(0,0,0,0.35)]',
    liquid: true,
    lensPad: 8,
    scrolled: '',
    mlink: 'text-white/90 hover:bg-white/15 focus-visible:bg-white/15',
    cta: 'border border-white/80 bg-[linear-gradient(180deg,#F7F7F8_0%,#E6E7E9_100%)] text-[#2A2C30] [text-shadow:0_2px_3px_rgba(0,0,0,0.18)] shadow-[inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(255,255,255,0.6),0_1px_0_1px_rgba(0,0,0,0.06),0_10px_24px_-10px_rgba(0,0,0,0.35)] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(0,0,0,0.07),inset_0_0_0_1px_rgba(255,255,255,0.6),0_1px_0_1px_rgba(0,0,0,0.06),0_16px_30px_-12px_rgba(0,0,0,0.4)] active:translate-y-0 active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),inset_0_-1px_0_rgba(255,255,255,0.8)]',
    burger: `relative border-white/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_24px_-10px_rgba(0,0,0,0.45)] backdrop-saturate-[1.6]`,
    panel: 'border-white/25 bg-[linear-gradient(180deg,rgba(20,26,36,0.55),rgba(20,26,36,0.35))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-[28px] backdrop-saturate-[1.6]',
  },
  // Inner pages on paper.
  light: {
    ...WATER,
    logo: 'text-ink',
    cta: 'bg-ink text-white shadow-[0_8px_22px_-10px_rgba(10,14,22,0.7)]',
    scrolled: '',
  },
};

// Edge-refraction map for the liquid-glass lens (Chromium honours backdrop-filter:url(); others fall back to frosted blur).
const LIQUID_MAP = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'200'%20height%3D'100'%20preserveAspectRatio%3D'none'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'r'%20x1%3D'0'%20x2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23000'%2F%3E%3Cstop%20offset%3D'.18'%20stop-color%3D'%23800000'%2F%3E%3Cstop%20offset%3D'.82'%20stop-color%3D'%23800000'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23f00'%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20x2%3D'0'%20y1%3D'0'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23000'%2F%3E%3Cstop%20offset%3D'.28'%20stop-color%3D'%23008000'%2F%3E%3Cstop%20offset%3D'.72'%20stop-color%3D'%23008000'%2F%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%230f0'%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D'200'%20height%3D'100'%20fill%3D'url(%23r)'%2F%3E%3Crect%20width%3D'200'%20height%3D'100'%20fill%3D'url(%23g)'%20style%3D'mix-blend-mode%3Ascreen'%2F%3E%3C%2Fsvg%3E";

export default function Navbar({ tone = 'dark', current }) {
  const [overLight, setOverLight] = useState(false);
  const base = TONES[tone] ?? TONES.dark;
  const t = tone === 'dark' && overLight ? { ...base, ...WATER, logo: base.logo, cta: base.cta } : base;
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  // One glass lens glides between links instead of each link snapping its own background.
  const railRef = useRef(null);
  const linkRefs = useRef([]);
  const activeIndex = navLinks.findIndex((l) => l.href === current);
  const [hover, setHover] = useState(-1);
  const [lens, setLens] = useState({ x: 0, w: 0, show: false, ready: false });
  const target = hover >= 0 ? hover : activeIndex;

  const measure = useCallback(() => {
    const el = linkRefs.current[target];
    if (!el) return setLens((s) => ({ ...s, show: false }));
    setLens((s) => ({ x: el.offsetLeft, w: el.offsetWidth, show: true, ready: s.ready || s.show }));
  }, [target]);

  useLayoutEffect(measure, [measure]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Sticky: the bar sits in a fixed layer that starts exactly where the in-flow slot is,
  // then eases up to a tighter top offset and gains a darker backing once you scroll.
  const wrapRef = useRef(null);
  const [wrapLeft, setWrapLeft] = useState(0);
  useLayoutEffect(() => {
    if (hover >= 0 && wrapRef.current) setWrapLeft(wrapRef.current.getBoundingClientRect().left);
  }, [hover]);
  const slotRef = useRef(null);
  const [pin, setPin] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const place = () => {
      const el = slotRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setPin({ top: r.top + window.scrollY, left: r.left, right: document.documentElement.clientWidth - r.right });
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const hero = document.getElementById('top');
      setOverLight(hero ? hero.getBoundingClientRect().bottom < 72 : false);
    };
    place();
    onScroll();
    window.addEventListener('resize', place);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const barStyle = pin
    ? {
        position: 'fixed',
        top: scrolled ? Math.min(pin.top, 12) : pin.top,
        left: pin.left,
        right: pin.right,
        zIndex: 50,
        transition: 'top 600ms cubic-bezier(.22,1,.36,1)',
      }
    : { position: 'absolute', top: 0, left: 0, right: 0 };
  const lift = scrolled ? t.scrolled : '';

  return (
    <header className="relative z-30 px-4 py-4 sm:px-6 sm:py-5">
      <div ref={slotRef} className="relative h-11 md:h-12">
      <div style={barStyle}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link href="/" className={`flex flex-none items-center gap-2.5 ${t.logo}`} aria-label="DIV — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/div-logo.png" alt="DIV logo" width={44} height={19} className="block h-[19px] w-auto" />
        </Link>

        {/* Panels sit beside the rail (not inside it) so their own backdrop blur isn't trapped by the rail's. */}
        <div
          ref={wrapRef}
          className="relative hidden md:block"
          onMouseLeave={() => setHover(-1)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setHover(-1);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setHover(-1);
          }}
        >
        <nav
          ref={railRef}
          aria-label="Primary"
          className={`relative hidden items-center gap-1 rounded-full border p-[5px] transition-[background-color,border-color,box-shadow] duration-700 md:flex ${t.rail} ${lift}`}
          style={overLight || tone === 'light' ? { backdropFilter: 'url(#div-liquid-glass) blur(6px) saturate(1.8) brightness(1.04)' } : undefined}
        >
          <svg aria-hidden="true" width="0" height="0" className="absolute">
            <filter id="div-liquid-glass" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feImage href={LIQUID_MAP} preserveAspectRatio="none" result="map" />
              <feDisplacementMap in="SourceGraphic" in2="map" scale="22" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 ${t.lens}`}
            style={{
              ...(t.liquid ? { backdropFilter: 'url(#div-liquid-glass) blur(1.5px) saturate(1.6) brightness(1.1)' } : null),
              top: 5 - t.lensPad,
              bottom: 5 - t.lensPad,
              width: lens.w + t.lensPad * 2,
              transform: `translateX(${lens.x - t.lensPad}px) scale(${lens.show ? 1 : 0.9})`,
              opacity: lens.show ? 1 : 0,
              transition: lens.ready
                ? 'transform 700ms cubic-bezier(.22,1,.36,1), width 700ms cubic-bezier(.22,1,.36,1), opacity 450ms ease'
                : 'opacity 450ms ease, transform 450ms cubic-bezier(.22,1,.36,1)',
            }}
          />
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => (linkRefs.current[i] = el)}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              aria-expanded={MENUS[link.label] ? hover === i : undefined}
              aria-current={current === link.href ? 'page' : undefined}
              className={`relative z-10 rounded-full px-4 py-2 text-[13.5px] whitespace-nowrap outline-none transition-colors duration-500 ease-out ${i === target ? t.on : t.link}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
          {Object.entries(MENUS).map(([key, m]) => {
            const isOpen = hover >= 0 && navLinks[hover]?.label === key;
            const mt = MENU_TONE[tone === 'light' || overLight ? 'water' : 'dark'];
            return (
              <div
                key={key}
                className="absolute top-full pt-3"
                style={{
                  left: `calc(5vw - ${wrapLeft}px)`,
                  width: '90vw',
                  opacity: isOpen ? 1 : 0,
                  visibility: isOpen ? 'visible' : 'hidden',
                  pointerEvents: isOpen ? 'auto' : 'none',
                  transform: `translateY(${isOpen ? 0 : -8}px) scale(${isOpen ? 1 : 0.985})`,
                  transformOrigin: 'top center',
                  transition: `opacity 450ms ease, transform 600ms cubic-bezier(.22,1,.36,1), visibility 0s linear ${isOpen ? '0s' : '450ms'}`,
                }}
              >
                <div className={`grid grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)_minmax(0,0.85fr)] gap-3 rounded-[28px] border p-3 ${mt.panel}`}>
                  <div className="relative min-h-[260px] overflow-hidden rounded-[20px]">
                    <Image src={m.image.src} alt={m.image.alt} fill sizes="30vw" className="object-cover" />
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,22,0)_40%,rgba(10,14,22,0.7)_100%)]" />
                    <p className="absolute inset-x-4 bottom-4 m-0 text-[13.5px] leading-snug text-pretty text-white">{m.image.caption}</p>
                  </div>

                  <div className="flex flex-col px-2 py-1">
                    <div className={`grid flex-1 content-start gap-x-2 gap-y-1 ${m.groups.length > 1 ? 'grid-cols-4' : 'grid-cols-2'}`}>
                      {m.groups.map((g, gi) => (
                        <div key={gi} className={`flex flex-col gap-0.5 ${g.title ? '' : 'col-span-full grid grid-cols-2 gap-1'}`}>
                          {g.title ? (
                            <span className={`px-3 pt-2 pb-1.5 font-mono text-[10px] tracking-[0.14em] uppercase ${mt.title}`}>{g.title}</span>
                          ) : null}
                          {g.items.map((it) => (
                            <Link
                              key={it.label}
                              href={it.href}
                              tabIndex={isOpen ? 0 : -1}
                              onClick={() => setHover(-1)}
                              className={`flex flex-col gap-1 rounded-2xl px-3 py-2.5 transition-colors duration-300 outline-none ${mt.item}`}
                            >
                              <span className="text-[14px] leading-tight font-medium">{it.label}</span>
                              {it.sub ? <span className={`text-[12.5px] leading-snug ${mt.sub}`}>{it.sub}</span> : null}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className={`mt-2 flex border-t px-3 pt-3 pb-1 ${mt.rule}`}>
                      <Link
                        href={m.footer.href}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => setHover(-1)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium underline-offset-4 hover:underline"
                      >
                        {m.footer.label} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between gap-6 rounded-[20px] border p-5 ${mt.card}`}>
                    <div className="flex flex-col gap-2">
                      <span className={`font-mono text-[10px] tracking-[0.14em] uppercase ${mt.title}`}>{m.cta.kicker}</span>
                      <p className="m-0 text-[19px] leading-[1.2] font-medium tracking-[-0.02em] text-balance">{m.cta.head}</p>
                    </div>
                    <button
                      type="button"
                      tabIndex={isOpen ? 0 : -1}
                      onClick={() => {
                        setHover(-1);
                        openBooking(`navbar-menu:${key.toLowerCase()}`);
                      }}
                      aria-haspopup="dialog"
                      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-medium whitespace-nowrap transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 ${base.cta}`}
                    >
                      {m.cta.label}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-none items-center gap-2">
          <button
            type="button"
            onClick={() => openBooking('navbar')}
            aria-haspopup="dialog"
            className={`inline-flex cursor-pointer items-center rounded-full px-[22px] py-[11px] text-[13.5px] font-medium whitespace-nowrap transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 ${t.cta}`}
          >
            Book a call
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-[16px] transition-[background-color] duration-700 md:hidden ${t.burger} ${lift}`}
          >
            <span aria-hidden="true" className="text-base leading-none">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        hidden={!open}
        className={`mt-3 flex flex-col gap-1 rounded-3xl border p-2 md:hidden ${t.panel}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`rounded-full px-4 py-3 text-[15px] transition-colors duration-500 ease-out ${t.mlink}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      </div>
      </div>
    </header>
  );
}
