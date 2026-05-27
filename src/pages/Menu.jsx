import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, pageTransitionVariant } from '../lib/animations'
import SectionLabel from '../components/ui/SectionLabel'

export default function Menu() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const clicking = useRef(false)

  useEffect(() => {
    document.title = 'GolfoMax — Menu · Candiac QC'
  }, [])

  useEffect(() => {
    const cats = t.menu.categories
    const observers = []
    cats.forEach((cat, i) => {
      const el = document.getElementById(`cat-${cat.id}`)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !clicking.current) setActive(i)
        },
        { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [t])

  const cats = t.menu.categories

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransitionVariant}>
      {/* Hero */}
      <section style={{ background: '#1C1C1E', paddingTop: '7rem', paddingBottom: '4rem', borderBottom: '1px solid #2E2E2E' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp}><SectionLabel>{t.menu.eyebrow}</SectionLabel></motion.div>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: '#fff', lineHeight: 0.95, marginBottom: '1rem' }}>
              {t.menu.headline}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', maxWidth: 560, lineHeight: 1.65 }}>
              {t.menu.sub}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu content */}
      <section style={{ background: '#1C1C1E', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem' }}>
          {/* Sticky sidebar */}
          <div style={{ position: 'sticky', top: '5rem', alignSelf: 'start', minWidth: 160 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {cats.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActive(i)
                    clicking.current = true
                    document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setTimeout(() => { clicking.current = false }, 800)
                  }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.6rem 0',
                    borderLeft: `2px solid ${active === i ? '#C1272D' : '#2E2E2E'}`,
                    paddingLeft: '1rem',
                    color: active === i ? '#fff' : '#555',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Category content */}
          <div>
            {cats.map((cat, ci) => (
              <motion.div
                key={cat.id}
                id={`cat-${cat.id}`}
                style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
              >
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #2E2E2E' }}>
                  {cat.title}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#2E2E2E' }}>
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      whileHover={{ background: '#2E2E2E' }}
                      style={{ background: '#1C1C1E', padding: '1.5rem', transition: 'background 0.15s' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.4rem' }}>
                        <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em' }}>
                          {item.name}
                        </span>
                        <span style={{ color: '#C1272D', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                          {item.price}
                        </span>
                      </div>
                      <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.825rem', lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #2E2E2E' }}>
              {t.menu.note}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
