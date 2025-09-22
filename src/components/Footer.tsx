import VineyardTechnologiesLogo from '@/assets/images/logo.webp'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary py-12 px-6 text-white">
      <div className="w-full max-w-none px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
          {/* Logo - Far left corner with white rounded background */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <div className="bg-white p-3 rounded-xl shadow-lg mb-3 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer">
                <img src={VineyardTechnologiesLogo} alt="Vineyard Technologies" className="h-8" />
              </div>
            </Link>
            <div className="text-sm text-white/90">
              Software Development Services in Seattle, WA
            </div>
          </div>
          
          {/* Copyright and Links - Far right corner */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <div className="text-sm text-white/90">
              © 2025 Vineyard Technologies. All rights reserved.
            </div>
            <div className="text-sm text-white/90">
              This website is licensed under the MIT License.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-white/80 hover:text-white transition-colors duration-200">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}