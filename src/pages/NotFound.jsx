import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { pageTransitionVariant } from '../lib/animations'

export default function NotFound() {
  const { t } = useLang()

  useEffect(() => {
    document.title = 'GolfoMax — 404'
  }, [])

  return (
    <motion.div
      initial="initial" animate="animate" exit="exit" variants={pageTransitionVariant}
      style={{ minHeight: '100vh', background: '#1C1C1E', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 16rem)', color: '#2E2E2E', lineHeight: 1, marginBottom: 0 }}
        >
          {t.notFound.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '1.1rem', marginBottom: '2.5rem' }}
        >
          {t.notFound.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '0.9rem 2.5rem', background: '#C1272D', color: '#fff', border: 'none', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer' }}
            >
              {t.notFound.cta}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
