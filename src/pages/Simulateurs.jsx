import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, pageTransitionVariant } from '../lib/animations'
import SectionLabel from '../components/ui/SectionLabel'
import fullSwingLogo from '../assets/Untitled design (4).webp'
import jasonDayImg from '../assets/Jason-Day-Old-Course-gs.webp'

// ── Replace MAKE_WEBHOOK_URL with your Make.com webhook URL ──────────────────
const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/wshc40a9awx8sdeu4d4tkqyhlgq3y1j1'
// ─────────────────────────────────────────────────────────────────────────────

function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={{ color: '#555', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function BookingForm({ t }) {
  const f = t.simulateurs.form
  const packageOptions = t.simulateurs.form.packageOptions

  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', players: '2', package: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'booking' }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler.')
    }
    setLoading(false)
  }

  const input = {
    background: '#1C1C1E',
    border: '1px solid #2E2E2E',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  const selectStyle = {
    ...input,
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    paddingRight: '2.5rem',
    cursor: 'pointer',
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
      >
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#C1272D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          {f.success}
        </p>
        <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>{f.note}</p>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid #2E2E2E' }}>
        <p style={{ color: '#C1272D', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
          {f.eyebrow}
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1, marginBottom: '0.75rem' }}>
          {f.headline}
        </h2>
        <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
          {f.sub}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <Field label={f.name}>
            <input value={form.name} onChange={set('name')} required style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
          <Field label={f.email}>
            <input type="email" value={form.email} onChange={set('email')} required style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <Field label={f.phone}>
            <input type="tel" value={form.phone} onChange={set('phone')} style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
          <Field label={f.players}>
            <input type="number" min="1" max="6" value={form.players} onChange={set('players')} required style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
        </div>

        {/* Row 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <Field label={f.date}>
            <input type="date" value={form.date} onChange={set('date')} required style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
          <Field label={f.time}>
            <input type="time" value={form.time} onChange={set('time')} style={input}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
        </div>

        {/* Package */}
        <div style={{ marginBottom: '1.25rem' }}>
          <Field label={f.package}>
            <select value={form.package} onChange={set('package')} required style={selectStyle}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'}>
              <option value="" disabled>{f.packagePlaceholder}</option>
              {packageOptions.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Message */}
        <div style={{ marginBottom: '2rem' }}>
          <Field label={f.message}>
            <textarea value={form.message} onChange={set('message')} rows={4} style={{ ...input, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#C1272D'}
              onBlur={e => e.target.style.borderColor = '#2E2E2E'} />
          </Field>
        </div>

        {error && (
          <p style={{ color: '#C1272D', fontFamily: 'var(--font-body)', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            style={{ padding: '1rem 2.5rem', background: '#C1272D', color: '#fff', border: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            {loading ? '...' : f.submit}
          </motion.button>
          <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>{f.note}</p>
        </div>
      </form>
    </div>
  )
}

function getCurrentSeason() {
  const now = new Date()
  const m = now.getMonth() + 1
  const d = now.getDate()
  const afterMay18 = m > 5 || (m === 5 && d >= 18)
  const beforeNov19 = m < 11 || (m === 11 && d <= 18)
  return afterMay18 && beforeNov19 ? 'summer' : 'winter'
}

const currentSeason = getCurrentSeason()

export default function Simulateurs() {
  const { t } = useLang()
  const s = t.simulateurs
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'GolfoMax — Simulateurs · Candiac QC'
  }, [])

  useEffect(() => {
    if (hash === '#booking-form' || hash === '#packages') {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransitionVariant}>
      {/* Hero */}
      <section style={{ background: '#1C1C1E', paddingTop: '7rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #2E2E2E' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{s.eyebrow}</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: '#fff', lineHeight: 0.95, maxWidth: 800, marginBottom: '1.5rem' }}>
              {s.headline}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1.05rem', maxWidth: 560, lineHeight: 1.65 }}>
              {s.sub}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden" animate="visible" variants={staggerContainer}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginTop: '4rem' }}
          >
            {s.stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#C1272D', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech section */}
      <section style={{ background: '#242424', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <img src={fullSwingLogo} alt="Full Swing" style={{ height: 80, width: 'auto', marginBottom: '2rem', objectFit: 'contain' }} />
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
              {s.techTitle}
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7 }}>
              {s.techDesc}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            <div style={{ aspectRatio: '16/9', background: '#2E2E2E', position: 'relative', overflow: 'hidden' }}>
              <img src={jasonDayImg} alt="Full Swing Simulator" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" style={{ background: '#242424', padding: '6rem 1.5rem', scrollMarginTop: '5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '3rem' }}>
            <motion.div variants={fadeUp}><SectionLabel>{s.pricing.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
              {s.pricing.headline}
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 720 }}
          >
            {s.pricing.seasons.map((season) => {
              const isCurrent = season.id === currentSeason
              return (
                <motion.div
                  key={season.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  style={{
                    background: '#2E2E2E',
                    borderTop: `3px solid ${isCurrent ? '#C1272D' : '#3E3E3E'}`,
                    padding: '2.5rem 2rem',
                    position: 'relative',
                    transition: 'transform 0.2s',
                  }}
                >
                  {isCurrent && (
                    <span style={{ position: 'absolute', top: -1, right: '1.5rem', background: '#C1272D', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.75rem' }}>
                      {s.pricing.currentSeason}
                    </span>
                  )}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: isCurrent ? '#C1272D' : '#fff', lineHeight: 1, marginBottom: '0.25rem' }}>
                    {season.name}
                  </div>
                  <div style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                    {season.dates}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {season.items.map((item, ii) => (
                      <div key={ii}>
                        {ii > 0 && <div style={{ height: 1, background: '#3E3E3E', margin: '1rem 0' }} />}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                          <span style={{ color: '#999', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            {item.label}
                          </span>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1 }}>{item.price}</span>
                            <span style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginLeft: '0.4rem' }}>{item.unit}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#1C1C1E', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '3rem' }}>
            <motion.div variants={fadeUp}><SectionLabel>{s.howItWorks.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
              {s.howItWorks.headline}
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}
          >
            {s.howItWorks.steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: '#2E2E2E', lineHeight: 1, flexShrink: 0 }}>{step.num}</div>
                <div>
                  <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking form */}
      <section id="booking-form" style={{ background: '#1C1C1E', padding: '6rem 1.5rem', borderTop: '1px solid #2E2E2E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            style={{ background: '#242424', padding: '3rem 2.5rem' }}
          >
            <BookingForm t={t} />
          </motion.div>

          {/* Right: info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingTop: '0.5rem' }}
          >
            {s.pricing.seasons.map((season) => (
              <div key={season.id} style={{ borderLeft: `2px solid ${season.id === currentSeason ? '#C1272D' : '#2E2E2E'}`, paddingLeft: '1.5rem' }}>
                <div style={{ color: season.id === currentSeason ? '#C1272D' : '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {season.name} <span style={{ color: '#555', fontWeight: 400, fontSize: '0.75rem', letterSpacing: 0, textTransform: 'none' }}>{season.dates}</span>
                </div>
                {season.items.map((item, ii) => (
                  <div key={ii} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <span style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>{item.label}</span>
                    <span style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ borderTop: '1px solid #2E2E2E', paddingTop: '2rem' }}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</p>
              <a href="tel:450-907-GOLF" style={{ display: 'block', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '1.1rem', textDecoration: 'none', marginBottom: '0.3rem' }}>450-907-GOLF</a>
              <a href="mailto:info@golfomax.ca" style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.875rem', textDecoration: 'none' }}>info@golfomax.ca</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
