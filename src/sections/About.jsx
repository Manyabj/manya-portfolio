import Reveal from '../components/Reveal.jsx'
import { aboutPoints, profile } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <Reveal><h2 id="about-title" className="section-title">About me</h2></Reveal>
      <div className="about-grid">
        <Reveal className="about-text">
          <p>{profile.intro}</p>
          <p>I enjoy turning raw data into working models and clear dashboards, and I’ve recently moved into Generative AI and workflow automation with n8n. I’m passionate about problem-solving in dynamic, fast-paced environments.</p>
        </Reveal>
        <div className="about-cards">
          {aboutPoints.map((p, i) => (
            <Reveal key={p.title} className="card" delay={i * 80}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
