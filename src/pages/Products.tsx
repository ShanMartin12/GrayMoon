import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, MapPin, Clock, Package, FileText } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import { products, type Product } from '../lib/data'

const categories = ['All', 'Electronics', 'Textiles', 'Machinery'] as const

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.origin.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-midnight-800 py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">Product Catalog</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Import-Ready Products
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              Browse our curated range of electronics, textiles, and machinery — each backed by certified manufacturers and full compliance documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-midnight-700 text-white shadow-md'
                      : 'bg-white text-steel-600 border border-steel-200 hover:border-midnight-200 hover:text-midnight-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative lg:ml-auto lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-12 h-12 text-steel-300 mx-auto mb-4" />
              <p className="text-steel-400 text-lg">No products match your search. Try a different term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: Product) => (
                <div key={product.id} className="card overflow-hidden flex flex-col group">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-midnight-700 text-white text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-steel-500 leading-relaxed mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-steel-500">
                        <MapPin className="w-3.5 h-3.5 text-midnight-400" />
                        <span>Origin: {product.origin}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-steel-500">
                        <Package className="w-3.5 h-3.5 text-midnight-400" />
                        <span>MOQ: {product.moq}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-steel-500">
                        <Clock className="w-3.5 h-3.5 text-midnight-400" />
                        <span>Lead time: {product.leadTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.specs.map((spec) => (
                        <span key={spec} className="text-[11px] font-medium px-2 py-1 rounded bg-midnight-50 text-midnight-600 border border-midnight-100">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-2">
                      <Link to="/contact" className="btn-primary text-xs flex-1">
                        Request Quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-3 rounded-lg border border-steel-200 text-steel-500 hover:border-midnight-200 hover:text-midnight-700 transition-all" aria-label="Download spec sheet">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Need a Product Not Listed Here?"
        subtitle="Our sourcing network covers far more than what's shown. Tell us what you need and we'll find the right manufacturer."
      />
    </div>
  )
}
