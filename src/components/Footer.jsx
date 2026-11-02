import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
    </footer>
  )
}
