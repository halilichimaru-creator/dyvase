import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
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
                description="Besoin d'un site vitrine haut de gamme ? Dyvase crée des sites internet sur-mesure, rapides et optimisés SEO pour les artisans et PME. Contactez-nous."
                keywords="création site vitrine, agence web mulhouse, site internet professionnel, contact site web"
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
                        <h1>Votre Site Vitrine en <span className="text-gradient">Temps Record</span></h1>
                        <p className="service-hero__subtitle">
                            Plus rapide, plus sécurisé et plus rentable qu'un site WordPress. 
                            Nous créons votre carte de visite digitale ultra-performante pour 
                            transformer immédiatement vos visiteurs en clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Vitesse Record</h3>
                            <p>Nous livrons votre site en un temps record sans aucun compromis sur la qualité. Soyez en ligne avant vos concurrents.</p>
                        </div>
                        <div className="service-card">
                            <h3>Mieux que WordPress</h3>
                            <p>Oubliez la lenteur et les bugs. Nos sites chargent instantanément et offrent une sécurité totale dès le premier jour.</p>
                        </div>
                        <div className="service-card">
                            <h3>SEO Natif</h3>
                            <p>Votre site est construit pour dominer Google. Pas besoin de plugins compliqués, la performance est incluse dans le code.</p>
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

            <section className="service-cta section bg-cream">
                <div className="container">
                    <div className="cta-box">
                        <h2>Prêt à donner vie à votre projet ?</h2>
                        <p>Obtenez une estimation gratuite et personnalisée pour votre futur site vitrine en quelques minutes.</p>
                        <Link to="/devis" className="btn btn-primary">Démarrer mon devis gratuit</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
