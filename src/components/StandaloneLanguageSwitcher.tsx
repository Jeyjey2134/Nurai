'use client'
import { useEffect, useState } from 'react'

const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'tr', label: 'Türkçe' }
]

export default function StandaloneLanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('de')

  useEffect(() => {
    const path = window.location.pathname.split('/')
    if (languages.some(l => l.code === path[1])) {
      setCurrentLocale(path[1])
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    const segments = window.location.pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    window.location.href = newPath
  }

  return (
    <div style={{position: 'fixed', top: 10, right: 10, zIndex: 9999, background: 'white', padding: 8, border: '1px solid #ccc', borderRadius: 8}}>
      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label="Sprache wählen"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.label}</option>
        ))}
      </select>
    </div>
  )
} 