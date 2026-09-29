import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import LegalDoc from '@/components/legal/LegalDoc';
import { cookies } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Which cookies thediv.in uses, why, and how to change your choice. Analytics load only with your consent.",
  path: '/cookies',
});

export default function Page() {
  return (
    <InnerPage trail={[{ name: "Cookie policy", path: '/cookies' }]} current="/cookies">
      <PageHero eyebrow="Cookie policy" title="Cookies," accent="only with your OK." lead="What runs in your browser on this site, and how to switch analytics off at any time." />
      <LegalDoc doc={cookies} />
    </InnerPage>
  );
}
