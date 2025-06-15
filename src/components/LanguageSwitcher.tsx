'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      router.push(`/${newLocale}${pathname}`)
    })
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleChange('en')}
        className={`px-4 py-2 rounded ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        disabled={isPending}
      >
        EN
      </button>
      <button
        onClick={() => handleChange('de')}
        className={`px-4 py-2 rounded ${locale === 'de' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        disabled={isPending}
      >
        DE
      </button>
    </div>
  )
} 