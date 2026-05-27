export default function Badge({ variant = 'red', children }) {
  const variants = {
    red: 'bg-brand text-white',
    dark: 'bg-bg-elevated text-text-secondary border border-border',
    outline: 'border border-brand text-brand',
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase rounded-sm ${variants[variant]}`}>
      {children}
    </span>
  )
}
