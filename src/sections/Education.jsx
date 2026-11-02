import { GraduationCap, Award } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { education, stats } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-title">
      <Reveal><h2 id="edu-title" className="section-title">Education & achievements</h2></Reveal>

      <Reveal className="rank-banner">
        <Award size={34} aria-hidden="true" />
        <p><strong>4th Rank</strong> in CSE–Artificial Intelligence at Visvesvaraya Technological University (VTU)</p>
      </Reveal>

      <Reveal className="card edu-card" delay={80}>
        <GraduationCap size={26} aria-hidden="true" />
        <div>
          <h3>{education.degree}</h3>
          <p>{education.school} · Graduated {education.graduated}</p>
          <ul className="edu-list">{education.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
      </Reveal>

      <dl className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 80}>
            <dt>{s.label}</dt>
            <dd><CountUp {...s} /></dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
