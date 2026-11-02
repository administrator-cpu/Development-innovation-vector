import CrmLandingPage, { landingMetadata } from '@/components/crm/CrmLandingPage';
import { crmLandings } from '@/lib/crm';

const d = crmLandings.serviceBusiness;
export const metadata = landingMetadata(d);

export default function Page() {
  return <CrmLandingPage d={d} />;
}
