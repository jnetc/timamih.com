const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'fi', 'en'],
    defaultLocale: 'fi',
    localeDetection: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['www.datocms-assets.com'],
  },
});
