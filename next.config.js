/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'], // Allow images from this domain
  },
}

module.exports = nextConfig 