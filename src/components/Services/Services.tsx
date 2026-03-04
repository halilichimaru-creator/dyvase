import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 1,
    slug: '/services/creation-site-vitrine',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12L12 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Création Site Vitrine',
    description: 'Sites web sur-mesure pour artisans et PME. Présentez votre activité avec un design élégant et une performance optimale.',
    features: ['Design sur-mesure', 'Optimisé SEO', 'Mobile First', 'Maintenance incluse'],
    color: 'mint',
  },
  {
    id: 2,
    slug: '/services/creation-site-ecommerce',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6H10L12 18H24L26 10H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Site E-commerce',
    description: 'Vendez vos produits en ligne. Nous créons des boutiques performantes avec paiement sécurisé et gestion facile.',
    features: ['Paiement sécurisé', 'Gestion de stock', 'Conversion optimisée', 'Analytique'],
    color: 'lavender',
  },
  {
    id: 3,
    slug: '/services/audit-seo-performance',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    ),
    title: 'Expert SEO & Performance',
    description: 'Devenez numéro 1 sur Google. Nous optimisons votre visibilité et votre vitesse pour attirer plus de clients.',
    features: ['Audit complet', 'SEO technique', 'Core Web Vitals', 'Stratégie locale'],
    color: 'peach',
  },
  {
    id: 4,
    slug: '#contact',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="12" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12L20 20M20 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Design UI/UX & Branding',
    description: 'Marquez les esprits avec une identité visuelle forte et une expérience utilisateur inoubliable.',
    features: ['Logotypes', 'Charte graphique', 'Expérience utilisateur', 'Maquettes (Figma)'],
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
              {service.slug.startsWith('/') ? (
                <Link
                  to={service.slug}
                  className="services__card-link"
                >
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ) : (
                <motion.a
                  href={service.slug}
                  className="services__card-link"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
