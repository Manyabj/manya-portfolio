import Reveal from '../components/Reveal.jsx'
import { ExternalLink } from 'lucide-react'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <Reveal><h2 id="exp-title" className="section-title">Experience</h2></Reveal>
      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.role + e.org} className="timeline-item" delay={i * 100}>
            <div className="card">
              <p className="timeline-period">{e.period}</p>
              <h3>{e.role}</h3>
              <p className="timeline-org">{e.org}, {e.mode}</p>
              <ul className="timeline-points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <ul className="tags">{e.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              {e.link && <a className="card-link" href={e.link} target="_blank" rel="noreferrer"><ExternalLink size={16} /> View internship certificate</a>}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
