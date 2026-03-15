import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Création Site Vitrine Record Mulhouse | Dyvase",
  description: "Obtenez un site vitrine ultra-performant et optimisé SEO en un temps record. Propulsez votre activité locale à Mulhouse avec Dyvase.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
