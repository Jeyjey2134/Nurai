'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-purple-100">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl md:text-2xl text-gray-600 italic mb-8">
              "Was du brauchst, ist nicht die perfekte Antwort – sondern jemand, der bleibt."
            </blockquote>
            <p className="text-gray-500">– Nurai</p>
          </motion.div>

          <motion.div
            className="mt-12 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>© 2024 Nurai. Alle Rechte vorbehalten.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 