import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_LOCALES = ['de', 'en', 'fr', 'es', 'it', 'tr']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Wenn URL bereits ein gültiges Locale enthält → zulassen
  if (PUBLIC_LOCALES.some((loc) => pathname.startsWith(`/${loc}`))) {
    return NextResponse.next()
  }

  // 👉 Standard-Locale definieren
  const defaultLocale = 'en'

  // ➤ Weiterleitung auf Default-Locale
  return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
}
