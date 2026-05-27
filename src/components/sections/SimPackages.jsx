import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function SimPackages() {
  const { t } = useLang()

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
          <SectionLabel>{t.packages.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.packages.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.packages.items.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              className={`relative flex flex-col border p-8 ${
                pkg.featured
                  ? 'bg-bg-elevated border-brand shadow-brand'
                  : 'bg-bg-elevated border-border'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="red">Popular</Badge>
                </div>
              )}
              {pkg.featured && <div className="absolute top-0 left-0 right-0 h-px bg-brand" />}

              <div className="mb-6">
                <p className="font-heading font-semibold text-text-secondary text-sm tracking-widest uppercase mb-2">{pkg.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-white">{pkg.price}</span>
                  <span className="font-body text-text-muted text-sm">{pkg.unit}</span>
                </div>
                <p className="font-body text-text-secondary text-sm mt-3">{pkg.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <Check size={14} className="text-brand flex-shrink-0" />
                    <span className="font-body text-text-secondary text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="#booking-form">
                <Button
                  variant={pkg.featured ? 'primary' : 'ghost'}
                  size="md"
                  className="w-full"
                >
                  {t.booking.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
