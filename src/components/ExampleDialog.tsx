'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function ExampleDialog() {
  const t = useTranslations('hero.example')
  return (
    <section className="section bg-white/80">
      <div className="container">
        <motion.div
          className="max-w-xl mx-auto rounded-2xl shadow-md p-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-2 font-semibold text-gray-700">Du</div>
          <div className="mb-4 text-gray-900">{t('user')}</div>
          <div className="mb-2 font-semibold text-purple-700">Nurai</div>
          <div className="text-gray-800 italic">{t('ai')}</div>
        </motion.div>
      </div>
    </section>
  )
} 