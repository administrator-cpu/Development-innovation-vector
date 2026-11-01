import Link from 'next/link';
import { proof } from '@/lib/content';
import CountUp from './CountUp';

export default function ProofSection() {
  return (
    <section id="proof" aria-labelledby="proof-heading" className="mx-auto max-w-[1320px] px-5 pt-8 sm:px-10 sm:pt-12">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2.5">
        <h2 id="proof-heading" className="font-mono text-[10px] font-normal tracking-[0.16em] text-muted">
          CLIENT RESULTS · ANONYMISED, AS REPORTED
        </h2>
        <Link href="/work" className="border-b border-ink pb-px text-[13px] text-ink hover:text-muted">
          All case studies →
        </Link>
      </div>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {proof.map((p) => (
          <li key={p.href} className="min-w-0">
            <Link
              href={p.href}
              className="flex h-full flex-col gap-2.5 rounded-[18px] border border-line bg-white p-5 text-ink transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:shadow-[0_34px_60px_-46px_rgba(0,0,0,0.45)] sm:p-6"
            >
              <span className="font-mono text-[9.5px] tracking-[0.14em] text-muted">{p.industry}</span>
              <CountUp value={p.value} count={p.count} className="text-[clamp(34px,3.6vw,50px)] leading-none font-medium tracking-[-0.045em] tabular-nums" />
              <span className="max-w-[32ch] text-sm leading-[1.45]">{p.line}</span>
              <span className="mt-auto pt-1.5 text-[12.5px] text-muted">{p.title} case study ↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
