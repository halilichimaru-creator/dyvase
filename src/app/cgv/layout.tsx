import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Dyvase",
  description: "Consultez les conditions générales de vente de l'agence web Dyvase.",
  robots: {
    index: false,
    follow: true,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
