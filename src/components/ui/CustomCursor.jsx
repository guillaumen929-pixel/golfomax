import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId

    const lerp = 0.12

    function onMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    }

    function animate() {
      ringX += (mouseX - ringX) * lerp
      ringY += (mouseY - ringY) * lerp
      ring.style.transform = `translate(${ringX - 12}px, ${ringY - 12}px)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    function onEnterLink() {
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.borderColor = '#C1272D'
      ring.style.opacity = '0.8'
    }
    function onLeaveLink() {
      ring.style.width = '24px'
      ring.style.height = '24px'
      ring.style.borderColor = '#C1272D'
      ring.style.opacity = '0.6'
    }

    const targets = document.querySelectorAll('a, button, [role="button"]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      document.body.style.cursor = ''
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 24, height: 24,
          borderRadius: '50%',
          border: '1.5px solid #C1272D',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  )
}
