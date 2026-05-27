import { motion } from 'framer-motion'
import { Target, Wine, Tv, Users } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

const icons = [Target, Wine, Tv, Users]

export default function FeaturesGrid() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.features.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.features.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.features.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative bg-bg-surface p-8 group hover:bg-bg-elevated transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-12 h-12 rounded-sm bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors duration-300">
                  <Icon size={22} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
