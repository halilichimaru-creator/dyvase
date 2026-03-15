'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import '../ServicePage.css'

export default function AuditClient() {
    return (
        <div className="service-page">
            <section className="service-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Audit & Stratégie</span>
                        <h1>Audit <span className="text-gradient">SEO & Performance</span></h1>
                        <p className="service-hero__subtitle">
                            Ne laissez plus vos concurrents de Mulhouse vous passer devant. 
                            Nous analysons chaque détail de votre site pour en faire une 
                            machine à attirer des clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="service-details section bg-cream">
                <div className="container">
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Diagnostic Complet</h3>
                            <p>Analyse technique approfondie : vitesse, structure, balisage et erreurs bloquantes.</p>
                        </div>
                        <div className="service-card">
                            <h3>Stratégie Mots-Clés</h3>
                            <p>Identification des termes de recherche les plus rentables pour votre activité locale.</p>
                        </div>
                        <div className="service-card">
                            <h3>Plan d'Action</h3>
                            <p>Une feuille de route claire et priorisée pour améliorer vos positions sur Google.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-content section">
                <div className="container">
                    <div className="text-layout">
                        <h2>Dominez la recherche locale à Mulhouse</h2>
                        <p>
                            Le SEO n'est pas une option, c'est le moteur de votre croissance digitale.
                            Un bon référencement vous assure un flux régulier de clients qualifiés sans
                            dépendre uniquement de la publicité payante.
                        </p>
                        <h3>Ce que nous analysons :</h3>
                        <ul className="check-list">
                            <li>Performance mobile et Core Web Vitals</li>
                            <li>Structure sémantique et contenu</li>
                            <li>Profil de liens et autorité locale</li>
                            <li>Expérience utilisateur (UX) et conversion</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="service-cta section bg-cream">
                <div className="container">
                    <div className="cta-box">
                        <h2>Vous voulez savoir pourquoi vous n'êtes pas premier ?</h2>
                        <p>Obtenez une analyse personnalisée de votre présence actuelle et découvrez votre potentiel de croissance.</p>
                        <Link href="/devis" className="btn btn-primary">Demander mon audit gratuit</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
