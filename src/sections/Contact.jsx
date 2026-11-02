import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolioData.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: this opens the visitor's email app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <Reveal><h2 id="contact-title" className="section-title">Let’s work together</h2></Reveal>
      <div className="contact-grid">
        <Reveal className="contact-info">
          <p>I’m open to roles in AI, machine learning, data analytics and software development. Recruiters and collaborators are welcome to reach out.</p>
          <ul>
            <li><a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a></li>
            <li><a href={`tel:${profile.phone.replace(/-/g, '')}`}><Phone size={18} /> {profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> linkedin.com/in/manya-b-j</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> github.com/Manyabj</a></li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <form className="card contact-form" onSubmit={onSubmit}>
            <label>Name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
            <label>Subject<input required value={form.subject} onChange={set('subject')} /></label>
            <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} /></label>
            <button className="btn btn-primary" type="submit"><Send size={18} /> Open in email app</button>
            <p className="form-note">This site has no server, so sending opens your email app with the message ready to send to {profile.email}.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
