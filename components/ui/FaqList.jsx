/**
 * Native <details> accordion: zero JS, fully crawlable, keyboard accessible.
 * Pair with faqLd(items) from lib/seo for FAQPage schema.
 */
export default function FaqList({ items, title = 'Questions', accent = 'CTOs ask' }) {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pt-16 sm:px-10 sm:pt-28">
      <div className="flex flex-wrap items-start gap-6 lg:gap-[70px]">
        <h2 className="min-w-0 flex-1 basis-[240px] text-[clamp(28px,4vw,54px)] leading-[1.04] font-medium tracking-[-0.04em] text-balance">
          {title} <span className="font-serif font-normal italic">{accent}</span>
        </h2>
        <div className="min-w-0 flex-[1.6] basis-[400px]">
          {items.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-center gap-5 py-5 text-ink [&::-webkit-details-marker]:hidden">
                <h3 className="flex-1 text-[clamp(15.5px,1.3vw,18px)] font-normal tracking-[-0.02em]">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="inline-flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border border-hairline text-[15px] leading-none transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[60ch] pr-10 pb-5 text-sm leading-[1.65] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
