'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

const comparisonData = [
  {
    feature: 'Persönliche Erinnerung',
    nurai: true,
    chatGPT: false
  },
  {
    feature: 'Gespräche mit Stimme',
    nurai: true,
    chatGPT: false
  },
  {
    feature: 'Emotionale Begleitung',
    nurai: true,
    chatGPT: false
  },
  {
    feature: 'Hilfe bei Alltag & Struktur',
    nurai: true,
    chatGPT: false
  },
  {
    feature: 'Echte Langzeitbindung',
    nurai: true,
    chatGPT: false
  }
]

export default function Comparison() {
  const t = useTranslations('comparison')

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-xl border border-purple-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4 p-6 bg-purple-50 border-b border-purple-100">
              <div className="font-semibold text-gray-900">{t('table.feature')}</div>
              <div className="font-semibold text-gray-900 text-center">{t('table.nurai')}</div>
              <div className="font-semibold text-gray-900 text-center">{t('table.chatGPT')}</div>
            </div>

            {t.raw('table.features').map((feature: string, index: number) => (
              <div
                key={feature}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-purple-50'
                }`}
              >
                <div className="text-gray-600">{feature}</div>
                <div className="flex justify-center">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex justify-center">
                  <XMarkIcon className="w-6 h-6 text-red-500" />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600">
              {t('footer')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 