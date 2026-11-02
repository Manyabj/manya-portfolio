import { useEffect, useRef, useState } from 'react'

// Animates a verified number when it scrolls into view.
export default function CountUp({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(value); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now(), dur = 1400
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1)
        setN(value * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [value])
  return <span ref={ref}>{prefix}{n.toFixed(decimals)}{suffix}</span>
}
