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
    slug: '/devis',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8C6 6.89543 6.89543 6 8 6H24C25.1046 6 26 6.89543 26 8V20C26 21.1046 25.1046 22 24 22H8C6.89543 22 6 21.1046 6 20V8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M10 26H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 22V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 13L16 17L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Refonte de Site Web',
    description: 'Modernisez votre site existant. Nous repensons le design, améliorons les performances et optimisons l\'expérience utilisateur.',
    features: ['Redesign moderne', 'Migration sécurisée', 'Performance optimisée', 'SEO renforcé'],
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
    slug: '/devis',
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


export default function Services() {

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2>Nos Services</h2>
          <p>
            L'expertise digitale de proximité pour les professionnels de Mulhouse et d'Alsace.
            De la stratégie SEO au lancement de votre site, nous propulsons votre présence locale.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`services__card services__card--${service.color}`}
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
                <a
                  href={service.slug}
                  className="services__card-link"
                >
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
