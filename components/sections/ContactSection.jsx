import Image from 'next/image';
import BookingButton from '@/components/booking/BookingButton';
import WhatsAppButton from '@/components/booking/WhatsAppButton';

export default function ContactSection() {
  return (
    <section id="contact" className="px-3 pt-16 sm:px-4 sm:pt-28">
      <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#2A2E33] px-5 py-14 text-center sm:rounded-[26px] sm:px-10 sm:py-24">
        <Image
          src="/images/contact-first-light.jpg"
          alt="Horizon at first light with a figure walking away"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,28,46,0.42),rgba(16,28,46,0.66))]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="max-w-[18ch] text-[clamp(30px,4.8vw,68px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance text-white">
            What does your business
            <span className="block font-serif font-normal italic">run on today?</span>
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.55] text-white/90">
            Tell us, and we&rsquo;ll tell you what we&rsquo;d build, keep and run.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <BookingButton source="contact" ariaLabel="Book a call with DIV">
              Book a call
            </BookingButton>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
