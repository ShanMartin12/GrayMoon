import { MapPin, Clock, Truck, Globe2, Anchor, Plane, Train } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import { images } from '../lib/images'

const regions = [
  {
    name: 'North America',
    countries: 'United States, Canada, Mexico',
    leadTime: '7–14 days (air), 18–30 days (sea)',
    ports: 'Houston, Los Angeles, New York, Vancouver',
    shipments: '850+',
  },
  {
    name: 'Western Europe',
    countries: 'UK, Germany, France, Netherlands, Spain',
    leadTime: '5–10 days (air), 20–35 days (sea)',
    ports: 'Rotterdam, Hamburg, Felixstowe, Le Havre',
    shipments: '620+',
  },
  {
    name: 'Northern Europe',
    countries: 'Sweden, Denmark, Finland, Norway',
    leadTime: '7–12 days (air), 25–38 days (sea)',
    ports: 'Gothenburg, Copenhagen, Helsinki',
    shipments: '280+',
  },
  {
    name: 'Southern Europe',
    countries: 'Italy, Portugal, Greece, Turkey',
    leadTime: '6–11 days (air), 22–35 days (sea)',
    ports: 'Genoa, Lisbon, Piraeus, Istanbul',
    shipments: '340+',
  },
]

const shippingMethods = [
  { icon: Anchor, name: 'Sea Freight (FCL/LCL)', description: 'Full container and less-than-container loads via major global carriers.' },
  { icon: Plane, name: 'Air Freight', description: 'Express and standard air cargo for time-sensitive shipments.' },
  { icon: Train, name: 'Rail Freight', description: 'Asia-Europe rail link for cost-effective mid-speed delivery.' },
  { icon: Truck, name: 'Road Freight', description: 'Last-mile and cross-border trucking within destination regions.' },
]

const incoterms = ['EXW', 'FOB', 'CIF', 'CFR', 'DAP', 'DDP']

export default function Markets() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.cargoShip2} alt="Cargo ship" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/95 to-midnight-800/80" />
        </div>
        <div className="container-max relative z-10">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">Global Markets</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              Where We Ship
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              From our sourcing hubs in Asia, Europe, and the Middle East, we deliver to retailers across 40+ countries — with reliable lead times and transparent logistics at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Delivery Regions</span>
            <h2 className="heading-lg mb-4">Regions We Serve</h2>
            <p className="text-steel-500 text-lg">
              Click through to see typical lead times, entry ports, and shipment volumes for each region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-midnight-50 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-midnight-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-midnight-900">{region.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-steel-400 block">Countries</span>
                      <span className="text-sm text-steel-600">{region.countries}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-steel-400 block">Lead Time</span>
                      <span className="text-sm text-steel-600">{region.leadTime}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Anchor className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-steel-400 block">Entry Ports</span>
                      <span className="text-sm text-steel-600">{region.ports}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-4 h-4 text-steel-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-steel-400 block">Annual Shipments</span>
                      <span className="text-sm font-semibold text-midnight-700">{region.shipments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Logistics Capabilities</span>
            <h2 className="heading-lg mb-4">Shipping Methods We Support</h2>
            <p className="text-steel-500 text-lg">
              We match the right freight mode to your timeline and budget — and handle all the coordination.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingMethods.map((method) => (
              <div key={method.name} className="card p-7 text-center">
                <div className="w-14 h-14 rounded-xl bg-midnight-50 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-midnight-700" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-2">{method.name}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-14 bg-midnight-50 border-y border-steel-100">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-xl font-semibold text-midnight-900 mb-2">Incoterms We Support</h3>
            <p className="text-sm text-steel-400">Flexible trade terms to match your preferences and capabilities.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {incoterms.map((term) => (
              <div key={term} className="px-6 py-3 rounded-lg bg-white border border-steel-200 shadow-sm font-serif font-bold text-lg text-midnight-700">
                {term}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs capabilities */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow mb-3 block">Customs & Import Handling</span>
              <h2 className="heading-lg mb-5">We Handle the Paperwork So You Don't Have To</h2>
              <p className="text-steel-500 text-lg leading-relaxed mb-6">
                Customs delays are the #1 cause of late shipments. Our in-house customs brokerage team ensures every shipment has the right documentation, tariff classification, and duty calculation before it arrives.
              </p>
              <div className="space-y-3">
                {[
                  'HS code classification and tariff optimization',
                  'Customs entry filing and duty payment',
                  'Import licenses and permits management',
                  'Real-time shipment tracking from origin to destination',
                  'Dedicated customs broker per destination country',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-steel-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={images.cargoPort} alt="Container port" className="rounded-xl shadow-2xl w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Shipping to a Region Not Listed Here?"
        subtitle="We're expanding our logistics network constantly. Tell us your destination and we'll find a route."
      />
    </div>
  )
}
