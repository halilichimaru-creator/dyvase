import { motion } from 'framer-motion'
import './Hero.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Hero() {
  return (
    <section className="hero" itemScope itemType="https://schema.org/WebPageElement">
      <div className="container hero__container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="hero__title"
            variants={itemVariants}
          >
            Solutions Web<br />
            <span className="hero__title-accent">Créatives</span>
          </motion.h1>
          
          <motion.p 
            className="hero__subtitle"
            variants={itemVariants}
          >
            Nous créons des expériences digitales qui inspirent et engagent. 
            Des sites web performants et sur-mesure qui transforment 
            votre activité et génèrent des résultats concrets.
          </motion.p>
          
          <motion.div 
            className="hero__cta-group"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary hero__btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.a>
            <motion.a 
              href="#work" 
              className="btn btn-secondary hero__btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir le sur-mesure
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="hero__stats"
            variants={itemVariants}
          >
            <div className="hero__stat">
              <span className="hero__stat-number">+20</span>
              <span className="hero__stat-label">Projets livrés</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Clients satisfaits</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">2+</span>
              <span className="hero__stat-label">Années d'expérience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Placeholder for 3D shapes area */}
        <div className="hero__visual" aria-hidden="true">
          {/* 3D shapes are rendered via Scene3D component */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span>Défiler pour explorer</span>
        <motion.div 
          className="hero__scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
