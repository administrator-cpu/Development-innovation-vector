import { siteConfig } from '@/lib/siteConfig';

const MESSAGE = "Hi DIV, I'd like to talk to an engineer about software for my business.";

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an engineer on WhatsApp (opens in a new tab)"
      className="fixed right-3.5 bottom-3.5 z-50 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-lime py-[7px] pr-[18px] pl-[7px] text-[13.5px] font-medium whitespace-nowrap text-ink shadow-[0_20px_40px_-18px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-[3px] sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ink text-lime">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="M8 1.8a6.2 6.2 0 0 0-5.4 9.3L1.8 14.2l3.2-.8A6.2 6.2 0 1 0 8 1.8z" /></svg>
      </span>
      Chat with an engineer
    </a>
  );
}
