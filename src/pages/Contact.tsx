import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, Phone, Clock, Globe } from 'lucide-react'
import { supabase } from '../lib/supabase'

const productCategories = ['Electronics', 'Textiles', 'Machinery', 'Multiple Categories', 'Other']

const initialForm = {
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_details: '',
  volume: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const { error: insertError } = await supabase
        .from('rfq_submissions')
        .insert([form])

      if (insertError) throw insertError

      setSuccess(true)
      setForm(initialForm)
    } catch (err) {
      setError('Something went wrong submitting your request. Please try again or email us directly.')
      console.error('RFQ submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-midnight-800 py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-2xl">
            <span className="eyebrow text-midnight-200 mb-3 block">Request for Quote</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-midnight-100 text-lg leading-relaxed">
              Tell us what you need sourced. Our team will respond within one business day with pricing, lead times, and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-pad bg-steel-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-steel-200 p-6">
                <h3 className="font-serif text-lg font-semibold text-midnight-900 mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-midnight-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-midnight-700" />
                    </div>
                    <div>
                      <div className="text-xs text-steel-400 mb-0.5">Email</div>
                      <a href="mailto:sales@meridianimports.com" className="text-sm font-medium text-midnight-900 hover:text-midnight-600 transition-colors">
                        sales@meridianimports.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-midnight-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-midnight-700" />
                    </div>
                    <div>
                      <div className="text-xs text-steel-400 mb-0.5">Phone</div>
                      <a href="tel:+15551234567" className="text-sm font-medium text-midnight-900 hover:text-midnight-600 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-midnight-50 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-midnight-700" />
                    </div>
                    <div>
                      <div className="text-xs text-steel-400 mb-0.5">Response Time</div>
                      <span className="text-sm font-medium text-midnight-900">Within 1 business day</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-midnight-50 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-midnight-700" />
                    </div>
                    <div>
                      <div className="text-xs text-steel-400 mb-0.5">Office Hours</div>
                      <span className="text-sm font-medium text-midnight-900">Mon–Fri, 8am–6pm CST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-midnight-700 rounded-xl p-6 text-white">
                <h3 className="font-serif text-lg font-semibold mb-3">Regional Sales Reps</h3>
                <p className="text-sm text-midnight-100 mb-4">We have dedicated reps for your region:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-midnight-600 pb-2">
                    <span>North America</span>
                    <span className="text-midnight-200">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex justify-between border-b border-midnight-600 pb-2">
                    <span>Europe (UK)</span>
                    <span className="text-midnight-200">+44 20 7946 0123</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Europe (EU)</span>
                    <span className="text-midnight-200">+49 30 9012345</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-steel-200 p-8 lg:p-10">
                {success ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-midnight-900 mb-3">Request Received</h3>
                    <p className="text-steel-500 max-w-md mx-auto mb-6">
                      Thank you for your interest. Our team will review your request and respond within one business day.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="btn-outline"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-bold text-midnight-900 mb-2">Request for Quote</h2>
                    <p className="text-steel-400 text-sm mb-8">Fields marked with * are required.</p>

                    {error && (
                      <div className="flex items-start gap-3 p-4 mb-6 rounded-lg bg-red-50 border border-red-200">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Company Name *</label>
                          <input
                            type="text"
                            name="company_name"
                            required
                            value={form.company_name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Contact Name *</label>
                          <input
                            type="text"
                            name="contact_name"
                            required
                            value={form.contact_name}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="you@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Country *</label>
                          <input
                            type="text"
                            name="country"
                            required
                            value={form.country}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Your country"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Product Category *</label>
                          <select
                            name="product_category"
                            required
                            value={form.product_category}
                            onChange={handleChange}
                            className="input-field"
                          >
                            <option value="">Select a category</option>
                            {productCategories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-steel-600 mb-1.5">Product Details</label>
                        <input
                          type="text"
                          name="product_details"
                          value={form.product_details}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="What specific products are you looking for?"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Estimated Volume</label>
                          <input
                            type="text"
                            name="volume"
                            value={form.volume}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="e.g., 5,000 units / month"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-steel-600 mb-1.5">Timeline</label>
                          <input
                            type="text"
                            name="timeline"
                            value={form.timeline}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="e.g., Needed within 60 days"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-steel-600 mb-1.5">Additional Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className="input-field resize-none"
                          placeholder="Any additional details, specifications, or questions..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>Submitting...</>
                        ) : (
                          <>Submit Request <Send className="w-4 h-4" /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
