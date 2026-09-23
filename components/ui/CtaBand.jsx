import BookingButton from '@/components/booking/BookingButton';
import WhatsAppButton from '@/components/booking/WhatsAppButton';

/** Closing CTA used on every inner page. Navy card, no image — keeps inner pages light. */
export default function CtaBand({
  title = 'Tell us what you run today.',
  accent = "We'll tell you what we'd build.",
  source = 'inner-page',
}) {
  return (
    <section className="px-3 pt-16 sm:px-4 sm:pt-28">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center rounded-[20px] bg-navy px-5 py-14 text-center text-white sm:rounded-[26px] sm:px-10 sm:py-20">
        <h2 className="max-w-[22ch] text-[clamp(28px,4.2vw,58px)] leading-[1.04] font-medium tracking-[-0.045em] text-balance">
          {title}
          <span className="block font-serif font-normal italic">{accent}</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <BookingButton source={source}>Book a call</BookingButton>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
