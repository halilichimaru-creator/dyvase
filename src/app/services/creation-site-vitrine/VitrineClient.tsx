'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import '../ServicePage.css'

export default function VitrineClient() {
  return (
    <div className="service-page">
      <section className="service-hero section">
        <div className="container">
          <motion.div 
            className="service-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="service-label">Service</span>
            <h1>Création de <span className="text-gradient">Site Vitrine</span> Record</h1>
            <p className="service-hero__description">
              Lancez votre activité en ligne en un temps record avec un site vitrine 
              ultra-performant, conçu pour convertir vos visiteurs mulhousiens en clients fidèles.
            </p>
            <div className="service-hero__actions">
              <Link href="/devis" className="btn btn-primary">Mon devis gratuit</Link>
              <a href="#details" className="btn btn-secondary">En savoir plus</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="details" className="service-details section">
        <div className="container">
          <div className="service-details__grid">
            <motion.div 
              className="service-details__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Pourquoi un site vitrine avec Dyvase ?</h2>
              <p>
                La plupart des sites vitrines aujourd'hui sont construits sur WordPress, 
                ce qui les rend souvent lents, lourds et difficiles à maintenir. Chez Dyvase, 
                nous utilisons des technologies web modernes pour vous offrir :
              </p>
              <ul className="service-features-list">
                <li>
                  <strong>Vitesse de chargement record :</strong> Votre site s'affiche en moins d'une seconde.
                </li>
                <li>
                  <strong>SEO local optimisé :</strong> Soyez visible dès les premiers jours à Mulhouse.
                </li>
                <li>
                  <strong>Design sur-mesure :</strong> Pas de templates génériques, votre site est unique.
                </li>
                <li>
                  <strong>Sécurité maximale :</strong> Une architecture robuste contre les cyberattaques.
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="service-details__stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-stat-card">
                <span className="stat-number">100/100</span>
                <span className="stat-label">Score Performance Google</span>
              </div>
              <div className="service-stat-card">
                <span className="stat-number">{"<"} 1s</span>
                <span className="stat-label">Temps de chargement</span>
              </div>
              <div className="service-stat-card">
                <span className="stat-number">+40%</span>
                <span className="stat-label">Taux de conversion moyen</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-process section">
        <div className="container">
          <div className="section-header">
            <h2>Notre processus de création</h2>
          </div>
          <div className="process-steps">
            {[
              { step: '01', title: 'Start-up', desc: 'Analyse de vos besoins, de vos cibles et du marché à Mulhouse.' },
              { step: '02', title: 'Design UX/UI', desc: 'Conception d\'une interface unique, mobile-first et très visuelle.' },
              { step: '03', title: 'Développement Next.js', desc: 'Codage propre, intégration SEO et optimisation des performances (Core Web Vitals).' },
              { step: '04', title: 'Lancement', desc: 'Mise en ligne, paramétrage Google Search Console et indexation.' }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="step-number">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-content section bg-cream">
        <div className="container">
            <div className="text-layout">
                <h2>Questions Fréquentes - Création de Site Internet</h2>
                <div className="local-faq">
                    <div className="local-faq-item">
                        <strong>Pourquoi privilégier un site sur-mesure (Next.js) plutôt que WordPress ?</strong>
                        <p>WordPress est lourd, nécessite beaucoup d'extensions et des mises à jour constantes pour rester sécurisé. Avec un site sur-mesure développé sous Next.js, vous bénéficiez de performances de chargement inégalées (critère crucial pour le SEO), d'une sécurité maximale et d'une conception pensée exactement pour vos besoins à vous, sans fioritures.</p>
                    </div>
                    <div className="local-faq-item">
                        <strong>Le site m'appartient-il à 100% ?</strong>
                        <p>Oui, à la livraison du projet, vous êtes pleinement propriétaire des droits relatifs à la conception visuelle et au contenu de votre site internet. Nous vous transférons les accès nécessaires sans aucun "lock-in" constructeur.</p>
                    </div>
                    <div className="local-faq-item">
                        <strong>Comment sera géré le contenu de mon site vitrine ?</strong>
                        <p>Même avec un site ultra-personnalisé de haute performance, nous intégrons pour nos clients des éditeurs de contenu simplifiés type CMS Headless (ex: Sanity, Prismic). Vous pouvez ainsi modifier vos textes, ajouter des réalisations ou publier des articles en toute autonomie.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                      {
                          "@type": "Service",
                          "name": "Création de Site Vitrine",
                          "provider": {
                              "@type": "WebDesignCompany",
                              "name": "Dyvase - Agence Web Mulhouse",
                              "image": "https://dyvase.com/logo-header.png"
                          },
                          "description": "Conception et développement web sur-mesure haute performance pour artisans, PME et indépendants en Alsace. Référencement local inclus.",
                          "areaServed": {
                              "@type": "Region",
                              "name": "Alsace"
                          },
                          "url": "https://dyvase.com/services/creation-site-vitrine"
                      },
                      {
                          "@type": "FAQPage",
                          "mainEntity": [
                              {
                                  "@type": "Question",
                                  "name": "Pourquoi privilégier un site sur-mesure (Next.js) plutôt que WordPress ?",
                                  "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Avec un site sur-mesure développé sous Next.js, vous bénéficiez de performances de chargement inégalées, d'une sécurité maximale et d'une conception pensée exactement pour vos besoins."
                                  }
                              },
                              {
                                  "@type": "Question",
                                  "name": "Le site m'appartient-il à 100% ?",
                                  "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Oui, à la livraison du projet, vous êtes pleinement propriétaire des droits. Nous vous transférons les accès sans aucun blocage."
                                  }
                              },
                              {
                                  "@type": "Question",
                                  "name": "Comment sera géré le contenu de mon site vitrine ?",
                                  "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Nous intégrons des éditeurs de contenu simplifiés type CMS Headless. Vous pouvez modifier vos textes et ajouter des réalisations en autonomie."
                                  }
                              }
                          ]
                      }
                  ]
              })
          }}
      />
    </div>
  )
}
