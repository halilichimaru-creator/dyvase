import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const services = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V8Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12L12 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Développement Web',
    description: 'Sites web sur-mesure avec les technologies les plus récentes. Du design responsive aux applications web complexes, nous livrons des solutions performantes.',
    features: ['React & Next.js', 'Node.js & APIs', 'Base de données', 'Déploiement Cloud'],
    color: 'mint',
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 22L10 16L14 20L20 14L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Design UI/UX',
    description: 'Des interfaces élégantes que vos utilisateurs adorent. Nous concevons des expériences intuitives basées sur la recherche et l\'esthétique moderne.',
    features: ['Recherche utilisateur', 'Maquettes', 'Prototypage', 'Design Systems'],
    color: 'lavender',
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 16V28" stroke="currentColor" strokeWidth="2"/>
        <path d="M28 10L16 16L4 10" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4V16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Identité de Marque',
    description: 'Des identités visuelles distinctives qui marquent les esprits. Nous créons des expériences de marque cohérentes sur tous les supports.',
    features: ['Création de logo', 'Système de couleurs', 'Typographie', 'Charte graphique'],
    color: 'peach',
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    ),
    title: 'SEO & Performance',
    description: 'Optimisez votre visibilité et votre vitesse. Nous garantissons un bon référencement et un chargement ultra-rapide sur tous les appareils.',
    features: ['SEO technique', 'Core Web Vitals', 'Analytics', 'Optimisation vitesse'],
    color: 'sky',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nos Services</h2>
          <p>
            Des solutions web complètes adaptées aux besoins de votre entreprise. 
            De la conception au lancement, nous gérons tous les aspects de votre présence digitale.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`services__card services__card--${service.color}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <motion.a 
                href="#contact" 
                className="services__card-link"
                whileHover={{ x: 5 }}
              >
                En savoir plus
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
