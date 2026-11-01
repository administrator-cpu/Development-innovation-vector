'use client';

import { useState } from 'react';
import { products, productGroups, productShot } from '@/lib/content';
import { openShot } from '@/components/sections/LookInsideSection';

const byName = Object.fromEntries(products.map((p) => [p.name, p]));

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const group = productGroups[active];

  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (active + (e.key === 'ArrowRight' ? 1 : -1) + productGroups.length) % productGroups.length;
    setActive(n);
    document.getElementById(`pg-tab-${n}`)?.focus();
  };

  return (
    <section id="products" aria-labelledby="products-heading" className="mt-16 px-3 sm:mt-28 sm:px-4">
      <div className="overflow-hidden rounded-[20px] bg-navy px-5 py-9 sm:rounded-[26px] sm:px-11 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <h2 id="products-heading" className="max-w-[24ch] text-[clamp(24px,3.2vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
            Thirteen products, <span className="font-serif font-normal italic">one team behind them</span>
          </h2>
          <p className="max-w-[36ch] text-sm leading-[1.5] text-white/80">
            Grouped by the work they run. Start with one group; the rest shares the same record.
          </p>
        </div>

        <div role="tablist" aria-label="Product groups" onKeyDown={onKey} className="mt-7 flex flex-wrap gap-1.5 sm:mt-10">
          {productGroups.map((g, i) => {
            const on = i === active;
            return (
              <button
                key={g.label}
                id={`pg-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="pg-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2.5 text-[13.5px] whitespace-nowrap transition-all duration-300 ${
                  on ? 'border-lime bg-lime text-ink' : 'border-white/30 bg-transparent text-white hover:border-white/60'
                }`}
              >
                {g.label}
                <span className="font-mono text-[10px] opacity-70">{g.items.length}</span>
              </button>
            );
          })}
        </div>

        <div id="pg-panel" role="tabpanel" aria-labelledby={`pg-tab-${active}`}>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-[1.5] text-white">{group.blurb}</p>
          <ul className="m-0 mt-5 grid list-none grid-cols-1 gap-px p-0 sm:grid-cols-2 lg:grid-cols-4">
            {group.items.map((name) => {
              const p = byName[name];
              const shot = productShot[name];
              return (
                <li key={name} className="flex min-h-[170px] min-w-0 flex-col gap-2.5 bg-navy p-5 outline outline-white/15 transition-colors duration-400 hover:bg-[#22303F] sm:p-6">
                  <span style={{ background: p.accent }} aria-hidden="true" className="block h-2 w-2 rounded-full" />
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[clamp(17px,1.5vw,20px)] font-normal tracking-[-0.025em] text-white">{p.name}</h3>
                    {p.tag ? (
                      <span className="rounded-full border border-white/30 px-[9px] py-[3px] text-[11px] text-white">{p.tag}</span>
                    ) : null}
                  </div>
                  <p className="text-[13px] leading-[1.45] text-white/75">{p.line}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                  {shot ? (
                    <button
                      type="button"
                      onClick={() => openShot(shot)}
                      className="inline-flex min-h-9 cursor-pointer items-center gap-2 self-start rounded-full bg-lime px-3.5 py-1.5 text-[12.5px] text-ink"
                    >
                      See {p.name} live <span aria-hidden="true">↗</span>
                    </button>
                  ) : null}
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-2 self-start rounded-full border border-white/40 px-3.5 py-1.5 text-[12.5px] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
                    >
                      {p.urlLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
