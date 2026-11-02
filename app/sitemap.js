import { siteConfig } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import { caseStudies } from '@/lib/caseStudies';
import { crmFeatures, ispProducts, ispProductsPath, crmLandings, blogPosts } from '@/lib/crm';

export default function sitemap() {
  // Bump when page content actually changes; a per-build date tells Google nothing.
  const lastModified = new Date('2026-11-02');
  const u = (path, priority, changeFrequency = 'monthly') => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    u('/', 1, 'weekly'),
    u('/services', 0.9),
    u('/crm-development-company-delhi-ncr', 0.9),
    u('/connect-crm', 0.9),
    u('/connect-crm/pricing', 0.8),
    ...crmFeatures.map((f) => u(`/connect-crm/${f.slug}`, 0.7)),
    u(ispProductsPath, 0.7),
    ...ispProducts.map((i) => u(`${ispProductsPath}/${i.slug}`, 0.7)),
    ...Object.values(crmLandings).map((l) => u(l.path, 0.7)),
    u('/crm-development-noida', 0.7),
    u('/blog', 0.5, 'weekly'),
    ...blogPosts.map((p) => u(`/blog/${p.slug}`, 0.6)),
    ...services.map((s) => u(`/${s.slug}`, 0.9)),
    u('/work', 0.8),
    ...caseStudies.map((c) => u(`/work/${c.slug}`, 0.7)),
    u('/about', 0.7),
    u('/contact', 0.8),
    u('/sla', 0.7),
    u('/privacy', 0.3, 'yearly'),
    u('/terms', 0.3, 'yearly'),
    u('/cookies', 0.2, 'yearly'),
    u('/refund-policy', 0.3, 'yearly'),
  ];
}
