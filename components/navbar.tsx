'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const links = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Music', href: '/music' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const router = useRouter()

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/')) {
      router.push(href)
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-(--color-bg)/80 backdrop-blur-xl border-b border-white/4'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-7 h-7">
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
                <polygon
                  points="40,8 70,24 70,56 40,72 10,56 10,24"
                  stroke="var(--color-gold)"
                  strokeWidth="2"
                  fill="rgba(230, 161, 90, 0.08)"
                  className="transition-all duration-300 group-hover:fill-[rgba(230,161,90,0.2)]"
                />
                <text x="40" y="47" textAnchor="middle" fill="var(--color-gold)" fontSize="20" fontWeight="700">
                  XB
                </text>
              </svg>
            </div>
            <span
              className="font-sans font-semibold tracking-wide text-sm hidden sm:block transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Xom Bee Studio
            </span>
          </button>

          {/* Desktop nav — wider spacing, subtler */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative group transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--color-gold)' }}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex items-center px-4 py-2 rounded-full text-[11px] tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              color: 'var(--color-gold)',
              border: '1px solid rgba(230, 161, 90, 0.25)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(230, 161, 90, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(230, 161, 90, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(230, 161, 90, 0.25)'
            }}
          >
            Let&apos;s Talk
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              style={{ background: 'rgba(255,255,255,0.6)' }}
            />
            <span
              className={`w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: 'rgba(255,255,255,0.6)' }}
            />
            <span
              className={`w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              style={{ background: 'rgba(255,255,255,0.6)' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(11, 11, 15, 0.97)', backdropFilter: 'blur(20px)' }}
      >
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="font-sans font-bold text-white transition-colors duration-300 hover:text-(--color-gold)"
            style={{ fontSize: '36px', letterSpacing: '-0.01em' }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
