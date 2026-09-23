import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

const tones = {
  light: { shell: 'bg-white text-ink', dot: 'bg-ink text-white' },
  dark: { shell: 'bg-ink text-white', dot: 'bg-white text-ink' },
  navy: { shell: 'bg-navy text-white', dot: 'bg-lime text-ink' },
};

/**
 * Pill-shaped CTA with the rotating arrow chip. Pure CSS hover/focus — stays a
 * Server Component so no JS is shipped for the interaction.
 */
export default function PillButton({ href, children, tone = 'light', className = '', ariaLabel }) {
  const t = tones[tone] ?? tones.light;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-3.5 rounded-full py-2 pr-2 pl-6 text-[14.5px] font-medium whitespace-nowrap shadow-[0_18px_44px_-24px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 ${t.shell} ${className}`}
    >
      {children}
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-45 group-focus-visible:rotate-45 ${t.dot}`}
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}
