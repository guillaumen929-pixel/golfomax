import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '../../context/LangContext'
import { navbarVariant, mobileMenuVariant } from '../../lib/animations'
import logo from '../../assets/GolfoMax Logo Transparent.png'

export default function Navbar() {
  const { t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const links = [
    { href: '/menu', label: t.nav.menu },
    { href: '/simulateurs', label: t.nav.simulateurs },
    { href: '/evenements', label: t.nav.evenements },
    { href: '/infos', label: t.nav.infos },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
        variants={navbarVariant}
        animate={scrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.3 }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <img src={logo} alt="GolfoMax" style={{ height: 48, width: 'auto' }} />
            </Link>

            {/* Desktop nav */}
            <div className="nav-desktop items-center" style={{ gap: '2.5rem' }}>
              {links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: pathname === link.href ? '#C1272D' : '#999',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = pathname === link.href ? '#C1272D' : '#999'}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-desktop items-center" style={{ gap: '1rem' }}>
              <button
                onClick={toggle}
                style={{
                  padding: '0.3rem 0.75rem',
                  border: '1px solid #2E2E2E',
                  background: 'none',
                  color: '#999',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#2E2E2E' }}
              >
                {t.nav.langToggle}
              </button>
              <Link to="/simulateurs#booking-form" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: '#C1272D',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {t.nav.book}
                </motion.button>
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="nav-mobile" style={{ gap: '0.75rem', alignItems: 'center' }}>
              <button
                onClick={toggle}
                style={{
                  padding: '0.25rem 0.625rem',
                  border: '1px solid #2E2E2E',
                  background: 'none',
                  color: '#999',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {t.nav.langToggle}
              </button>
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: '#1C1C1E', display: 'flex', flexDirection: 'column', paddingTop: '5.5rem', paddingLeft: '2rem', paddingRight: '2rem', overflowY: 'auto' }}
            variants={mobileMenuVariant}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.07 + 0.1 } }}
                >
                  <Link
                    to={link.href}
                    style={{
                      color: pathname === link.href ? '#C1272D' : '#fff',
                      fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
              <Link to="/simulateurs#booking-form" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#C1272D',
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                }}>
                  {t.nav.book}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
