/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: true,
  },

  images: {
    deviceSizes: [640, 750, 828, 1080, 1440],
  },
};

module.exports = nextConfig;
