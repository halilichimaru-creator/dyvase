import { motion } from 'framer-motion'
import './LegalPages.css'

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Politique de Confidentialité</h1>
            <p className="legal-hero__subtitle">
              Dernière mise à jour : 30 décembre 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <motion.div
            className="legal-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>1. Introduction</h2>
            <p>
              Dyvase accorde une grande importance à la protection de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons,
              stockons et protégeons vos informations personnelles conformément au Règlement
              Général sur la Protection des Données (RGPD).
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong>Dyvase</strong><br />
              Mulhouse, France<br />
              Email : <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a><br />
              WhatsApp : <a href="https://wa.me/33651504173" target="_blank" rel="noopener noreferrer">06 51 50 41 73</a>
            </p>

            <h2>3. Données collectées</h2>
            <h3>3.1 Données collectées automatiquement</h3>
            <p>
              Lors de votre visite sur notre site, nous collectons automatiquement :
            </p>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Système d'exploitation</li>
              <li>Pages visitées</li>
              <li>Durée de visite</li>
              <li>Source de référence</li>
            </ul>

            <h3>3.2 Données collectées via formulaires</h3>
            <p>
              Lorsque vous remplissez notre formulaire de contact, nous collectons :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Nom de l'entreprise (optionnel)</li>
              <li>Type de projet</li>
              <li>Message</li>
            </ul>

            <h2>4. Finalités du traitement</h2>
            <p>
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Améliorer nos services et l'expérience utilisateur</li>
              <li>Analyser le trafic du site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données personnelles repose sur :
            </p>
            <ul>
              <li><strong>Votre consentement</strong> : pour l'envoi de communications marketing</li>
              <li><strong>L'exécution d'un contrat</strong> : pour traiter vos demandes de devis</li>
              <li><strong>Notre intérêt légitime</strong> : pour l'analyse du trafic et l'amélioration de nos services</li>
            </ul>

            <h2>6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant :
            </p>
            <ul>
              <li><strong>Données de contact</strong> : 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
              <li><strong>Données contractuelles</strong> : durée légale de conservation (10 ans)</li>
            </ul>

            <h2>7. Destinataires des données</h2>
            <p>
              Vos données personnelles peuvent être transmises à :
            </p>
            <ul>
              <li>Notre équipe interne pour le traitement de vos demandes</li>
              <li>Nos prestataires techniques (hébergement, analytics)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>

            <h2>8. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre :
            </p>
            <ul>
              <li>L'accès non autorisé</li>
              <li>La modification</li>
              <li>La divulgation</li>
              <li>La destruction</li>
            </ul>
            <p>
              Nos mesures incluent : chiffrement SSL/TLS, sauvegardes régulières,
              contrôle d'accès strict, et mises à jour de sécurité.
            </p>

            <h2>9. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> : à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :
              <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a>
            </p>

            <h2>10. Cookies</h2>
            <p>
              Notre site utilise des cookies pour :
            </p>
            <ul>
              <li>Analyser le trafic (Google Analytics)</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Mémoriser vos préférences</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>

            <h2>11. Transferts internationaux</h2>
            <p>
              Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne.
              Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place
              (clauses contractuelles types, Privacy Shield, etc.).
            </p>

            <h2>12. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              La version la plus récente sera toujours disponible sur cette page avec la date de
              dernière mise à jour.
            </p>

            <h2>13. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
            </p>
            <p>
              <strong>CNIL</strong><br />
              3 Place de Fontenoy<br />
              TSA 80715<br />
              75334 PARIS CEDEX 07<br />
              Téléphone : 01 53 73 22 22<br />
              Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>14. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données
              personnelles, contactez-nous :
            </p>
            <ul>
              <li>Email : <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a></li>
              <li>WhatsApp : <a href="https://wa.me/33651504173" target="_blank" rel="noopener noreferrer">06 51 50 41 73</a></li>
              <li>Adresse : Dyvase, Mulhouse, France</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

