'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import './BlogArticle.css'

type Article = {
    slug: string;
    title: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    alt: string;
    content: string;
}

export default function BlogArticleClient({ article }: { article: Article }) {
    return (
        <div className="blog-article-page">
            {/* Navigation */}
            <div className="blog-article__nav">
                <div className="container">
                    <Link href="/blog" className="blog-article__back">
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
                    <Image 
                        src={article.image} 
                        alt={article.alt} 
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
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
