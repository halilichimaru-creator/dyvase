import { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO/SEO'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Lazy load pages for better performance
const FAQ = lazy(() => import('./pages/FAQ'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogArticle = lazy(() => import('./pages/BlogArticle'))
const LegalNotice = lazy(() => import('./pages/LegalNotice'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const LocalSEO = lazy(() => import('./pages/LocalSEO'))
const CreationSiteVitrine = lazy(() => import('./pages/services/CreationSiteVitrine'))
const CreationSiteEcommerce = lazy(() => import('./pages/services/CreationSiteEcommerce'))
const AuditSEO = lazy(() => import('./pages/services/AuditSEO'))

// Lazy load the 3D scene
const Scene3D = lazy(() => import('./components/Scene3D/Scene3D'))

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  const [showScene, setShowScene] = useState(false)

  useEffect(() => {
    // Delay 3D scene loading to prioritize LCP
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShowScene(true))
      } else {
        setShowScene(true)
      }
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <ScrollToTop />
      <SEO />

      {/* 3D Background Scene - Loaded after delay */}
      {showScene && (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      )}

      {/* Main Content */}
      <div className="main-content">
        <Header />
        <main>
          <Suspense fallback={<div className="route-loader" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/agence-web-:city" element={<LocalSEO />} />
              <Route path="/services/creation-site-vitrine" element={<CreationSiteVitrine />} />
              <Route path="/services/creation-site-ecommerce" element={<CreationSiteEcommerce />} />
              <Route path="/services/audit-seo-performance" element={<AuditSEO />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default App

