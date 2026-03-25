import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog Dyvase | Actualités Web Design & SEO Mulhouse',
  description: 'Découvrez nos derniers articles sur le web design, le développement Next.js et la stratégie SEO pour booster votre entreprise à Mulhouse et en Alsace.',
  keywords: 'blog web design, articles SEO, conseils création site internet, actualités web mulhouse, blog agence web alsace',
  alternates: {
    canonical: 'https://www.dyvase.com/blog',
  },
}

export default function Blog() {
  return <BlogClient />
}
