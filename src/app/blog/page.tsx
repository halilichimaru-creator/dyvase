import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog Dyvase | Actualités Web Design & SEO Mulhouse',
  description: 'Découvrez nos derniers articles sur le web design, le développement Next.js et la stratégie SEO pour booster votre entreprise à Mulhouse et en Alsace.',
  alternates: {
    canonical: 'https://dyvase.com/blog',
  },
}

export default function Blog() {
  return <BlogClient />
}
