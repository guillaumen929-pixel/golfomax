import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import logo from '../../assets/GolfoMax Logo Transparent.png'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  const { t } = useLang()

  const links = [
    { href: '/menu', label: t.nav.menu },
    { href: '/simulateurs', label: t.nav.simulateurs },
    { href: '/evenements', label: t.nav.evenements },
    { href: '/infos', label: t.nav.infos },
  ]

  return (
    <footer style={{ background: '#161618', borderTop: '1px solid #2E2E2E' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img src={logo} alt="GolfoMax" style={{ height: 44, width: 'auto' }} />
            </Link>
            <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#999'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>{t.footer.address}</p>
              <p style={{ color: '#999', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>{t.footer.phone}</p>
            </div>
            <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginTop: '1rem' }}>{t.footer.age}</p>
          </div>

          {/* Social */}
          <div>
            <p style={{ color: '#555', fontFamily: 'var(--font-heading)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Social
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#" aria-label="Instagram" style={{ width: 36, height: 36, border: '1px solid #2E2E2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C1272D'; e.currentTarget.style.borderColor = '#C1272D' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#2E2E2E' }}
              >
                <InstagramIcon size={16} />
              </a>
              <a href="#" aria-label="Facebook" style={{ width: 36, height: 36, border: '1px solid #2E2E2E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C1272D'; e.currentTarget.style.borderColor = '#C1272D' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = '#2E2E2E' }}
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #2E2E2E', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem' }}>{t.footer.rights}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="#" style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#999'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {t.footer.links.privacy}
            </Link>
            <Link to="#" style={{ color: '#555', fontFamily: 'var(--font-body)', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#999'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {t.footer.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
