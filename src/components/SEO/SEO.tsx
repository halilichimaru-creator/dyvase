import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export default function SEO({
  title = 'Dyvase | Agence Web Mulhouse - Création Site Internet Sur-Mesure',
  description = 'Agence web à Mulhouse spécialisée en création de sites internet sur-mesure. Design moderne, performances optimales et SEO. Devis gratuit ☎️ 07 49 27 72 15',
  keywords = 'agence web mulhouse, création site internet mulhouse, développement web mulhouse, site web sur mesure',
  canonical = 'https://dyvase.com/',
  ogImage = 'https://dyvase.com/images/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('og:url', canonical, true)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Update canonical
    let linkElement = document.querySelector('link[rel="canonical"]')
    if (!linkElement) {
      linkElement = document.createElement('link')
      linkElement.setAttribute('rel', 'canonical')
      document.head.appendChild(linkElement)
    }
    linkElement.setAttribute('href', canonical)
  }, [title, description, keywords, canonical, ogImage])

  return null
}

