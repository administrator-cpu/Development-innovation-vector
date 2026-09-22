import { siteConfig } from '@/lib/siteConfig';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: siteConfig.url, lastModified, changeFrequency: 'weekly', priority: 1 },
  ];
}