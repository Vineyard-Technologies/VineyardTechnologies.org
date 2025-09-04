import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'

// Import assets so Vite includes them in the build and get their URLs
import vineyardLogo from './assets/images/logo.webp'
import vineyardFavicon from './assets/images/favicon.webp'

import "./main.css"
import "./styles/theme.css"
import "./index.css"

// Update meta tags with the correct asset URLs
const updateMetaTags = () => {
  // Update Open Graph image
  const ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) {
    ogImage.setAttribute('content', vineyardLogo)
  }
  
  // Update Twitter image
  const twitterImage = document.querySelector('meta[property="twitter:image"]')
  if (twitterImage) {
    twitterImage.setAttribute('content', vineyardLogo)
  }
  
  // Update favicon
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.setAttribute('href', vineyardFavicon)
  }
  
  // Update schema.org logo
  const schemaScript = document.querySelector('script[type="application/ld+json"]')
  if (schemaScript && schemaScript.textContent) {
    const schema = JSON.parse(schemaScript.textContent)
    schema.logo = `https://vineyardtechnologies.com${vineyardLogo}`
    schemaScript.textContent = JSON.stringify(schema)
  }
}

// Update meta tags after DOM is loaded
updateMetaTags()

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
   </ErrorBoundary>
)
