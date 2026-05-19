'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY > 60
      setScrolled(prev => (prev === s ? prev : s))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu: focus trap + Escape-to-close + focus restoration.
  // Runs only while the menu is open, so closed-state renders cost nothing.
  useEffect(() => {
    if (!menuOpen) return
    const menuEl = menuRef.current
    if (!menuEl) return

    // Remember what had focus (the hamburger trigger) to restore on close.
    const trigger = document.activeElement as HTMLElement | null

    const focusable = () =>
      Array.from(
        menuEl.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      )

    // Move focus into the menu on the next tick — after the open state has
    // committed so the items are focusable.
    const focusTimer = window.setTimeout(() => focusable()[0]?.focus(), 0)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      const items = focusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      // Wrap the Tab cycle at the edges (and pull focus back if it ever
      // escapes the menu), so keyboard users stay within the open overlay.
      if (e.shiftKey && (active === first || !menuEl.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (active === last || !menuEl.contains(active))) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // Lock background scroll while the full-screen menu is open.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      trigger?.focus?.()
    }
  }, [menuOpen])

  const handleLogoClick = () => {
    setMenuOpen(false)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/')) {
      router.push(href)
      return
    }
    if (pathname !== '/') {
      router.push(`/${href}`)
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={handleLogoClick}
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
                <text x="40" y="47" textAnchor="middle" fill="var(--color-gold)" fontSize="18" fontWeight="700" letterSpacing="2">
                  SY
                </text>
              </svg>
            </div>
            <span
              className="font-serif font-bold tracking-[0.12em] text-sm hidden sm:block transition-opacity duration-300 group-hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.88)' }}
            >
              Yoesel
            </span>
          </button>

          {/* Desktop nav — wider spacing, subtler */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-12">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative group transition-colors duration-300"
                  style={{
                    color: active ? 'var(--color-gold)' : 'rgba(255,255,255,0.55)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.92)' }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ background: 'var(--color-gold)' }}
                  />
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex"
          >
            Let&apos;s Talk
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
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
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(11, 11, 15, 0.97)' }}
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
        <Button
          variant="ghost"
          onClick={() => scrollTo('#contact')}
          style={{ marginTop: '8px' }}
        >
          Let&apos;s Talk
        </Button>
      </div>
    </>
  )
}
