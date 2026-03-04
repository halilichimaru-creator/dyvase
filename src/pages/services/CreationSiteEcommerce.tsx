import { motion } from 'framer-motion'
import SEO from '../../components/SEO/SEO'
import Contact from '../../components/Contact/Contact'
import './ServicePage.css'

export default function CreationSiteEcommerce() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Création de Site E-commerce",
        "description": "Vendez vos produits en ligne avec une boutique performante, sécurisée et optimisée pour la conversion.",
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
                title="Création Site E-commerce Mulhouse | Boutique en Ligne Dyvase"
                description="Lancez votre boutique en ligne avec Dyvase. Nous créons des sites e-commerce performants, sécurisés et optimisés pour booster vos ventes. Devis gratuit."
                keywords="création site e-commerce, boutique en ligne mulhouse, vente en ligne, shopify, woo commerce alternative"
                jsonLd={jsonLd}
            />

            <section className="service-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">E-commerce Expert</span>
                        <h1>Développement de <span className="text-gradient">Boutique en Ligne</span></h1>
                        <p className="service-hero__subtitle">
                            Transformez votre activité avec une boutique en ligne robuste. Nous gérons
                            tout, du paiement sécurisé à la gestion des stocks.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Paiement Sécurisé</h3>
                            <p>Intégration de Stripe, PayPal et solutions bancaires pour des transactions en toute confiance.</p>
                        </div>
                        <div className="service-card">
                            <h3>Gestion Simplifiée</h3>
                            <p>Interface intuitive pour gérer vos produits, vos stocks et vos commandes sans stress.</p>
                        </div>
                        <div className="service-card">
                            <h3>Conversion Boostée</h3>
                            <p>Parcours d'achat optimisé pour réduire l'abandon de panier et maximiser vos ventes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-content section">
                <div className="container">
                    <div className="text-layout">
                        <h2>Votre succès e-commerce commence ici</h2>
                        <p>
                            Vendre en ligne demande plus qu'un simple catalogue. Chez Dyvase, nous
                            analysons vos besoins à Mulhouse ou ailleurs pour proposer la solution
                            la plus adaptée (Next.js, Headless CMS ou solution sur-mesure).
                        </p>
                        <ul className="check-list">
                            <li>Optimisation de la vitesse de chargement</li>
                            <li>Filtrage et recherche avancée</li>
                            <li>Notifications par e-mail automatiques</li>
                            <li>Statistiques de vente détaillées</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}
