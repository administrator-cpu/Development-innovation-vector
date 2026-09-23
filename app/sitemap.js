import { siteConfig } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import { caseStudies } from '@/lib/caseStudies';

export default function sitemap() {
  const lastModified = new Date();
  const u = (path, priority, changeFrequency = 'monthly') => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    u('/', 1, 'weekly'),
    u('/services', 0.9),
    ...services.map((s) => u(`/${s.slug}`, 0.9)),
    u('/work', 0.8),
    ...caseStudies.map((c) => u(`/work/${c.slug}`, 0.7)),
    u('/about', 0.7),
    u('/contact', 0.8),
    u('/sla', 0.7),
    u('/privacy', 0.3, 'yearly'),
    u('/terms', 0.3, 'yearly'),
  ];
}
