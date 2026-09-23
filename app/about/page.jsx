import Image from 'next/image';
import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/motion/Reveal';
import PillButton from '@/components/ui/PillButton';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/siteConfig';
import { orgRef, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About DIV — Software Development Team in Noida',
  description:
    'DIV (Development Innovation Vector Pvt Ltd) is a Noida engineering team that builds, hosts and runs business software on a 99.9% uptime SLA. Founded 2026 by Harsh Jha.',
  ogSub: 'A small team that answers its own phone.',
  path: '/about',
});

const facts = [
  { value: String(siteConfig.foundingYear), label: 'Founded' },
  { value: '6', label: 'Engineers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'On call' },
];

const culture = [
  {
    title: 'The builder prices it',
    body: 'Every estimate is written by the engineer who will do the work. No sales layer between what you need and what it takes.',
  },
  {
    title: 'We run what we ship',
    body: 'The team that writes the code carries the pager for it. That changes how carefully it gets written.',
  },
  {
    title: 'Small releases, often',
    body: 'We ship in stages you can use within weeks, so problems surface while they are still small and cheap to fix.',
  },
  {
    title: 'Written down',
    body: 'Architecture decisions, runbooks and SLAs are documented. If we part ways, you keep everything you need to carry on.',
  },
];

const founder = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harsh Jha',
  jobTitle: 'Founder',
  worksFor: orgRef,
  image: `${siteConfig.url}/images/team/harsh-jha-founder-div.jpg`,
  url: `${siteConfig.url}/about`,
  description: 'Drives scalable API architectures and high-availability cloud deployments at DIV.',
};

export default function AboutPage() {
  return (
    <InnerPage trail={[{ name: 'About', path: '/about' }]} current="/about">
      <JsonLd data={founder} />
      <PageHero
        eyebrow="About DIV"
        title="A small team that"
        accent="answers its own phone."
        lead="We engineer resilient, 99.9% uptime cloud infrastructure that turns scattered B2B workflows into unified, scalable systems — and we stay on to run them."
      />

      <section aria-label="DIV at a glance" className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-14">
        <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05} className="flex flex-col rounded-[18px] border border-line bg-white px-6 py-6">
              <dt className="order-2 mt-2 text-[13.5px] text-muted">{f.label}</dt>
              <dd className="order-1 m-0 text-[clamp(30px,3.4vw,46px)] leading-none font-medium tracking-[-0.04em]">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
            Our <span className="font-serif font-normal italic">mission</span>
          </h2>
          <p className="max-w-[52ch] self-end text-[clamp(18px,1.6vw,22px)] leading-[1.5] tracking-[-0.01em] text-pretty">
            {siteConfig.name} exists so that growing Indian businesses can run on software that is built for how they
            actually work — and trust it to stay up. We design it, build it, host it and watch it, for years.
          </p>
        </Reveal>
      </section>

      <section className="px-3 pt-16 sm:px-4 sm:pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-navy px-5 py-14 text-white sm:rounded-[26px] sm:px-10 sm:py-20 lg:px-16">
          <Reveal>
            <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
              How we <span className="font-serif font-normal italic">work</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {culture.map((c, i) => (
              <Reveal key={c.title} as="article" delay={i * 0.06} className="border-t border-white/15 pt-6">
                <h3 className="text-[18px] leading-[1.3] font-medium tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-white/75">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
            <span className="font-serif font-normal italic">Leadership</span>
          </h2>
        </Reveal>
        <Reveal
          as="article"
          delay={0.06}
          className="mt-10 grid grid-cols-1 gap-8 rounded-[22px] border border-line bg-white p-6 sm:grid-cols-[200px_minmax(0,1fr)] sm:p-10"
        >
          <Image
            src="/images/team/ayush-pathak-founder-div.jpg"
            alt="Ayush Pathak, founder of DIV, a software development company in Noida"
            width={400}
            height={400}
            sizes="200px"
            className="aspect-square w-full max-w-[200px] rounded-2xl bg-paper object-cover"
          />
          <div className="min-w-0 self-center">
            <h3 className="text-[clamp(24px,2.4vw,32px)] leading-[1.1] font-medium tracking-[-0.03em]">Ayush Pathak</h3>
            <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">Founder</p>
            <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.65] text-[#3A3745]">
              Ayush drives DIV&rsquo;s work on scalable API architectures and high-availability cloud deployments — and
              still reviews the architecture of every system we take on.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <PillButton href="/work" tone="dark">See our work</PillButton>
          <PillButton href="/contact">Contact us</PillButton>
        </div>
      </section>

      <CtaBand source="about" />
    </InnerPage>
  );
}
