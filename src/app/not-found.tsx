import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable | Dyvase',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée. Retournez à l\'accueil pour découvrir nos services.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function NotFound() {
  return (
    <div className="section container" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center' 
    }}>
      <h1 className="text-gradient" style={{ fontSize: '6rem', marginBottom: '1rem', lineHeight: '1' }}>404</h1>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Oups ! Cette page s'est perdue dans le cyberespace...</h2>
      <p style={{ marginBottom: '2.5rem', maxWidth: '600px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
        La page que vous recherchez n'existe plus, a été déplacée ou l'URL saisie est incorrecte. Pas d'inquiétude, voici de quoi retrouver votre chemin :
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary">
          Retour à l'accueil
        </Link>
        <Link href="/services/creation-site-vitrine" className="btn btn-secondary">
          Création de site
        </Link>
        <Link href="/devis" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)'}}>
          Demander un devis
        </Link>
      </div>
    </div>
  )
}
