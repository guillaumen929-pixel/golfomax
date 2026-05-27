import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer } from '../../lib/animations'
import Button from '../ui/Button'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern" style={{ position: 'absolute', inset: 0 }} />

      {/* Red radial glows */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"
        style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(193,39,45,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand/6 rounded-full blur-[100px] pointer-events-none"
        style={{ position: 'absolute', top: '33%', right: '25%', width: 288, height: 288, background: 'radial-gradient(ellipse, rgba(193,39,45,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}
      />

      {/* Golf ball arc SVG — position absolute so it never affects document flow */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M -80 720 Q 360 80 780 280 Q 1080 420 1520 160"
          stroke="rgba(193,39,45,0.2)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: 'easeOut', delay: 0.6 }}
        />
        <motion.circle
          cx="780" cy="280" r="5"
          fill="#C1272D"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.4, 1, 0] }}
          transition={{ delay: 2.8, duration: 1.2, times: [0, 0.3, 0.7, 1] }}
        />
        <motion.path
          d="M 200 800 Q 600 200 1000 400 Q 1200 500 1600 350"
          stroke="rgba(193,39,45,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: 'easeOut', delay: 1 }}
        />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full"
        style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '7rem', paddingBottom: '5rem', boxSizing: 'border-box' }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-brand font-heading font-semibold text-sm tracking-[0.18em] uppercase mb-6"
            style={{ color: '#C1272D', display: 'block', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.875rem', fontWeight: 600 }}
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl text-white whitespace-pre-line leading-none mb-6"
            style={{ color: '#fff', fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.95, letterSpacing: '0.05em', whiteSpace: 'pre-line', marginBottom: '1.5rem' }}
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-text-secondary text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
            style={{ color: '#999', fontSize: '1.125rem', maxWidth: 512, marginBottom: '2.5rem', lineHeight: 1.6 }}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 items-start" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-start' }}>
            <Link to="/simulators">
              <Button variant="primary" size="lg">{t.hero.cta}</Button>
            </Link>
            <div className="flex items-center gap-2.5 sm:pt-3" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingTop: '0.75rem' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" style={{ width: 6, height: 6, borderRadius: '50%', background: '#C1272D', flexShrink: 0 }} />
              <span className="text-text-muted font-body text-sm" style={{ color: '#555', fontSize: '0.875rem' }}>{t.hero.ctaSub}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-3 gap-6 max-w-xs border-t border-border pt-8"
          style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 320, borderTop: '1px solid #2E2E2E', paddingTop: '2rem' }}
        >
          {t.simulator.stats.map(stat => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="font-display text-3xl text-brand" style={{ fontSize: '1.875rem', color: '#C1272D', lineHeight: 1 }}>{stat.value}</div>
              <div className="font-body text-text-muted text-xs mt-0.5 leading-tight" style={{ color: '#555', fontSize: '0.75rem', marginTop: 2, lineHeight: 1.3 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-brand to-transparent mx-auto"
          style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, #C1272D, transparent)', margin: '0 auto' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
        />
      </motion.div>
    </section>
  )
}
