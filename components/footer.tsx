'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closingRef = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (closingRef.current) observer.observe(closingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0B0B0F', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      {/* Top decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.12 55 / 0.4), transparent)' }}
      />

      {/* Closing line */}
      <div style={{ textAlign: 'center', padding: 'clamp(48px, 7vw, 80px) 24px clamp(32px, 5vw, 56px)' }}>
        <p
          ref={closingRef}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.26)',
            fontFamily: 'serif',
            letterSpacing: '0.02em',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          Your story deserves a stage.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
                <polygon
                  points="40,8 70,24 70,56 40,72 10,56 10,24"
                  stroke="oklch(0.78 0.12 55)"
                  strokeWidth="1.5"
                  fill="oklch(0.78 0.12 55 / 0.1)"
                />
                <text x="40" y="47" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="20" fontWeight="700">
                  XB
                </text>
              </svg>
              <span className="font-serif text-2xl font-bold text-foreground">Xom Bee</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '320px', color: 'rgba(255,255,255,0.42)', marginBottom: '3px' }}>
              Designing identity for artists who want to be felt.
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.01em', marginBottom: '24px' }}>
              Sound has always deserved a face.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.28)', fontSize: '11px' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="5" cy="5" r="1.5" fill="currentColor" />
              </svg>
              Thimphu, Bhutan
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Work', href: '#portfolio' },
                { label: 'Process', href: '#process' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-left flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.28)', transition: 'color 0.25s ease', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'oklch(0.78 0.12 55)'
                    const line = e.currentTarget.querySelector('span') as HTMLElement
                    if (line) line.style.width = '16px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.28)'
                    const line = e.currentTarget.querySelector('span') as HTMLElement
                    if (line) line.style.width = '0px'
                  }}
                >
                  <span
                    className="w-0 h-px transition-all duration-300"
                    style={{ background: 'oklch(0.78 0.12 55)', flexShrink: 0 }}
                  />
                  {link.label}
                </button>
              ))}
              {[
                { label: 'Music', href: '/music' },
                { label: 'Lyrics', href: '/lyrics' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.28)', transition: 'color 0.25s ease', textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'oklch(0.78 0.12 55)'
                    const line = e.currentTarget.querySelector('span') as HTMLElement
                    if (line) line.style.width = '16px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.28)'
                    const line = e.currentTarget.querySelector('span') as HTMLElement
                    if (line) line.style.width = '0px'
                  }}
                >
                  <span
                    className="w-0 h-px transition-all duration-300"
                    style={{ background: 'oklch(0.78 0.12 55)', flexShrink: 0 }}
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.03)',
        }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)' }}>
            &copy; 2026 Xom Bee Studio
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.30)', fontStyle: 'italic', textAlign: 'center', letterSpacing: '0.04em' }}>
            &ldquo;Your sound deserves to be felt.&rdquo;
          </p>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px', justifySelf: 'end',
              fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              background: 'none', border: 'none', cursor: 'pointer',
              transition: 'color 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.60)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              const arrow = e.currentTarget.querySelector('svg') as SVGElement
              if (arrow) arrow.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.22)'
              e.currentTarget.style.transform = 'translateY(0)'
              const arrow = e.currentTarget.querySelector('svg') as SVGElement
              if (arrow) arrow.style.transform = 'translateY(0)'
            }}
          >
            <ArrowUp size={11} style={{ transition: 'transform 0.25s ease' }} />
            Top
          </button>
        </div>
      </div>
    </footer>
  )
}
