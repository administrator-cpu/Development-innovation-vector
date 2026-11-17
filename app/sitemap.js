import { siteConfig } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import { caseStudies } from '@/lib/caseStudies';
import { crmFeatures, ispProducts, ispProductsPath, crmLandings, blogPosts } from '@/lib/crm';
import { bharatRadiusComparePath } from '@/lib/bharatRadius';

// Real per-page lastmod. Google ignores lastmod when every URL carries the same date, so
// each group below carries the date its content last changed (taken from git history).
// When you change a page's content, bump its date here (or the post's `updated` in lib/crm.js).
const CHANGED = {
  home: '2026-11-02', // app/page.jsx + components/sections + lib/content.js
  crm: '2026-11-02', // lib/crm.js CRM pages, Connect CRM, city pages
  isp: '2026-11-02', // Samadhan, TR-069
  ispHub: '2026-11-17', // /isp-products, Bharat Radius pillar, daloRADIUS comparison
  blogIndex: '2026-11-17',
  services: '2026-09-23', // lib/services.js
  work: '2026-09-23', // lib/caseStudies.js
  about: '2026-11-01',
  contact: '2026-09-23',
  sla: '2026-09-23',
  legal2309: '2026-09-23', // privacy, terms
  legal3009: '2026-09-30', // cookies, refund policy
};

// Pages whose content changed after their group's date.
const PAGE_CHANGED = {
  [`${ispProductsPath}/bharat-radius`]: '2026-11-17',
};

export default function sitemap() {
  const u = (path, group, priority, changeFrequency = 'monthly') => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(PAGE_CHANGED[path] || CHANGED[group] || group),
    changeFrequency,
    priority,
  });
  return [
    u('/', 'home', 1, 'weekly'),
    u('/services', 'services', 0.9),
    u('/crm-development-company-delhi-ncr', 'crm', 0.9),
    u('/connect-crm', 'crm', 0.9),
    u('/connect-crm/pricing', 'crm', 0.8),
    ...crmFeatures.map((f) => u(`/connect-crm/${f.slug}`, 'crm', 0.7)),
    u(ispProductsPath, 'ispHub', 0.8),
    ...ispProducts.map((i) => u(`${ispProductsPath}/${i.slug}`, 'isp', i.slug === 'bharat-radius' ? 0.9 : 0.7)),
    u(bharatRadiusComparePath, 'ispHub', 0.7),
    ...Object.values(crmLandings).map((l) => u(l.path, 'crm', 0.7)),
    u('/crm-development-noida', 'crm', 0.7),
    u('/blog', 'blogIndex', 0.5, 'weekly'),
    ...blogPosts.map((p) => u(`/blog/${p.slug}`, p.updated, 0.6)),
    ...services.map((s) => u(`/${s.slug}`, 'services', 0.9)),
    u('/work', 'work', 0.8),
    ...caseStudies.map((c) => u(`/work/${c.slug}`, 'work', 0.7)),
    u('/about', 'about', 0.7),
    u('/contact', 'contact', 0.8),
    u('/sla', 'sla', 0.7),
    u('/privacy', 'legal2309', 0.3, 'yearly'),
    u('/terms', 'legal2309', 0.3, 'yearly'),
    u('/cookies', 'legal3009', 0.2, 'yearly'),
    u('/refund-policy', 'legal3009', 0.3, 'yearly'),
  ];
}
