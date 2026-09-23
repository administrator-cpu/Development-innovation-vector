import { notFound } from 'next/navigation';
import ServicePage from '@/components/services/ServicePage';
import { services, getService } from '@/lib/services';
import { pageMetadata } from '@/lib/seo';

// Root-level service URLs (/cloud-native-deployments …). Only the slugs below
// are valid; anything else 404s instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const s = getService(service);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/${s.slug}`,
    ogTitle: s.name,
    ogSub: `${s.title} ${s.accent}`,
  });
}

export default async function Page({ params }) {
  const { service } = await params;
  const s = getService(service);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
