// React 19 native metadata hoisting

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  jsonLd?: any
}

export default function SEO({
  title = 'Dyvase | Agence Web Mulhouse - Création Site Internet Sur-Mesure',
  description = 'Agence web à Mulhouse spécialisée en création de sites internet sur-mesure. Design moderne, performances optimales et SEO. Devis gratuit 💬 WhatsApp 06 51 50 41 73',
  keywords = 'agence web mulhouse, création site internet mulhouse, développement web mulhouse, site web sur mesure',
  canonical = 'https://dyvase.com/',
  ogImage = 'https://dyvase.com/images/og-image.jpg',
  jsonLd
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </>
  )
}

