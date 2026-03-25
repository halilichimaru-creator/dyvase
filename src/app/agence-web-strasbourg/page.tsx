import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Strasbourg – Création de Site & SEO | Dyvase',
        description: 'Besoin d\'un site web à Strasbourg ? Dyvase crée des sites vitrines performants, ultra-rapides et optimisés pour le SEO local dans l\'Eurométropole.',
        keywords: 'agence web strasbourg, création site internet strasbourg, SEO local strasbourg, développeur web strasbourg, site vitrine strasbourg, agence digitale 67',
        alternates: {
            canonical: 'https://www.dyvase.com/agence-web-strasbourg'
        },
        openGraph: {
            title: 'Agence Web Strasbourg – Création de Site & SEO | Dyvase',
            description: 'Besoin d\'un site web à Strasbourg ? Dyvase crée des sites vitrines performants, ultra-rapides et optimisés pour le SEO local.',
            url: 'https://www.dyvase.com/agence-web-strasbourg',
            siteName: 'Dyvase',
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Agence Web Strasbourg – Création de Site & SEO',
            description: 'Dyvase crée des sites vitrines performants et optimisés pour le SEO local dans l\'Eurométropole.',
        },
    }
}

const cityData = {
    fullName: 'Strasbourg',
    description: 'votre agence web de proximité pour vos projets digitaux dans l\'Eurométropole de Strasbourg.'
}

export default function Page() {
    return (
        <div className="local-seo-page">
            <LocalSEOClient data={cityData} />
            
            <section className="local-extra-content section">
                <div className="container">
                    <div className="rich-text">
                        <h2>Votre partenaire digital au cœur de l'Eurométropole</h2>
                        <p>
                            Strasbourg, capitale européenne et hub économique majeur du Grand Est, exige une présence en ligne irréprochable. Que vous soyez une entreprise basée au Wacken, une boutique à la Krutenau ou une startup à Neudorf, Dyvase vous accompagne pour transformer votre vision en réalité digitale. Nous ne nous contentons pas de créer de beaux sites ; nous concevons des outils de conversion optimisés pour le marché strasbourgeois.
                        </p>
                        <p>
                            Le paysage digital strasbourgeois est compétitif. Pour émerger face à la concurrence alsacienne, il ne suffit plus d'avoir une simple "vitrine". Il faut un site qui charge en moins d'une seconde, qui respecte les critères Core Web Vitals de Google et qui est structuré pour le SEO local. C'est là que l'expertise de Dyvase fait la différence : nous utilisons les technologies les plus modernes pour garantir une vitesse d'exécution inégalée.
                        </p>
                        <h3>Pourquoi le SEO Local est crucial pour votre entreprise strasbourgeoise ?</h3>
                        <p>
                            Lorsqu'un client potentiel recherche "expert comptable Strasbourg" ou "restaurant centre-ville Strasbourg", votre site doit apparaître dans les premiers résultats. Le SEO local n'est pas une option, c'est le moteur de votre croissance. Nous optimisons chaque aspect technique de votre site pour que les algorithmes de Google comprennent précisément votre zone d'intervention et la pertinence de vos services pour les habitants de l'Eurométropole.
                        </p>
                        <p>
                            En choisissant Dyvase, vous bénéficiez d'une approche sur-mesure. Pas de templates pré-conçus ou de solutions "one size fits all". Nous analysons vos besoins spécifiques, vos concurrents locaux à Strasbourg et vos objectifs de conversion pour livrer un produit fini qui dépasse vos attentes. Notre proximité géographique entre Mulhouse et Strasbourg nous permet d'être réactifs et de comprendre parfaitement les enjeux de la région.
                        </p>

                        <h3>Questions Fréquentes (FAQ) - Création de site à Strasbourg</h3>
                        <div className="local-faq">
                            <div className="local-faq-item">
                                <strong>Quel est le tarif pour la création d'un site web à Strasbourg ?</strong>
                                <p>Le tarif d'un site vitrine sur-mesure avec des performances optimales démarre aux alentours de 1000€. Ce prix comprend le design, le développement technique et une base SEO locale solide pour vous positionner dans l'Eurométropole.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Proposez-vous la refonte de sites internet existants ?</strong>
                                <p>Oui, nous sommes spécialisés dans la refonte de sites vieillissants ou lents (souvent sous WordPress). Nous repensons totalement l'architecture pour offrir un site Next.js ultra-rapide et sécurisé qui convertit vos visiteurs strasbourgeois.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Comment garantissez-vous mon référencement local à Strasbourg ?</strong>
                                <p>Le SEO est intégré dès la conception du site. Nous optimisons le maillage interne, la sémantique de vos pages, les balises de données structurées et la vitesse de chargement pour correspondre exactement aux critères de l'algorithme Google pour la région de Strasbourg.</p>
                            </div>
                        </div>
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
                                "@type": "WebDesignCompany",
                                "name": "Dyvase - Agence Web Strasbourg",
                                "url": "https://www.dyvase.com/agence-web-strasbourg",
                                "logo": "https://www.dyvase.com/logo-header.png",
                                "image": "https://www.dyvase.com/og-image.png",
                                "description": "L'agence web Dyvase, experte en création de sites internet ultra-rapides et optimisation SEO local dans l'Eurométropole de Strasbourg.",
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Strasbourg",
                                    "sameAs": "https://fr.wikipedia.org/wiki/Strasbourg"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Strasbourg",
                                    "addressRegion": "Grand Est",
                                    "addressCountry": "FR"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Quel est le tarif pour la création d'un site web à Strasbourg ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Le tarif d'un site vitrine sur-mesure avec des performances optimales démarre aux alentours de 1000€. Ce prix comprend le design, le développement technique et une base SEO locale solide pour vous positionner dans l'Eurométropole."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Proposez-vous la refonte de sites internet existants ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Oui, nous sommes spécialisés dans la refonte de sites vieillissants ou lents (souvent sous WordPress). Nous repensons totalement l'architecture pour offrir un site Next.js ultra-rapide et sécurisé qui convertit vos visiteurs strasbourgeois."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Comment garantissez-vous mon référencement local à Strasbourg ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Le SEO est intégré dès la conception du site. Nous optimisons le maillage interne, la sémantique de vos pages, les balises de données structurées et la vitesse de chargement pour correspondre exactement aux critères de l'algorithme Google pour la région de Strasbourg."
                                        }
                                    }
                                ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Accueil",
                                        "item": "https://www.dyvase.com"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Agence Web Strasbourg",
                                        "item": "https://www.dyvase.com/agence-web-strasbourg"
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
