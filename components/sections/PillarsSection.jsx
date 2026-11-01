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
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:gap-5 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.n}
            as="article"
            delay={i * 0.09}
            className="rounded-[18px] border border-line bg-white p-2.5 transition-[transform,box-shadow] duration-600 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2 hover:shadow-[0_44px_70px_-50px_rgba(0,0,0,0.42)]"
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
              <span className="pointer-events-none absolute top-3 left-3 flex items-center gap-2 rounded-full bg-ink py-[7px] pr-3.5 pl-2 text-[13px] font-medium text-white">
                <span className="grid size-[22px] place-items-center rounded-full bg-lime font-mono text-[11px] text-ink">
                  {pillar.n}
                </span>
                {pillar.step}
              </span>
              <ul aria-label={pillar.step} className="absolute inset-x-3 bottom-3 m-0 flex list-none flex-col items-start gap-2 p-0">
                {pillar.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2 rounded-full border border-white/55 bg-linear-135 from-white/60 to-white/35 py-2 pr-3.5 pl-3 text-[13.5px] font-medium whitespace-nowrap text-ink shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.25),0_8px_24px_-10px_rgba(0,0,0,0.35)] backdrop-blur-[18px] backdrop-saturate-[1.8] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:translate-x-1 hover:scale-[1.03]"
                  >
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
