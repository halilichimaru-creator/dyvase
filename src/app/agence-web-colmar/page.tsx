import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Colmar – Création de Site & SEO | Dyvase',
        description: 'Votre expert en création de sites internet à Colmar. Dyvase accompagne les entreprises du Haut-Rhin avec des solutions digitales ultra-rapides et un SEO local performant.',
        keywords: 'agence web colmar, création site internet colmar, SEO local colmar, développeur web colmar, site vitrine colmar, agence digitale haut-rhin',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-colmar'
        },
        openGraph: {
            title: 'Agence Web Colmar – Création de Site & SEO | Dyvase',
            description: 'Votre expert en création de sites internet à Colmar. Solutions digitales ultra-rapides et SEO local.',
            url: 'https://dyvase.com/agence-web-colmar',
            siteName: 'Dyvase',
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Agence Web Colmar – Création de Site & SEO | Dyvase',
            description: 'Votre expert en création de sites internet à Colmar. SEO local et sites vitrines rapides.',
        },
    }
}

const cityData = {
    fullName: 'Colmar',
    description: 'votre expert en création de sites internet à Colmar et dans tout le centre du Haut-Rhin.'
}

export default function Page() {
    return (
        <div className="local-seo-page">
            <LocalSEOClient data={cityData} />
            
            <section className="local-extra-content section">
                <div className="container">
                    <div className="rich-text">
                        <h2>Développez votre visibilité digitale à Colmar et dans le Haut-Rhin</h2>
                        <p>
                            Colmar, ville d'art et d'histoire, est le cœur battant du tourisme et de la gastronomie alsacienne. Pour les commerçants de la Petite Venise, les vignerons de la Route des Vins ou les entreprises artisanales de la zone industrielle nord, posséder un site web performant est devenu un enjeu vital. Dyvase, agence ancrée localement, comprend les spécificités du tissu économique colmarien.
                        </p>
                        <p>
                            Dans une région où le flux touristique est constant, votre site internet doit être l'ambassadeur de votre savoir-faire. Un design moderne, une navigation fluide sur mobile et une vitesse de chargement exemplaire sont les clés pour capter l'attention d'une clientèle locale et internationale. Nous intégrons les dernières technologies du web pour offrir à vos visiteurs une expérience premium, à l'image du prestige de Colmar.
                        </p>
                        <h3>Un référencement local pour dominer le marché colmarien</h3>
                        <p>
                            Le SEO local est notre spécialité. Être visible sur Google Maps et dans les résultats de recherche quand on tape "hôtel Colmar" ou "artisan menuisier 68" est le moyen le plus efficace d'attirer de nouveaux clients. Chez Dyvase, nous optimisons votre contenu pour qu'il résonne avec les attentes des utilisateurs locaux, tout en respectant les meilleures pratiques techniques pour une indexation parfaite.
                        </p>
                        <p>
                            Collaborer avec Dyvase, c'est choisir une agence réactive et passionnée par le succès de ses clients. Nous vous suivons de la conception graphique à la mise en ligne, en passant par l'hébergement sécurisé. Notre objectif est simple : faire de votre site web un véritable levier de croissance pour votre activité à Colmar. Profitez d'une expertise de pointe combinée à une connaissance approfondie du marché alsacien.
                        </p>

                        <h3>Questions Fréquentes (FAQ) - Création de site à Colmar</h3>
                        <div className="local-faq">
                            <div className="local-faq-item">
                                <strong>Quel est le coût moyen pour un site internet à Colmar ?</strong>
                                <p>Un site vitrine de qualité chez Dyvase commence à environ 1000€. Ce budget inclut un design moderne, des performances exceptionnelles et une base SEO optimisée pour briller dans la recherche locale colmarienne.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Mon site sera-t-il adapté pour mobile ?</strong>
                                <p>Absolument. Nous concevons tous nos sites en approche "Mobile-First". Votre site sera parfaitement lisible et navigable sur smartphones et tablettes, ce qui est indispensable pour capter la clientèle touristique et locale du Haut-Rhin.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Comment fonctionne le référencement sur Colmar ?</strong>
                                <p>Nous identifions les mots-clés utilisés par vos clients potentiels dans la région de Colmar. Nous optimisons ensuite l'arborescence, le contenu textuel et le code technique de votre site pour que Google vous positionne devant vos concurrents locaux.</p>
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
                                "name": "Dyvase - Agence Web Colmar",
                                "url": "https://dyvase.com/agence-web-colmar",
                                "logo": "https://dyvase.com/logo-header.png",
                                "image": "https://dyvase.com/og-image.png",
                                "description": "L'agence web Dyvase, experte en création de sites internet ultra-rapides et optimisation SEO local à Colmar et dans tout le centre du Haut-Rhin.",
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Colmar",
                                    "sameAs": "https://fr.wikipedia.org/wiki/Colmar"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Colmar",
                                    "addressRegion": "Grand Est",
                                    "addressCountry": "FR"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Quel est le coût moyen pour un site internet à Colmar ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Un site vitrine de qualité chez Dyvase commence à environ 1000€. Ce budget inclut un design moderne, des performances exceptionnelles et une base SEO optimisée pour briller dans la recherche locale colmarienne."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Mon site sera-t-il adapté pour mobile ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolument. Nous concevons tous nos sites en approche 'Mobile-First'. Votre site sera parfaitement lisible et navigable sur smartphones et tablettes, ce qui est indispensable pour capter la clientèle touristique et locale du Haut-Rhin."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Comment fonctionne le référencement sur Colmar ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nous identifions les mots-clés utilisés par vos clients potentiels dans la région de Colmar. Nous optimisons ensuite l'arborescence, le contenu textuel et le code technique de votre site pour que Google vous positionne devant vos concurrents locaux."
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
                                        "item": "https://dyvase.com"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Agence Web Colmar",
                                        "item": "https://dyvase.com/agence-web-colmar"
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
