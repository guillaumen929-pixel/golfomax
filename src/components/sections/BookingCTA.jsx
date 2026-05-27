import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import Button from '../ui/Button'

export default function BookingCTA() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Dark gradient edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-white leading-none mb-4"
          >
            {t.booking.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-white/75 text-lg mb-10 max-w-md mx-auto"
          >
            {t.booking.sub}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/simulateurs#booking-form">
              <Button variant="secondary" size="lg">{t.booking.cta}</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
