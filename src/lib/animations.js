export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const scaleUp = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
}

export const navbarVariant = {
  top: {
    backgroundColor: 'rgba(28, 28, 30, 0)',
    borderBottomColor: 'rgba(46, 46, 46, 0)',
  },
  scrolled: {
    backgroundColor: 'rgba(28, 28, 30, 0.96)',
    borderBottomColor: 'rgba(46, 46, 46, 1)',
  }
}

export const mobileMenuVariant = {
  closed: { opacity: 0, x: '100%' },
  open: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } }
}

export const pageTransitionVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }
}
