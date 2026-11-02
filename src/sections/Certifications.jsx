import Reveal from '../components/Reveal.jsx'
import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="cert-title">
      <Reveal><h2 id="cert-title" className="section-title">Certifications</h2></Reveal>
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Reveal as="article" key={c.name} className="card cert" delay={(i % 2) * 80}>
            <p className="cert-issuer">{c.issuer}, {c.year}</p>
            <h3>{c.name}</h3>
            <p>{c.note}</p>
            {c.link && <a className="card-link" href={c.link} target="_blank" rel="noreferrer"><ExternalLink size={16} /> View certificate</a>}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
