import { motion } from 'framer-motion'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="work" className="custom-model section">
      <div className="container">
        <div className="custom-model__grid">
          {/* Text content */}
          <motion.div 
            className="custom-model__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="custom-model__label">Sur-mesure</span>
            <h2 className="custom-model__title">
              Demandez un <span className="text-gradient">Modèle Personnalisé</span>
            </h2>
            <p className="custom-model__description">
              Chez Dyvase, nous croyons que chaque entreprise mérite un site web 
              unique qui reflète parfaitement son identité. Nos experts conçoivent 
              des solutions 100% personnalisées, pensées pour vos besoins spécifiques.
            </p>
            
            <ul className="custom-model__features">
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Design unique adapté à votre marque</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Fonctionnalités sur-mesure</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Accompagnement de A à Z</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Optimisation SEO & performances</span>
              </li>
            </ul>

            <motion.a 
              href="#contact" 
              className="btn btn-primary custom-model__cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis gratuit
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="custom-model__image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="custom-model__image-label">
              Exemple pour notre client MP Carrelage à Mulhouse
            </span>
            <img 
              src="/images/maquette-mp-carrelage.jpg" 
              alt="Maquette site web MP Carrelage - Exemple de réalisation Dyvase"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
