import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function EventPackages() {
  const { t } = useLang()

  const scrollToForm = () => {
    document.getElementById('event-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.events.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.events.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.events.items.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              className="relative bg-bg-elevated border border-border p-8 hover:border-brand/30 transition-colors duration-300 flex flex-col group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <h3 className="font-heading font-bold text-white text-2xl mb-3">{pkg.name}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-6 flex-1">{pkg.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <Check size={13} className="text-brand flex-shrink-0" />
                    <span className="font-body text-text-secondary text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="md" onClick={scrollToForm} className="w-full">
                {t.events.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
