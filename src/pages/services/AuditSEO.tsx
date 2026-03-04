import { motion } from 'framer-motion'
import SEO from '../../components/SEO/SEO'
import Contact from '../../components/Contact/Contact'
import './ServicePage.css'

export default function AuditSEO() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Audit SEO & Performance Web",
        "description": "Améliorez votre visibilité sur Google et la vitesse de votre site avec un audit complet et des optimisations techniques.",
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
                title="Expert SEO Mulhouse | Audit & Performance Web Dyvase"
                description="Votre site est invisible sur Google ? Dyvase réalise un audit SEO complet et optimise les performances de votre site pour atteindre la première page. Devis gratuit."
                keywords="expert SEO mulhouse, audit site web, optimisation performance, referencement naturel alsace"
                jsonLd={jsonLd}
            />

            <section className="service-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">SEO & Performance</span>
                        <h1>Audit <span className="text-gradient">SEO Naturel</span> & Technique</h1>
                        <p className="service-hero__subtitle">
                            Ne laissez pas vos concurrents prendre toute la place. Nous analysons
                            votre site et mettons en place les actions pour dominer les résultats Google.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Analyse Sémantique</h3>
                            <p>Recherche des mots-clés les plus rentables pour votre activité et optimisation de vos contenus.</p>
                        </div>
                        <div className="service-card">
                            <h3>Core Web Vitals</h3>
                            <p>Optimisation technique pour atteindre les scores maximums sur Google PageSpeed Insights.</p>
                        </div>
                        <div className="service-card">
                            <h3>Stratégie de Netlinking</h3>
                            <p>Conseils et mise en place d'actions pour renforcer l'autorité de votre domaine en ligne.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-content section">
                <div className="container">
                    <div className="text-layout">
                        <h2>Dominez votre marché local et national</h2>
                        <p>
                            Le SEO n'est pas une option, c'est une nécessité. À Mulhouse comme au niveau national,
                            les utilisateurs font confiance aux premiers résultats. Si vous n'y êtes pas,
                            vous perdez des clients chaque jour.
                        </p>
                        <p>
                            Notre approche combine expertise technique et stratégie marketing pour
                            des résultats durables.
                        </p>
                        <ul className="check-list">
                            <li>Audit technique approfondi</li>
                            <li>Optimisation du maillage interne</li>
                            <li>Suivi des positions en temps réel</li>
                            <li>Rapport mensuel détaillé</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    )
}
