import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

export function initLenis() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  function raf(time) {
    lenisInstance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export function scrollToTopInstant() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo(0, 0)
  }
}

export function useLenisInit() {
  useEffect(() => {
    initLenis()
    return () => {
      if (lenisInstance) {
        lenisInstance.destroy()
        lenisInstance = null
      }
    }
  }, [])
}
