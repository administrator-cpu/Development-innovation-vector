import InnerPage from '@/components/layout/InnerPage';
import PageHero from '@/components/ui/PageHero';
import LegalDoc from '@/components/legal/LegalDoc';
import CtaBand from '@/components/ui/CtaBand';
import { sla } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  "title": "SLA: 99.9% Uptime, 1-Hour Response & Service Credits",
  "description": "DIV's SLA: 99.9% monthly uptime, how downtime is measured, Sev 1 response under 1 hour 24/7, and service credits of 10–50% when we miss.",
  "path": "/sla"
});

export default function Page() {
  return (
    <InnerPage trail={[{ name: "Service level agreement", path: '/sla' }]} current="/sla">
      <PageHero eyebrow="Service level agreement" title="99.9% uptime," accent="in writing." lead="How we measure downtime, how fast an engineer responds, and what you get back if we miss. No marketing asterisks." />
      <LegalDoc doc={sla} />
      <CtaBand source="sla" title="Uptime you can hold us to." accent="Ask us how we monitor it." />
    </InnerPage>
  );
}
