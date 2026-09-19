import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-midnight-900 text-steel-300">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-midnight-600 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="font-serif font-bold text-lg text-white block">Meridian</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-steel-400 font-medium">Global Imports</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-steel-400 max-w-xs">
              Your trusted international trade partner for electronics, textiles, and machinery. Connecting manufacturers to retailers worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/compliance" className="text-sm hover:text-white transition-colors">Compliance</Link></li>
              <li><Link to="/markets" className="text-sm hover:text-white transition-colors">Global Markets</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-midnight-300 mt-0.5 shrink-0" />
                <span className="text-sm">sales@meridianimports.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-midnight-300 mt-0.5 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-midnight-300 mt-0.5 shrink-0" />
                <span className="text-sm">120 Trade Center Blvd, Suite 400<br />Houston, TX 77032, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Stay Connected</h4>
            <p className="text-sm text-steel-400 mb-4">Get trade insights and product updates.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-midnight-700 hover:bg-midnight-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-midnight-700 hover:bg-midnight-600 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-midnight-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-steel-500">© 2026 Meridian Global Imports. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-steel-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-steel-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
