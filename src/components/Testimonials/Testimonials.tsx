import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonial = {
  name: 'Musa Pekcan',
  role: 'Gérant',
  company: 'MP Carrelage',
  content: 'Dyvase a créé un site web exceptionnel pour notre entreprise de carrelage. Le design est moderne et professionnel, et reflète parfaitement la qualité de notre travail. Depuis la mise en ligne, nous avons reçu de nombreuses demandes de devis et notre visibilité en ligne a considérablement augmenté. L\'équipe a été à l\'écoute de nos besoins et a su traduire notre savoir-faire artisanal en une expérience digitale remarquable.',
  rating: 5,
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Témoignages</h2>
          <p>
            Ne nous croyez pas sur parole. Voici ce que nos clients 
            disent de leur collaboration avec Dyvase.
          </p>
        </motion.div>

        <div className="testimonials__container">
          {/* Main testimonial display */}
          <motion.div 
            className="testimonials__main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="testimonials__quote-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 24H8C8 16.268 14.268 10 22 10V16C17.582 16 14 19.582 14 24V24ZM14 24V38H0V24H14ZM38 24H32C32 16.268 38.268 10 46 10V16C41.582 16 38 19.582 38 24V24ZM38 24V38H24V24H38Z" fill="currentColor"/>
              </svg>
            </div>

            <div className="testimonials__content">
              <p className="testimonials__text">
                "{testimonial.content}"
              </p>

              <div className="testimonials__author">
                <div className="testimonials__author-info">
                  <span className="testimonials__name">{testimonial.name}</span>
                  <span className="testimonials__role">
                    {testimonial.role} chez {testimonial.company}
                  </span>
                </div>
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1L12.39 6.26L18 7.27L14 11.14L14.92 17L10 14.27L5.08 17L6 11.14L2 7.27L7.61 6.26L10 1Z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client logos */}
          <motion.div 
            className="testimonials__logos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="testimonials__logos-label">Ils nous font confiance</span>
            <div className="testimonials__logos-grid">
              <motion.div 
                className="testimonials__logo"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                MP Carrelage
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
