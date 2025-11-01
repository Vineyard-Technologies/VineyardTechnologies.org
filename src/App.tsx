import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

// Lazy load all page components
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const SoftwareDevelopmentPage = lazy(() => import('@/pages/SoftwareDevelopmentPage'))
const DevelopmentOutsourcingPage = lazy(() => import('@/pages/DevelopmentOutsourcingPage'))
const TechnicalConsultingPage = lazy(() => import('@/pages/TechnicalConsultingPage'))
const OverlordPage = lazy(() => import('@/pages/OverlordPage'))
const DaggerQuestPage = lazy(() => import('@/pages/DaggerQuestPage'))
const MythicMarketMogulPage = lazy(() => import('@/pages/MythicMarketMogulPage'))
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))
const SiteMapPage = lazy(() => import('@/pages/SiteMapPage'))
const UnsubscribePage = lazy(() => import('@/pages/UnsubscribePage'))

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

function RedirectHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we were redirected from a 404
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath')
      
      // List of valid routes
      const validRoutes = [
        '/',
        '/about',
        '/contact',
        '/services/software-development',
        '/services/development-outsourcing',
        '/services/technical-consulting',
        '/products/overlord',
        '/products/daggerquest',
        '/products/mythic-market-mogul',
        '/terms',
        '/privacy',
        '/sitemap'
      ]
      
      // Only navigate if it's a valid route, otherwise stay on homepage
      if (validRoutes.includes(redirectPath)) {
        navigate(redirectPath, { replace: true })
      }
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/services/development-outsourcing" element={<DevelopmentOutsourcingPage />} />
            <Route path="/services/technical-consulting" element={<TechnicalConsultingPage />} />
            <Route path="/products/overlord" element={<OverlordPage />} />
            <Route path="/products/daggerquest" element={<DaggerQuestPage />} />
            <Route path="/products/mythic-market-mogul" element={<MythicMarketMogulPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/sitemap" element={<SiteMapPage />} />
            <Route path="/unsubscribe" element={<UnsubscribePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App