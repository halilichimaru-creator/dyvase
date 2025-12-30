import { motion } from 'framer-motion'
import './LegalPages.css'

export default function LegalNotice() {
  return (
    <div className="legal-page">
      <section className="legal-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Mentions Légales</h1>
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
            <h2>1. Informations légales</h2>
            <h3>Éditeur du site</h3>
            <p>
              <strong>Dyvase</strong><br />
              Agence web<br />
              Mulhouse, France<br />
              Email : <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a><br />
              Téléphone : <a href="tel:+33749277215">07 49 27 72 15</a>
            </p>

            <h3>Directeur de publication</h3>
            <p>
              Le directeur de publication du site est le représentant légal de Dyvase.
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Le site dyvase.com est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) 
              est la propriété exclusive de Dyvase, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou 
              publication de ces différents éléments est strictement interdite sans l'accord 
              exprès par écrit de Dyvase.
            </p>

            <h2>4. Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous 
              disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
              aux données personnelles vous concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
              <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a>
            </p>
            <p>
              Pour plus d'informations sur la gestion de vos données personnelles, 
              consultez notre <a href="/politique-confidentialite">Politique de confidentialité</a>.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
              analyser le trafic. En naviguant sur ce site, vous acceptez l'utilisation 
              de ces cookies.
            </p>
            <p>
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
              mais certaines fonctionnalités du site pourraient ne plus être disponibles.
            </p>

            <h2>6. Responsabilité</h2>
            <p>
              Dyvase s'efforce d'assurer l'exactitude et la mise à jour des informations 
              diffusées sur ce site. Toutefois, Dyvase ne peut garantir l'exactitude, 
              la précision ou l'exhaustivité des informations mises à disposition.
            </p>
            <p>
              Dyvase ne pourra être tenu responsable des dommages directs ou indirects 
              résultant de l'accès au site ou de l'utilisation de celui-ci.
            </p>

            <h2>7. Liens hypertextes</h2>
            <p>
              Le site dyvase.com peut contenir des liens vers d'autres sites internet. 
              Dyvase n'exerce aucun contrôle sur ces sites et décline toute responsabilité 
              quant à leur contenu.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a></li>
              <li>Par téléphone : <a href="tel:+33749277215">07 49 27 72 15</a></li>
              <li>Par courrier : Dyvase, Mulhouse, France</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

