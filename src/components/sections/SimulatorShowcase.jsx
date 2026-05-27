import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { slideLeft, slideRight, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import PlaceholderImage from '../ui/PlaceholderImage'
import Button from '../ui/Button'
import mahomesImg from '../../assets/Mahomes_Team-Full-Swing-gs.jpg'

function Counter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numeric = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || !numeric) return
    const duration = 1600
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numeric))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(numeric)
    }
    requestAnimationFrame(tick)
  }, [inView, numeric])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-display-md text-brand leading-none">
        {numeric ? count : value}{numeric ? suffix : ''}
      </div>
      <div className="font-body text-text-muted text-sm mt-2">{label}</div>
    </div>
  )
}

export default function SimulatorShowcase() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SectionLabel>{t.simulator.sectionLabel}</SectionLabel>
            <h2 className="font-display text-display-md text-white mb-6">{t.simulator.title}</h2>
            <p className="font-body text-text-secondary leading-relaxed mb-10">{t.simulator.desc}</p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mb-10">
              {t.simulator.stats.map(stat => (
                <Counter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>

            <Link to="/simulators">
              <Button variant="ghost" size="md">{t.booking.cta}</Button>
            </Link>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="absolute -inset-6 bg-brand/5 rounded-sm blur-3xl" />
            <div className="relative border border-border">
              <img src={mahomesImg} alt="Simulator Bay" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* Accent line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand/40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
