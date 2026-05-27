import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-brand fill-brand" />
      ))}
    </div>
  )
}

export default function ReviewsStrip() {
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
          <SectionLabel>{t.reviews.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white">{t.reviews.title}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.reviews.items.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-bg-surface border border-border p-7 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
              <StarRating count={review.rating} />
              <p className="font-body text-text-secondary text-sm leading-relaxed mt-4 mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-brand text-xs">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-heading font-semibold text-white text-sm">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews badge */}
        <motion.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex items-center gap-3 border border-border px-5 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} className="text-brand fill-brand" />)}
            </div>
            <span className="font-heading font-semibold text-white text-sm">5.0</span>
            <span className="text-text-muted font-body text-xs">Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
