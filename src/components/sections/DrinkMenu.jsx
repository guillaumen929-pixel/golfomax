import { motion } from 'framer-motion'
import { Wine, Beer, GlassWater, Coffee } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

const icons = [Beer, Wine, GlassWater, Coffee]

export default function DrinkMenu() {
  const { t } = useLang()
  const d = t.bar.drinks

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SectionLabel>{d.sectionLabel}</SectionLabel>
            <h2 className="font-display text-display-md text-white whitespace-pre-line">{d.title}</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {d.categories.map((cat, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  className="border border-border bg-bg-elevated p-6 hover:border-brand/40 transition-colors duration-300 group"
                >
                  <Icon size={20} className="text-brand mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-heading font-bold text-white text-base mb-2">{cat.title}</h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">{cat.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
