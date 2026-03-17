import { Metadata } from 'next'
import DevisClient from './DevisClient'

export const metadata: Metadata = {
  title: 'Devis Gratuit | Création Site Web & SEO Mulhouse - Dyvase',
  description: 'Obtenez un devis gratuit et personnalisé pour votre projet web à Mulhouse. Répondez à notre questionnaire en 2 minutes et recevez une estimation sur-mesure.',
  keywords: 'devis site web mulhouse, devis création site internet, devis agence web, prix site vitrine mulhouse, tarif site internet alsace',
  alternates: {
    canonical: 'https://dyvase.com/devis',
  },
  openGraph: {
    title: 'Devis Gratuit | Création Site Web & SEO Mulhouse - Dyvase',
    description: 'Obtenez un devis gratuit et personnalisé pour votre projet web à Mulhouse. Répondez à notre questionnaire en 2 minutes et recevez une estimation sur-mesure.',
    url: 'https://dyvase.com/devis',
    siteName: 'Dyvase',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devis Gratuit | Création Site Web & SEO Mulhouse - Dyvase',
    description: 'Obtenez un devis gratuit et personnalisé pour votre projet web à Mulhouse.',
  },
}

export default function Devis() {
  return <DevisClient />
}
