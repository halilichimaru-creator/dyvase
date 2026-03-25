import { Metadata } from 'next'
import VitrineClient from './VitrineClient'

export const metadata: Metadata = {
  title: 'Création Site Vitrine Mulhouse | Agence Web Dyvase',
  description: 'Besoin d\'un site vitrine performant à Mulhouse ? Dyvase crée des sites sur-mesure ultra-rapides, optimisés pour le SEO et conçus pour convertir vos prospects.',
  keywords: 'création site vitrine mulhouse, site vitrine sur-mesure, site internet professionnel mulhouse, création site web alsace, site vitrine rapide',
  alternates: {
    canonical: 'https://www.dyvase.com/services/creation-site-vitrine',
  },
  openGraph: {
    title: 'Création Site Vitrine Mulhouse | Agence Web Dyvase',
    description: 'Besoin d\'un site vitrine performant à Mulhouse ? Dyvase crée des sites sur-mesure ultra-rapides, optimisés pour le SEO.',
    url: 'https://www.dyvase.com/services/creation-site-vitrine',
    siteName: 'Dyvase',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Création Site Vitrine Mulhouse | Agence Web Dyvase',
    description: 'Dyvase crée des sites sur-mesure ultra-rapides, optimisés pour le SEO et conçus pour convertir vos prospects.',
  },
}

export default function CreationSiteVitrine() {
  return <VitrineClient />
}
