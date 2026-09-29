import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import LegalDoc from '@/components/legal/LegalDoc';
import { refunds } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description: "How DIV handles refunds and cancellations for setup fees and monthly managed-service retainers.",
  path: '/refund-policy',
});

export default function Page() {
  return (
    <InnerPage trail={[{ name: "Refund & cancellation policy", path: '/refund-policy' }]} current="/refund-policy">
      <PageHero eyebrow="Refund & cancellation" title="Refunds," accent="in plain terms." lead="What happens to setup fees and retainers if you cancel, and how long a refund takes." />
      <LegalDoc doc={refunds} />
    </InnerPage>
  );
}
