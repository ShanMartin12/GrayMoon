import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <h1 className="font-serif text-7xl font-bold text-midnight-700 mb-4">404</h1>
        <p className="text-steel-500 text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  )
}
