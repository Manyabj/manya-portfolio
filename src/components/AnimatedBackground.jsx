import { useEffect, useRef } from 'react'

// Neural-network style constellation: maroon nodes drift, connect when close,
// and lean toward the cursor. Static when the user prefers reduced motion.
export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -9999, y: -9999 }
    let w, h, nodes = [], raf

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(80, (w * h) / 22000)) // fewer nodes on phones
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      if (!reduce) {
        for (const n of nodes) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y
          if (Math.hypot(dx, dy) < 160) { n.x += dx * 0.003; n.y += dy * 0.003 }
          n.x += n.vx; n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(176, 42, 66, ${0.22 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        ctx.fillStyle = 'rgba(214, 78, 104, 0.75)'
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onResize = () => { init(); if (reduce) draw() }
    init(); draw()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
      <canvas ref={canvasRef} />
    </div>
  )
}
