import { siteConfig } from '@/lib/siteConfig';

// AI search and answer crawlers are named explicitly so a future blanket rule can't shut
// them out by accident. Being quotable by ChatGPT, Gemini, Perplexity and Claude is a goal.
// (No `Host:` line: it was a Yandex-only directive and Google ignores it.)
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'Google-Extended',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Applebot-Extended',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
