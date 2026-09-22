import { footerColumns } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1320px] px-5 pt-12 pb-8 sm:px-10 sm:pt-20 sm:pb-12">
      <div className="grid grid-cols-1 gap-6 border-b border-line pb-8 sm:grid-cols-2 sm:gap-11 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="h-[40px] w-[100px]">
            <img src="/core/Logo.webp" alt="DIV" width={58} height={19} className="block h-full object-cover w-full" />
          </div>
          <p className="max-w-[26ch] text-[13px] leading-[1.55] text-muted">
            Built, hosted and monitored by one team in India.
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="min-w-0">
            <h2 className="mb-3 font-mono text-[9.5px] tracking-[0.16em] text-[#8B8595]">{column.title}</h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13.5px] text-muted transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div aria-hidden="true" className="mt-4 h-0.5 rounded-sm bg-[linear-gradient(90deg,#FF0B55_0%,#FF7A5C_46%,#FFB03B_100%)]" />

      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3.5 pt-4">
        <span className="font-mono text-[10px] tracking-[0.14em] text-[#8B8595]">© 2026 DIV PRIVATE LIMITED</span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-[#2A2730]">powered by DIV &lt;/&gt;</span>
        <a href="#top" className="font-mono text-[10px] tracking-[0.14em] whitespace-nowrap text-[#8B8595] hover:text-ink">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
