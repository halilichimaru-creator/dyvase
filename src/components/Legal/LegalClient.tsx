'use client'

import { motion } from 'framer-motion'
import '../../app/LegalPages.css'

export default function LegalClient({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{title}</h1>
            <p className="legal-hero__subtitle">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          {children}
        </div>
      </section>
    </div>
  )
}
