/** @type {import('next').NextConfig} */
import i18nConfig from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  ...i18nConfig
};

export default nextConfig;
