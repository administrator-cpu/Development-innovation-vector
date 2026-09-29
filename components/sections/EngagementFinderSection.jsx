'use client';

import { useMemo, useState } from 'react';
import { fitQuestions } from '@/lib/content';
import { siteConfig } from '@/lib/siteConfig';

function result(answers) {
  const n = Object.keys(answers).length;
  const done = n === fitQuestions.length;
  const score = Object.values(answers).reduce((t, a) => t + a.score, 0);
  if (!done) return { done, n, kicker: 'YOUR MATCH', head: 'Answer all four to see a match', reason: 'Nothing is sent anywhere — this runs in your browser.', tone: 'bg-[#F3F0E9] text-ink' };
  if (score <= 2) return { done, n, kicker: 'YOUR MATCH · START', head: 'Start — one process', reason: 'One product configured, your sheets migrated and your team trained in weeks. The rest plugs in later.', tone: 'bg-[#F3F0E9] text-ink', cta: 'Scope it with us' };
  if (score >= 6) return { done, n, kicker: 'YOUR MATCH · PLATFORM', head: 'Platform — the whole operation', reason: 'Several teams and systems need one record, mobile access and 24/7 cover from a named engineer.', tone: 'bg-navy text-white', cta: 'Book a session' };
  return { done, n, kicker: 'YOUR MATCH · START, BUILT TO GROW', head: 'Start now, wired for Platform', reason: 'Begin with the process that hurts most. We model the record so the next products connect without a rebuild.', tone: 'bg-[#E6EDDD] text-ink', cta: 'Scope it with us' };
}

export default function EngagementFinderSection() {
  const [answers, setAnswers] = useState({});
  const r = useMemo(() => result(answers), [answers]);
  const pct = Math.round((r.n / fitQuestions.length) * 100);
  const text = `Hi DIV, your engagement finder suggested: ${r.head}. I'd like to discuss it.`;

  return (
    <section id="fit" aria-labelledby="fit-heading" className="mx-auto max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="flex flex-wrap gap-8 rounded-[20px] border border-line bg-white p-6 sm:rounded-[26px] sm:p-12 lg:gap-16">
        <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3.5">
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted">ENGAGEMENT FINDER</span>
          <h2 id="fit-heading" className="text-[clamp(26px,3vw,42px)] leading-[1.05] font-medium tracking-[-0.04em] text-balance">
            Not sure which one <span className="font-serif font-normal italic">fits?</span>
          </h2>
          <p className="max-w-[36ch] text-[14.5px] leading-[1.55] text-muted">
            Four questions. We&rsquo;ll point you at Start or Platform before you talk to anyone.
          </p>
          <div className="mt-auto flex items-center gap-2.5">
            <div role="progressbar" aria-label="Questions answered" aria-valuemin={0} aria-valuemax={fitQuestions.length} aria-valuenow={r.n} className="h-1 max-w-[180px] flex-1 overflow-hidden rounded bg-line">
              <div style={{ width: `${pct}%` }} className="h-1 bg-ink transition-[width] duration-500 ease-[cubic-bezier(.16,1,.3,1)]" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted">{r.n} / {fitQuestions.length}</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1.6_1_420px] flex-col gap-4.5">
          {fitQuestions.map((q, qi) => (
            <fieldset key={q.q} className="m-0 flex flex-col gap-2.5 border-0 p-0">
              <legend className="mb-2.5 p-0 text-[14.5px] tracking-[-0.015em]">{q.q}</legend>
              <div className="flex flex-wrap gap-1.5">
                {q.opts.map(([label, score]) => {
                  const on = answers[qi]?.label === label;
                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: { label, score } }))}
                      className={`min-h-11 cursor-pointer rounded-full border px-4 py-2.5 text-[13px] transition-all duration-300 ${
                        on ? 'border-ink bg-ink text-white' : 'border-hairline bg-white text-ink hover:border-ink/40'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div aria-live="polite" className={`mt-1.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5 rounded-2xl p-5 transition-colors duration-400 ${r.tone}`}>
            <div className="min-w-0 flex-[1_1_260px]">
              <p className="font-mono text-[9.5px] tracking-[0.14em] opacity-80">{r.kicker}</p>
              <p className="mt-2 text-[clamp(19px,1.8vw,24px)] font-medium tracking-[-0.03em]">{r.head}</p>
              <p className="mt-1.5 max-w-[48ch] text-[13px] leading-[1.5] opacity-90">{r.reason}</p>
            </div>
            {r.done ? (
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-none items-center gap-2.5 rounded-full bg-lime px-5 py-3 text-sm font-medium whitespace-nowrap text-ink"
              >
                {r.cta} on WhatsApp →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
