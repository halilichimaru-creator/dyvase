import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions Légales | Dyvase Agence Web Mulhouse",
  description: "Consultez les mentions légales de Dyvase, agence web spécialisée en création de sites internet et SEO à Mulhouse.",
  robots: {
    index: false,
    follow: true,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
