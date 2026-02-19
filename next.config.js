/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  i18n: {
    locales: ['pt', 'en', 'fr', 'es'],
    defaultLocale: 'pt',
    localeDetection: false,
  },
  env: {
    SITE_URL: 'https://www.datawise.pt',
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/:slug((?!blog|api|_next|product-emails).*)',
          destination: '/blog/:slug',
        },
      ],
      fallback: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ],
    };
  },
}

module.exports = nextConfig;