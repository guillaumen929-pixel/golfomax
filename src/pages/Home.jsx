import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, pageTransitionVariant } from '../lib/animations'
import SectionLabel from '../components/ui/SectionLabel'
import videoSrc from '../assets/golf-swing-scrub-60fps.mp4'
import mahomesImg from '../assets/Mahomes_Team-Full-Swing-gs.webp'
import barImg from '../assets/Untitled design (3).webp'

function VideoHero() {
  const { t } = useLang()
  const outerRef = useRef(null)
  const videoRef = useRef(null)
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) return
    const v = videoRef.current
    const outer = outerRef.current
    if (!v || !outer) return

    v.autoplay = false

    const blockPlay = () => v.pause()
    v.addEventListener('play', blockPlay)

    let rafId

    function seek() {
      if (!v.duration || !outer) return
      const rect = outer.getBoundingClientRect()
      const totalScrollable = outer.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable))
      v.currentTime = progress * v.duration
    }

    function onScroll() {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(seek)
    }

    function setup() {
      // play→pause primes iOS Safari so currentTime can be set without user gesture
      v.play().then(() => {
        v.pause()
        seek()
        window.addEventListener('scroll', onScroll, { passive: true })
      }).catch(() => {
        v.pause()
        seek()
        window.addEventListener('scroll', onScroll, { passive: true })
      })
    }

    if (v.readyState >= 1) {
      setup()
    } else {
      v.addEventListener('loadedmetadata', setup, { once: true })
    }

    return () => {
      v.removeEventListener('play', blockPlay)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const words = [t.hero.word1, t.hero.word2, t.hero.word3]

  if (reducedMotion) {
    return (
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#1C1C1E' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,28,30,0.4) 0%, rgba(28,28,30,0.7) 50%, rgba(28,28,30,1) 100%)', zIndex: 1 }} />
        <HeroContent words={words} t={t} />
      </section>
    )
  }

  return (
    <section ref={outerRef} style={{ position: 'relative', height: '300vh', background: '#1C1C1E' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', isolation: 'isolate', transform: 'translateZ(0)' }}>
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,28,30,0.3) 0%, rgba(28,28,30,0.65) 50%, rgba(28,28,30,1) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#C1272D', zIndex: 2 }} />
        <HeroContent words={words} t={t} />
      </div>
    </section>
  )
}

function HeroContent({ words, t }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '8rem 1.5rem 6rem', width: '100%' }}>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.p variants={fadeUp} style={{ color: '#C1272D', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          {t.hero.eyebrow}
        </motion.p>

        {words.map((word, i) => (
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] } }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 13vw, 11rem)',
              lineHeight: 0.9,
              color: i === 1 ? '#C1272D' : '#fff',
              margin: 0,
            }}
          >
            {word}
          </motion.h1>
        ))}

        <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', marginTop: '2rem', maxWidth: 520, lineHeight: 1.65 }}>
          {t.hero.sub}
        </motion.p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
        style={{ position: 'absolute', bottom: '2rem', right: '1.5rem' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #C1272D, transparent)' }}
        />
      </motion.div>
    </div>
  )
}

function SimulatorsTeaser() {
  const { t } = useLang()
  return (
    <section style={{ background: '#1C1C1E', padding: '6rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
            <img src={mahomesImg} alt="Simulator Bay" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', top: -12, left: -12, width: 50, height: 50, border: '2px solid #C1272D', borderRight: 'none', borderBottom: 'none' }} />
          <div style={{ position: 'absolute', bottom: -12, right: -12, width: 50, height: 50, border: '2px solid #C1272D', borderLeft: 'none', borderTop: 'none' }} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeUp}><SectionLabel>{t.simulatorsTeaser.eyebrow}</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
            {t.simulatorsTeaser.headline}
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {t.simulatorsTeaser.desc}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/simulateurs#packages" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03, background: '#fff', color: '#1C1C1E' }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '0.75rem 2rem', background: 'transparent', color: '#fff', border: '1px solid #fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
              >
                {t.simulatorsTeaser.cta} →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SportsBanner() {
  const { t } = useLang()
  return (
    <section style={{ background: '#C1272D', padding: '3.5rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#fff', letterSpacing: '0.02em', marginBottom: '0.75rem' }}
        >
          {t.sportsBanner.headline}
        </motion.h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
          {t.sportsBanner.sub}
        </p>
      </div>
    </section>
  )
}

function BarTeaser() {
  const { t } = useLang()
  return (
    <section style={{ background: '#242424', padding: '6rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ overflow: 'hidden', borderTop: '1px solid #2E2E2E', borderBottom: '1px solid #2E2E2E', padding: '0.75rem 0', marginBottom: '5rem' }}>
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
        >
          {[1, 2].map(n => (
            <span key={n} style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', letterSpacing: '0.15em', flexShrink: 0 }}>
              {t.barTeaser.marquee}
            </span>
          ))}
        </motion.div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeUp}><SectionLabel>{t.barTeaser.eyebrow}</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1, marginBottom: '1.5rem' }}>
            {t.barTeaser.headline}
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {t.barTeaser.desc}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '0.75rem 2rem', background: '#C1272D', color: '#fff', border: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                {t.barTeaser.cta} →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
        >
          <div style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
            <img src={barImg} alt="Bar Interior" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesGrid() {
  const { t } = useLang()
  return (
    <section style={{ background: '#1C1C1E', padding: 'clamp(4rem,8vw,6rem) 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}
        >
          <motion.div variants={fadeUp}><SectionLabel>{t.features.eyebrow}</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 1 }}>
            {t.features.headline}
          </motion.h2>
        </motion.div>

        {/* Grid — 1 col mobile / 2 col tablet / 3 col desktop — always 6 items, always even */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
          className="features-grid"
        >
          {t.features.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="features-card"
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#C1272D', opacity: 0 }} className="features-card-bar" />
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 3rem)', color: '#2E2E2E', lineHeight: 1, marginBottom: '1rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: #2E2E2E;
          border: 1px solid #2E2E2E;
        }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .features-card {
          background: #1C1C1E;
          padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem);
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
        }
        .features-card:hover {
          background: #242424;
        }
        .features-card:hover .features-card-bar {
          opacity: 1 !important;
          transition: opacity 0.25s;
        }
      `}</style>
    </section>
  )
}

function BookingCTA() {
  const { t } = useLang()
  return (
    <section style={{ background: '#C1272D', padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative' }}
      >
        <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#fff', lineHeight: 0.95, marginBottom: '1.5rem' }}>
          {t.simulateurs?.cta?.headline}
        </motion.h2>
        <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          {t.simulateurs?.cta?.sub}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link to="/simulateurs#booking-form" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, background: '#fff', color: '#C1272D' }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '1rem 3rem', background: 'transparent', color: '#fff', border: '2px solid #fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
            >
              {t.simulateurs?.cta?.btn}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function InfoStrip() {
  const { t } = useLang()
  const items = [
    { icon: '📍', text: t.infoStrip.address },
    { icon: '📞', text: t.infoStrip.phone },
    { icon: '🕐', text: t.infoStrip.hours },
    { icon: '🔞', text: t.infoStrip.age },
  ]
  return (
    <section style={{ background: '#161618', borderTop: '1px solid #2E2E2E', padding: '2rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
            <span style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'GolfoMax — Simulateurs de golf, bar & sports · Candiac QC'
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariant}
    >
      <VideoHero />
      <SimulatorsTeaser />
      <SportsBanner />
      <BarTeaser />
      <FeaturesGrid />
      <BookingCTA />
      <InfoStrip />
    </motion.div>
  )
}
