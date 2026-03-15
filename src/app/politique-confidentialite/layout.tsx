import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Dyvase",
  description: "En savoir plus sur la gestion de vos données personnelles et notre politique de confidentialité chez Dyvase.",
  robots: {
    index: false,
    follow: true,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
