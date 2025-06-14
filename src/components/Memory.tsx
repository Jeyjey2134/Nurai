'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function Memory() {
  const t = useTranslations('memory')
  
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
            <CpuChipIcon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <h3 className="text-xl font-semibold mb-3">{t('sections.personalMemories.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.personalMemories.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <h3 className="text-xl font-semibold mb-3">{t('sections.dailySupport.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.dailySupport.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <h3 className="text-xl font-semibold mb-3">{t('sections.security.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.security.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <h3 className="text-xl font-semibold mb-3">{t('sections.growth.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.growth.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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