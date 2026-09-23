import { siteConfig } from './siteConfig';

/** Trim to Google's ~160-char snippet window on a word boundary. */
export function clampDesc(s, max = 160) {
  if (!s || s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:—–-]+$/, '') + '…';
}

/** Branded 1200×630 social card rendered by app/og/route.jsx. */
export function ogImageUrl(title, sub) {
  const p = new URLSearchParams();
  if (title) p.set('title', title);
  if (sub) p.set('sub', sub);
  const q = p.toString();
  return q ? `/og?${q}` : '/og';
}

/**
 * Per-page metadata with canonical + OG/Twitter kept in sync.
 * `title` may be a string (gets the " | DIV" template) or { absolute }.
 */
export function pageMetadata({ title, description, path, image, ogTitle, ogSub, type = 'website' }) {
  const url = `${siteConfig.url}${path}`;
  const plain = typeof title === 'string' ? title : title.absolute;
  const socialTitle = typeof title === 'string' ? `${title} | ${siteConfig.name}` : title.absolute;
  const desc = clampDesc(description);
  const images = [{ url: image || ogImageUrl(ogTitle || plain, ogSub), width: 1200, height: 630, alt: plain }];
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: { type, url, title: socialTitle, description: desc, siteName: siteConfig.name, locale: siteConfig.locale, images },
    twitter: { card: 'summary_large_image', title: socialTitle, description: desc, images: images.map((i) => i.url) },
  };
}

export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export const orgRef = { '@id': `${siteConfig.url}/#organization` };
