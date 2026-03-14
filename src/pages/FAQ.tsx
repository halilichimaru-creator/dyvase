import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO/SEO'
import './FAQ.css'

const faqs = [
// ... (cached for brevity but keep original if not provided in chunk)
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

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
    <div className="faq-page">
      <SEO 
        title="FAQ | Vos questions sur la création de site & SEO | Dyvase"
        description="Tout savoir sur la création de votre site internet, les délais, les tarifs et l'optimisation SEO avec Dyvase, votre agence web à Mulhouse."
        jsonLd={jsonLd}
      />
      <section className="faq-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Questions Fréquentes</h1>
            <p className="faq-hero__subtitle">
              Trouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-grid">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="faq-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h2 className="faq-category__title">{category.category}</h2>
                <div className="faq-questions">
                  {category.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === key

                    return (
                      <div key={qIndex} className="faq-item">
                        <button
                          className={`faq-question ${isOpen ? 'active' : ''}`}
                          onClick={() => toggleQuestion(catIndex, qIndex)}
                        >
                          <span>{item.q}</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <motion.div
                          className="faq-answer"
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="faq-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3>Vous ne trouvez pas la réponse à votre question ?</h3>
            <p>Contactez-nous directement, nous serons ravis de vous aider !</p>
            <div className="faq-cta__buttons">
              <a href="https://wa.me/33651504173" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                06 51 50 41 73
              </a>
              <a href="mailto:dyvase.contact@gmail.com" className="btn btn-secondary">
                dyvase.contact@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

