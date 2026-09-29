import Image from 'next/image';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { plans, roi } from '@/lib/content';

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
          src="/images/software-development-engagement-plans-background.jpg"
          alt="Pale sky over distant hills behind DIV’s software engagement plans"
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
                  dark ? 'border-white/25 bg-[rgba(24,38,58,0.9)]' : 'border-white/90 bg-white/95'
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
                <div className={`flex flex-col gap-1.5 border-y py-3.5 ${dark ? 'border-white/15' : 'border-ink/10'}`}>
                  <p className={`flex flex-wrap items-baseline gap-1.5 ${dark ? 'text-white' : 'text-ink'}`}>
                    <span className={`font-mono text-[10px] tracking-[0.12em] ${dark ? 'text-white/75' : 'text-[#5A5464]'}`}>FROM</span>
                    <span className="text-[clamp(24px,2.4vw,30px)] leading-none font-medium tracking-[-0.035em]">{plan.from}</span>
                    <span className={`text-[13px] ${dark ? 'text-white/75' : 'text-[#5A5464]'}`}>{plan.fromUnit}</span>
                  </p>
                  <p className={`text-[13.5px] ${dark ? 'text-white' : 'text-ink'}`}>{plan.then}</p>
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {plan.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-[13.5px] leading-[1.45] ${dark ? 'text-white' : 'text-ink'}`}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true" className="mt-1 flex-none opacity-60">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                      <span className="min-w-0 flex-1">{item}</span>
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

        <div className="relative z-10 mx-auto mt-4 flex max-w-[900px] flex-col gap-4 rounded-[18px] border border-white/90 bg-white/95 p-5 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5">
            <h3 className="text-[clamp(17px,1.6vw,21px)] font-medium tracking-[-0.025em] text-ink">Why it costs less than the problem</h3>
            <span className="font-mono text-[9.5px] tracking-[0.12em] text-[#5A5464]">TYPICAL SAVINGS · ESTIMATES</span>
          </div>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3 sm:gap-5">
            {roi.map((r) => (
              <li key={r.value} className="flex min-w-0 flex-col gap-1.5 border-t border-ink/10 pt-3">
                <span className="text-[clamp(20px,1.9vw,25px)] leading-[1.1] font-medium tracking-[-0.03em] text-ink">{r.value}</span>
                <span className="text-[13px] leading-[1.5] text-[#5A5464]">{r.line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
