import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout/ClientLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dyvase | Agence Web Mulhouse - Création & SEO",
  description: "Expert en création de sites vitrines et SEO à Mulhouse. Boostez votre visibilité locale avec des sites rapides et performants.",
  keywords: "agence web mulhouse, création site internet mulhouse, site vitrine mulhouse, référencement SEO mulhouse, dyvase, agence digitale alsace, création site web alsace, développeur web mulhouse, SEO local alsace, site internet professionnel",
  metadataBase: new URL("https://www.dyvase.com/"),
  alternates: {
    canonical: "https://www.dyvase.com/",
    languages: {
      "fr": "https://www.dyvase.com/",
      "x-default": "https://www.dyvase.com/",
    },
  },
  robots: "index, follow, max-image-preview:large, max-snippet:160, max-video-preview:-1",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Dyvase | Agence Web Mulhouse - Création & SEO",
    description: "Expert en création de sites vitrines et SEO à Mulhouse. Boostez votre visibilité locale avec des sites rapides et performants.",
    url: "https://www.dyvase.com/",
    siteName: "Dyvase",
    images: [
      {
        url: "https://www.dyvase.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyvase | Agence Web Mulhouse - Création & SEO",
    description: "Expert en création de sites vitrines et SEO à Mulhouse. Boostez votre visibilité locale avec des sites rapides et performants.",
    images: ["https://www.dyvase.com/images/og-image.png"],
  },
  other: {
    "geo.region": "FR-68",
    "geo.placename": "Mulhouse",
    "geo.position": "47.750839;7.335888",
    "ICBM": "47.750839, 7.335888",
    "contact": "dyvase.contact@gmail.com",
    "telephone": "+33651504173",
  },
};

export const viewport = {
  themeColor: "#A7D7C5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dyvase",
              "url": "https://www.dyvase.com",
              "logo": "https://www.dyvase.com/favicon.svg",
              "sameAs": [
                "https://www.linkedin.com/in/dyvase-agence-40a5b13b7/"
              ],
              "description": "Dyvase est l'agence web de référence à Mulhouse, experte en création de sites vitrines et en optimisation SEO locale pour les entreprises.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mulhouse",
                "addressRegion": "Grand Est",
                "postalCode": "68100",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33651504173",
                "email": "dyvase.contact@gmail.com",
                "contactType": "customer service",
                "areaServed": "FR",
                "availableLanguage": "French"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Dyvase - Agence Web Mulhouse",
              "image": "https://www.dyvase.com/favicon.svg",
              "@id": "https://www.dyvase.com",
              "url": "https://www.dyvase.com",
              "sameAs": [
                "https://www.linkedin.com/in/dyvase-agence-40a5b13b7/"
              ],
              "telephone": "+33651504173",
              "email": "dyvase.contact@gmail.com",
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "142 avenue dmc",
                "addressLocality": "Mulhouse",
                "postalCode": "68100",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.750839,
                "longitude": 7.335888
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Musa Pekcan" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Super site internet pour mon entreprise de carrelage, je recommande vivement dyvase ."
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Canan Pekcan" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Superbe expérience avec dyvase ! Grace à eux ont reçoit plus de 10 devis par mois pour mon entreprise. Je recommande vivement !"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Halil Ichimaru" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "J'ai fais mon site internet là bas , il était incroyables et ils me l'ony livré en seulement 3 jours !"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />
        <div className="app">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}
