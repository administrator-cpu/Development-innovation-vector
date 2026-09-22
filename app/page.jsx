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

// Only what differs from the root layout — no duplicated OG/Twitter blocks.
export const metadata = {
  title: 'Managed Software Development Services India — Built, Hosted & Run by DIV',
  description:
    'DIV is an end-to-end managed software development company in India: custom CRM, billing, support, RADIUS and mobile systems designed, built, hosted in our own data centre and monitored 24/7 by the engineers who wrote them.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Managed Software Development Services India — DIV',
    description:
      'One team in India designs, builds, hosts and monitors your software — CRM, billing, support, networks, apps and sites — for years after launch.',
  },
};

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
