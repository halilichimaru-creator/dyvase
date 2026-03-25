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
                        <h2>Dominez la recherche locale à Mulhouse et en Alsace</h2>
                        <p>
                            Le SEO (référencement naturel) n'est pas une option, c'est le moteur de votre croissance digitale. Un bon référencement vous assure un flux régulier de clients qualifiés, sans dépendre uniquement de la publicité payante (Google Ads ou réseaux sociaux) dont les coûts ne cessent d'augmenter.
                        </p>
                        <p>
                            Chez Dyvase, notre approche de l'audit SEO est chirurgicale. Contrairement à de simples rapports automatisés générés par des logiciels, nous réalisons une analyse manuelle et approfondie de votre site web, de vos concurrents basés dans le Haut-Rhin, et du comportement de recherche de votre cible locale.
                        </p>
                        <h3>Ce que nous analysons en profondeur :</h3>
                        <ul className="check-list">
                            <li><strong>Performance technique (Core Web Vitals) :</strong> Vitesse de chargement sur mobile et desktop, stabilité visuelle (CLS) et interactivité. Un site rapide est pré-requis par l'algorithme de Google.</li>
                            <li><strong>Structure sémantique et Indexabilité :</strong> Balises Hn, balisage Schema.org (JSON-LD), plan de site (sitemap.xml), balises canoniques et gestion des erreurs (404, redirections 301).</li>
                            <li><strong>Profil de liens (Backlinks) :</strong> Autorité de votre domaine comparée à vos concurrents, ancres de liens et opportunité de netlinking local.</li>
                            <li><strong>Expérience utilisateur (UX) et taux de conversion :</strong> Parcours visiteur, positionnement des appels à l'action (CTA) et lisibilité sur smartphones.</li>
                        </ul>

                        <h3 className="mt-8">Questions Fréquentes sur l'Audit SEO</h3>
                        <div className="local-faq">
                            <div className="local-faq-item">
                                <strong>Pourquoi mon site n'apparaît pas sur Google à Mulhouse ?</strong>
                                <p>Plusieurs raisons peuvent expliquer cela : des pages non indexées techniquement (balise noindex), un contenu texte trop pauvre, une vitesse de chargement pénalisante pour l'utilisateur mobile, ou encore un manque de liens d'autorité. L'audit permet d'identifier précisément le blocage.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Combien de temps faut-il pour voir des résultats SEO ?</strong>
                                <p>Le SEO est une stratégie pérenne. Les corrections techniques (vitesse, indexation) peuvent impacter le trafic en quelques semaines. L'optimisation de contenu et l'acquisition de liens prennent généralement 3 à 6 mois pour asseoir une domination locale claire sur votre secteur.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Que livre concrètement l'audit de performance ?</strong>
                                <p>Nous vous remettons un rapport détaillé, compréhensible par un non-technicien, accompagné d'une feuille de route priorisée. Soit nous implémentons les correctifs pour vous, soit nous guidons votre équipe de développement pas à pas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-cta section bg-cream">
                <div className="container">
                    <div className="cta-box">
                        <h2>Vous voulez savoir pourquoi vos concurrents vous dépassent ?</h2>
                        <p>Obtenez une analyse personnalisée de votre présence actuelle et découvrez votre potentiel de croissance.</p>
                        <Link href="/devis" className="btn btn-primary">Demander mon audit gratuit</Link>
                    </div>
                </div>
            </section>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Service",
                                "name": "Audit SEO et Performance",
                                "provider": {
                                    "@type": "WebDesignCompany",
                                    "name": "Dyvase - Agence Web Mulhouse",
                                    "image": "https://www.dyvase.com/logo-header.png"
                                },
                                "description": "Analyse approfondie (technique, sémantique, liens externes) et optimisation des performances Core Web Vitals de votre site.",
                                "areaServed": {
                                    "@type": "Region",
                                    "name": "Alsace"
                                },
                                "url": "https://www.dyvase.com/services/audit-seo-performance"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Pourquoi mon site n'apparaît pas sur Google à Mulhouse ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Plusieurs raisons peuvent expliquer cela : des pages non indexées techniquement, un contenu trop pauvre, ou une vitesse de chargement pénalisante. L'audit identifie le blocage."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Combien de temps faut-il pour voir des résultats SEO ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Les corrections techniques impactent le trafic en quelques semaines. L'optimisation globale (contenu, liens) prend généralement 3 à 6 mois."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Que livre concrètement l'audit de performance ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Un rapport détaillé avec une feuille de route priorisée. Nous pouvons implémenter les correctifs ou guider votre équipe technique."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
        </div>
    )
}
