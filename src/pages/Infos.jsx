import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, pageTransitionVariant } from '../lib/animations'
import SectionLabel from '../components/ui/SectionLabel'

function PhoneIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1.13h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}


export default function Infos() {
  const { t } = useLang()
  const inf = t.infos

  useEffect(() => {
    document.title = 'GolfoMax — Infos & Contact · Candiac QC'
  }, [])

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransitionVariant}>
      {/* Hero */}
      <section style={{ background: '#1C1C1E', paddingTop: '7rem', paddingBottom: '5rem', borderBottom: '1px solid #2E2E2E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{inf.eyebrow}</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#fff', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              {inf.headline}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.65 }}>
              {inf.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Address + Hours + Map */}
      <section style={{ background: '#242424', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Address & Hours */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Adresse</p>
              <p style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.5 }}>{inf.address}</p>
              <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>{inf.city}</p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Téléphone</p>
              <a href={`tel:${inf.phone}`} style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '1.1rem', textDecoration: 'none' }}>{inf.phone}</a>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Courriel</p>
              <a href={`mailto:${inf.email}`} style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '1rem', textDecoration: 'none' }}>{inf.email}</a>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{inf.hours.title}</p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {inf.hours.rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #2E2E2E' }}>
                      <td style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '0.6rem 0' }}>{row.day}</td>
                      <td style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '0.6rem 0', textAlign: 'right' }}>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} style={{ marginTop: '2.5rem' }}>
              <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{inf.social.title}</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#" aria-label="Instagram" style={{ width: 40, height: 40, border: '1px solid #2E2E2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C1272D'; e.currentTarget.style.borderColor = '#C1272D' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#2E2E2E' }}
                >
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Facebook" style={{ width: 40, height: 40, border: '1px solid #2E2E2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C1272D'; e.currentTarget.style.borderColor = '#C1272D' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#2E2E2E' }}
                >
                  <FacebookIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', background: '#2E2E2E', position: 'relative', overflow: 'hidden' }}>
              <iframe
                title="GolfoMax Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.7!2d-73.497!3d45.374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s19+Boul+Montcalm+N%2C+Candiac%2C+QC!5e0!3m2!1sfr!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(40%) contrast(110%) brightness(75%) saturate(140%)', position: 'absolute', inset: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=19+Boul+Montcalm+N+Candiac+QC"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', marginTop: '1rem', color: '#C1272D', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              {inf.gettingHere.directions} →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Amenities 3x3 grid */}
      <section style={{ background: '#1C1C1E', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ marginBottom: '3rem' }}>
            <motion.div variants={fadeUp}><SectionLabel>{inf.amenities.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
              {inf.amenities.headline}
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#2E2E2E' }}
          >
            {inf.amenities.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{ background: '#1C1C1E', padding: '2rem 1.5rem', position: 'relative' }}
              >
                <div style={{ width: 32, height: 2, background: '#C1272D', marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rules */}
      <section style={{ background: '#C1272D', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}
          >
            <div>
              <motion.div variants={fadeUp}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{inf.rules.eyebrow}</p>
              </motion.div>
              <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1 }}>
                {inf.rules.headline}
              </motion.h2>
            </div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              {inf.rules.items.map((rule, i) => (
                <motion.li key={i} variants={fadeUp} style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#fff', fontSize: '0.65rem' }}>✓</span>
                  {rule}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Getting here */}
      <section style={{ background: '#242424', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{inf.gettingHere.eyebrow}</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
              {inf.gettingHere.headline}
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {inf.gettingHere.desc}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="https://maps.google.com/?q=19+Boul+Montcalm+N+Candiac+QC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#C1272D', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {inf.gettingHere.directions} →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            <div style={{ background: '#2E2E2E', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Autoroute</p>
                <p style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>A-15 Sud → Sortie Candiac</p>
              </div>
              <div>
                <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Stationnement</p>
                <p style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Gratuit · Sur place</p>
              </div>
              <div>
                <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Depuis Montréal</p>
                <p style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>~25 min en voiture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact phone CTA */}
      <section style={{ background: '#1C1C1E', padding: '6rem 1.5rem', borderTop: '1px solid #2E2E2E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>{inf.form.eyebrow}</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', lineHeight: 1 }}>
              {inf.form.headline}
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.7 }}>
              {inf.form.sub}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={`tel:${inf.phone}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 3rem', background: '#C1272D', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#9E1F24'}
                onMouseLeave={e => e.currentTarget.style.background = '#C1272D'}
              >
                <PhoneIcon size={22} />
                {inf.phone}
              </a>
            </motion.div>
            <motion.p variants={fadeUp} style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
              {inf.form.note}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
