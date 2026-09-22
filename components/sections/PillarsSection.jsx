import Image from 'next/image';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/motion/Reveal';
import Parallax from '@/components/motion/Parallax';
import { pillars } from '@/lib/content';

export default function PillarsSection() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="mx-auto max-w-[1320px] px-5 pt-16 text-center sm:px-10 sm:pt-28"
    >
      <Reveal>
        <Eyebrow>Products &amp; operations</Eyebrow>
        <h2
          id="pillars-heading"
          className="mx-auto mt-5 max-w-[22ch] text-[clamp(28px,4vw,54px)] leading-[1.05] font-medium tracking-[-0.04em] text-balance"
        >
          Designed to support <span className="font-serif font-normal italic">every decision</span>
        </h2>
        <p className="mx-auto mt-3.5 max-w-[52ch] text-[15px] leading-[1.55] text-muted">
          Software, infrastructure and the people who run both — so the thing you bought keeps working
          after the invoice is paid.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:gap-5 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.n}
            as="article"
            delay={i * 0.09}
            className="rounded-[18px] border border-line bg-white px-2.5 pt-2.5 transition-[transform,box-shadow] duration-600 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2 hover:shadow-[0_44px_70px_-50px_rgba(0,0,0,0.42)]"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-line">
              <Parallax distance={44} className="absolute -inset-y-[8%] inset-x-0">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </Parallax>
            </div>
            <div className="px-3 pt-5 pb-6 sm:px-4">
              <h3 className="font-serif text-[clamp(19px,1.8vw,25px)] leading-[1.1] font-normal italic">
                {pillar.title}
              </h3>
              <p className="mt-2.5 max-w-[38ch] text-[13.5px] leading-[1.55] text-muted">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
