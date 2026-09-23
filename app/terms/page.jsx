import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import LegalDoc from '@/components/legal/LegalDoc';
import CtaBand from '@/components/ui/CtaBand';
import { terms } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  "title": "Terms of Service",
  "description": "Terms governing use of thediv.in, operated by Development Innovation Vector Private Limited, Noida, India.",
  "path": "/terms"
});

export default function Page() {
  return (
    <InnerPage trail={[{ name: "Terms of service", path: '/terms' }]} current="/terms">
      <PageHero eyebrow="Terms of service" title="The terms" accent="of using this site." lead="Short and specific. Work we do for customers is governed by the signed agreement and the SLA." />
      <LegalDoc doc={terms} />
    </InnerPage>
  );
}
