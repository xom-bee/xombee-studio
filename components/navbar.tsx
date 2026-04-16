'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8">
              <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
                <polygon
                  points="40,8 70,24 70,56 40,72 10,56 10,24"
                  stroke="oklch(0.78 0.12 55)"
                  strokeWidth="2"
                  fill="oklch(0.78 0.12 55 / 0.1)"
                  className="transition-all duration-300 group-hover:fill-[oklch(0.78_0.12_55_/_0.25)]"
                />
                <text x="40" y="47" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="20" fontWeight="700">
                  XB
                </text>
              </svg>
            </div>
            <span className="font-serif font-bold text-foreground tracking-wide text-sm hidden sm:block">
              Xom Bee Studio
            </span>
          </button>

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'oklch(0.78 0.12 55)' }}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 glow-border hover:bg-primary/10"
            style={{ color: 'oklch(0.78 0.12 55)', borderColor: 'oklch(0.78 0.12 55 / 0.3)' }}
          >
            Let&apos;s Talk
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span className={`w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="font-serif text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
