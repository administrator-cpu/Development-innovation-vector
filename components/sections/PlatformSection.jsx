import Image from 'next/image';

export default function PlatformSection() {
  return (
    <section id="platform" className="mx-auto max-w-[1320px] px-4 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto mb-8 max-w-[760px] text-center">
        <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.05] font-medium tracking-[-0.04em] text-balance">
          Built for clarity at <span className="font-serif font-normal italic">every step</span>
        </h2>
        <p className="mx-auto mt-3.5 max-w-[48ch] text-[15px] leading-[1.55] text-muted">
          Thirteen products on one record — so sales, billing, support and the network stop arguing about
          whose number is right.
        </p>
      </div>

      <div className="relative flex min-h-[420px] overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,#56604C_0%,#333B2E_55%,#1F2620_100%)] p-4 sm:rounded-[26px] sm:p-8 lg:min-h-[560px]">
        <Image
          src="/images/one-platform-crm-billing-support-background.jpg"
          alt="Green hills under low mist behind DIV’s unified CRM, billing and support platform"
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(240,242,236,0.5),rgba(28,34,26,0.55))]"
        />

        <div className="relative z-10 grid flex-1 grid-cols-1 items-stretch gap-3 sm:gap-4 lg:grid-cols-2">
          <article className="flex min-w-0 flex-col gap-4 rounded-2xl border border-white/25 bg-[rgba(22,26,20,0.52)] p-5 backdrop-blur-[22px] backdrop-saturate-150 sm:p-6">
            <div className="relative min-h-[140px] flex-1 sm:min-h-[210px]">
              <div className="absolute inset-0 flex flex-col justify-between font-mono text-[9.5px] text-white/60">
                <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
              </div>
              <svg
                viewBox="0 0 320 150"
                preserveAspectRatio="none"
                role="img"
                aria-label="Chart: records consolidating onto one customer over eighteen months"
                className="absolute inset-y-0 right-0 left-9 h-full w-[calc(100%-36px)]"
              >
                <defs>
                  <linearGradient id="platform-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#CDFC56" stopOpacity="0.42" />
                    <stop offset="100%" stopColor="#CDFC56" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 132 L22 124 L44 118 L66 96 L88 104 L110 78 L132 88 L154 58 L176 70 L198 44 L220 52 L242 30 L264 38 L286 20 L308 26 L320 16 L320 150 L0 150 Z"
                  fill="url(#platform-fill)"
                />
                <path
                  d="M0 132 L22 124 L44 118 L66 96 L88 104 L110 78 L132 88 L154 58 L176 70 L198 44 L220 52 L242 30 L264 38 L286 20 L308 26 L320 16"
                  fill="none"
                  stroke="#CDFC56"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex justify-between border-t border-dashed border-white/30 pt-3 font-mono text-[9.5px] tracking-[0.1em] text-white/70">
              <span>MONTH 1</span><span>MONTH 18</span>
            </div>
            <div>
              <h3 className="font-serif text-[clamp(18px,1.8vw,24px)] font-normal italic text-white">
                One record, compounding
              </h3>
              <p className="mt-2 max-w-[42ch] text-[13px] leading-[1.5] text-white/90">
                Every quote, ticket, session and receipt lands on the same customer. The longer it runs,
                the less anyone has to ask.
              </p>
            </div>
          </article>

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
            <article className="relative flex min-h-[150px] flex-1 items-end overflow-hidden rounded-2xl border border-white/25 sm:min-h-[200px]">
              <Image
                src="/images/engineer-monitoring-servers-in-data-centre.jpg"
                alt="DIV engineer at a desk monitoring servers inside a data centre"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,26,18,0.15),rgba(20,26,18,0.7))]" />
              <div className="relative z-10 p-5">
                <h3 className="font-serif text-[clamp(17px,1.7vw,22px)] font-normal italic text-white">
                  Same faces after launch
                </h3>
                <p className="mt-[7px] max-w-[36ch] text-[12.5px] leading-[1.5] text-white/90">
                  The engineers who scoped it build it and answer the phone at 2am.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/25 bg-[rgba(22,26,20,0.52)] p-5 backdrop-blur-[22px] backdrop-saturate-150 sm:p-6">
              <h3 className="font-serif text-[clamp(17px,1.7vw,22px)] font-normal italic text-white">
                Our metal, our monitoring
              </h3>
              <p className="mt-[7px] mb-3.5 max-w-[40ch] text-[12.5px] leading-[1.5] text-white/90">
                Hosted in our own data centre in India. Nothing resold, nothing offshore.
              </p>
              <div
                role="img"
                aria-label="100% of data stored in India"
                className="h-[7px] overflow-hidden rounded bg-white/25"
              >
                <div className="h-full w-full rounded bg-[linear-gradient(90deg,#7FA83B,#CDFC56)]" />
              </div>
              <div className="mt-2.5 flex justify-between font-mono text-[9.5px] tracking-[0.1em] text-white/70">
                <span>DATA IN INDIA</span><span>100%</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
