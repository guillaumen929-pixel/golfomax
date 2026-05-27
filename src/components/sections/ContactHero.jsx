import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer } from '../../lib/animations'

export default function ContactHero() {
  const { t } = useLang()
  const h = t.contact.hero

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="inline-block text-brand font-heading font-semibold text-sm tracking-[0.18em] uppercase mb-5">
            {h.eyebrow}
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-display-lg text-white leading-none mb-5">
            {h.headline}
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-text-secondary text-lg max-w-lg leading-relaxed">
            {h.sub}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
