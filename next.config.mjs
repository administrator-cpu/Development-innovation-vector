/** @type {import('next').NextConfig} */
const HOST = 'thediv.in';

// Old / guessable URLs → the one canonical slug (301). Keeps link equity from
// anyone who links to a variant, and stops them showing as 404s in Search Console.
const legacy = [
  ['/home', '/'],
  ['/index', '/'],
  ['/index.html', '/'],
  ['/about-us', '/about'],
  ['/contact-us', '/contact'],
  ['/case-studies', '/work'],
  ['/case-studies/:slug', '/work/:slug'],
  ['/portfolio', '/work'],
  ['/services/:slug(cloud-native-deployments|api-backend-development|microservices-architecture|database-integration)', '/:slug'],
  ['/privacy-policy', '/privacy'],
  ['/terms-of-service', '/terms'],
  ['/terms-and-conditions', '/terms'],
  ['/service-level-agreement', '/sla'],
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [400, 640, 768, 1024, 1280, 1536, 1920],
  },
  experimental: {
    optimizePackageImports: ['@next/third-parties', 'motion'],
  },
  async redirects() {
    return [
      // Enforce HTTPS + apex host. Both rules only fire on the production host,
      // so localhost / preview deployments are never redirected.
      {
        source: '/:path*',
        has: [
          { type: 'host', value: HOST },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: `https://${HOST}/:path*`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www.${HOST}` }],
        destination: `https://${HOST}/:path*`,
        permanent: true,
      },
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: 'upgrade-insecure-requests' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
