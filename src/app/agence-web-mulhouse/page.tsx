import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Mulhouse – Création de Site & SEO | Dyvase',
        description: 'Dyvase est votre agence web de référence à Mulhouse. Spécialiste en création de sites internet ultra-rapides et en SEO local pour booster votre business en Alsace.',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-mulhouse'
        }
    }
}

const cityData = {
    fullName: 'Mulhouse',
    description: 'votre agence de proximité pour la création de sites internet performants à Mulhouse.'
}

export default function Page() {
    return (
        <div className="local-seo-page">
            <LocalSEOClient data={cityData} />
            
            <section className="local-extra-content section">
                <div className="container">
                    <div className="rich-text">
                        <h2>Dyvase : L'expertise digitale au cœur de Mulhouse</h2>
                        <p>
                            Basée à Mulhouse, au carrefour de l'innovation alsacienne, Dyvase est l'agence web qui dynamise la présence en ligne des entreprises locales. De la Fonderie au KMØ, en passant par le centre historique et les zones d'activités périphériques, nous sommes fiers de contribuer au rayonnement numérique de notre ville. Notre mission est claire : offrir aux entrepreneurs mulhousiens les sites web les plus rapides et les mieux référencés du marché.
                        </p>
                        <p>
                            Mulhouse, riche de son passé industriel et aujourd'hui tournée vers le numérique et la French Tech, mérite des solutions digitales à la pointe. Chez Dyvase, nous utilisons les technologies de développement les plus avancées pour garantir des temps de chargement records. Un site rapide, c'est une meilleure expérience utilisateur, un taux de rebond réduit et, au final, plus de clients pour votre entreprise mulhousienne.
                        </p>
                        <h3>Dominez la recherche locale à Mulhouse et dans le 68</h3>
                        <p>
                            Le SEO local est au cœur de notre stratégie. Pour que vos services soient trouvés par vos clients à Mulhouse, Illzach, Riedisheim ou Pfastatt, votre site doit être parfaitement optimisé. Nous travaillons sur la structure, le contenu sémantique et les signaux locaux pour propulser votre site dans les premiers résultats de recherche. Que vous cherchiez à acquérir de nouveaux clients via "réparation informatique Mulhouse" ou "architecte Mulhouse", nous avons la solution.
                        </p>
                        <p>
                            En plus de la création, nous offrons un accompagnement complet incluant l'optimisation SEO continue, l'hébergement haute performance et la maintenance. Nous croyons en une relation de proximité avec nos clients mulhousiens : nous sommes disponibles pour discuter de vos projets autour d'un café et adapter nos solutions à vos ambitions. Transformez votre présence digitale avec Dyvase, votre partenaire de confiance à Mulhouse.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
