import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a href="#home" className={`to-top ${show ? 'show' : ''}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <ArrowUp size={20} />
    </a>
  )
}
