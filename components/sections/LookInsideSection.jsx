'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { shots as allShots, statusTone } from '@/lib/shots';

// Lead with the three flagship products.
const ORDER = ['Connect CRM', 'Samadhan', 'Bharat RADIUS', 'BahiKhata', 'InvoicePro'];
const shots = [...allShots].sort((a, b) => {
  const ia = ORDER.indexOf(a.label), ib = ORDER.indexOf(b.label);
  return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

/** Open a product screen from anywhere on the page (used by the products grid). */
export const openShot = (label) => window.dispatchEvent(new CustomEvent('div:open-shot', { detail: label }));

const MONO = 'font-mono';
const num = (v) => {
  const n = parseFloat(String(v).replace(/[^0-9.-]/g, ''));
  return Number.isNaN(n) ? null : n;
};
const BUCKET_COL = { Current: 3, '30+ days': 4, '60+ days': 5, '90+ days': 6 };

function useClock() {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const tick = () =>
      setClock(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' }) + ' IST');
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return clock;
}

export default function LookInsideSection() {
  const [shotIdx, setShotIdx] = useState(0);
  const [navIdx, setNavIdx] = useState(1);
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState({ idx: null, dir: 1 });
  const [detail, setDetail] = useState(null);
  const clock = useClock();

  const D = shots[shotIdx];
  const R = D.rail;
  const si = D.statusIdx;
  const nav = Math.min(navIdx, D.nav.length - 1);

  const resetTo = (i) => {
    setShotIdx(i); setNavIdx(1); setTab(0); setQuery(''); setFilter('All'); setSort({ idx: null, dir: 1 }); setDetail(null);
  };
  const pickFilter = (f) => { setFilter((cur) => (cur === f ? 'All' : f)); setDetail(null); };

  useEffect(() => {
    const onOpen = (e) => {
      const i = shots.findIndex((s) => s.label === e.detail);
      if (i < 0) return;
      resetTo(i);
      const el = document.getElementById('inside');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: 'smooth' });
    };
    window.addEventListener('div:open-shot', onOpen);
    return () => window.removeEventListener('div:open-shot', onOpen);
  }, []);

  const statuses = useMemo(() => {
    if (R) return ['Overdue only', '30+ days', '60+ days', '90+ days'];
    return [...new Set(D.rows.map((r) => r[si]))];
  }, [D, R, si]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const nz = (v) => num(v) > 0;
    const keep = (r) => {
      if (filter === 'All') return true;
      if (R) {
        if (filter === 'Overdue only') return nz(r[4]) || nz(r[5]) || nz(r[6]);
        const bi = BUCKET_COL[filter];
        return bi == null ? true : nz(r[bi]);
      }
      return r[si] === filter;
    };
    let list = D.rows.map((r, i) => ({ r, i })).filter((o) => keep(o.r) && (!q || o.r.join(' ').toLowerCase().includes(q)));
    if (sort.idx !== null) {
      list = [...list].sort((a, b) => {
        const x = a.r[sort.idx], y = b.r[sort.idx], nx = num(x), ny = num(y);
        if (nx !== null && ny !== null) return (nx - ny) * sort.dir;
        return String(x).localeCompare(String(y)) * sort.dir;
      });
    }
    return list;
  }, [D, R, si, query, filter, sort]);

  const det = detail == null ? null : D.rows[detail];
  const kpiMode = !R && !D.stages;

  const cellColor = (c, i, v) => {
    if (c[3]) return num(v) > 0 ? c[3] : '#C9C4BC';
    if (i === si) return '#2A2730';
    if (i === 0 && R) return '#2A2730';
    if (i === 1 && !R) return '#2A2730';
    return '#6B6577';
  };

  return (
    <section id="inside" className="mx-auto max-w-[1320px] px-5 pt-16 sm:px-10 sm:pt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2 className="text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em]">
          Look <span className="font-serif font-normal italic">inside</span>
        </h2>
        <p className="max-w-[34ch] text-[14.5px] leading-[1.5] text-muted">
          Test-drive real screens before you book anything. Click the tiles, filter, sort, open a record. Demo data shown.
        </p>
      </div>

      <div role="tablist" aria-label="Product screens" className="mb-4 flex flex-wrap gap-1.5 sm:mb-5">
        {shots.map((item, i) => {
          const on = i === shotIdx;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => resetTo(i)}
              className={`cursor-pointer rounded-full border px-[17px] py-[9px] text-[13px] whitespace-nowrap transition-all duration-300 ${
                on ? 'border-navy bg-navy text-white' : 'border-hairline bg-transparent text-muted hover:border-navy/40'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-[16px] border border-line bg-white p-[9px] shadow-[0_44px_80px_-60px_rgba(0,0,0,0.4)] sm:rounded-3xl sm:p-3.5">
        <div className="overflow-hidden rounded-[11px] border border-[#EFECE5] bg-white sm:rounded-[17px]">
          <div className="flex items-center gap-3 border-b border-[#F3F0E9] bg-[#FAF8F4] px-[13px] py-2.5">
            <div aria-hidden="true" className="flex flex-none gap-1.5">
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
              <span className="block h-[9px] w-[9px] rounded-full bg-[#E6E2DA]" />
            </div>
            <span className="min-w-0 flex-1 truncate rounded-full border border-[#EFECE5] bg-white px-3 py-[5px] font-mono text-[11px] text-muted">{D.url}</span>
            <span className="inline-flex flex-none items-center gap-[7px] text-[11px] text-muted">
              <span aria-hidden="true" className="animate-pulse-dot block h-1.5 w-1.5 rounded-full bg-rose" />
              live
            </span>
          </div>

          <div className="relative flex min-h-[clamp(430px,46vw,580px)] bg-paper text-xs text-[#2A2730]">
            <nav aria-label={`${D.label} modules`} className="flex w-[54px] flex-none flex-col items-center gap-1.5 border-r border-[#EFECE5] bg-white py-3">
              <span aria-hidden="true" style={{ background: D.accent }} className="mb-2 h-[26px] w-[26px] rounded-[7px]" />
              {D.nav.map(([k, full], i) => {
                const on = i === nav;
                return (
                  <button
                    key={k}
                    type="button"
                    title={full}
                    aria-label={full}
                    aria-current={on ? 'page' : undefined}
                    onClick={() => { setNavIdx(i); setFilter('All'); setQuery(''); setDetail(null); setSort({ idx: null, dir: 1 }); }}
                    className={`h-[30px] w-[34px] cursor-pointer rounded-lg border font-mono text-[9.5px] tracking-[0.04em] transition-all ${
                      on ? 'border-navy bg-navy text-white' : 'border-[#EFECE5] bg-white text-muted'
                    }`}
                  >
                    {k}
                  </button>
                );
              })}
            </nav>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-2 border-b border-[#EFECE5] bg-white px-3 py-[9px]">
                <div className="flex flex-none gap-[3px] rounded-full bg-[#F3F0E9] p-[3px]">
                  {(D.tabs || ['Overview']).map((t, i) => {
                    const on = i === tab;
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={on}
                        onClick={() => { setTab(i); setFilter('All'); setDetail(null); }}
                        className={`cursor-pointer rounded-full border-0 px-[13px] py-1.5 text-[11px] transition-all ${
                          on ? 'bg-white text-[#2A2730] shadow-[0_2px_6px_-3px_rgba(0,0,0,0.35)]' : 'bg-transparent text-muted'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
                <label className="min-w-0 flex-[1_1_140px]">
                  <span className="sr-only">{D.searchHint}</span>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setDetail(null); }}
                    placeholder={D.searchHint}
                    className="w-full min-w-0 rounded-full border border-[#EFECE5] bg-paper px-3 py-[7px] text-[11.5px] text-[#2A2730] outline-none focus:border-navy"
                  />
                </label>
                <span suppressHydrationWarning className="flex-none font-mono text-[11px] text-muted">{clock}</span>
                <span aria-hidden="true" style={{ background: D.accent }} className="flex-none rounded-full px-3.5 py-[7px] text-[11px] font-medium whitespace-nowrap text-white">
                  + {D.action}
                </span>
              </div>

              <div className="flex min-h-0 flex-1 flex-wrap gap-2.5 p-3">
                {R ? (
                  <div className="flex max-w-[250px] min-w-[170px] flex-[1_1_190px] flex-col gap-2">
                    <div className="rounded-xl border border-[#F2E8D3] bg-[linear-gradient(160deg,#FDF6E6,#FBF3E2)] px-[13px] pt-[13px] pb-[15px]">
                      <div className="font-mono text-[8.5px] tracking-[0.16em] text-[#7A6A4B]">{R.headLabel}</div>
                      <div className="mt-[7px] text-[clamp(20px,2vw,26px)] leading-none font-medium tracking-[-0.035em]">{R.headValue}</div>
                      <div className="mt-2 text-[10.5px] text-[#7A6A4B]">{R.headSub}</div>
                      <div aria-hidden="true" className="mt-[11px] flex h-[7px] gap-px overflow-hidden rounded">
                        {R.bar.map(([w, tone]) => <span key={w + tone} style={{ width: w, background: tone }} className="block" />)}
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#EFECE5] bg-white px-[11px] py-[3px]">
                      {R.buckets.map(([l, v, pct, tone], i) => (
                        <button
                          key={l}
                          type="button"
                          aria-pressed={filter === l}
                          onClick={() => pickFilter(l)}
                          className={`flex w-full cursor-pointer items-center gap-2 border-0 bg-transparent py-[9px] text-left ${i === R.buckets.length - 1 ? '' : 'border-b border-[#F6F3ED]'}`}
                        >
                          <span aria-hidden="true" style={{ background: tone }} className="block h-[7px] w-[7px] flex-none rounded-full" />
                          <span className={`min-w-0 flex-1 truncate text-[11px] ${filter === l ? 'text-[#2A2730]' : 'text-muted'}`}>{l}</span>
                          <span className="flex-none font-mono text-[10.5px] text-[#2A2730]">{v}</span>
                          <span className="flex-none text-[9px] text-muted">{pct}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-[0_1_84px] rounded-xl border border-[#EFECE5] bg-white p-[11px]">
                        <div className="font-mono text-[8.5px] tracking-[0.14em] text-muted">{R.tileLabel}</div>
                        <div className="mt-2 text-[22px] leading-none font-medium tracking-[-0.04em]">{R.tileValue}</div>
                      </div>
                      <div className="min-w-0 flex-auto rounded-xl border border-[#F6DED8] bg-[#FDF1EE] p-[11px]">
                        <div className="font-mono text-[8.5px] tracking-[0.14em] text-[#A8432D]">! {R.alertLabel}</div>
                        <div className="mt-2 text-[17px] leading-none font-medium tracking-[-0.035em] text-[#B3341F]">{R.alertValue}</div>
                        <div className="mt-[7px] text-[10px] leading-[1.35] text-[#A34A36]">{R.alertSub}</div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="flex min-w-0 flex-[3_1_330px] flex-col gap-2.5">
                  {D.banner ? (
                    <div className="flex flex-wrap items-center justify-between gap-3.5 rounded-[14px] bg-[linear-gradient(120deg,#1C2A3B_0%,#141C28_100%)] px-4 py-3.5">
                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-2">
                          <span className="text-[11px] text-white/75">{D.banner.label}</span>
                          <span className="rounded-full bg-white/10 px-[9px] py-1 text-[9.5px] whitespace-nowrap text-[#FFB9A8]">{D.banner.delta}</span>
                        </span>
                        <div className="mt-2 flex items-baseline gap-1.5 text-white">
                          <span className="text-[clamp(22px,2.4vw,32px)] leading-none font-medium tracking-[-0.04em]">{D.banner.value}</span>
                          <span className="text-xs text-white/70">{D.banner.unit}</span>
                        </div>
                      </div>
                      <div aria-hidden="true" className="flex h-[38px] items-end gap-0.5">
                        {D.banner.bars.map(([h, tone], i) => <span key={i} style={{ height: h, background: tone }} className="block w-1 rounded-sm" />)}
                        <span className="ml-2 font-mono text-[9.5px] text-white/70">{D.banner.stamp}</span>
                      </div>
                    </div>
                  ) : null}

                  {D.stages ? (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(138px,1fr))] gap-2">
                      {D.stages.map((s) => {
                        const on = filter === s.f;
                        return (
                          <button
                            key={s.l}
                            type="button"
                            aria-pressed={on}
                            onClick={() => pickFilter(s.f)}
                            style={{ background: s.bg, borderColor: on ? D.accent : s.border }}
                            className="flex cursor-pointer flex-col gap-2 rounded-[14px] border px-3 pt-[11px] pb-3 text-left transition-all duration-300"
                          >
                            <span className="flex items-center gap-1.5">
                              <span style={{ background: s.badgeBg, color: s.badgeInk === '#8B8595' ? '#5A5464' : s.badgeInk }} className="flex h-[19px] w-[19px] items-center justify-center rounded-md font-mono text-[10px]">{s.n}</span>
                              <span className="rounded-full bg-white/75 px-[7px] py-[3px] text-[9px] text-muted">{s.delta}</span>
                            </span>
                            <span className="text-[11.5px] font-medium tracking-[-0.015em] text-[#2A2730]">{s.l}</span>
                            <span className="text-[9.5px] leading-[1.35] text-muted">{s.sub}</span>
                            <span className="mt-0.5 flex items-end justify-between gap-2">
                              <span className="text-2xl leading-none font-medium tracking-[-0.04em] text-navy">{s.v}</span>
                              <span aria-hidden="true" className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-navy text-[10px] text-white">↗</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  {kpiMode ? (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(128px,1fr))] gap-2">
                      {(D.kpis || []).map((k) => {
                        const on = filter === k.f;
                        return (
                          <button
                            key={k.l}
                            type="button"
                            aria-pressed={on}
                            onClick={() => pickFilter(k.f)}
                            style={{ borderColor: on ? D.accent : '#EFECE5' }}
                            className={`flex cursor-pointer flex-col gap-[7px] rounded-[11px] border bg-white px-[11px] pt-2.5 pb-[11px] text-left transition-all duration-300 ${on ? 'shadow-[0_10px_22px_-18px_rgba(0,0,0,0.6)]' : ''}`}
                          >
                            <span className="flex items-center gap-1.5">
                              <span aria-hidden="true" style={{ background: k.tone }} className="block h-[7px] w-[7px] rounded-sm" />
                              <span className="text-[10.5px] tracking-[-0.01em] text-muted">{k.l}</span>
                            </span>
                            <span className="text-xl leading-none font-medium tracking-[-0.03em]">{k.v}</span>
                            <span className="font-mono text-[9.5px] text-muted">{k.s}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="mr-auto text-xs font-medium">
                      {nav === 1 ? D.tableTitle : `${D.nav[nav][1]} · ${D.tableTitle}`}{' '}
                      <span className="font-normal text-muted">· {rows.length} {rows.length === 1 ? 'record' : 'records'}</span>
                    </h3>
                    {['All', ...statuses].map((st) => {
                      const on = filter === st;
                      return (
                        <button
                          key={st}
                          type="button"
                          aria-pressed={on}
                          onClick={() => { setFilter(st); setDetail(null); }}
                          className={`cursor-pointer rounded-full border px-2.5 py-[5px] text-[10.5px] transition-all ${on ? 'border-navy bg-navy text-white' : 'border-[#EFECE5] bg-white text-muted'}`}
                        >
                          {st}
                        </button>
                      );
                    })}
                  </div>

                  <p aria-hidden="true" className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.12em] text-muted md:hidden">
                    SWIPE TO VIEW ALL COLUMNS <span className="text-xs">→</span>
                  </p>

                  <div className="flex min-h-0 flex-1 flex-col overflow-x-auto overflow-y-hidden overscroll-x-contain rounded-xl border border-[#EFECE5] bg-white" data-lenis-prevent>
                    <div role="table" aria-label={D.tableTitle} className="flex min-h-0 min-w-[620px] flex-1 flex-col">
                      <div role="row" style={{ gridTemplateColumns: D.grid }} className="grid gap-2.5 border-b border-[#F3F0E9] bg-paper px-3 py-[9px]">
                        {D.cols.map((c, i) => (
                          <button
                            key={c[0]}
                            type="button"
                            role="columnheader"
                            aria-sort={sort.idx === i ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'}
                            onClick={() => setSort((p) => (p.idx === i ? { idx: i, dir: -p.dir } : { idx: i, dir: 1 }))}
                            className={`cursor-pointer truncate border-0 bg-transparent p-0 font-mono text-[9px] tracking-[0.1em] whitespace-nowrap ${c[1] === 'r' ? 'text-right' : 'text-left'} ${sort.idx === i ? 'text-[#2A2730]' : 'text-muted'}`}
                          >
                            {c[0]}{sort.idx === i ? (sort.dir === 1 ? ' ↑' : ' ↓') : ''}
                          </button>
                        ))}
                      </div>
                      <div className="min-h-[120px] flex-1 overflow-auto" data-lenis-prevent>
                        {rows.map(({ r, i: ri }) => (
                          <div
                            key={r[0] + ri}
                            role="row"
                            tabIndex={0}
                            aria-label={`Open record ${r[0]}`}
                            onClick={() => setDetail((d) => (d === ri ? null : ri))}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDetail((d) => (d === ri ? null : ri)); } }}
                            style={{ gridTemplateColumns: D.grid }}
                            className={`grid cursor-pointer gap-2.5 border-b border-[#F6F3ED] px-3 py-2 transition-colors hover:bg-paper ${detail === ri ? 'bg-paper' : 'bg-white'}`}
                          >
                            {D.cols.map((c, i) => {
                              const v = r[i];
                              return (
                                <span
                                  key={c[0]}
                                  role="cell"
                                  style={{ color: cellColor(c, i, v) }}
                                  className={`flex min-w-0 items-center gap-[5px] truncate text-[10.5px] ${c[2] ? MONO : ''} ${c[1] === 'r' ? 'justify-end text-right' : 'justify-start text-left'}`}
                                >
                                  {i === si ? <span aria-hidden="true" style={{ background: statusTone[v] || '#9A94A6' }} className="block h-[5px] w-[5px] flex-none rounded-full" /> : null}
                                  {c[4] === 'av' ? (
                                    <span aria-hidden="true" className="flex h-[19px] w-[19px] flex-none items-center justify-center rounded-md bg-[#F1EEF8] font-mono text-[8.5px] text-[#6B6289]">
                                      {String(v).split(' ').slice(0, 2).map((w) => w[0]).join('')}
                                    </span>
                                  ) : null}
                                  {c[4] === 'pill' ? (
                                    <span className="rounded-[7px] border border-[#EFECE5] bg-white px-[9px] py-1 text-[9.5px] text-[#2A2730]">{v}</span>
                                  ) : (
                                    <span className="truncate">{v}</span>
                                  )}
                                </span>
                              );
                            })}
                          </div>
                        ))}
                        {rows.length === 0 ? <p className="px-3 py-[34px] text-center text-[11px] text-muted">No records match that filter.</p> : null}
                      </div>
                      {D.totals ? (
                        <div style={{ gridTemplateColumns: D.grid }} className="grid gap-2.5 border-t border-[#EFECE5] bg-[#FBF7EE] px-3 py-2.5">
                          {D.totals.map((v, i) => (
                            <span
                              key={i}
                              style={{ color: i === 0 ? '#7A6A4B' : D.cols[i][3] || '#2A2730' }}
                              className={`truncate ${i === 0 ? 'font-mono text-[9px] tracking-[0.12em]' : `text-[11px] tracking-[-0.01em] ${D.cols[i][2] ? MONO : ''}`} ${D.cols[i][1] === 'r' ? 'text-right' : 'text-left'}`}
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {det ? (
              <div role="dialog" aria-label={`Record ${det[0]}`} className="absolute top-0 right-0 bottom-0 z-[3] flex w-[min(320px,82%)] flex-col border-l border-[#EFECE5] bg-white shadow-[-30px_0_60px_-40px_rgba(0,0,0,0.4)]">
                <div className="flex items-start gap-2.5 border-b border-[#F3F0E9] p-3.5">
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9px] tracking-[0.12em] text-muted">RECORD</div>
                    <div className="mt-[5px] truncate text-sm font-medium tracking-[-0.02em]">{det[0]}</div>
                  </div>
                  <button type="button" aria-label="Close record" onClick={() => setDetail(null)} className="h-[26px] w-[26px] flex-none cursor-pointer rounded-full border border-[#EFECE5] bg-white text-[13px] leading-none text-muted">×</button>
                </div>
                <div className="flex-1 overflow-auto px-3.5 pt-1.5 pb-3.5" data-lenis-prevent>
                  {D.cols.map((c, i) => (
                    <div key={c[0]} className="flex items-center gap-3 border-b border-[#F6F3ED] py-[9px]">
                      <span className="w-24 flex-none font-mono text-[9px] tracking-[0.08em] text-muted">{c[0]}</span>
                      <span className="min-w-0 flex-1 truncate text-right text-[11.5px]">{det[i]}</span>
                    </div>
                  ))}
                  <div className="mt-3.5 flex gap-2">
                    <span style={{ background: D.accent }} className="flex-1 rounded-[9px] p-[9px] text-center text-[11px] text-white">Open record</span>
                    <span className="flex-none rounded-[9px] border border-[#EFECE5] px-3 py-[9px] text-[11px] text-muted">Log</span>
                  </div>
                  <p className="mt-3 text-[10px] leading-[1.5] text-muted">Demo data. The live product writes to the same record across billing, support and provisioning.</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <p className="mt-3 max-w-[70ch] text-sm text-muted sm:mt-4">{D.cap}</p>

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
