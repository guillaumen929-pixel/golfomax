import { createContext, useContext, useState } from 'react'
import { en } from '../lang/en'
import { fr } from '../lang/fr'

const LangContext = createContext()
const langs = { en, fr }

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = langs[lang]
  const toggle = () => setLang(l => l === 'fr' ? 'en' : 'fr')
  return <LangContext.Provider value={{ t, lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
