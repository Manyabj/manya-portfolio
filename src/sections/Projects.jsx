import { Github, ExternalLink } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Reveal><h2 id="projects-title" className="section-title">Projects</h2></Reveal>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.id} className={`project project-${p.id}`} delay={i * 90}>
            <div className="project-visual" aria-hidden="true"><span>{p.kind.split(' · ')[0]}</span></div>
            <div className="project-body">
              <p className="project-meta">{p.kind} — {p.period}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="project-features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="project-links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
