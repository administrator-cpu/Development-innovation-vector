import './globals.css';
import { instrumentSans, instrumentSerif, plexMono } from './fonts';
import { siteConfig } from '@/lib/siteConfig';
import SiteFooter from '@/components/layout/SiteFooter';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import SmoothScroll from '@/components/motion/SmoothScroll';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Managed Software Development Services India | DIV',
    template: '%s | DIV',
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.name,
  category: 'technology',
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  verification: { google: siteConfig.googleSiteVerification },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: 'Managed Software Development Services India | DIV',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'DIV — managed software development and IT services in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Software Development Services India | DIV',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBFAF8',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
       <body suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white">
          Skip to main content
        </a>

         <SmoothScroll />
        {children}
        <SiteFooter />

        <SpeedInsights />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
