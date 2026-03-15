import { Metadata } from 'next'
import LocalSEOClient from '@/components/LocalSEO/LocalSEOClient'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Agence Web Strasbourg – Création de Site & SEO | Dyvase',
        description: 'Besoin d\'un site web à Strasbourg ? Dyvase crée des sites vitrines performants, ultra-rapides et optimisés pour le SEO local dans l\'Eurométropole.',
        alternates: {
            canonical: 'https://dyvase.com/agence-web-strasbourg'
        }
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
                    </div>
                </div>
            </section>
        </div>
    )
}
