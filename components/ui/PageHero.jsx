import Eyebrow from './Eyebrow';

/**
 * Inner-page hero — the page's single <h1>. `title` is plain text; `accent`
 * renders in the serif italic on its own line.
 * CSS entrance (not the JS <Reveal>) so the H1 — usually the LCP element —
 * paints on first frame instead of waiting for hydration.
 */
export default function PageHero({ eyebrow, title, accent, lead, children, align = 'left' }) {
  const center = align === 'center';
  return (
    <section className={`mx-auto max-w-[1320px] px-5 pt-10 pb-4 sm:px-10 sm:pt-16 ${center ? 'text-center' : ''}`}>
      <div className="animate-rise">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1
          className={`mt-6 max-w-[20ch] text-[clamp(36px,6vw,84px)] leading-[0.98] font-medium tracking-[-0.05em] text-balance break-words ${center ? 'mx-auto' : ''}`}
        >
          {title}
          {accent ? <span className="block font-serif font-normal italic">{accent}</span> : null}
        </h1>
        {lead ? (
          <p
            className={`mt-6 max-w-[58ch] text-[clamp(15px,1.3vw,18px)] leading-[1.55] text-pretty text-muted ${center ? 'mx-auto' : ''}`}
          >
            {lead}
          </p>
        ) : null}
        {children ? (
          <div className={`mt-8 flex flex-wrap gap-2.5 ${center ? 'justify-center' : ''}`}>{children}</div>
        ) : null}
      </div>
    </section>
  );
}
