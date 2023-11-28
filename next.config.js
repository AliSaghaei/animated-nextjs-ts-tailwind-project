/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: ['cdn.builder.io'],
  },
};

module.exports = nextConfig;
