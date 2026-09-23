import Navbar from '@/components/layout/Navbar';
import StructuredData from '@/components/seo/StructuredData';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PlatformSection from '@/components/sections/PlatformSection';
import PillarsSection from '@/components/sections/PillarsSection';
import LookInsideSection from '@/components/sections/LookInsideSection';
import ProductsSection from '@/components/sections/ProductsSection';
import EngagementsSection from '@/components/sections/EngagementsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: { absolute: 'Managed Software Development Company in India | DIV' },
  description:
    'DIV builds, hosts and runs custom CRM, billing, support and mobile software for Indian businesses — one engineering team, a 99.9% uptime SLA and 24/7 support.',
  path: '/',
  ogTitle: 'Managed software development in India',
  ogSub: 'We build your software, then we run it — for years.',
});

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection navbar={<Navbar />} />
      <main id="main">
        <HowItWorksSection />
        <PlatformSection />
        <PillarsSection />
        <LookInsideSection />
        <ProductsSection />
        <EngagementsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}
