import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Colmar – Création de Site & SEO | Dyvase',
        description: 'Votre expert en création de sites internet à Colmar. Dyvase accompagne les entreprises du Haut-Rhin avec des solutions digitales ultra-rapides et un SEO local performant.',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-colmar'
        }
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
                    </div>
                </div>
            </section>
        </div>
    )
}
