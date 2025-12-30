import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'Comment choisir la bonne agence web à Mulhouse ?',
    excerpt: 'Guide complet pour sélectionner l\'agence web qui correspond à vos besoins et votre budget. Découvrez les critères essentiels à prendre en compte.',
    date: '2025-01-15',
    category: 'Conseils',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Les tendances du web design en 2025',
    excerpt: 'Découvrez les dernières tendances en matière de design web : minimalisme, animations fluides, dark mode et bien plus encore.',
    date: '2025-01-10',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'SEO local : Comment être visible à Mulhouse',
    excerpt: 'Stratégies SEO locales pour améliorer votre visibilité sur Google dans la région de Mulhouse et attirer plus de clients locaux.',
    date: '2025-01-05',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop',
    readTime: '6 min',
  },
]

export default function Blog() {
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
            {blogPosts.map((post, index) => (
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
                  <Link to={`/blog/${post.id}`} className="blog-card__link">
                    Lire l'article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

