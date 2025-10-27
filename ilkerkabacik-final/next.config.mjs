/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
};

export default nextConfig;
