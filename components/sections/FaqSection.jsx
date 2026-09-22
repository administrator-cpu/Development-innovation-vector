'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-[1120px] px-5 pt-16 sm:px-10 sm:pt-28">
      <div className="flex flex-wrap items-start gap-6 lg:gap-[70px]">
        <h2 className="min-w-0 flex-1 basis-[240px] text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
          Before <span className="font-serif font-normal italic">you ask</span>
        </h2>

        <dl className="min-w-0 flex-[1.6] basis-[400px]">
          {faq.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className="border-t border-line">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? -1 : index)}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center gap-5 py-5 text-left text-ink"
                  >
                    <span className="flex-1 text-[clamp(15.5px,1.3vw,18px)] tracking-[-0.02em]">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border border-hairline text-[15px] leading-none transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                        expanded ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${index}`}
                  className={`m-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                    expanded ? 'max-h-[240px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="max-w-[56ch] pt-0 pr-10 pb-5 text-sm leading-[1.6] text-muted">{item.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
