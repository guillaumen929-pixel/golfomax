export default function PlaceholderImage({ ratio = '16/9', label = '' }) {
  const [w, h] = ratio.split('/').map(Number)
  const paddingTop = `${(h / w) * 100}%`
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop, background: '#242424', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, #242424 25%, #2e2e2e 50%, #242424 75%)',
        backgroundSize: '200% auto',
        animation: 'shimmer 2s linear infinite',
      }} />
      {label && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            color: '#555',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>{label}</span>
        </div>
      )}
    </div>
  )
}
