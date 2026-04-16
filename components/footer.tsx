'use client'

import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/30 overflow-hidden">
      {/* Top decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.12 55 / 0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
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
            <p
              className="text-sm leading-relaxed max-w-sm mb-6"
              style={{ color: 'oklch(0.55 0 0)' }}
            >
              Designing identity for artists who want to be felt.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="oklch(0.78 0.12 55 / 0.6)" strokeWidth="0.8" />
                <circle cx="5" cy="5" r="1.5" fill="oklch(0.78 0.12 55)" />
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
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-foreground text-left transition-colors duration-200 group flex items-center gap-2"
                >
                  <span
                    className="w-0 h-px group-hover:w-4 transition-all duration-300"
                    style={{ background: 'oklch(0.78 0.12 55)' }}
                  />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/20">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-muted-foreground text-xs">
              &copy; 2026 Xom Bee Studio. All rights reserved.
            </p>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <p className="text-muted-foreground text-xs italic">
              &ldquo;Your sound deserves to be felt.&rdquo;
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300 group text-xs"
          >
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
