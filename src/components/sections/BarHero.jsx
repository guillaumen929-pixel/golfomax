import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer } from '../../lib/animations'
import Badge from '../ui/Badge'

export default function BarHero() {
  const { t } = useLang()
  const h = t.bar.hero

  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-brand/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-5">
            <Badge variant="red">{t.bar.ageGate.text.split('—')[0].trim()}</Badge>
          </motion.div>
          <motion.span variants={fadeUp} className="inline-block text-brand font-heading font-semibold text-sm tracking-[0.18em] uppercase mb-5">
            {h.eyebrow}
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-display-lg text-white whitespace-pre-line leading-none mb-5">
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
