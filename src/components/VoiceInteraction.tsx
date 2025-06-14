'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function VoiceInteraction() {
  const t = useTranslations('voiceInteraction')
  
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
            <MicrophoneIcon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="heading-2 mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                <p className="text-gray-600">{t('conversation.user')}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg shadow-sm border border-purple-100">
                <p className="text-gray-600">{t('conversation.ai')}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">{t('features.title')}</h3>
              <ul className="space-y-3">
                {t.raw('features.items').map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 