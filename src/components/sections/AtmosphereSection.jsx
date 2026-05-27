import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, fadeIn, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'
import PlaceholderImage from '../ui/PlaceholderImage'
import mahomesImg from '../../assets/Mahomes_Team-Full-Swing-gs.webp'
import barImg from '../../assets/Untitled design (3).webp'

export default function AtmosphereSection() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel>{t.atmosphere.sectionLabel}</SectionLabel>
          <h2 className="font-display text-display-md text-white max-w-lg">{t.atmosphere.title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          <motion.div variants={fadeIn} className="row-span-2">
            <div style={{ position: 'relative', paddingTop: 'calc(16/9 * 100%)', overflow: 'hidden', height: '100%' }}>
              <img src={barImg} alt="Bar Interior" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <div style={{ position: 'relative', paddingTop: 'calc(3/4 * 100%)', overflow: 'hidden' }}>
              <img src={mahomesImg} alt="Simulator Bay" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Drinks" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Group Play" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <PlaceholderImage ratio="4/3" label="Live Sports" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
