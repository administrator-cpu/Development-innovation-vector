'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { shots, statusTone } from '@/lib/shots';

/**
 * Interactive product-screenshot browser: product tabs, module rail, search,
 * KPI filters and a sortable table. Client Component by necessity — everything
 * else on the page stays server-rendered.
 */
export default function LookInsideSection() {
  const [shotIdx, setShotIdx] = useState(0);
  const [navIdx, setNavIdx] = useState(1);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState({ idx: null, dir: 1 });

  const shot = shots[shotIdx];

  const resetTo = (index) => {
    setShotIdx(index);
    setNavIdx(1);
    setQuery('');
    setFilter('All');
    setSort({ idx: null, dir: 1 });
  };

  const statuses = useMemo(() => {
    if (shot.statusIdx < 0) return [];
    return [...new Set(shot.rows.map((row) => row[shot.statusIdx]))];
  }, [shot]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = shot.rows.filter((row) => {
      const matchesQuery = !q || row.join(' ').toLowerCase().includes(q);
      const matchesFilter =
        filter === 'All' || (shot.statusIdx >= 0 && row[shot.statusIdx] === filter);
      return matchesQuery && matchesFilter;
    });

    if (sort.idx !== null) {
      const toNumber = (value) => {
        const n = parseFloat(String(value).replace(/[^0-9.-]/g, ''));
        return Number.isNaN(n) ? null : n;
      };
      list = [...list].sort((a, b) => {
        const x = a[sort.idx];
        const y = b[sort.idx];
        const nx = toNumber(x);
        const ny = toNumber(y);
        if (nx !== null && ny !== null) return (nx - ny) * sort.dir;
        return String(x).localeCompare(String(y)) * sort.dir;
      });
    }
    return list;
  }, [shot, query, filter, sort]);

  const toggleSort = (idx) =>
    setSort((prev) => (prev.idx === idx ? { idx, dir: -prev.dir } : { idx, dir: 1 }));

  return (
    <section id="inside" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em]">
          Look <span className="font-serif font-normal italic">inside</span>
        </h2>
        <p className="max-w-[34ch] text-[14.5px] leading-[1.5] text-muted">
          Real screens from software already running. Demo data shown.
        </p>
      </div>

      <div role="tablist" aria-label="Product screenshots" className="mb-4 flex flex-wrap gap-1.5">
        {shots.map((item, index) => {
          const active = index === shotIdx;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => resetTo(index)}
              className={`rounded-full border px-4 py-2.5 text-[13px] whitespace-nowrap transition-all duration-300 ${
                active ? 'border-navy bg-navy text-white' : 'border-hairline bg-transparent text-muted hover:border-navy/40'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-[20px] border border-line bg-white p-2.5 shadow-[0_44px_80px_-60px_rgba(0,0,0,0.4)] sm:rounded-3xl sm:p-3.5">
        <div className="overflow-hidden rounded-[13px] border border-[#EFECE5] bg-white sm:rounded-[17px]">
          <div className="flex items-center gap-3 border-b border-[#F3F0E9] bg-[#FAF8F4] px-3 py-2.5">
            <div aria-hidden="true" className="flex flex-none gap-1.5">
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
            </div>
            <span className="min-w-0 flex-1 truncate rounded-full border border-[#EFECE5] bg-white px-3 py-1.5 font-mono text-[11px] text-[#8B8595]">
              {shot.url}
            </span>
            <span className="inline-flex flex-none items-center gap-1.5 text-[11px] text-[#8B8595]">
              <span aria-hidden="true" className="animate-pulse-dot block h-1.5 w-1.5 rounded-full bg-rose" />
              live
            </span>
          </div>

          <div className="flex min-h-[430px] bg-paper text-xs text-[#2A2730] lg:min-h-[580px]">
            <nav
              aria-label={`${shot.label} modules`}
              className="flex w-[54px] flex-none flex-col items-center gap-1.5 border-r border-[#EFECE5] bg-white py-3"
            >
              <span aria-hidden="true" style={{ background: shot.accent }} className="mb-2 h-[26px] w-[26px] rounded-[7px]" />
              {shot.nav.map(([short, full], index) => {
                const active = index === navIdx;
                return (
                  <button
                    key={short}
                    type="button"
                    onClick={() => setNavIdx(index)}
                    aria-label={full}
                    aria-current={active ? 'page' : undefined}
                    className={`h-[30px] w-[34px] rounded-lg border font-mono text-[9.5px] tracking-[0.04em] transition-all ${
                      active ? 'border-navy bg-navy text-white' : 'border-[#EFECE5] bg-white text-[#8B8595]'
                    }`}
                  >
                    {short}
                  </button>
                );
              })}
            </nav>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-2 border-b border-[#EFECE5] bg-white px-3 py-2.5">
                <label className="min-w-0 flex-1">
                  <span className="sr-only">{shot.searchHint}</span>
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={shot.searchHint}
                    className="w-full min-w-0 rounded-full border border-[#EFECE5] bg-paper px-3 py-2 text-[11.5px] text-[#2A2730] outline-none focus:border-navy"
                  />
                </label>
                <span
                  aria-hidden="true"
                  style={{ background: shot.accent }}
                  className="flex-none rounded-full px-3.5 py-2 text-[11px] font-medium whitespace-nowrap text-white"
                >
                  + {shot.action}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2.5 p-3">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {shot.kpis.map((kpi) => {
                    const active = filter === kpi.filter && kpi.filter !== 'All';
                    return (
                      <button
                        key={kpi.label}
                        type="button"
                        onClick={() => setFilter(active ? 'All' : kpi.filter)}
                        aria-pressed={active}
                        className={`flex flex-col gap-1.5 rounded-xl border bg-white px-3 py-2.5 text-left transition-all ${
                          active ? 'border-navy shadow-[0_10px_22px_-18px_rgba(0,0,0,0.6)]' : 'border-[#EFECE5]'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span aria-hidden="true" style={{ background: kpi.tone }} className="block h-[7px] w-[7px] rounded-sm" />
                          <span className="text-[10.5px] text-muted">{kpi.label}</span>
                        </span>
                        <span className="text-xl leading-none font-medium tracking-[-0.03em]">{kpi.value}</span>
                        <span className="font-mono text-[9.5px] text-[#9A94A6]">{kpi.sub}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className="mr-auto text-xs font-medium">
                    {navIdx === 1 ? shot.tableTitle : `${shot.nav[navIdx][1]} · ${shot.tableTitle}`}{' '}
                    <span className="font-normal text-[#9A94A6]">· {rows.length} records</span>
                  </h3>
                  {['All', ...statuses].map((status) => {
                    const active = filter === status;
                    return (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFilter(status)}
                        aria-pressed={active}
                        className={`rounded-full border px-2.5 py-1.5 text-[10.5px] transition-all ${
                          active ? 'border-navy bg-navy text-white' : 'border-[#EFECE5] bg-white text-muted'
                        }`}
                      >
                        {status}
                      </button>
                    );
                  })}
                </div>

                <div className="flex min-h-0 flex-1 flex-col overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-xl border border-[#EFECE5] bg-white" data-lenis-prevent>
                  <div role="table" aria-label={shot.tableTitle} className="min-w-[600px]">
                    <div
                      role="row"
                      style={{ gridTemplateColumns: shot.grid }}
                      className="grid gap-2.5 border-b border-[#F3F0E9] bg-paper px-3 py-2.5"
                    >
                      {shot.cols.map((col, index) => (
                        <button
                          key={col.label}
                          type="button"
                          role="columnheader"
                          aria-sort={sort.idx === index ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'}
                          onClick={() => toggleSort(index)}
                          className={`truncate font-mono text-[9px] tracking-[0.1em] ${
                            col.align === 'right' ? 'text-right' : 'text-left'
                          } ${sort.idx === index ? 'text-[#2A2730]' : 'text-[#9A94A6]'}`}
                        >
                          {col.label}
                          {sort.idx === index ? (sort.dir === 1 ? ' ↑' : ' ↓') : ''}
                        </button>
                      ))}
                    </div>

                    <div className="max-h-[340px] overflow-auto">
                      {rows.map((row) => (
                        <div
                          key={row[0]}
                          role="row"
                          style={{ gridTemplateColumns: shot.grid }}
                          className="grid gap-2.5 border-b border-[#F6F3ED] px-3 py-2 hover:bg-paper"
                        >
                          {shot.cols.map((col, index) => (
                            <span
                              key={col.label}
                              role="cell"
                              style={{ color: col.tone ?? (index === shot.statusIdx ? '#2A2730' : undefined) }}
                              className={`flex min-w-0 items-center gap-1.5 truncate text-[10.5px] ${
                                col.mono ? 'font-mono' : ''
                              } ${col.align === 'right' ? 'justify-end text-right' : 'justify-start'} ${
                                col.tone || index === shot.statusIdx ? '' : 'text-muted'
                              }`}
                            >
                              {index === shot.statusIdx ? (
                                <span
                                  aria-hidden="true"
                                  style={{ background: statusTone[row[index]] ?? '#9A94A6' }}
                                  className="block h-[5px] w-[5px] flex-none rounded-full"
                                />
                              ) : null}
                              {row[index]}
                            </span>
                          ))}
                        </div>
                      ))}
                      {rows.length === 0 ? (
                        <p className="px-3 py-9 text-center text-[11px] text-[#9A94A6]">
                          No records match that filter.
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 max-w-[70ch] text-sm text-muted">{shot.caption}</p>

      <div className="relative mt-6 flex flex-wrap items-center gap-8 overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#363C45_0%,#1D2026_70%)] p-6 sm:rounded-[26px] sm:p-12">
        <Image
          src="/images/mobile-app-development-india-background.jpg"
          alt="Dusk sky over an open field behind DIV’s customer mobile app screens"
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.8),rgba(20,34,54,0.5))]" />
        <div className="relative z-10 min-w-0 flex-1 basis-[300px]">
          <span className="font-mono text-[10px] tracking-[0.18em] text-lime">MOBILE</span>
          <h3 className="mt-3.5 mb-3 max-w-[22ch] text-[clamp(22px,2.6vw,36px)] leading-[1.08] font-medium tracking-[-0.035em] text-white">
            Your customers get an app,{' '}
            <span className="font-serif font-normal italic">not a phone number</span>
          </h3>
          <p className="max-w-[40ch] text-[14.5px] leading-[1.55] text-white/90">
            Samadhan puts the ticket, the SLA clock and the agent in their pocket — same data your desk
            sees.
          </p>
        </div>
        <div className="relative z-10 flex min-w-0 flex-1 basis-[340px] justify-center gap-4">
          <Image
            src="/images/shots/samadhan-helpdesk-app-ticket-detail-sla.png"
            alt="Samadhan helpdesk mobile app showing a support ticket with its SLA countdown"
            width={360}
            height={740}
            sizes="180px"
            className="w-full max-w-[180px] -rotate-2 rounded-3xl border border-white/30 shadow-[0_44px_70px_-46px_rgba(0,0,0,0.8)]"
          />
          <Image
            src="/images/shots/samadhan-helpdesk-app-ticket-list.png"
            alt="Samadhan helpdesk mobile app showing a customer’s list of support tickets"
            width={360}
            height={740}
            sizes="180px"
            className="w-full max-w-[180px] rotate-2 rounded-3xl border border-white/30 shadow-[0_44px_70px_-46px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </section>
  );
}
