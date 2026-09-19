import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, ShieldCheck, Package, Truck,
  Award, Users, TrendingUp, MapPin, Clock, CheckCircle2,
} from 'lucide-react'
import CTABanner from '../components/CTABanner'
import { productCategories } from '../lib/data'
import { images } from '../lib/images'

const trustStats = [
  { value: '18+', label: 'Years in Trade' },
  { value: '40+', label: 'Countries Served' },
  { value: '2M+', label: 'Units Shipped' },
  { value: '99.2%', label: 'On-Time Delivery' },
]

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Compliance-First Approach',
    description: 'Every shipment arrives with full documentation — CE, FCC, RoHS, OEKO-TEX, and more — so your imports clear customs without delays.',
  },
  {
    icon: Globe,
    title: 'Global Sourcing Network',
    description: 'Direct relationships with 120+ certified manufacturers across Asia, Europe, and the Middle East give you competitive pricing and priority production slots.',
  },
  {
    icon: Truck,
    title: 'End-to-End Logistics',
    description: 'From factory floor to your warehouse, we manage freight forwarding, customs brokerage, and last-mile delivery under transparent Incoterms.',
  },
  {
    icon: Award,
    title: 'Quality You Can Verify',
    description: 'Pre-shipment inspections, factory audits, and third-party testing ensure every batch meets your specifications before it leaves the origin country.',
  },
]

const complianceLogos = ['CE', 'FCC', 'RoHS', 'ISO 9001', 'OEKO-TEX', 'BSCI', 'UL', 'GOTS']

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.cargoShip} alt="Cargo ship at port" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/95 via-midnight-900/85 to-midnight-800/70" />
        </div>
        <div className="container-max relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm text-white font-medium tracking-wide">Trusted by 500+ retailers worldwide</span>
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Global Trade Partner for <span className="text-accent-400">Import-Ready Products</span>
            </h1>
            <p className="text-lg text-midnight-100 leading-relaxed mb-8 max-w-xl">
              We source electronics, textiles, and machinery from certified manufacturers worldwide — handling compliance, logistics, and quality so you can focus on selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-outline border-white/30 text-white hover:bg-white hover:text-midnight-900">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-midnight-900 py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent-400 mb-1">{stat.value}</div>
                <div className="text-sm text-midnight-100 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">What We Source</span>
            <h2 className="heading-lg mb-4">Import-Ready Product Categories</h2>
            <p className="text-steel-500 text-lg">
              Three core categories, each backed by certified manufacturers, full compliance documentation, and dedicated quality control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <Link key={cat.name} to="/products" className="card overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-serif text-xl font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-midnight-100 mt-0.5">{cat.count}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-steel-500 leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.certifications.map((cert) => (
                      <span key={cert} className="text-xs font-medium px-2.5 py-1 rounded-md bg-midnight-50 text-midnight-600 border border-midnight-100">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight-700 group-hover:gap-2.5 transition-all">
                    View products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow mb-3 block">Global Market Reach</span>
              <h2 className="heading-lg mb-5">Sourcing from 12 Countries, Shipping to 40+</h2>
              <p className="text-steel-500 text-lg leading-relaxed mb-6">
                Our sourcing network spans manufacturing hubs across China, India, Taiwan, South Korea, Türkiye, Italy, and more. We deliver to retailers across North America and Europe with reliable lead times and transparent logistics.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MapPin, label: 'Sourcing Hubs', value: '12 countries' },
                  { icon: Globe, label: 'Delivery Regions', value: '40+ countries' },
                  { icon: Users, label: 'Manufacturing Partners', value: '120+ factories' },
                  { icon: Clock, label: 'Avg. Response Time', value: '< 1 business day' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 rounded-lg bg-steel-50 border border-steel-100">
                    <item.icon className="w-5 h-5 text-midnight-600 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-midnight-900">{item.value}</div>
                      <div className="text-xs text-steel-400">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/markets" className="btn-outline">
                See Our Markets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img src={images.cargoPort} alt="Container port" className="rounded-xl shadow-2xl w-full h-[420px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-steel-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-semibold text-midnight-900">99.2% On-Time Delivery</span>
                </div>
                <p className="text-xs text-steel-400">Across 2,000+ shipments in the last 12 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Logo Strip */}
      <section className="py-14 bg-midnight-50 border-y border-steel-100">
        <div className="container-max">
          <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase text-steel-400 mb-8">
            Compliance & Certification Standards We Meet
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {complianceLogos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 rounded-lg bg-white border border-steel-200 shadow-sm font-serif font-bold text-lg text-midnight-700 hover:border-midnight-300 hover:shadow-md transition-all"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Why Meridian</span>
            <h2 className="heading-lg mb-4">Built for Buyers Who Can't Afford Surprises</h2>
            <p className="text-steel-500 text-lg">
              We handle the complexity of international trade so your imports arrive on spec, on time, and on budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-5 p-7 rounded-xl border border-steel-100 hover:border-midnight-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-midnight-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-midnight-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-midnight-900 mb-2">{item.title}</h3>
                  <p className="text-steel-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <CheckCircle2 key={i} className="w-6 h-6 text-accent-500 fill-accent-100" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-midnight-900 leading-relaxed mb-8">
              "Meridian handled our entire electronics import line — from factory audits to customs clearance. We've cut our sourcing lead time by 30% and haven't had a single compliance issue in two years."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-midnight-700 flex items-center justify-center font-serif text-white text-lg font-bold">
                JR
              </div>
              <div className="text-left">
                <div className="font-semibold text-midnight-900">James Richardson</div>
                <div className="text-sm text-steel-400">Head of Procurement, Northstar Retail Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
