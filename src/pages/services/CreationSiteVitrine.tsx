import { motion } from 'framer-motion'
import SEO from '../../components/SEO/SEO'
import Contact from '../../components/Contact/Contact'
import './ServicePage.css'

export default function CreationSiteVitrine() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Création de Site Vitrine Professionnel",
        "description": "Développement de sites vitrines sur-mesure, performants et optimisés pour le SEO. Présentez votre activité avec élégance.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Dyvase",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mulhouse",
                "addressCountry": "FR"
            }
        }
    }

    return (
        <div className="service-page">
            <SEO
                title="Création Site Vitrine Mulhouse | Agence Web Dyvase"
                description="Besoin d'un site vitrine haut de gamme ? Dyvase crée des sites internet sur-mesure, rapides et optimisés SEO pour les artisans et PME. Devis gratuit."
                keywords="création site vitrine, agence web mulhouse, site internet professionnel, devis site web"
                jsonLd={jsonLd}
            />

            <section className="service-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Service Premium</span>
                        <h1>Création de <span className="text-gradient">Site Vitrine</span> sur-mesure</h1>
                        <p className="service-hero__subtitle">
                            Votre site vitrine est votre carte de visite digitale. Nous concevons des
                            interfaces modernes qui captent l'attention et transforment vos visiteurs en clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Design Unique</h3>
                            <p>Pas de templates. Chaque design est pensé pour refléter l'identité de votre marque et se démarquer de la concurrence.</p>
                        </div>
                        <div className="service-card">
                            <h3>Vitesse & Performance</h3>
                            <p>Un site lent fait fuir les clients. Nous optimisons chaque ligne de code pour un chargement instantané.</p>
                        </div>
                        <div className="service-card">
                            <h3>SEO Ready</h3>
                            <p>La structure de votre site est pensée dès le départ pour plaire aux algorithmes de Google.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-content section">
                <div className="container">
                    <div className="text-layout">
                        <h2>Pourquoi un site vitrine avec Dyvase ?</h2>
                        <p>
                            À Mulhouse et dans toute la France, nous accompagnons les professionnels
                            qui souhaitent une présence en ligne solide. Un site vitrine n'est pas
                            juste une page statique ; c'est un outil de vente actif 24h/24.
                        </p>
                        <h3>Nos engagements :</h3>
                        <ul className="check-list">
                            <li>Responsive Design (Mobile, Tablette, Desktop)</li>
                            <li>Administration simple et intuitive</li>
                            <li>Hébergement sécurisé et performant</li>
                            <li>Support technique réactif</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}
