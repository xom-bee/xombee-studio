'use client'

import { useReveal } from '@/hooks/use-reveal'

export function MoodboardSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="moodboard" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-12 reveal ${revealed ? 'revealed' : ''}`}>
          <span
            className="text-xs tracking-widest uppercase mb-4 block"
            style={{ color: 'oklch(0.78 0.12 55)' }}
          >
            Design Direction
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            The <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>Moodboard</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
            The visual language, colour palette, typography, and cinematic references that define Xom Bee Studio&apos;s creative identity.
          </p>
        </div>

        {/* Moodboard image */}
        <div
          className={`reveal ${revealed ? 'revealed' : ''} rounded-3xl overflow-hidden border border-border/40 transition-all duration-700 hover:border-[oklch(0.78_0.12_55_/_0.35)] hover:shadow-[0_0_60px_oklch(0.78_0.12_55_/_0.12)]`}
          style={{ transitionDelay: '0.15s' }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moodboard-8JZr1acc0Ewfj6X2DuEQvDxIZBHZ8z.png"
            alt="Xom Bee Studio Moodboard — Atmospheric Palette, Colour Palette, Cinematic Visuals, Typography Pillars, Font Pairings, and Design Mockups"
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}
