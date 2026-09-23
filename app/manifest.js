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
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
