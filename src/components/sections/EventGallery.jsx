import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeIn, staggerContainer, viewport } from '../../lib/animations'
import PlaceholderImage from '../ui/PlaceholderImage'

export default function EventGallery() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <motion.div variants={fadeIn} className="col-span-2 row-span-2">
            <PlaceholderImage ratio="1/1" label="Corporate Event" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Stag Party" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Birthday" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Group Fun" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Team Building" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
