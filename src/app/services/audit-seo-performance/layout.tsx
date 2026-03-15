import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Audit SEO & Performance Mulhouse | Dyvase",
  description: "Boostez votre visibilité sur Google. Analyse technique, stratégie de mots-clés et optimisation de performance pour votre site web à Mulhouse.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Audit SEO et Performance Web",
        "description": "Analyse technique et stratégique pour améliorer le référencement naturel et la vitesse des sites internet.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Dyvase",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mulhouse",
                "addressCountry": "FR"
            }
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
