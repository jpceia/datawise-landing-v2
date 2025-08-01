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
    localeDetection: true,
  },
}

module.exports = nextConfig;