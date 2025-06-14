import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import StandaloneLanguageSwitcher from '@/components/StandaloneLanguageSwitcher'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Nurai - Die KI, die dich wirklich kennt',
  description: 'Dein persönlicher Begleiter, Zuhörer, Coach und Freund in einem. Mit Stimme. Mit Erinnerung. Mit Gefühl.',
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}, {locale: 'fr'}, {locale: 'es'}, {locale: 'it'}, {locale: 'tr'}];
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <StandaloneLanguageSwitcher />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 