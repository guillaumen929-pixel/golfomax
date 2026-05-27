import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, slideLeft, slideRight, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

const inputClass = 'w-full bg-bg-primary border border-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-text-muted'
const labelClass = 'block font-heading font-semibold text-text-secondary text-xs tracking-widest uppercase mb-2'

export default function ContactSplit() {
  const { t } = useLang()
  const f = t.contact.form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const set = key => e => setForm(p => ({ ...p, [key]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = true
    if (!form.email.trim()) errs.email = true
    if (!form.message.trim()) errs.message = true
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form)
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SectionLabel>{t.contact.sectionLabel}</SectionLabel>
            <h2 className="font-display text-display-md text-white mb-8">{f.title}</h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 border border-brand/30 bg-brand/5 text-center"
                >
                  <span className="text-brand text-3xl block mb-3">✓</span>
                  <p className="font-heading font-semibold text-white">{f.success}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-5">
                  <div>
                    <label className={labelClass}>{f.name}</label>
                    <input className={`${inputClass} ${errors.name ? 'border-brand/60' : ''}`} value={form.name} onChange={set('name')} placeholder={f.name} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.email}</label>
                    <input type="email" className={`${inputClass} ${errors.email ? 'border-brand/60' : ''}`} value={form.email} onChange={set('email')} placeholder={f.email} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.message}</label>
                    <textarea className={`${inputClass} resize-none ${errors.message ? 'border-brand/60' : ''}`} rows={5} value={form.message} onChange={set('message')} placeholder={f.message} />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'loading'}>
                    {f.submit}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin size={18} className="text-brand flex-shrink-0 mt-0.5" />
                <p className="font-body text-text-secondary text-sm">{t.contact.address}</p>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-brand flex-shrink-0 mt-0.5" />
                <p className="font-body text-text-secondary text-sm">{t.contact.phone}</p>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-brand flex-shrink-0 mt-0.5" />
                <p className="font-body text-text-secondary text-sm">{t.contact.email}</p>
              </div>
            </div>

            <div className="border border-border overflow-hidden h-64">
              <iframe
                title="GolfoMax map"
                src="https://maps.google.com/maps?q=Candiac,+Quebec,+Canada&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
