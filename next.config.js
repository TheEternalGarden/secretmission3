/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 