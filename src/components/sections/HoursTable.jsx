import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

export default function HoursTable() {
  const { t } = useLang()
  const h = t.contact.hours

  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.contact.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white mb-10">{h.title}</h2>

          <div className="border border-border divide-y divide-border">
            {h.rows.map((row, i) => (
              <div
                key={row.day}
                className={`flex justify-between items-center px-6 py-4 ${
                  i === 0 ? '' : ''
                } hover:bg-bg-surface transition-colors`}
              >
                <span className="font-heading font-semibold text-white text-sm">{row.day}</span>
                <span className="font-body text-text-secondary text-sm">{row.hours}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
