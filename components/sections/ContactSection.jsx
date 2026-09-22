import Image from 'next/image';
import PillButton from '@/components/ui/PillButton';

export default function ContactSection() {
  const phoneNumber = "8700406878"; 
  
  // Optional: Add a pre-filled message
  const defaultMessage = "Hi! I'm interested in your services.";
  
  // Encode the message to ensure spaces and special characters are handled correctly
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
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
            <PillButton href="#contact" ariaLabel="Book a call with DIV">
              Book a call
            </PillButton>
            <PillButton href={whatsappUrl} tone = 'whatsapp' target="_blank" rel="noopener noreferrer" ariaLabel="Chat on WhatsApp">
              Chat on WhatsApp
            </PillButton>
            {/* <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#25D366', // Official WhatsApp Green
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Chat on WhatsApp
      </a> */}
            {/* <span className="inline-flex items-center rounded-full border border-white/35 px-5 py-3 text-[14.5px] text-white/85">
              Reply within a day
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
