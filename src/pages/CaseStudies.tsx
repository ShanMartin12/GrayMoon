import { useState } from 'react'
import { TrendingUp, Clock, Percent, Quote } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const caseStudies = [
  {
    id: 'cs1',
    client: 'Northstar Retail Group',
    region: 'North America',
    category: 'Electronics',
    challenge: 'A mid-size US electronics retailer needed a reliable source for smartphone accessories but had experienced quality issues with previous suppliers, leading to customer returns.',
    solution: 'We audited three factories in Shenzhen, selected one with full CE/FCC/RoHS certification, and implemented a 4-stage QA process including pre-shipment AQL inspections.',
    results: [
      { icon: Percent, label: 'Defect Rate', value: 'From 8% to 0.3%' },
      { icon: Clock, label: 'Lead Time', value: 'Reduced by 30%' },
      { icon: TrendingUp, label: 'Annual Volume', value: '500K units' },
    ],
    quote: 'Meridian transformed our sourcing. We went from constant quality fires to a predictable, reliable supply chain.',
    author: 'James Richardson, Head of Procurement',
  },
  {
    id: 'cs2',
    client: 'Voss Home Goods',
    region: 'Western Europe',
    category: 'Textiles',
    challenge: 'A German home goods retailer wanted to launch an organic cotton bedding line but struggled to find GOTS-certified suppliers who could meet their volume and quality standards.',
    solution: 'We connected them with a GOTS-certified factory in Pakistan, managed sample development, and coordinated third-party testing to meet EU REACH requirements.',
    results: [
      { icon: TrendingUp, label: 'Product Launch', value: 'On schedule' },
      { icon: Percent, label: 'Cost Savings', value: '22% vs. EU sourcing' },
      { icon: Clock, label: 'Time to Market', value: '12 weeks' },
    ],
    quote: 'They didn\'t just find us a factory — they managed the entire process from sample to shelf. Our organic line launched on time and exceeded sales targets.',
    author: 'Katrin Müller, Product Director',
  },
  {
    id: 'cs3',
    client: 'Anatol Industries',
    region: 'Southern Europe',
    category: 'Machinery',
    challenge: 'A Turkish food producer needed to upgrade their packaging line but couldn\'t afford the 6-month lead time quoted by European manufacturers.',
    solution: 'We sourced a CE-marked packaging machine from an Italian manufacturer, arranged installation support, and coordinated the spare parts package for ongoing maintenance.',
    results: [
      { icon: Clock, label: 'Delivery Time', value: '8 weeks (vs. 26 weeks)' },
      { icon: Percent, label: 'Cost Savings', value: '35% under budget' },
      { icon: TrendingUp, label: 'Throughput', value: '+40% capacity' },
    ],
    quote: 'We thought we\'d have to wait half a year. Meridian delivered in under two months and the line has been running flawlessly.',
    author: 'Mehmet Demir, Operations Manager',
  },
]

const filters = ['All', 'North America', 'Western Europe', 'Southern Europe']

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) => cs.region === activeFilter)

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-midnight-800 py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">Client Success Stories</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Real Results from Real Retailers
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              See how we've helped mid-size retailers across North America and Europe source better, ship faster, and sell with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Case Studies */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-midnight-700 text-white shadow-md'
                    : 'bg-white text-steel-600 border border-steel-200 hover:border-midnight-200 hover:text-midnight-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            {filtered.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-steel-200 overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-3">
                  {/* Left: Challenge + Solution */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-md bg-midnight-700 text-white text-xs font-semibold">{cs.category}</span>
                      <span className="px-3 py-1 rounded-md bg-steel-100 text-steel-600 text-xs font-semibold">{cs.region}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-midnight-900 mb-5">{cs.client}</h3>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-steel-400 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-steel-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-steel-400 uppercase tracking-wide mb-2">Our Solution</h4>
                      <p className="text-steel-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="bg-midnight-50 p-8 lg:p-10 border-l border-steel-100">
                    <h4 className="text-sm font-semibold text-steel-400 uppercase tracking-wide mb-5">Results</h4>
                    <div className="space-y-5">
                      {cs.results.map((result) => (
                        <div key={result.label}>
                          <div className="flex items-center gap-2 mb-1">
                            <result.icon className="w-4 h-4 text-midnight-600" />
                            <span className="text-xs text-steel-400">{result.label}</span>
                          </div>
                          <div className="font-serif text-lg font-bold text-midnight-900">{result.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-steel-200">
                      <Quote className="w-6 h-6 text-midnight-300 mb-3" />
                      <p className="text-sm text-steel-600 italic leading-relaxed mb-2">"{cs.quote}"</p>
                      <p className="text-xs text-steel-400">— {cs.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Write Your Own Success Story?"
        subtitle="Let's talk about how we can help you source better, save more, and deliver on time."
      />
    </div>
  )
}
