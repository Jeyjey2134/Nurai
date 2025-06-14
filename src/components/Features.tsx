'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  MicrophoneIcon, 
  HeartIcon, 
  CalendarIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function Features() {
  const t = useTranslations();
  const features: Feature[] = [
    {
      icon: CpuChipIcon,
      title: t('features.items.0.title'),
      description: t('features.items.0.description')
    },
    {
      icon: MicrophoneIcon,
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      icon: HeartIcon,
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    },
    {
      icon: CalendarIcon,
      title: t('features.items.3.title'),
      description: t('features.items.3.description')
    },
    {
      icon: ChartBarIcon,
      title: t('features.items.4.title'),
      description: t('features.items.4.description')
    }
  ]
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.h2 
          className="heading-2 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('features.title')}
        </motion.h2>
        
        <motion.p
          className="text-center text-lg text-gray-500 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('features.subtitle')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 