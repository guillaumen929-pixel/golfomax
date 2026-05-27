export default function SectionLabel({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      color: '#C1272D',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '0.7rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: '0.75rem',
    }}>
      {children}
    </span>
  )
}
