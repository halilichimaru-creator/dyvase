import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQ | Vos questions sur la création de site & SEO | Dyvase",
  description: "Tout savoir sur la création de votre site internet, les délais, les tarifs et l'optimisation SEO avec Dyvase, votre agence web à Mulhouse.",
}

const faqs = [
    {
      category: 'Général',
      questions: [
        {
          q: 'Quels types de sites web créez-vous ?',
          a: 'Nous créons des sites vitrines sur-mesure et réalisons des refontes de sites existants. Chaque projet est développé selon vos besoins spécifiques pour refléter au mieux votre activité.',
        },
        {
          q: 'Combien de temps faut-il pour créer un site web ?',
          a: 'Le délai varie selon la complexité du projet. Un site vitrine simple prend 2-4 semaines, tandis qu\'un projet plus élaboré avec des fonctionnalités avancées peut nécessiter 6-10 semaines. Nous établissons un planning détaillé dès le début du projet.',
        },
        {
          q: 'Travaillez-vous uniquement à Mulhouse ?',
          a: 'Non, bien que basés à Mulhouse, nous travaillons avec des clients dans toute la France et même à l\'international. Nous pouvons gérer les projets entièrement à distance ou organiser des rencontres selon vos préférences.',
        },
      ],
    },
    {
      category: 'Devis & Projets',
      questions: [
        {
          q: 'Comment obtenir un devis ?',
          a: 'C\'est simple ! Rendez-vous sur notre page "Devis Gratuit" et répondez à notre questionnaire rapide (moins de 2 minutes). Nous analyserons vos réponses et vous recontacterons avec une proposition personnalisée.',
        },
        {
          q: 'Proposez-vous des facilités de paiement ?',
          a: 'Oui, nous proposons des échelonnements de paiement adaptés à votre budget. Généralement : 30% à la signature, 40% à mi-parcours, et 30% à la livraison.',
        },
        {
          q: 'Proposez-vous du sur-mesure ?',
          a: 'Absolument ! Chaque projet est unique. Notre questionnaire en ligne nous permet de bien comprendre vos besoins, et nous vous proposons ensuite une solution entièrement personnalisée avec un devis adapté.',
        },
      ],
    },
    {
      category: 'Technique',
      questions: [
        {
          q: 'Quelles technologies utilisez-vous ?',
          a: 'Nous utilisons les technologies les plus récentes : React, Next.js, TypeScript, Node.js, etc. Nous choisissons la stack technique la plus adaptée à votre projet pour garantir performance et évolutivité.',
        },
        {
          q: 'Mon site sera-t-il responsive ?',
          a: 'Absolument ! Tous nos sites sont 100% responsive et s\'adaptent parfaitement à tous les écrans (mobile, tablette, desktop). Le design mobile-first est notre standard.',
        },
        {
          q: 'Optimisez-vous le référencement SEO ?',
          a: 'Oui, le SEO est intégré dès la conception. Nous optimisons la structure, les balises meta, la vitesse de chargement, et vous conseillons sur la stratégie de contenu pour maximiser votre visibilité sur Google.',
        },
      ],
    },
    {
      category: 'Maintenance & Support',
      questions: [
        {
          q: 'Proposez-vous une maintenance après livraison ?',
          a: 'Oui, nous proposons des contrats de maintenance mensuels incluant : mises à jour de sécurité, sauvegardes, corrections de bugs, et support technique. Nous restons votre partenaire sur le long terme.',
        },
        {
          q: 'Puis-je modifier mon site moi-même ?',
          a: 'Oui, nous pouvons intégrer un CMS (système de gestion de contenu) qui vous permettra de modifier facilement vos textes, images et pages. Nous vous formons à son utilisation.',
        },
        {
          q: 'Que se passe-t-il en cas de problème technique ?',
          a: 'Nous offrons un support réactif par email et téléphone. Pour les clients sous contrat de maintenance, nous intervenons sous 24h pour résoudre tout problème technique.',
        },
      ],
    },
]

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.flatMap(cat => cat.questions).map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
