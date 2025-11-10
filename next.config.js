/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['pptxgenjs'],
  },
};

module.exports = nextConfig;
