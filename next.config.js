/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fontmeme.com', 'upload.wikimedia.org'],
  },
  swcMinify: true,
}

module.exports = nextConfig
