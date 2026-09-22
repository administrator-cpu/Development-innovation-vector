import { siteConfig } from '@/lib/siteConfig';
import ArrowIcon from '@/components/ui/ArrowIcon';

const MESSAGE =
  "Hi DIV, I'd like to talk about software for my business — what we run today and what you'd build.";

/**
 * Server Component: a plain outbound wa.me link, no JS shipped. The modal has
 * its own WhatsApp link that carries the visitor's name and note.
 */
export default function WhatsAppButton({ className = '' }) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3.5 rounded-full bg-lime py-2 pr-2 pl-6 text-[14.5px] font-medium whitespace-nowrap text-ink shadow-[0_18px_44px_-24px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 ${className}`}
    >
      Chat on WhatsApp
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-lime transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-45">
        <ArrowIcon />
      </span>
    </a>
  );
}
