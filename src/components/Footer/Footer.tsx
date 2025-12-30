import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
  services: [
    { label: 'Développement Web', href: '/#services' },
    { label: 'Design UI/UX', href: '/#services' },
    { label: 'Identité de Marque', href: '/#services' },
    { label: 'SEO & Performance', href: '/#services' },
  ],
  company: [
    { label: 'À propos', href: '/#about' },
    { label: 'Sur-mesure', href: '/#work' },
    { label: 'FAQ', href: '/faq' },
  ],
  support: [
    { label: 'Contact', href: '/#contact' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Main footer content */}
        <div className="footer__grid">
          {/* Brand column */}
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="footer__logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A7D7C5"/>
                    <stop offset="50%" stopColor="#C4B5E0"/>
                    <stop offset="100%" stopColor="#F5C7B8"/>
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#footerLogoGrad)"/>
                <path d="M12 12H17C22.5228 12 27 16.4772 27 22C27 27.5228 22.5228 32 17 32H12V12Z" fill="white"/>
              </svg>
              <span>Dyvase</span>
            </a>
            <p className="footer__tagline">
              Créer des expériences digitales qui inspirent et transforment les entreprises.
            </p>
            
          </motion.div>

          {/* Links columns */}
          <motion.div 
            className="footer__links-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer__links-title">Services</h4>
            <ul className="footer__links-list">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer__links-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="footer__links-title">Entreprise</h4>
            <ul className="footer__links-list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer__links-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer__links-title">Support</h4>
            <ul className="footer__links-list">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="footer__copyright">
            © {currentYear} Dyvase. Tous droits réservés.
          </p>
          

          <button 
            className="footer__back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour en haut"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15.833V4.167M10 4.167L4.167 10M10 4.167L15.833 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="footer__gradient" aria-hidden="true" />
    </footer>
  )
}
