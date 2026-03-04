import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogArticles } from '../data/blogArticles'
import SEO from '../components/SEO/SEO'
import './Blog.css'

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

export default function Blog() {
  return (
    <div className="blog-page">
      <SEO
        title="Blog | Dyvase - Conseils Web, Design & SEO à Mulhouse"
        description="Découvrez nos articles sur la création de sites web, le design, le SEO et le développement digital. Conseils d'experts pour booster votre présence en ligne."
        keywords="blog agence web, conseils création site, tendances web design, SEO mulhouse, développement web"
        canonical="https://dyvase.com/blog"
        jsonLd={blogJsonLd}
      />

      <section className="blog-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Blog</h1>
            <p className="blog-hero__subtitle">
              Conseils, actualités et tendances du web design et du développement
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {blogArticles.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="blog-card__image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card__link">
                    Lire l'article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
