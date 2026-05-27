import { useLang } from '../../context/LangContext'

export default function AgeGate() {
  const { t } = useLang()

  return (
    <div className="bg-brand/10 border-b border-brand/20 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span className="w-5 h-5 rounded-full border border-brand flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-bold text-brand text-xs">18</span>
        </span>
        <p className="font-body text-text-secondary text-xs text-center">{t.bar.ageGate.text}</p>
      </div>
    </div>
  )
}
