'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Waitlist() {
  const t = useTranslations();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
  
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
  
      if (res.ok) {
        // ✅ Umami Tracking bei erfolgreicher Eintragung
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('waitlist-signup')
        }
  
        setSuccess(true)
        setEmail('')
        setName('')
      } else {
        const data = await res.json()
        setError(data.error || 'Ein Fehler ist aufgetreten.')
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten.')
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <section className="section bg-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center" id="waitlist">
          <motion.div
            className="mb-20"
          >
            <motion.h2 
              className="text-6xl font-medium mb-8 tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t('waitlist.title')}
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('waitlist.subtitle', { default: 'Trage deine E-Mail ein und erfahre als Erste:r, wenn Nurai startet.' })}
            </motion.p>
          </motion.div>

          <motion.form
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Optional: Name-Feld */}
              {/* <motion.input
                type="text"
                placeholder="Dein Name (optional)"
                className="px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={name}
                onChange={e => setName(e.target.value)}
              /> */}
              <motion.input
                type="email"
                placeholder={t('waitlist.emailPlaceholder')}
                className="px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button 
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium transition-all duration-300 disabled:opacity-60"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? t('waitlist.buttonLoading', { default: 'Eintragen...' }) : t('waitlist.button')}
              </motion.button>
            </div>
            {success && (
              <p className="text-green-600 mt-4">{t('waitlist.success')}</p>
            )}
            {error && (
              <p className="text-red-600 mt-4">{t('waitlist.error', { default: error })}</p>
            )}
            <p className="text-sm text-gray-500 font-light mt-4">
              {t('waitlist.disclaimer', { default: 'Kein Spam. Du kannst dich jederzeit austragen.' })}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
} 