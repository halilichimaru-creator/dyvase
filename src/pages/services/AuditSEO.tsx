import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
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
                description="Votre site est invisible sur Google ? Dyvase réalise un audit SEO complet et optimise les performances de votre site pour atteindre la première page. Contactez-nous."
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
                        <h1>Audit <span className="text-gradient">SEO Rapide</span> & Performance</h1>
                        <p className="service-hero__subtitle">
                            Ne laissez pas vos concurrents prendre votre place. Nous livrons des 
                            audits et des optimisations records pour dominer Google immédiatement.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Première Page Google</h3>
                            <p>Nous ne nous contentons pas d'analyser. Nous agissons pour vous placer devant vos concurrents là où vos clients vous cherchent.</p>
                        </div>
                        <div className="service-card">
                            <h3>Vitesse Instantanée</h3>
                            <p>Un site lent est un site mort. Nous optimisons chaque détail pour que vos pages s'affichent en moins d'une seconde.</p>
                        </div>
                        <div className="service-card">
                            <h3>Domination Locale</h3>
                            <p>Soyez le premier choix à Mulhouse et sa région. Nous boostons votre visibilité là où ça compte vraiment pour votre chiffre d'affaires.</p>
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

            <section className="service-cta section bg-cream">
                <div className="container">
                    <div className="cta-box">
                        <h2>Besoin de clarifier votre stratégie SEO ?</h2>
                        <p>Obtenez un audit complet et des conseils personnalisés pour dominer votre marché local.</p>
                        <Link to="/devis" className="btn btn-primary">Demander mon audit & devis</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
