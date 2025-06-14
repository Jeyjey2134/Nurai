'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function EmotionalSupport() {
  const t = useTranslations('emotionalSupport')
  
  return (
    <section className="section bg-gradient-to-br from-purple-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HeartIcon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-4">{t('sections.mentalHealth.title')}</h3>
              <ul className="space-y-3">
                {t.raw('sections.mentalHealth.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-4">{t('sections.loneliness.title')}</h3>
              <ul className="space-y-3">
                {t.raw('sections.loneliness.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-4">{t('sections.lifeCoaching.title')}</h3>
              <ul className="space-y-3">
                {t.raw('sections.lifeCoaching.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 italic">
              {t('quote')}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="container mt-12">
        <p className="text-center text-lg text-gray-500">
          {t('footer')}
        </p>
      </div>
    </section>
  )
} 