import { Metadata } from 'next'
import { blogArticles, type BlogArticle } from '../../data/blogArticles'

export const metadata: Metadata = {
  title: "Blog | Dyvase - Conseils Web, Design & SEO à Mulhouse",
  description: "Découvrez nos articles sur la création de sites web, le design, le SEO et le développement digital. Conseils d'experts pour booster votre présence en ligne.",
  alternates: {
    canonical: 'https://dyvase.com/blog',
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Dyvase - Conseils Web, Design & SEO',
    description: 'Articles et conseils sur la création de sites web, le design, le SEO et le développement digital par Dyvase, agence web à Mulhouse.',
    url: 'https://dyvase.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Dyvase',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dyvase.com/favicon.svg',
      },
    },
    blogPost: blogArticles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      image: `https://dyvase.com${article.image}`,
      datePublished: article.date,
      author: {
        '@type': 'Organization',
        name: 'Dyvase',
      },
      url: `https://dyvase.com/blog/${article.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {children}
    </>
  )
}
