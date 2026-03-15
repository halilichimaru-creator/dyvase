import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Devis Gratuit | Obtenez votre estimation en 2 minutes | Dyvase",
  description: "Répondez à notre questionnaire rapide et recevez un devis personnalisé pour votre projet web. Création de site vitrine, refonte — obtenez votre estimation gratuitement.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
