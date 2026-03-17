'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { blogArticles } from '../../data/blogArticles'
import './Blog.css'

export default function BlogClient() {
  return (
    <div className="blog-page">
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
            {blogArticles.map((post: any, index: number) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="blog-card__image">
                  <Image 
                    src={post.image} 
                    alt={post.alt} 
                    width={800} 
                    height={500} 
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
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
                  <Link href={`/blog/${post.slug}`} className="blog-card__link">
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
