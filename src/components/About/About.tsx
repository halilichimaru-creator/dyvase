import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Excellence',
    description: 'Nous recherchons la perfection dans chaque pixel et ligne de code.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Efficacité',
    description: 'Livraison rapide sans compromis sur la qualité.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Collaboration',
    description: 'Nous travaillons avec vous comme partenaires, pas comme prestataires.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Innovation',
    description: 'Toujours à la pointe des technologies les plus récentes.',
  },
]

const stats = [
  { value: '150+', label: 'Projets réalisés' },
  { value: '50+', label: 'Clients satisfaits' },
  { value: '5+', label: 'Années d\'expérience' },
  { value: '15+', label: 'Membres d\'équipe' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          {/* Content */}
          <motion.div 
            className="about__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about__label">À propos de Dyvase</span>
            <h2 className="about__title">
              Nous transformons vos idées en <span className="text-gradient">expériences digitales</span>
            </h2>
            <p className="about__description">
              Dyvase est une agence web créative dédiée à la conception d'expériences 
              digitales exceptionnelles. Fondée sur la conviction qu'un excellent design 
              doit être accessible à tous, nous combinons technologies de pointe et 
              design réfléchi pour aider les entreprises à prospérer à l'ère numérique.
            </p>
            <p className="about__description">
              Notre équipe de designers, développeurs et stratèges travaille en 
              collaboration pour livrer des solutions qui non seulement sont 
              visuellement remarquables, mais génèrent aussi de vrais résultats business.
            </p>

            {/* Stats */}
            <div className="about__stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="about__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="#contact" 
              className="btn btn-primary about__cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Travaillons ensemble
            </motion.a>
          </motion.div>

          {/* Values */}
          <motion.div 
            ref={ref}
            className="about__values"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about__values-title">Nos Valeurs</h3>
            <div className="about__values-grid">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="about__value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about__value-icon">
                    {value.icon}
                  </div>
                  <h4 className="about__value-title">{value.title}</h4>
                  <p className="about__value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
