import './globals.css';
import { instrumentSans, instrumentSerif, plexMono } from './fonts';
import { siteConfig } from '@/lib/siteConfig';
import SiteFooter from '@/components/layout/SiteFooter';
import SmoothScroll from '@/components/motion/SmoothScroll';
import BookingProvider from '@/components/booking/BookingProvider';
import { SiteSchema } from '@/components/seo/StructuredData';
import { clampDesc, ogImageUrl } from '@/lib/seo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

const DEFAULT_TITLE = 'Managed Software Development Company in India | DIV';
const DEFAULT_DESC = clampDesc(siteConfig.description);
const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

// No canonical here on purpose: a layout-level canonical would be inherited by
// every page that forgets its own (404s included). Each page sets its own.
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | DIV',
  },
  description: DEFAULT_DESC,
  applicationName: siteConfig.shortName,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.name,
  category: 'technology',
  formatDetection: { telephone: false, email: false, address: false },
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
  verification: {
    google: siteConfig.googleSiteVerification,
    ...(bing ? { other: { 'msvalidate.01': bing } } : {}),
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: ogImageUrl(),
        width: 1200,
        height: 630,
        alt: 'DIV — managed software development and IT services in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [ogImageUrl()],
  },
  // Favicon, apple-touch-icon and manifest links come from app/icon.jsx,
  // app/apple-icon.jsx and app/manifest.js automatically.
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
        {/* Cuts ~100–200ms off the first analytics/GA connection without blocking render. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body suppressHydrationWarning>
        <SiteSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>

        {/* Navbar is NOT global: it is white-on-dark and belongs inside the hero
            (rendered by HeroSection). Pages without a dark hero should render
            their own header variant. */}
        <SmoothScroll />
        <BookingProvider>
          {children}
          <SiteFooter />
        </BookingProvider>

        <SpeedInsights />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
