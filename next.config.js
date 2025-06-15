const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de', 'fr', 'es', 'it', 'tr'],
    defaultLocale: 'en',
  },
  // Optimize chunks and assets
  webpack: (config, { isServer }) => {
    // Optimize chunk loading
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        shared: {
          name: 'shared',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    }
    
    // Optimize asset loading
    config.optimization.moduleIds = 'deterministic'
    config.optimization.runtimeChunk = 'single'
    
    return config
  },
  // Optimize image loading
  images: {
    domains: ['getnurai.com'],
    unoptimized: true,
  },
  // Optimize static file serving
  poweredByHeader: false,
  compress: true,
}

module.exports = withNextIntl(nextConfig); 