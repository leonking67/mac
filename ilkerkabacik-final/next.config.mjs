/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
  // ❌ Şu satırı tamamen kaldırdık:
  // reloadOnPrerender: true,
};

export default nextConfig;
