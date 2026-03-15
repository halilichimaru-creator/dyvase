import { Metadata } from 'next'
import AuditClient from './AuditClient'

export const metadata: Metadata = {
  title: 'Audit SEO & Performance Mulhouse | Expert Référencement Dyvase',
  description: 'Boostez votre visibilité sur Google avec un audit SEO complet à Mulhouse. Analyse technique, stratégie de mots-clés et optimisation des performances pour votre site.',
  alternates: {
    canonical: 'https://dyvase.com/services/audit-seo-performance',
  },
}

export default function AuditSEO() {
  return <AuditClient />
}
