import { motion } from 'framer-motion'

const styles = {
  primary: { background: '#C1272D', color: '#fff', border: 'none' },
  secondary: { background: 'transparent', color: '#fff', border: '1px solid #fff' },
  ghost: { background: 'transparent', color: '#C1272D', border: '1px solid #C1272D' },
}

const sizes = {
  sm: { padding: '0.4rem 1rem', fontSize: '0.75rem' },
  md: { padding: '0.6rem 1.5rem', fontSize: '0.85rem' },
  lg: { padding: '0.85rem 2rem', fontSize: '0.95rem' },
}

export default function Button({ variant = 'primary', size = 'md', children, onClick, type = 'button', style: extraStyle = {} }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        ...styles[variant],
        ...sizes[size],
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'background 0.2s, color 0.2s',
        ...extraStyle,
      }}
    >
      {children}
    </motion.button>
  )
}
