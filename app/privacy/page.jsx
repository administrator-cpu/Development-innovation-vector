import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import LegalDoc from '@/components/legal/LegalDoc';
import CtaBand from '@/components/ui/CtaBand';
import { privacy } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  "title": "Privacy Policy — DPDP Act 2023",
  "description": "How Development Innovation Vector Pvt Ltd collects, uses and protects personal data under India's Digital Personal Data Protection Act, 2023.",
  "path": "/privacy"
});

export default function Page() {
  return (
    <InnerPage trail={[{ name: "Privacy policy", path: '/privacy' }]} current="/privacy">
      <PageHero eyebrow="Privacy policy" title="Your data," accent="handled plainly." lead="What we collect when you contact us, why, who else sees it, and how to have it corrected or deleted — under the DPDP Act, 2023." />
      <LegalDoc doc={privacy} />
    </InnerPage>
  );
}
