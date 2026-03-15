import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="section container" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center' 
    }}>
      <h1 className="text-gradient" style={{ fontSize: '5rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1.5rem' }}>Oups ! Page introuvable</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  )
}
