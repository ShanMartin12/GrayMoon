import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Users, Award, Building2, Globe2, Factory, PackageCheck } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import { images } from '../lib/images'

const values = [
  { icon: Target, title: 'Integrity in Trade', description: 'Transparent pricing, honest lead times, and no hidden costs. We build relationships that last decades, not transactions.' },
  { icon: Award, title: 'Quality Without Compromise', description: "Every factory we work with is audited, every shipment inspected. We never ship what we wouldn't accept ourselves." },
  { icon: Globe2, title: 'Global Perspective', description: 'We understand the cultural, regulatory, and logistical nuances of each market we operate in — and translate that knowledge into value for you.' },
  { icon: Users, title: 'Partnership Over Transactions', description: 'Your success is our success. We invest in understanding your business, your customers, and your long-term goals.' },
]

const milestones = [
  { year: '2008', title: 'Founded in Houston', description: 'Started as a small electronics import broker serving Texas retailers.' },
  { year: '2012', title: 'Expanded to Textiles', description: 'Added apparel and home textile sourcing from India and Pakistan.' },
  { year: '2016', title: 'European Operations', description: 'Opened a regional office in Rotterdam to serve EU buyers directly.' },
  { year: '2019', title: 'Machinery Division', description: 'Launched industrial machinery sourcing with dedicated engineering support.' },
  { year: '2023', title: '120+ Manufacturing Partners', description: 'Crossed 120 certified factory partnerships across 12 countries.' },
  { year: '2026', title: '2M+ Units Shipped', description: 'Surpassed 2 million units delivered with a 99.2% on-time rate.' },
]

const team = [
  { name: 'David Chen', role: 'Founder & CEO', initials: 'DC' },
  { name: 'Sofia Almeida', role: 'Head of Sourcing', initials: 'SA' },
  { name: 'Robert Kim', role: 'Director of Logistics', initials: 'RK' },
  { name: 'Amira Hassan', role: 'Compliance Director', initials: 'AH' },
]

const operationalStats = [
  { icon: Factory, label: 'Manufacturing Partners', value: '120+' },
  { icon: Building2, label: 'Regional Offices', value: '3 (Houston, Rotterdam, Istanbul)' },
  { icon: PackageCheck, label: 'Annual Shipments', value: '2,000+' },
  { icon: Globe2, label: 'Countries Served', value: '40+' },
]

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.handshake} alt="Business partnership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/95 to-midnight-800/80" />
        </div>
        <div className="container-max relative z-10">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">About Meridian</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
              18 Years of Connecting the World's Best Manufacturers to Retailers Who Trust Us
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              We started as a small import broker in Houston. Today, we're a global trade partner managing the entire import lifecycle for hundreds of retailers across North America and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-xl bg-midnight-50 border border-midnight-100">
              <Target className="w-10 h-10 text-midnight-700 mb-4" />
              <h2 className="font-serif text-2xl font-bold text-midnight-900 mb-3">Our Mission</h2>
              <p className="text-steel-500 leading-relaxed">
                To make global sourcing effortless for mid-size retailers by managing compliance, quality, and logistics — so our clients can compete with the largest players in their markets.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-steel-50 border border-steel-100">
              <Eye className="w-10 h-10 text-midnight-700 mb-4" />
              <h2 className="font-serif text-2xl font-bold text-midnight-900 mb-3">Our Vision</h2>
              <p className="text-steel-500 leading-relaxed">
                To be the most trusted import partner for retailers worldwide, known for integrity, reliability, and the ability to source anything, anywhere, on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">What We Stand For</span>
            <h2 className="heading-lg mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-7">
                <div className="w-12 h-12 rounded-lg bg-midnight-50 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-midnight-700" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-2">{value.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Our Journey</span>
            <h2 className="heading-lg mb-4">From Houston to the World</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-midnight-700 flex items-center justify-center text-white font-serif font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-steel-200 mt-2" />}
                </div>
                <div className="pt-1 pb-4">
                  <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-1">{m.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Scale */}
      <section className="section-pad bg-midnight-800">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow text-midnight-200 mb-3 block">Operational Scale</span>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Built to Handle Your Volume</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalStats.map((stat) => (
              <div key={stat.label} className="bg-midnight-700/50 rounded-xl p-6 border border-midnight-600">
                <stat.icon className="w-8 h-8 text-accent-400 mb-4" />
                <div className="font-serif text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-midnight-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Leadership</span>
            <h2 className="heading-lg mb-4">The People Behind Meridian</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-midnight-700 flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold text-white">
                  {member.initials}
                </div>
                <h3 className="font-serif text-lg font-semibold text-midnight-900">{member.name}</h3>
                <p className="text-sm text-steel-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="py-14 bg-midnight-50 border-y border-steel-100">
        <div className="container-max">
          <p className="text-center text-sm font-semibold tracking-[0.15em] uppercase text-steel-400 mb-6">
            Memberships & Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {['ISO 9001', 'BSCI', 'AEO Certified', 'FIATA Member', 'ICC Member'].map((item) => (
              <div key={item} className="px-6 py-3 rounded-lg bg-white border border-steel-200 shadow-sm font-serif font-bold text-lg text-midnight-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Learn More About Working With Us?"
        subtitle="Reach out and our team will walk you through our process, capabilities, and how we can support your import needs."
      />
    </div>
  )
}
