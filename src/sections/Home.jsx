import { useEffect, useState } from 'react'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolioData.js'

// Types and deletes each title in turn. Shows a static title for reduced motion.
function useTyping(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(words[0]); return }
    let w = 0, i = 0, del = false, t
    const step = () => {
      const word = words[w]
      i += del ? -1 : 1
      setText(word.slice(0, i))
      let wait = del ? 40 : 85
      if (!del && i === word.length) { del = true; wait = 1400 }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 350 }
      t = setTimeout(step, wait)
    }
    t = setTimeout(step, 600)
    return () => clearTimeout(t)
  }, [words])
  return text
}

export default function Home() {
  const typed = useTyping(profile.titles)
  return (
    <section id="home" className="home" aria-labelledby="home-title">
      <div className="home-inner">
        <p className="home-hello">Hello, I’m</p>
        <h1 id="home-title" className="home-name">{profile.name}</h1>
        <p className="home-role"><span>{typed}</span><i className="caret" aria-hidden="true" /></p>
        <p className="home-headline">{profile.headline}</p>
        <p className="home-intro">{profile.intro}</p>
        <div className="home-cta">
          <a href="#projects" className="btn btn-primary"><ArrowDown size={18} /> Explore my work</a>
          <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download={profile.resumeDownloadName} className="btn btn-ghost"><Download size={18} /> Download resume</a>
          <a href="#contact" className="btn btn-ghost"><Mail size={18} /> Contact me</a>
        </div>
      </div>
    </section>
  )
}
