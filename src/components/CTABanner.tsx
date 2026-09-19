import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Ready to Source with Confidence?',
  subtitle = 'Submit a Request for Quote and our team will respond within one business day.',
}: CTABannerProps) {
  return (
    <section className="bg-midnight-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-midnight-300 blur-3xl" />
      </div>
      <div className="container-max section-pad relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-midnight-100 text-lg mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-midnight-700">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
