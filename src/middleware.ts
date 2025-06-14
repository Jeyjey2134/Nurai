import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

const PUBLIC_LOCALES = ['de', 'en', 'fr', 'es', 'it', 'tr']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Wenn bereits Locale drin ist: weiter
  if (PUBLIC_LOCALES.some((loc) => pathname.startsWith(`/${loc}`))) {
    return NextResponse.next()
  }

  // Ansonsten weiterleiten auf z. B. "de"
  const locale = 'de'
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
} 