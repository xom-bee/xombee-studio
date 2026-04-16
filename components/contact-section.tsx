'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@itsxombee',
    href: 'https://instagram.com/itsxombee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@itsxombee',
    href: 'https://tiktok.com/@itsxombee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 12a4 4 0 1 0 4 4V6a5 5 0 0 0 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Sangay Yoesel',
    href: 'https://www.linkedin.com/in/sangayyoesel/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@itsxombee',
    href: 'https://www.youtube.com/@itsxombee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    ),
  },
]

export function ContactSection() {
  const { ref, revealed } = useReveal()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 80%, oklch(0.78 0.12 55 / 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 text-center reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Get in Touch
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Let&apos;s build your <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>stage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Your sound deserves a visual identity that moves people. Let&apos;s create it together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'sangayyoesel@gmail.com', href: 'mailto:sangayyoesel@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+975 77287812', href: 'tel:+97577287812' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Thimphu, Bhutan', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/40 hover:border-primary/30 transition-all duration-300 group hover:bg-primary/5"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'oklch(0.78 0.12 55 / 0.1)', color: 'oklch(0.78 0.12 55)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Download CV / Resume */}
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Documents</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Resume', file: '/Resume-Sangay-Yoesel.pdf' },
                  { label: 'Curriculum Vitae', file: '/CV-Sangay-Yoesel.pdf' },
                ].map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.file}
                    download
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border/40 text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                    style={{
                      background: 'oklch(0.78 0.12 55 / 0.08)',
                      borderColor: 'oklch(0.78 0.12 55 / 0.3)',
                      color: 'oklch(0.78 0.12 55)',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.78 0.12 55 / 0.18)'
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px oklch(0.78 0.12 55 / 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.78 0.12 55 / 0.08)'
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
                    }}
                  >
                    <Download size={14} />
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Follow the work</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border/40 transition-all duration-300 group"
                    style={{
                      background: hovered === social.name ? 'oklch(0.78 0.12 55 / 0.08)' : 'oklch(0.09 0 0)',
                      borderColor: hovered === social.name ? 'oklch(0.78 0.12 55 / 0.4)' : undefined,
                      transform: hovered === social.name ? 'translateY(-2px)' : 'none',
                    }}
                    onMouseEnter={() => setHovered(social.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div
                      style={{
                        color: hovered === social.name ? 'oklch(0.78 0.12 55)' : 'oklch(0.55 0 0)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">{social.name}</p>
                      <p className="text-[10px] text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-2xl border border-border/40 p-8"
            style={{ background: 'oklch(0.09 0 0)' }}
          >
            {submitted ? (
              <div role="alert" aria-live="polite" className="flex flex-col items-center justify-center h-full py-12 text-center gap-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow"
                  style={{ background: 'oklch(0.78 0.12 55 / 0.15)', border: '1px solid oklch(0.78 0.12 55 / 0.5)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <polyline points="5,14 11,20 23,8" stroke="oklch(0.78 0.12 55)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Message received</h3>
                  <p className="text-muted-foreground">I&apos;ll be in touch soon. Your stage awaits.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div>
                  <label htmlFor="contact-name" className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="What do they call you?"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Where can I reach you?"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your sound, your vision, your world..."
                    required
                    aria-required="true"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'oklch(0.78 0.12 55)',
                    color: 'oklch(0.06 0 0)',
                    boxShadow: '0 0 30px oklch(0.78 0.12 55 / 0.3)',
                  }}
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
