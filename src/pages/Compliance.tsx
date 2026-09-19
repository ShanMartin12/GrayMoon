import { ShieldCheck, FileText, Download, CheckCircle2, ClipboardCheck, Factory, FlaskConical, FileCheck } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const complianceByCategory = [
  {
    category: 'Electronics',
    certs: [
      { name: 'CE Marking', description: 'European conformity marking for products sold within the EEA.' },
      { name: 'FCC Certification', description: 'U.S. Federal Communications Commission compliance for electronic devices.' },
      { name: 'RoHS', description: 'Restriction of Hazardous Substances — ensures no banned materials in electronics.' },
      { name: 'UL Listed', description: 'Underwriters Laboratories safety certification for electrical products.' },
    ],
  },
  {
    category: 'Textiles',
    certs: [
      { name: 'OEKO-TEX Standard 100', description: 'Tests for harmful substances in textiles at every production stage.' },
      { name: 'GOTS', description: 'Global Organic Textile Standard for organic fiber processing.' },
      { name: 'BSCI', description: 'Business Social Compliance Initiative — ethical labor audits at factories.' },
      { name: 'REACH', description: 'EU regulation for chemical safety in textile products.' },
    ],
  },
  {
    category: 'Machinery',
    certs: [
      { name: 'CE Marking', description: 'European safety and health compliance for machinery and equipment.' },
      { name: 'EPA Compliance', description: 'U.S. Environmental Protection Agency standards for engines and equipment.' },
      { name: 'FDA Compliance', description: 'Food and Drug Administration standards for food processing equipment.' },
      { name: '3-A Sanitary Standards', description: 'Hygienic design standards for food-contact machinery.' },
    ],
  },
]

const processSteps = [
  { icon: Factory, title: 'Factory Audit', description: 'We verify every manufacturer against ISO 9001 and social compliance standards before onboarding.' },
  { icon: ClipboardCheck, title: 'Pre-Production Inspection', description: 'Raw materials, specifications, and production samples are checked before mass production begins.' },
  { icon: FlaskConical, title: 'Third-Party Testing', description: 'Independent labs test against your target market\'s regulatory standards (CE, FCC, RoHS, etc.).' },
  { icon: FileCheck, title: 'Pre-Shipment Inspection', description: 'AQL-level inspection of finished goods before they leave the factory — no surprises on arrival.' },
]

const documents = [
  'Certificate of Origin (COO)',
  'Commercial Invoice & Packing List',
  'Bill of Lading / Air Waybill',
  'Test Reports (per product)',
  'Customs Declaration Forms',
  'Insurance Certificates',
  'Material Safety Data Sheets',
  'Factory Audit Reports',
]

export default function Compliance() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-midnight-800 py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">Compliance & Certifications</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Every Shipment Arrives Ready for Your Market
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              We don't just source products — we ensure they meet the regulatory standards of your destination country before they leave the factory floor.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Our QA Process</span>
            <h2 className="heading-lg mb-4">Four-Stage Quality Assurance</h2>
            <p className="text-steel-500 text-lg">
              Every order goes through a structured inspection and testing pipeline — from factory audit to pre-shipment check.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="card p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-midnight-700 flex items-center justify-center text-white font-serif font-bold text-sm">
                      {i + 1}
                    </div>
                    <step.icon className="w-6 h-6 text-midnight-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications by Category */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">By Product Category</span>
            <h2 className="heading-lg mb-4">Certifications We Ensure</h2>
            <p className="text-steel-500 text-lg">
              Each product category has its own regulatory landscape. Here's what we verify for yours.
            </p>
          </div>
          <div className="space-y-8">
            {complianceByCategory.map((cat) => (
              <div key={cat.category} className="bg-white rounded-xl border border-steel-200 overflow-hidden">
                <div className="bg-midnight-700 px-7 py-5">
                  <h3 className="font-serif text-xl font-bold text-white">{cat.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {cat.certs.map((cert) => (
                    <div key={cert.name} className="flex items-start gap-4 p-6 border-b border-r border-steel-100">
                      <ShieldCheck className="w-6 h-6 text-midnight-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-midnight-900 mb-1">{cert.name}</h4>
                        <p className="text-sm text-steel-500 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow mb-3 block">Shipment Documentation</span>
              <h2 className="heading-lg mb-5">Full Paperwork, Every Time</h2>
              <p className="text-steel-500 text-lg leading-relaxed mb-6">
                Every shipment arrives with a complete documentation package, so your customs broker has everything needed to clear goods without delay.
              </p>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="text-steel-600">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-midnight-50 rounded-xl p-8 border border-midnight-100">
              <FileText className="w-10 h-10 text-midnight-700 mb-5" />
              <h3 className="font-serif text-xl font-semibold text-midnight-900 mb-3">Download Compliance Documents</h3>
              <p className="text-sm text-steel-500 mb-6">
                Need certificates of compliance, test reports, or factory audit summaries? Request our compliance dossier for your product category.
              </p>
              <button className="btn-primary w-full">
                <Download className="w-4 h-4" /> Request Compliance Dossier
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Compliance Questions About Your Market?"
        subtitle="Our compliance team can walk you through the specific requirements for your destination country and product category."
      />
    </div>
  )
}
