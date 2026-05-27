import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, pageTransitionVariant } from '../lib/animations'
import SectionLabel from '../components/ui/SectionLabel'

function EventForm({ t }) {
  const f = t.evenements.form
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', groupSize: '', date: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://hook.us2.make.com/xel1bxfvlx9a8phd76kguvih3z651mt5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'event' }),
      })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  const inputStyle = { width: '100%', padding: '0.75rem 1rem', background: '#1C1C1E', border: '1px solid #2E2E2E', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }

  return (
    <div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '2.5rem' }}>
        <motion.div variants={fadeUp}><SectionLabel>{f.eyebrow}</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
          {f.headline}
        </motion.h2>
      </motion.div>
      {sent ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#C1272D', fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '2rem', background: '#242424', border: '1px solid #C1272D' }}>
          {f.success}
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <input placeholder={f.name} value={form.name} onChange={set('name')} required style={inputStyle} />
          <input placeholder={f.email} type="email" value={form.email} onChange={set('email')} required style={inputStyle} />
          <input placeholder={f.phone} value={form.phone} onChange={set('phone')} style={inputStyle} />
          <select value={form.eventType} onChange={set('eventType')} required style={{ ...inputStyle, color: form.eventType ? '#fff' : '#555' }}>
            <option value="" disabled>{f.eventTypePlaceholder}</option>
            {f.eventTypeOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <input placeholder={f.groupSize} type="number" min="2" value={form.groupSize} onChange={set('groupSize')} style={inputStyle} />
          <input placeholder={f.date} type="date" value={form.date} onChange={set('date')} required style={inputStyle} />
          <textarea placeholder={f.message} value={form.message} onChange={set('message')} rows={4} style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} />
          <div style={{ gridColumn: '1 / -1' }}>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '0.9rem 2.5rem', background: '#C1272D', color: '#fff', border: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}
            >
              {f.submit}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  )
}

export default function Evenements() {
  const { t } = useLang()
  const ev = t.evenements

  useEffect(() => {
    document.title = 'GolfoMax — Événements · Candiac QC'
  }, [])

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransitionVariant}>
      {/* Hero */}
      <section style={{ background: '#1C1C1E', paddingTop: '7rem', paddingBottom: '5rem', borderBottom: '1px solid #2E2E2E', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(193,39,45,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(193,39,45,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{ev.eyebrow}</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#fff', lineHeight: 0.95, maxWidth: 800, marginBottom: '1.5rem' }}>
              {ev.headline}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1.05rem', maxWidth: 560, lineHeight: 1.65 }}>
              {ev.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Event packages */}
      <section style={{ background: '#242424', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '3rem' }}>
            <motion.div variants={fadeUp}><SectionLabel>{ev.packages.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
              {ev.packages.headline}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
          >
            {ev.packages.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                style={{
                  background: item.featured ? '#C1272D' : '#2E2E2E',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  transition: 'transform 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{
                    background: item.featured ? 'rgba(255,255,255,0.2)' : '#1C1C1E',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem',
                  }}>
                    {item.badge}
                  </span>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {item.sports.map((s, si) => <span key={si} style={{ fontSize: '1.1rem' }}>{s}</span>)}
                  </div>
                </div>

                <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {item.name}
                </h3>
                <p style={{ color: item.featured ? 'rgba(255,255,255,0.75)' : '#999', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.features.map((f, fi) => (
                    <li key={fi} style={{ color: item.featured ? 'rgba(255,255,255,0.85)' : '#999', fontFamily: 'var(--font-body)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: item.featured ? '#fff' : '#C1272D', fontSize: '0.7rem' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TV Policy */}
      <section style={{ background: '#1C1C1E', padding: '6rem 1.5rem', borderTop: '1px solid #2E2E2E', borderBottom: '1px solid #2E2E2E' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{ev.tvPolicy.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
              {ev.tvPolicy.headline}
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {ev.tvPolicy.desc}
            </motion.p>
            <motion.span
              variants={fadeUp}
              style={{ display: 'inline-block', background: '#C1272D', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.4rem 1.25rem' }}
            >
              {ev.tvPolicy.badge}
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: '#242424', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <EventForm t={t} />
        </div>
      </section>
    </motion.div>
  )
}
