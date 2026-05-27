import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, slideLeft, slideRight, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

export default function MapSection() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.contact.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.contact.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative w-full h-72 lg:h-96 border border-border overflow-hidden">
              <iframe
                title="GolfoMax location"
                src="https://maps.google.com/maps?q=Candiac,+Quebec,+Canada&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-border" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex gap-4">
              <MapPin size={18} className="text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-1">Adresse</p>
                <p className="font-body text-text-secondary text-sm">{t.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={18} className="text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-1">Téléphone</p>
                <p className="font-body text-text-secondary text-sm">{t.contact.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={18} className="text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-1">Email</p>
                <p className="font-body text-text-secondary text-sm">{t.contact.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={18} className="text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-3">{t.contact.hours.title}</p>
                <div className="space-y-1.5">
                  {t.contact.hours.rows.map(row => (
                    <div key={row.day} className="flex justify-between gap-4">
                      <span className="font-body text-text-muted text-xs">{row.day}</span>
                      <span className="font-body text-text-secondary text-xs whitespace-nowrap">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
