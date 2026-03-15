import { Metadata } from 'next'
import DevisClient from './DevisClient'

export const metadata: Metadata = {
  title: 'Devis Gratuit | Création Site Web & SEO Mulhouse - Dyvase',
  description: 'Obtenez un devis gratuit et personnalisé pour votre projet web à Mulhouse. Répondez à notre questionnaire en 2 minutes et recevez une estimation sur-mesure.',
  alternates: {
    canonical: 'https://dyvase.com/devis',
  },
}

export default function Devis() {
  return <DevisClient />
}
