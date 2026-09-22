import Image from 'next/image';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { plans } from '@/lib/content';

export default function EngagementsSection() {
  return (
    <section id="engage" className="mx-auto max-w-[1320px] px-4 pt-16 sm:px-6 sm:pt-28">
      <div className="mx-auto mb-8 max-w-[640px] text-center">
        <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.05] font-medium tracking-[-0.04em]">
          Engagements that <span className="font-serif font-normal italic">scale with you</span>
        </h2>
        <p className="mx-auto mt-3.5 max-w-[44ch] text-[15px] leading-[1.55] text-muted">
          Start with the process that hurts most. The rest plugs into the same record later.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(165deg,#5A6450_0%,#38412F_60%,#232A20_100%)] px-5 py-8 sm:rounded-[26px] sm:px-12 sm:py-14">
        <Image
          src="/images/engagements-hills.jpg"
          alt="Pale sky over distant hills"
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,247,242,0.55),rgba(30,38,28,0.45))]" />

        <div className="relative z-10 mx-auto grid max-w-[900px] grid-cols-1 gap-4 md:grid-cols-2">
          {plans.map((plan) => {
            const dark = plan.theme === 'dark';
            return (
              <article
                key={plan.tier}
                className={`flex min-w-0 flex-col gap-4 rounded-[18px] border p-6 backdrop-blur-[22px] backdrop-saturate-150 sm:p-8 ${
                  dark ? 'border-white/25 bg-[rgba(24,38,58,0.72)]' : 'border-white/90 bg-white/85'
                }`}
              >
                <span
                  className={`self-start rounded-full px-3 py-1.5 text-[12.5px] ${
                    dark ? 'bg-white/15 text-white/90' : 'bg-ink/[0.06] text-[#5A5464]'
                  }`}
                >
                  {plan.tier}
                </span>
                <div>
                  <h3
                    className={`text-[clamp(28px,3.2vw,42px)] leading-none font-medium tracking-[-0.04em] ${
                      dark ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {plan.head}
                  </h3>
                  <p className={`mt-2.5 max-w-[34ch] text-[13px] leading-[1.5] ${dark ? 'text-white/80' : 'text-[#5A5464]'}`}>
                    {plan.sub}
                  </p>
                </div>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {plan.items.map((item) => (
                    <li key={item} className={`flex items-center gap-2.5 text-[13.5px] ${dark ? 'text-white' : 'text-ink'}`}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true" className="flex-none opacity-60">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  aria-label={`${plan.cta} — ${plan.tier} engagement`}
                  className={`group mt-auto inline-flex items-center justify-between gap-3 rounded-full py-[7px] pr-[7px] pl-5 text-sm font-medium transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 ${
                    dark ? 'bg-navy text-white' : 'bg-white text-ink'
                  }`}
                >
                  {plan.cta}
                  <span
                    className={`inline-flex h-[29px] w-[29px] items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
                      dark ? 'bg-lime text-ink' : 'bg-ink text-white'
                    }`}
                  >
                    <ArrowIcon size={12} />
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
