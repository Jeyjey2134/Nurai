import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Alle unterstützten Sprachen
  locales: ['de', 'en', 'fr', 'es', 'it', 'tr'],

  // Used when no locale matches
  defaultLocale: 'de'
});

export const config = {
  // Matcher für alle Sprachen
  matcher: ['/', '/(de|en|fr|es|it|tr)/:path*']
}; 