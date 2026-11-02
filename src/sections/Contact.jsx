import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolioData.js'

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          _subject: form.subject || `Message from ${form.name} via portfolio`,
          message: form.message,
          _captcha: 'false',
          _template: 'table',
        }),
      })
      const data = await res.json().catch(() => ({}))
      const message = data.message || data.error?.message || ''
      if (/activat/i.test(message)) {
        setForm(emptyForm)
        setStatus('activate')
        return
      }
      const ok = data.success === true || data.success === 'true' || data.ok === true
      if (!res.ok || !ok) {
        throw new Error(message || 'Could not send the message.')
      }
      setForm(emptyForm)
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Could not send the message.')
    }
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
          {status === 'sent' || status === 'activate' ? (
            <div className="card contact-form" role="status">
              <p className="form-success">
                {status === 'activate'
                  ? `Check ${profile.email} for a FormSubmit email and click Activate Form once. After that, Send will deliver messages to your inbox.`
                  : 'Message sent. I’ll get back to you at the email you entered.'}
              </p>
              <button className="btn btn-ghost" type="button" onClick={() => setStatus('idle')}>
                Send another
              </button>
            </div>
          ) : (
            <form className="card contact-form" onSubmit={onSubmit}>
              <label>Name<input required name="name" value={form.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Email<input required name="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
              <label>Subject<input required name="subject" value={form.subject} onChange={set('subject')} /></label>
              <label>Message<textarea required name="message" rows="5" value={form.message} onChange={set('message')} /></label>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                <Send size={18} /> {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'error' && (
                <p className="form-error" role="alert">
                  {error} You can also email me directly at {profile.email}.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
