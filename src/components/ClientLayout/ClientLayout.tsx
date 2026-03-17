'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import dynamic from 'next/dynamic'

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton/WhatsAppButton'), { ssr: false })
const CookieConsent = dynamic(() => import('@/components/CookieConsent/CookieConsent'), { ssr: false })
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet/LeadMagnet'), { ssr: false })

const Scene3D = dynamic(() => import('@/components/Scene3D/Scene3D'), { 
  ssr: false,
  loading: () => <div className="canvas-placeholder" /> 
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showScene, setShowScene] = useState(false)

  useEffect(() => {
    // Delay 3D scene loading to prioritize LCP
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => setShowScene(true))
      } else {
        setShowScene(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* 3D Background Scene - Loaded after delay */}
      {showScene && <Scene3D />}

      <Header />
      <div className="main-content">
        <main id="main-content">
          {children}
        </main>
        <LeadMagnet />
        <Footer />
      </div>
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
