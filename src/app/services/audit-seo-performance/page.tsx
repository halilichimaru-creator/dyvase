import { Metadata } from 'next'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'Audit SEO & Performance Mulhouse | Expert Référencement Dyvase',
  description: 'Boostez votre visibilité sur Google avec un audit SEO complet à Mulhouse. Analyse technique, stratégie de mots-clés et optimisation des performances pour votre site.',
  keywords: 'audit SEO mulhouse, référencement naturel mulhouse, optimisation Google, performance site web, expert SEO alsace, analyse SEO',
  alternates: {
    canonical: 'https://dyvase.com/services/audit-seo-performance',
  },
  openGraph: {
    title: 'Audit SEO & Performance Mulhouse | Expert Référencement Dyvase',
    description: 'Boostez votre visibilité sur Google avec un audit SEO complet à Mulhouse. Analyse technique, stratégie de mots-clés et optimisation.',
    url: 'https://dyvase.com/services/audit-seo-performance',
    siteName: 'Dyvase',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit SEO & Performance Mulhouse | Expert Référencement',
    description: 'Boostez votre visibilité sur Google avec un audit SEO complet à Mulhouse.',
  },
}

export default function AuditSEO() {
  return <AuditClient />
}
