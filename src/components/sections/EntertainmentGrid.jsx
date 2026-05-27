import { motion } from 'framer-motion'
import { Tv, Circle, Dice5, Ticket, UtensilsCrossed } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Badge from '../ui/Badge'

const icons = [Tv, Circle, Dice5, Ticket, UtensilsCrossed]

export default function EntertainmentGrid() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.entertainment.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.entertainment.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.entertainment.items.map((item, i) => {
            const Icon = icons[i]
            const isLottery = i === 3
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-bg-surface border border-border p-6 text-center hover:border-brand/40 transition-colors duration-300 group relative"
              >
                {isLottery && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="red">18+</Badge>
                  </div>
                )}
                <div className="w-12 h-12 rounded-sm bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors duration-300">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="font-body text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
