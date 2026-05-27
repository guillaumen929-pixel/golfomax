import { motion } from 'framer-motion'
import { useLang } from '../../context/LangContext'
import { fadeUp, staggerContainer, viewport } from '../../lib/animations'
import SectionLabel from '../ui/SectionLabel'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const socials = [
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
]

export default function SocialLinks() {
  const { t } = useLang()

  return (
    <section className="section-padding bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{t.contact.social.title}</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center gap-4 mt-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center gap-3 border border-border px-6 py-4 text-text-secondary hover:text-brand hover:border-brand transition-colors duration-300 font-heading font-semibold text-sm tracking-wider"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
