import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['de', 'en', 'fr', 'es', 'it', 'tr'];
const defaultLocale = 'en';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
