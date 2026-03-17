import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Belfort – Création de Site & SEO | Dyvase',
        description: 'Besoin d\'un site web à Belfort ? Dyvase, agence web de proximité, crée des sites vitrines modernes et optimisés pour le référencement local dans le Territoire de Belfort.',
        keywords: 'agence web belfort, création site internet belfort, SEO local belfort, développeur web belfort, site vitrine belfort, agence digitale 90',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-belfort'
        },
        openGraph: {
            title: 'Agence Web Belfort – Création de Site & SEO | Dyvase',
            description: 'Besoin d\'un site web à Belfort ? Dyvase crée des sites vitrines modernes et optimisés pour le référencement local.',
            url: 'https://dyvase.com/agence-web-belfort',
            siteName: 'Dyvase',
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Agence Web Belfort – Création de Site & SEO',
            description: 'Agence web de proximité créant des sites vitrines modernes dans le Territoire de Belfort.',
        },
    }
}

const cityData = {
    fullName: 'Belfort',
    description: 'votre partenaire digital pour booster votre visibilité à Belfort et dans tout le Territoire de Belfort.'
}

export default function Page() {
    return (
        <div className="local-seo-page">
            <LocalSEOClient data={cityData} />
            
            <section className="local-extra-content section">
                <div className="container">
                    <div className="rich-text">
                        <h2>Accélérez votre transformation numérique à Belfort</h2>
                        <p>
                            Belfort, terre d'innovation industrielle et cité du Lion, possède un dynamisme économique unique à la croisée de l'Alsace, de la Franche-Comté et de la Suisse. Pour les entreprises belfortaines, la visibilité en ligne n'est plus un luxe mais une nécessité stratégique. Dyvase accompagne les acteurs locaux — PME, artisans et professions libérales — dans la conception de sites internet qui font autorité dans le Territoire de Belfort.
                        </p>
                        <p>
                            Que vous soyez implanté au Technopôle, dans le centre-ville ou dans les communes périphériques comme Valdoie ou Danjoutin, votre présence digitale doit refléter la qualité de votre travail. Nous concevons des interfaces modernes et robustes, capables de charger instantanément. La vitesse est un critère de classement majeur pour Google, et c'est notre marque de fabrique chez Dyvase.
                        </p>
                        <h3>Le SEO Local : Votre allié pour conquérir le marché belfortain</h3>
                        <p>
                            Le référencement local permet de connecter votre entreprise aux habitants de Belfort qui recherchent activement vos services. En optimisant votre site pour des requêtes ciblées comme "plombier Belfort" ou "cabinet de conseil 90", nous vous plaçons directement sous les yeux de vos prospects. Notre approche technique du SEO garantit une structure de page optimisée, des balises sémantiques précises et une expérience utilisateur sans faille.
                        </p>
                        <p>
                            Choisir Dyvase, c'est opter pour une agence qui privilégie les résultats concrets. Nous ne nous contentons pas de livrer un site informatique ; nous bâtissons un véritable levier marketing pour votre business à Belfort. Avec un accompagnement personnalisé, de la stratégie à la maintenance, nous veillons à ce que votre outil digital reste performant année après année. Faites confiance à un expert local pour booster votre visibilité.
                        </p>

                        <h3>Questions Fréquentes (FAQ) - Création de site à Belfort</h3>
                        <div className="local-faq">
                            <div className="local-faq-item">
                                <strong>Combien coûte la création d'un site web à Belfort ?</strong>
                                <p>La création d'un site vitrine optimisé et ultra-rapide est accessible à partir de 1000€ environ. Ce tarif inclut toute l'architecture technique nécessaire pour bien vous référencer sur le Territoire de Belfort.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Quel est le délai pour lancer mon site ?</strong>
                                <p>Un projet standard de site vitrine est généralement livré sous 2 à 4 semaines. Dès la mise en ligne, nous mettons en place les bonnes pratiques SEO pour que Google vous indexe rapidement.</p>
                            </div>
                            <div className="local-faq-item">
                                <strong>Gérez-vous la maintenance et l'hébergement ?</strong>
                                <p>Oui, nous proposons des solutions d'infogérance complètes. Nous nous occupons de l'hébergement performant, de la sécurité et des mises à jour de votre site web, vous permettant de vous concentrer à 100% sur votre cœur de métier belfortain.</p>
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
                                "name": "Dyvase - Agence Web Belfort",
                                "url": "https://dyvase.com/agence-web-belfort",
                                "logo": "https://dyvase.com/logo-header.png",
                                "image": "https://dyvase.com/og-image.png",
                                "description": "L'agence web Dyvase de proximité, crée des sites vitrines modernes et optimisés pour le référencement local dans le Territoire de Belfort.",
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Belfort",
                                    "sameAs": "https://fr.wikipedia.org/wiki/Belfort"
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Belfort",
                                    "addressRegion": "Bourgogne-Franche-Comté",
                                    "addressCountry": "FR"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Combien coûte la création d'un site web à Belfort ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "La création d'un site vitrine optimisé et ultra-rapide est accessible à partir de 1000€ environ. Ce tarif inclut toute l'architecture technique nécessaire pour bien vous référencer sur le Territoire de Belfort."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Quel est le délai pour lancer mon site ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Un projet standard de site vitrine est généralement livré sous 2 à 4 semaines. Dès la mise en ligne, nous mettons en place les bonnes pratiques SEO pour que Google vous indexe rapidement."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Gérez-vous la maintenance et l'hébergement ?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Oui, nous proposons des solutions d'infogérance complètes. Nous nous occupons de l'hébergement performant, de la sécurité et des mises à jour de votre site web, vous permettant de vous concentrer à 100% sur votre cœur de métier belfortain."
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
                                        "name": "Agence Web Belfort",
                                        "item": "https://dyvase.com/agence-web-belfort"
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
