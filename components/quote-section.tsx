'use client'

import { useReveal } from '@/hooks/use-reveal'

export function QuoteSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="quote" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.78 0.12 55 / 0.05) 0%, transparent 70%)',
        }}
      />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center reveal ${revealed ? 'revealed' : ''}`}
      >
        {/* Decorative lines */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="w-16 h-px" style={{ background: 'oklch(0.78 0.12 55 / 0.4)' }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="3" fill="oklch(0.78 0.12 55)" />
            <circle cx="8" cy="8" r="7" stroke="oklch(0.78 0.12 55 / 0.3)" strokeWidth="0.5" />
          </svg>
          <div className="w-16 h-px" style={{ background: 'oklch(0.78 0.12 55 / 0.4)' }} />
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance text-foreground/90 mb-8">
          &ldquo;Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.&rdquo;
        </blockquote>

        <cite className="text-muted-foreground text-sm tracking-widest uppercase not-italic">
          — Plato
        </cite>
      </div>
    </section>
  )
}
