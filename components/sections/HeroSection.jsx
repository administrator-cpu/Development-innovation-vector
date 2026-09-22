import Image from 'next/image';
import BookingButton from '@/components/booking/BookingButton';

/**
 * The hero background is the LCP element, so it uses next/image with
 * priority + sizes="100vw" and fill, and the decorative tint sits above it.
 */
export default function HeroSection({ navbar }) {
  return (
    <section id="top" className="relative p-3 sm:p-4">
      <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[20px] sm:rounded-[26px] lg:min-h-[88vh]">
        <Image
          src="/images/hero.jpg"
          alt="Dusk landscape with a single figure on the horizon"
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
          <h1 className="animate-rise m-0 max-w-[17ch] text-[clamp(38px,5.6vw,82px)] leading-[1.02] font-medium tracking-[-0.04em] text-balance text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]">
            We build your software
            <span className="mt-[0.06em] block font-serif font-normal italic tracking-[-0.02em]">
              then we run it, for years
            </span>
          </h1>
          <p className="animate-rise mt-5 max-w-[46ch] text-[clamp(14.5px,1.15vw,17px)] leading-[1.55] text-white/90 [animation-delay:0.18s]">
            CRM, billing, support, networks, apps and sites — designed, built, hosted and watched by one
            team in India.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap justify-center gap-2.5 [animation-delay:0.3s]">
            <BookingButton source="hero" ariaLabel="Start a conversation about your software">
              Start a conversation
            </BookingButton>
          </div>
        </div>

        <div className="relative z-20 flex flex-wrap items-end justify-between gap-3 px-5 py-5 sm:px-7 sm:py-7">
          <span className="text-[12.5px] text-white/75">(Scroll to explore)</span>
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-white/75">
            <span aria-hidden="true" className="animate-pulse-dot block h-[5px] w-[5px] rounded-full bg-rose" />
            INDIA · 99.9% UPTIME
          </span>
        </div>
      </div>
    </section>
  );
}
