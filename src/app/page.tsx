import { Metadata } from 'next'
import Hero from '@/components/Hero/Hero'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Dyvase | Agence Web Mulhouse - Création de Sites & SEO',
  description: 'Agence web à Mulhouse spécialisée en création de sites internet sur-mesure, ultra-rapides et optimisés pour le référencement naturel (SEO). Boostez votre visibilité locale.',
  keywords: 'agence web mulhouse, création site internet mulhouse, site vitrine mulhouse, SEO mulhouse, référencement naturel mulhouse, dyvase, agence digitale alsace, création site web alsace',
  alternates: {
    canonical: 'https://dyvase.com/',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <HomeClient />
    </>
  )
}
