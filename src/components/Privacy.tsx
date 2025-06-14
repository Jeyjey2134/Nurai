'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

const privacyFeatures = [
  {
    title: 'DSGVO-konform',
    description: 'Vollständige Einhaltung der europäischen Datenschutzrichtlinien'
  },
  {
    title: 'Verschlüsselte Speicherung',
    description: 'Ende-zu-Ende Verschlüsselung aller deiner Daten'
  },
  {
    title: 'Volle Kontrolle',
    description: 'Du entscheidest, was gespeichert wird und was nicht'
  },
  {
    title: 'Transparente Nutzung',
    description: 'Klare Einblicke in die Verwendung deiner Daten'
  }
]

export default function Privacy() {
  const t = useTranslations('privacy')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.data.title')}
            </h3>
            <ul className="space-y-3">
              {t.raw('sections.data.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.control.title')}
            </h3>
            <ul className="space-y-3">
              {t.raw('sections.control.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.security.title')}
            </h3>
            <ul className="space-y-3">
              {t.raw('sections.security.items').map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          {t('footer')}
        </div>
      </div>
    </section>
  )
} 