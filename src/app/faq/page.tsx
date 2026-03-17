import { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ Dyvase | Réponses sur la Création de Site & SEO Mulhouse',
  description: 'Retrouvez toutes les réponses à vos questions sur la création de site vitrine, le référencement SEO, nos tarifs et notre méthodologie de travail à Mulhouse.',
  keywords: 'FAQ création site web, questions site internet, tarif site vitrine, SEO mulhouse questions, agence web mulhouse FAQ',
  alternates: {
    canonical: 'https://dyvase.com/faq',
  },
  openGraph: {
    title: 'FAQ Dyvase | Réponses sur la Création de Site & SEO Mulhouse',
    description: 'Retrouvez toutes les réponses à vos questions sur la création de site vitrine, le référencement SEO, nos tarifs et notre méthodologie de travail.',
    url: 'https://dyvase.com/faq',
    siteName: 'Dyvase',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Dyvase | Réponses sur la Création de Site & SEO Mulhouse',
    description: 'Retrouvez toutes les réponses à vos questions sur la création de site vitrine, le référencement SEO, nos tarifs et notre méthodologie de travail.',
  },
}

export default function FAQ() {
  const faqData = [
    {
      q: 'Quels types de sites web créez-vous ?',
      a: 'Nous créons des sites vitrines sur-mesure et réalisons des refontes de sites existants. Chaque projet est développé selon vos besoins spécifiques.',
    },
    {
      q: 'Combien de temps faut-il pour créer un site web ?',
      a: 'Le délai varie selon la complexité : 2-4 semaines pour un site vitrine simple, 6-10 semaines pour un projet élaboré.',
    },
    {
      q: 'Optimisez-vous le référencement SEO ?',
      a: 'Oui, le SEO est intégré dès la conception : structure, balises meta, vitesse de chargement et stratégie de contenu.',
    },
    {
      q: 'Mon site sera-t-il responsive ?',
      a: 'Absolument ! Tous nos sites sont 100% responsive et optimisés pour mobile, tablette et desktop.',
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQClient />
    </>
  )
}
