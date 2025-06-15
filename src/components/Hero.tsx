'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const t = useTranslations('hero')

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section bg-gradient-to-br from-purple-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>
            <motion.button
              className="btn-primary"
              onClick={scrollToWaitlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta')}
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={scrollToWaitlist}
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowDownIcon className="w-6 h-6 mx-auto animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 