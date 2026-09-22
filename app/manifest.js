import { siteConfig } from '@/lib/siteConfig';

export default function manifest() {
  return {
    name: `${siteConfig.name} — Managed Software Development India`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FBFAF8',
    theme_color: '#FBFAF8',
    lang: 'en-IN',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}