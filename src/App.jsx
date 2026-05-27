import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Simulateurs from './pages/Simulateurs'
import Evenements from './pages/Evenements'
import Infos from './pages/Infos'
import NotFound from './pages/NotFound'
import { useLenisInit, scrollToTopInstant } from './lib/useLenis'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) scrollToTopInstant()
  }, [pathname, hash])
  return null
}

export default function App() {
  const location = useLocation()
  useLenisInit()

  return (
    <div style={{ minHeight: '100vh', background: '#1C1C1E', fontFamily: 'var(--font-body)' }}>
      {/* <CustomCursor /> */}
      <Navbar />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/simulateurs" element={<Simulateurs />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
