import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { blogArticles } from '../../../data/blogArticles'
import BlogArticleClient from './BlogArticleClient'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const slug = resolvedParams?.slug
    const article = slug ? blogArticles.find((a) => a.slug === slug) : null
    
    if (!article) {
        return {
            title: 'Article non trouvé | Blog Dyvase',
        }
    }

    return {
        title: `${article.title} | Blog Dyvase`,
        description: article.metaDescription,
        keywords: article.keywords,
        alternates: {
            canonical: `https://dyvase.com/blog/${article.slug}`,
        },
        openGraph: {
            images: [`https://dyvase.com${article.image}`],
        }
    }
}

export default async function Page({ params }: Props) {
    const resolvedParams = await params
    const slug = resolvedParams?.slug
    const article = slug ? blogArticles.find((a) => a.slug === slug) : null

    if (!article) {
        notFound()
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogArticleClient article={article as any} />
        </>
    )
}

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug,
    }))
}
