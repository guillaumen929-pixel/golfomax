import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

export default function HowItWorks() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.howItWorks.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.howItWorks.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative text-center md:text-left"
            >
              <div className="relative inline-flex mb-6">
                <span className="font-display text-7xl text-bg-elevated leading-none select-none">
                  {step.num}
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand rounded-full" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">{step.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
