import { Metadata } from 'next'
import LegalClient from '@/components/Legal/LegalClient'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Dyvase Mulhouse',
  description: 'Consultez les conditions générales de vente de Dyvase, agence web à Mulhouse. Détails sur les commandes, paiements et droits.',
  alternates: {
    canonical: 'https://www.dyvase.com/cgv',
  },
}

export default function LegalSalesTerms() {
  return (
    <LegalClient 
      title="Conditions Générales de Vente" 
      subtitle="Dernière mise à jour : 15 mars 2026"
    >
      <div className="legal-text">
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre l'agence web <strong>Dyvase</strong> et son Client, dans le cadre de la prestation de services de création de sites web, de référencement (SEO) et de design.
        </p>

        <h2>2. Commandes et Devis</h2>
        <p>
          Toute prestation donne lieu à l'établissement d'un devis personnalisé. Le contrat est considéré comme conclu dès la validation du devis par le Client (signature ou accord par email/formulaire).
        </p>

        <h2>3. Conditions de Paiement</h2>
        <h3>3.1 Acompte</h3>
        <p>
          L'exécution des prestations débute après le versement d'un <strong>acompte de 30%</strong> du montant total du devis. Cet acompte est non remboursable une fois le travail entamé.
        </p>
        <h3>3.2 Solde</h3>
        <p>
          Le solde restant (70%) est dû à la livraison finale du projet ou selon l'échéancier convenu dans le devis.
        </p>
        <h3>3.3 Modes de paiement</h3>
        <p>
          Les paiements s'effectuent par carte bancaire via un <strong>lien de paiement sécurisé Stripe</strong> envoyé par Dyvase au Client. Pour les montants importants, le <strong>virement bancaire via Stripe</strong> est également accepté.
        </p>

        <h2>4. Délais de Réalisation</h2>
        <p>
          Les délais de livraison sont donnés à titre indicatif dans le devis. Dyvase s'efforce de les respecter, sous réserve de la transmission en temps voulu par le Client de l'ensemble des éléments nécessaires à la réalisation du projet.
        </p>

        <h2>5. Propriété Intellectuelle</h2>
        <p>
          La propriété des codes sources, designs et contenus créés est transférée au Client dès l'encaissement intégral du montant de la prestation. Dyvase se réserve le droit de mentionner sa réalisation sur son portfolio, sauf demande expresse du Client.
        </p>

        <h2>6. Force Majeure</h2>
        <p>
          La responsabilité de Dyvase ne pourra être engagée en cas de retard ou d'inexécution résultant d'un cas de force majeure ou d'événements hors de son contrôle (pannes de réseaux tiers, etc.).
        </p>

        <h2>7. Droit Applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire auprès du Tribunal compétent de Mulhouse.
        </p>

        <h2>8. Contact</h2>
        <p>
          Pour toute question relative aux CGV :<br />
          <strong>Email :</strong> <a href="mailto:dyvase.contact@gmail.com">dyvase.contact@gmail.com</a><br />
          <strong>Adresse :</strong> 142 avenue dmc, 68100 Mulhouse, France
        </p>
      </div>
    </LegalClient>
  )
}
