import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

const inputClass = 'w-full bg-bg-primary border border-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-text-muted'
const labelClass = 'block font-heading font-semibold text-text-secondary text-xs tracking-widest uppercase mb-2'

export default function EventContactForm() {
  const { t } = useLang()
  const f = t.events.form
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', groupSize: '', date: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const required = ['name', 'email', 'eventType', 'groupSize']

  const validate = () => {
    const e = {}
    required.forEach(k => { if (!form[k].trim()) e[k] = true })
    return e
  }

  const set = key => e => setForm(p => ({ ...p, [key]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
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

  const fieldErr = key => errors[key] ? 'border-brand/60' : ''

  return (
    <section id="event-form" className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="text-center mb-10">
            <SectionLabel>{t.events.cta}</SectionLabel>
            <h2 className="font-display text-display-md text-white">{f.title}</h2>
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 border border-brand/30 bg-brand/5"
              >
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand text-2xl">✓</span>
                </div>
                <p className="font-heading font-semibold text-white text-lg">{f.success}</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.name}</label>
                    <input className={`${inputClass} ${fieldErr('name')}`} value={form.name} onChange={set('name')} placeholder={f.name} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.email}</label>
                    <input type="email" className={`${inputClass} ${fieldErr('email')}`} value={form.email} onChange={set('email')} placeholder={f.email} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.phone}</label>
                    <input type="tel" className={inputClass} value={form.phone} onChange={set('phone')} placeholder={f.phone} />
                  </div>
                  <div>
                    <label className={labelClass}>{f.date}</label>
                    <input type="date" className={inputClass} value={form.date} onChange={set('date')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{f.eventType}</label>
                    <select className={`${inputClass} ${fieldErr('eventType')}`} value={form.eventType} onChange={set('eventType')}>
                      <option value="">—</option>
                      {t.events.items.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{f.groupSize}</label>
                    <select className={`${inputClass} ${fieldErr('groupSize')}`} value={form.groupSize} onChange={set('groupSize')}>
                      <option value="">—</option>
                      {['1–6', '7–12', '13–20', '21–30', '30+'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{f.message}</label>
                  <textarea className={`${inputClass} resize-none`} rows={4} value={form.message} onChange={set('message')} placeholder={f.message} />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'loading'}>
                  {f.submit}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
