import { Metadata } from 'next'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import About from '@/components/About/About'
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews'

export const metadata: Metadata = {
  title: 'Dyvase | Agence Web Mulhouse - Création de Sites & SEO',
  description: 'Agence web à Mulhouse spécialisée en création de sites internet sur-mesure, ultra-rapides et optimisés pour le référencement naturel (SEO). Boostez votre visibilité locale.',
  alternates: {
    canonical: 'https://dyvase.com/',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <GoogleReviews />
    </>
  )
}
