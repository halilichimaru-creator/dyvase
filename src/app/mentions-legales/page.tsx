import { Metadata } from 'next'
import LegalClient from '@/components/Legal/LegalClient'

export const metadata: Metadata = {
  title: 'Mentions Légales | Agence Web Dyvase Mulhouse',
  description: 'Informations légales concernant l\'entreprise Dyvase, agence web à Mulhouse. Retrouvez nos coordonnées, SIRET et détails sur l\'hébergement.',
  alternates: {
    canonical: 'https://www.dyvase.com/mentions-legales',
  },
}

export default function LegalNotice() {
  return (
    <LegalClient 
      title="Mentions Légales" 
      subtitle="Informations légales concernant l'entreprise Dyvase"
    >
      <div className="legal-grid">
        <div className="legal-section">
          <h2>1. Présentation de l'entreprise</h2>
          <p>Le site internet <strong>dyvase.com</strong> est édité par l'entreprise individuelle Dyvase.</p>
          <ul>
            <li><strong>Siège social :</strong> 142 avenue dmc, 68100 Mulhouse, France</li>
            <li><strong>Numéro SIRET :</strong> 99996836500018</li>
            <li><strong>Contact :</strong> dyvase.contact@gmail.com</li>
            <li><strong>Téléphone :</strong> 06 51 50 41 73</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>2. Hébergement du site</h2>
          <p>Le site est hébergé par la société Vercel Inc.</p>
          <ul>
            <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723</li>
            <li><strong>Site web :</strong> vercel.com</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) 
            est la propriété exclusive de Dyvase, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou 
            publication, même partielle, de ces différents éléments est strictement interdite 
            sans l'accord exprès par écrit de Dyvase.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Limitations de responsabilité</h2>
          <p>
            Dyvase ne pourra être tenu responsable des dommages directs et indirects causés au 
            matériel de l'utilisateur, lors de l'accès au site dyvase.com.
          </p>
          <p>
            Dyvase s'efforce de fournir sur le site des informations aussi précises que possible. 
            Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des 
            carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires 
            qui lui fournissent ces informations.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Droit applicable</h2>
          <p>Tout litige en relation avec l'utilisation du site dyvase.com est soumis au droit français.</p>
        </div>
      </div>
    </LegalClient>
  )
}
