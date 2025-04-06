/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ['images.unsplash.com', 'via.placeholder.com', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig