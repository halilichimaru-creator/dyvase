import { motion } from 'framer-motion'
import { caseStudies } from './PortfolioData'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="work" className="portfolio section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Nos <span className="text-gradient">Réalisations</span> & Études de Cas
          </h2>
          <p className="section-description">
            Découvrez comment nous aidons nos clients à transformer leur présence
            digitale avec des solutions sur-mesure et performantes.
          </p>
        </motion.div>

        <div className="portfolio__grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="portfolio-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="portfolio-card__image-container">
                <img src={study.image} alt={study.title} loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">{study.category}</span>
                  <span className="portfolio-card__location">{study.location}</span>
                </div>
              </div>

              <div className="portfolio-card__content">
                <h3 className="portfolio-card__title">{study.title}</h3>
                <p className="portfolio-card__client">{study.client}</p>

                <div className="portfolio-card__details">
                  <div className="portfolio-card__detail">
                    <span className="portfolio-card__detail-label">Le Défi :</span>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="portfolio-card__detail">
                    <span className="portfolio-card__detail-label">La Solution Dyvase :</span>
                    <p>{study.solution}</p>
                  </div>
                  <div className="portfolio-card__results">
                    <span className="portfolio-card__detail-label">Résultats :</span>
                    <ul>
                      {study.results.map((result, i) => (
                        <li key={i}>
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="portfolio__cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Vous avez un projet similaire ?</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demander mon étude personnalisée
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
