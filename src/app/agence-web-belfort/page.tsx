import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Belfort – Création de Site & SEO | Dyvase',
        description: 'Besoin d\'un site web à Belfort ? Dyvase, agence web de proximité, crée des sites vitrines modernes et optimisés pour le référencement local dans le Territoire de Belfort.',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-belfort'
        }
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
                    </div>
                </div>
            </section>
        </div>
    )
}
