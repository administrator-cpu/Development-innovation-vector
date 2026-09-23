import Link from 'next/link';
import { footerColumns } from '@/lib/content';
import { siteConfig, fullAddress } from '@/lib/siteConfig';

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1320px] px-5 pt-12 pb-8 sm:px-10 sm:pt-20 sm:pb-12">
      <div className="grid grid-cols-1 gap-6 border-b border-line pb-8 sm:grid-cols-2 sm:gap-11 lg:grid-cols-5">
        <div className="min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/core/DIV-Development-Innovation-Vector-logo.avif" alt="DIV-Development-Innovation-Vector-logo" width={55} height={18} className="mb-3 block h-[18px] w-auto" />
          <p className="max-w-[26ch] text-[13px] leading-[1.55] text-muted">
            Built, hosted and monitored by one team in India.
          </p>
          <address className="mt-5 flex flex-col gap-1.5 text-[13px] leading-[1.5] text-muted not-italic">
            <span>{fullAddress()}</span>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-ink">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">{siteConfig.email}</a>
          </address>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="min-w-0">
            <h2 className="mb-3 font-mono text-[9.5px] tracking-[0.16em] text-[#8B8595]">{column.title}</h2>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13.5px] text-muted transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div aria-hidden="true" className="mt-4 h-0.5 rounded-sm bg-[linear-gradient(90deg,#FF0B55_0%,#FF7A5C_46%,#FFB03B_100%)]" />

      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3.5 pt-4">
        <span className="font-mono text-[10px] tracking-[0.14em] text-[#8B8595]">© {new Date().getFullYear()} DEVELOPMENT INNOVATION VECTOR PVT LTD</span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-[#2A2730]">powered by DIV &lt;/&gt;</span>
        <a href="#main" className="font-mono text-[10px] tracking-[0.14em] whitespace-nowrap text-[#8B8595] hover:text-ink">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
