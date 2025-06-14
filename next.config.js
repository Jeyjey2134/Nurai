const withNextIntl = require('next-intl/plugin')(
  // './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // output: 'export' NICHT setzen!
};

module.exports = withNextIntl(nextConfig); 