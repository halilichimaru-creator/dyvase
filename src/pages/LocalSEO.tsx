import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO/SEO'
import './LocalSEO.css'

const cityData: Record<string, { fullName: string; description: string }> = {
    colmar: {
        fullName: 'Colmar',
        description: 'votre expert en création de sites internet à Colmar et dans le Haut-Rhin.'
    },
    belfort: {
        fullName: 'Belfort',
        description: 'votre partenaire digital pour booster votre visibilité à Belfort.'
    },
    strasbourg: {
        fullName: 'Strasbourg',
        description: 'votre agence web de proximité pour vos projets digitaux à Strasbourg.'
    },
    saint_louis: {
        fullName: 'Saint-Louis',
        description: 'création de sites web professionnels à Saint-Louis et dans le secteur frontalier.'
    },
    mulhouse: {
        fullName: 'Mulhouse',
        description: 'votre agence de proximité pour la création de sites internet à Mulhouse.'
    }
}

export default function LocalSEO() {
    const { city } = useParams<{ city: string }>()
    console.log('Rendering LocalSEO for city:', city)
    const data = city ? cityData[city.toLowerCase()] : null

    if (!data) {
        return (
            <div className="container section" style={{ textAlign: 'center' }}>
                <h2>Page non trouvée</h2>
                <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
            </div>
        )
    }

    const title = `Agence Web ${data.fullName} - Création Site Internet`
    const description = `Besoin d'un site web à ${data.fullName} ? Dyvase est ${data.description} Contactez-nous pour un accompagnement sur-mesure.`

    return (
        <div className="local-seo-page">
            <SEO title={title} description={description} />

            <section className="local-hero section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Agence Web {data.fullName}</span>
                        <h1>Boostez votre présence digitale à <span className="text-gradient">{data.fullName}</span></h1>
                        <p className="local-hero__subtitle">
                            Dyvase accompagne les entreprises et artisans de {data.fullName} dans la
                            création de sites web performants, modernes et optimisés pour le SEO local.
                        </p>
                        <div className="local-hero__actions">
                            <Link to="/devis" className="btn btn-primary">Démarrer un projet</Link>
                            <Link to="/#portfolio" className="btn btn-secondary">Voir nos réalisations</Link>
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
                            <p>Soyez visible sur Google quand vos clients recherchent vos services à {data.fullName}.</p>
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
                        <Link to="/devis" className="btn btn-primary">Obtenir mon devis gratuit</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
