import Image from 'next/image';
import Eyebrow from '@/components/ui/Eyebrow';
import PillButton from '@/components/ui/PillButton';
import { steps } from '@/lib/content';

export default function HowItWorksSection() {
  return (
    <section id="how" className="mx-auto max-w-[1120px] px-5 pt-16 text-center sm:px-10 sm:pt-28">
      <Eyebrow>How DIV works</Eyebrow>
      <h2 className="mt-5 text-[clamp(30px,4.4vw,60px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
        From scattered sheets to one system —{' '}
        <span className="font-serif font-normal italic">run for you</span>
      </h2>

      <ol className="mt-10 flex list-none flex-wrap items-end justify-center gap-2.5 p-0 sm:gap-3.5">
        {steps.map((step) => (
          <li
            key={step.n}
            style={{ transform: `rotate(${step.rotate}) translateY(${step.lift})` }}
            className="w-[clamp(148px,16vw,196px)] flex-none rounded-[14px] border border-line bg-white px-2 pt-2 pb-3.5 text-left shadow-[0_28px_46px_-34px_rgba(0,0,0,0.45)] transition-[transform,box-shadow] duration-[650ms] ease-[cubic-bezier(.16,1,.3,1)] hover:!translate-y-[-18px] hover:!rotate-0 hover:shadow-[0_44px_70px_-38px_rgba(0,0,0,0.5)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-[9px] bg-line">
              <Image src={step.image} alt={step.alt} fill sizes="200px" className="object-cover" />
            </div>
            <div className="px-[7px] pt-3">
              <h3 className="font-serif text-[clamp(15px,1.4vw,19px)] leading-[1.1] font-normal italic tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-[7px] text-[11.5px] leading-[1.4] text-muted">{step.line}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        <PillButton href="#platform" tone="dark" className="text-sm">
          See the platform
        </PillButton>
        <PillButton href="/services" className="text-sm">
          Explore our services
        </PillButton>
      </div>
    </section>
  );
}
