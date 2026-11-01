import Image from 'next/image';
import BookingButton from '@/components/booking/BookingButton';
import HeroWord from './HeroWord';

/**
 * The hero background is the LCP element, so it uses next/image with
 * priority + sizes="100vw" and fill, and the decorative tint sits above it.
 */
export default function HeroSection({ navbar }) {
  return (
    <section id="top" className="relative p-3 sm:p-4">
      <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[20px] sm:rounded-[26px] lg:min-h-[88vh]">
        <Image
          src="/images/hero-managed-software-development-india.jpg"
          alt="Lone figure on a hilltop at dusk — DIV builds and runs your software for years"
          fill
          priority
          fetchPriority="high"
          quality={82}
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,28,46,0.52)_0%,rgba(16,28,46,0.2)_42%,rgba(16,28,46,0.4)_100%)]"
        />

        {navbar}

        <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-5 py-14 text-center sm:px-10 sm:py-20">
          <h1
            aria-label="We build your website, CRM, app, billing, support desk and automation, then we run it, for years"
            className="animate-rise m-0 text-[clamp(26px,5.6vw,82px)] leading-[1.02] font-medium tracking-[-0.04em] text-balance text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
            <span className="block whitespace-nowrap">
              We build your <HeroWord />
            </span>
            <span className="mt-[0.06em] block font-serif font-normal italic tracking-[-0.02em]">
              then we run it, for years
            </span>
          </h1>
          <p className="animate-rise mt-5 max-w-[46ch] text-[clamp(14.5px,1.15vw,17px)] leading-[1.55] text-white/90 [animation-delay:0.18s]">
            Designed, built, hosted and watched by one team in India.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap justify-center gap-2.5 [animation-delay:0.3s]">
            <BookingButton source="hero" ariaLabel="Start a conversation about your software" className="pl-2! sm:pl-6!">
              <span className="hidden sm:inline">Start a conversation</span>
            </BookingButton>
            <a
              href="#inside"
              className="relative inline-flex min-h-12 items-center gap-2.5 overflow-hidden rounded-full border border-white/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.16)_100%)] px-[22px] py-3 text-[14.5px] font-medium whitespace-nowrap text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.15),inset_0_0_18px_rgba(255,255,255,0.12),0_12px_32px_-12px_rgba(0,0,0,0.45)] backdrop-blur-[18px] backdrop-saturate-[1.8] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] before:pointer-events-none before:absolute before:inset-x-3 before:top-0 before:h-1/2 before:rounded-b-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))] before:content-[''] hover:-translate-y-0.5 hover:border-white/70"
            >
              <span aria-hidden="true" className="block h-0 w-0 border-y-[5px] border-l-8 border-y-transparent border-l-white" />
              <span className="sm:hidden">Try live demos</span>
              <span className="hidden sm:inline">Try the live product demos</span>
            </a>
          </div>
        </div>

        <div className="relative z-20 flex flex-wrap items-end justify-end gap-3 px-5 py-5 sm:px-7 sm:py-7">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-white/75">
            <span aria-hidden="true" className="animate-pulse-dot block h-[5px] w-[5px] rounded-full bg-rose" />
            INDIA · 99.9% UPTIME SLA
          </span>
        </div>
      </div>
    </section>
  );
}
