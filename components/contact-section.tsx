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
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })

    const data = await res.json()
    setSending(false)

    if (!res.ok) {
      setError(data.error ?? 'Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" style={{ background: '#0B0B0F' }}>
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
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            Let&apos;s build your <span style={{ color: 'oklch(0.74 0.10 55)', textShadow: '0 0 16px oklch(0.78 0.12 55 / 0.18)' }}>stage</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.38)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.75, textAlign: 'center' }}>
            Your sound deserves a visual identity that moves people. Let&apos;s create it together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* 1. Contact */}
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '14px' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { icon: <Mail size={14} />, label: 'Email', value: 'sangayyoesel@gmail.com', href: 'mailto:sangayyoesel@gmail.com', note: 'Open for freelance and collaborations' },
                  { icon: <Phone size={14} />, label: 'Phone', value: '+975 77287812', href: 'tel:+97577287812' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 py-2 transition-all duration-300 group"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <div className="transition-all duration-300" style={{ color: 'rgba(255,255,255,0.25)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'oklch(0.78 0.12 55)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)' }}
                    >{item.icon}</div>
                    <div>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', marginBottom: '2px' }}>{item.label}</p>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.78)' }}>{item.value}</p>
                      {'note' in item && item.note && (
                        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.22)', marginTop: '2px' }}>{item.note}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Location */}
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '14px' }}>Location</p>
              <div className="flex items-center gap-3 py-2">
                <div style={{ color: 'rgba(255,255,255,0.25)' }}><MapPin size={14} /></div>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>Thimphu, Bhutan</p>
              </div>
            </div>

            {/* 3. Documents */}
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '14px' }}>Documents</p>
              <div style={{ display: 'flex' }}>
                {[
                  { label: 'Resume', file: '/Resume-Sangay-Yoesel.pdf' },
                ].map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.file}
                    download
                    className="flex items-center justify-center gap-2 rounded-xl border font-medium transition-all duration-300"
                    style={{
                      background: 'oklch(0.78 0.12 55 / 0.06)',
                      borderColor: 'oklch(0.78 0.12 55 / 0.20)',
                      color: 'oklch(0.78 0.12 55)',
                      fontSize: '12px',
                      padding: '8px 20px',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.78 0.12 55 / 0.12)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.78 0.12 55 / 0.35)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.78 0.12 55 / 0.06)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(0.78 0.12 55 / 0.20)'
                    }}
                  >
                    <Download size={12} />
                    {doc.label}
                  </a>
                ))}
              </div>
            </div>

            {/* 4. Social */}
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '14px' }}>Social</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      background: hovered === social.name ? 'rgba(255,255,255,0.03)' : 'transparent',
                      transform: hovered === social.name ? 'translateY(-1px)' : 'none',
                    }}
                    onMouseEnter={() => setHovered(social.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div style={{
                      width: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: hovered === social.name ? 'oklch(0.78 0.12 55)' : 'rgba(255,255,255,0.28)',
                      transition: 'color 0.3s',
                      flexShrink: 0,
                    }}>
                      {social.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.68)', lineHeight: 1.3 }}>{social.name}</p>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.3 }}>{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact form */}
          <div
            className="rounded-2xl p-5 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}
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
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', message: '' })
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1px solid oklch(0.78 0.12 55 / 0.5)',
                    color: 'oklch(0.78 0.12 55)',
                    background: 'oklch(0.78 0.12 55 / 0.08)',
                  }}
                >
                  <Send size={12} />
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} aria-label="Contact form">
                <div>
                  <label htmlFor="contact-name" style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', display: 'block', marginBottom: '10px' }}>Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="What do they call you?"
                    required
                    aria-required="true"
                    className="w-full text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors"
                    style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '12px', padding: '14px 18px', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', display: 'block', marginBottom: '10px' }}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Where can I reach you?"
                    required
                    aria-required="true"
                    className="w-full text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors"
                    style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '12px', padding: '14px 18px', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', display: 'block', marginBottom: '10px' }}>Message</label>
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your sound, your vision, your world..."
                    required
                    aria-required="true"
                    rows={5}
                    className="w-full text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors resize-none"
                    style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '12px', padding: '14px 18px', fontSize: '14px' }}
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-medium text-sm tracking-widest uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'oklch(0.76 0.11 55)',
                    color: 'oklch(0.06 0 0)',
                    boxShadow: '0 4px 20px oklch(0.78 0.12 55 / 0.18)',
                    transition: 'background 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.80 0.12 55)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px oklch(0.78 0.12 55 / 0.28)'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.76 0.11 55)'
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px oklch(0.78 0.12 55 / 0.18)'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                  }}
                >
                  <Send size={14} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                <p style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.22)', marginTop: '8px' }}>
                  Usually replies within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
