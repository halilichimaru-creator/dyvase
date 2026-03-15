'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import '../LocalSEO.css'

type CityData = {
    fullName: string;
    description: string;
}

export default function LocalSEOClient({ data }: { data: CityData }) {
    return (
        <div className="local-seo-page">
            <section className="local-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Agence Web {data.fullName}</span>
                        <h1>Boostez votre présence digitale à <span className="text-gradient">{data.fullName}</span> avec Dyvase</h1>
                        <p className="local-hero__subtitle">
                            Dyvase accompagne les entreprises et artisans de {data.fullName} dans la
                            création de sites web performants, modernes et optimisés pour le SEO local.
                        </p>
                        <div className="local-hero__actions">
                            <Link href="/devis" className="btn btn-primary">Démarrer un projet</Link>
                            <Link href="/#portfolio" className="btn btn-secondary">Voir nos réalisations</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="local-features section">
                <div className="container">
                    <div className="local-features__grid">
                        <div className="local-feature-card">
                            <div className="local-feature-card__icon">🚀</div>
                            <h3>Performance Maximale</h3>
                            <p>Sites ultra-rapides pour offrir la meilleure expérience à vos clients de {data.fullName}.</p>
                        </div>
                        <div className="local-feature-card">
                            <div className="local-feature-card__icon">🎯</div>
                            <h3>SEO Local Optimisé</h3>
                            <p>Soyez visible on Google quand vos clients recherchent vos services à {data.fullName}.</p>
                        </div>
                        <div className="local-feature-card">
                            <div className="local-feature-card__icon">📱</div>
                            <h3>Design Mobile-First</h3>
                            <p>Votre site s'adapte parfaitement à tous les écrans, pour ne rater aucun prospect.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="local-content section">
                <div className="container">
                    <div className="local-content__layout">
                        <div className="local-content__text">
                            <h2>Pourquoi choisir Dyvase pour votre projet à {data.fullName} ?</h2>
                            <p>
                                Basée à Mulhouse, notre agence intervient dans toute la région de {data.fullName}.
                                Nous comprenons le marché local alsacien et belfortain, ce qui nous permet
                                de proposer des stratégies digitales adaptées à votre zone de chalandise.
                            </p>
                            <p>
                                Que vous ayez besoin d'un site vitrine pour présenter votre activité,
                                ou d'une refonte complète de votre image de marque, nous sommes là pour vous.
                            </p>
                            <ul className="check-list">
                                <li>Proximité et réactivité</li>
                                <li>Design unique (pas de templates génériques)</li>
                                <li>Accompagnement de A à Z</li>
                                <li>Hébergement et maintenance inclus</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="local-cta section bg-cream">
                <div className="container">
                    <div className="cta-box">
                        <h2>Prêt à booster votre visibilité à {data.fullName} ?</h2>
                        <p>Discutons de votre projet et obtenez une estimation gratuite en quelques minutes.</p>
                        <Link href="/devis" className="btn btn-primary">Obtenir mon devis gratuit</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
