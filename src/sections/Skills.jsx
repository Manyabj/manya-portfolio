import Reveal from '../components/Reveal.jsx'
import { skillGroups } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Reveal><h2 id="skills-title" className="section-title">Skills</h2></Reveal>
      <div className="skills-grid">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} className="card skill-card" delay={(i % 3) * 80}>
            <h3>{g.title}</h3>
            <ul className="tags">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
