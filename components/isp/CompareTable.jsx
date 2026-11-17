/**
 * Feature comparison table (Bharat Radius vs daloRADIUS vs Excel). Scrolls sideways on
 * small screens. First column is the row header; the first product column is highlighted.
 */
export default function CompareTable({ compare, caption }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-[18px] border border-line bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left text-[14.5px]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="px-5 py-3 font-mono text-[10.5px] font-normal tracking-[0.12em] text-muted uppercase">
              Feature
            </th>
            {compare.columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`px-5 py-3 font-mono text-[10.5px] font-normal tracking-[0.12em] uppercase ${i === 0 ? 'text-ink' : 'text-muted'}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compare.rows.map(([label, ...cells]) => (
            <tr key={label} className="border-b border-line last:border-0">
              <th scope="row" className="px-5 py-4 font-medium">
                {label}
              </th>
              {cells.map((c, i) => (
                <td key={i} className={`px-5 py-4 ${i === 0 ? 'font-medium' : 'text-muted'}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
