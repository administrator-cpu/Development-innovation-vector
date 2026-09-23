import Reveal from '@/components/motion/Reveal';

/**
 * Renders a legal/policy document from data.
 * Block types: string (paragraph) | { list: [] } | { table: { head: [], rows: [[]] } } | { note: '' }
 */
function Block({ block }) {
  if (typeof block === 'string') {
    return <p className="text-[15px] leading-[1.7] text-pretty text-[#3A3745]">{block}</p>;
  }
  if (block.list) {
    return (
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {block.list.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-[1.65] text-[#3A3745]">
            <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-rose" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.table) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[480px] border-collapse text-left text-[14px]">
          <thead>
            <tr>
              {block.table.head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-line px-5 py-3.5 font-mono text-[10.5px] font-normal tracking-[0.12em] text-muted uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr key={row.join('|')} className="border-b border-line last:border-0">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={cell} scope="row" className="px-5 py-4 font-medium text-ink">
                      {cell}
                    </th>
                  ) : (
                    <td key={`${i}-${cell}`} className="px-5 py-4 text-[#3A3745]">
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.note) {
    return (
      <p className="rounded-2xl border border-line bg-white px-5 py-4 text-[14px] leading-[1.6] text-muted">
        {block.note}
      </p>
    );
  }
  return null;
}

export default function LegalDoc({ doc }) {
  return (
    <div className="mx-auto max-w-[1320px] px-5 pt-10 sm:px-10 sm:pt-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
            Effective {doc.effective} · v{doc.version}
          </p>
          <nav aria-label="On this page" className="mt-5 hidden lg:block">
            <ol className="m-0 flex list-none flex-col gap-2 p-0">
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-3 text-[13.5px] leading-[1.4] text-muted hover:text-ink">
                    <span className="w-5 flex-none font-mono text-[11px] text-[#8B8595]">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-[760px]">
          {process.env.NODE_ENV !== 'production' && doc.draft ? (
            <p className="mb-8 rounded-2xl border border-amber/50 bg-amber/10 px-5 py-4 text-[13.5px] text-ink">
              Dev-only notice: this document is a draft pending legal review. Hidden in production.
            </p>
          ) : null}
          {doc.sections.map((s, i) => (
            <Reveal key={s.id} as="section" amount={0.1} className="scroll-mt-8 border-t border-line pt-8 pb-10 first:border-0 first:pt-0">
              <h2 id={s.id} className="flex gap-4 text-[clamp(20px,2vw,26px)] leading-[1.2] font-medium tracking-[-0.025em]">
                <span className="pt-1.5 font-mono text-[11px] tracking-normal text-[#8B8595]">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {s.body.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </div>
            </Reveal>
          ))}
        </article>
      </div>
    </div>
  );
}
