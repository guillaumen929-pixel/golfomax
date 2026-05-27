import { motion } from 'framer-motion'
import { UtensilsCrossed } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { slideLeft, slideRight, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Badge from '../ui/Badge'

export default function FoodPolicy() {
  const { t } = useLang()
  const f = t.bar.food

  return (
    <section className="section-padding bg-bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SectionLabel>{f.sectionLabel}</SectionLabel>
            <h2 className="font-display text-display-md text-white mb-6">{f.title}</h2>
            <p className="font-body text-text-secondary leading-relaxed mb-6">{f.desc}</p>
            <Badge variant="outline">{f.badge}</Badge>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex items-center justify-center"
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <div className="absolute inset-0 bg-brand/10 rounded-full blur-3xl" />
              <div className="relative w-full h-full border border-brand/20 rounded-full flex items-center justify-center">
                <UtensilsCrossed size={64} className="text-brand/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
