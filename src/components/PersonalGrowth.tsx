'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function PersonalGrowth() {
  const t = useTranslations('personalGrowth')

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
            <SparklesIcon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.raw('areas').map((area: any, index: number) => (
              <motion.div
                key={area.title}
                className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
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