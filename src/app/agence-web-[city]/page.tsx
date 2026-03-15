import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import LocalSEOClient from './LocalSEOClient'

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

type Props = {
    params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const city = resolvedParams?.city?.toLowerCase()
    const data = city ? cityData[city] : null
    
    if (!data) {
        return {
            title: 'Agence Web | Dyvase',
        }
    }

    return {
        title: `Dyvase | Agence Web ${data.fullName} - Création Site & SEO`,
        description: `Besoin d'un site web à ${data.fullName} ? Dyvase crée des sites vitrines performants et optimisés pour le SEO local à ${data.fullName}.`,
    }
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params
    const city = resolvedParams?.city?.toLowerCase()
    const data = city ? cityData[city] : null

    if (!data) {
        notFound()
    }

    return <LocalSEOClient data={data} />
}

export async function generateStaticParams() {
    return Object.keys(cityData).map((city) => ({
        city: city,
    }))
}
