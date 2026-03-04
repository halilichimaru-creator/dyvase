import { Suspense, lazy } from 'react'
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
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import LocalSEO from './pages/LocalSEO'
import CreationSiteVitrine from './pages/services/CreationSiteVitrine'
import CreationSiteEcommerce from './pages/services/CreationSiteEcommerce'
import AuditSEO from './pages/services/AuditSEO'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

// Lazy load the 3D scene for better performance
const Scene3D = lazy(() => import('./components/Scene3D'))

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
  return (
    <div className="app">
      <ScrollToTop />
      <SEO />

      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Main Content */}
      <div className="main-content">
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default App
