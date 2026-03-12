import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogArticles } from '../data/blogArticles'
import SEO from '../components/SEO/SEO'
import './BlogArticle.css'

export default function BlogArticle() {
    const { slug } = useParams<{ slug: string }>()
    const article = blogArticles.find((a) => a.slug === slug)

    if (!article) {
        return <Navigate to="/blog" replace />
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        image: `https://dyvase.com${article.image}`,
        datePublished: article.date,
        dateModified: article.date,
        author: {
            '@type': 'Organization',
            name: 'Dyvase',
            url: 'https://dyvase.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Dyvase',
            logo: {
                '@type': 'ImageObject',
                url: 'https://dyvase.com/favicon.svg',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://dyvase.com/blog/${article.slug}`,
        },
    }

    return (
        <div className="blog-article-page">
            <SEO
                title={`${article.title} | Blog Dyvase`}
                description={article.metaDescription}
                keywords={article.keywords}
                canonical={`https://dyvase.com/blog/${article.slug}`}
                ogImage={`https://dyvase.com${article.image}`}
                jsonLd={jsonLd}
            />

            {/* Navigation */}
            <div className="blog-article__nav">
                <div className="container">
                    <Link to="/blog" className="blog-article__back">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M15 10H5M5 10L9 6M5 10L9 14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Retour au blog
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <motion.section
                className="blog-article__hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="blog-article__hero-content">
                        <span className="blog-article__category">{article.category}</span>
                        <h1>{article.title}</h1>
                        <div className="blog-article__meta">
                            <time dateTime={article.date}>
                                {new Date(article.date).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                            <span>•</span>
                            <span>{article.readTime} de lecture</span>
                        </div>
                    </div>
                </div>
                <div className="blog-article__hero-image">
                    <img src={article.image} alt={article.alt} />
                </div>
            </motion.section>

            {/* Content */}
            <motion.section
                className="blog-article__content section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="container">
                    <article
                        className="blog-article__prose"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </motion.section>
        </div>
    )
}
