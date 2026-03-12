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
  title = 'Dyvase | Agence Web Mulhouse - Création de Site Internet & SEO',
  description = 'Expert en création de sites vitrines et refontes à Mulhouse. Dyvase est l\'agence web de proximité qui booste votre visibilité locale avec des sites performants et optimisés SEO.',
  keywords = 'création site internet, site vitrine, agence web, site internet professionnel, création site internet Mulhouse, agence web Mulhouse, site vitrine Mulhouse, référencement SEO Mulhouse, dyvase',
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

