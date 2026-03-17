'use client'

import dynamic from 'next/dynamic'
import Services from '@/components/Services/Services'

const Portfolio = dynamic(() => import('@/components/Portfolio/Portfolio'), { ssr: true })
const About = dynamic(() => import('@/components/About/About'), { ssr: true })
const GoogleReviews = dynamic(() => import('@/components/GoogleReviews/GoogleReviews'), { 
  ssr: false,
  loading: () => <div style={{ height: '400px' }} />
})

export default function HomeClient() {
  return (
    <>
      <Services />
      <Portfolio />
      <About />
      <GoogleReviews />
    </>
  )
}
