'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import Image from 'next/image'

const logos = [
  {
    id: 1,
    name: 'Druk Art Hub',
    category: 'Arts & Culture',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-kzYwulz7gYVoRQqBP1KgzXaxdJRlkp.png',
    dark: false,
  },
  {
    id: 2,
    name: 'Xom Bee Studio',
    category: 'Personal Brand',
    src: null,
    dark: false,
  },
  {
    id: 3,
    name: 'Scan2Dine',
    category: 'Food & Tech',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scan2Dine%20White-x3WNAwxVFNMeAQ9FTb4HtadYTVmS7R.png',
    dark: false,
  },
  {
    id: 4,
    name: 'No-Q',
    category: 'Healthcare',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/No%20Q%20White-6Po6wewd4f5Pu1PswooZ5bRDbvUYWc.png',
    dark: false,
  },
  {
    id: 5,
    name: 'Serkhai Gawa',
    category: 'Music Identity',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serkhai%20Gawa-kIxJZL1zDDc0SHHHT9XcJQnpki0nec.png',
    dark: false,
    objectFit: 'cover' as const,
  },
  {
    id: 6,
    name: 'Dasho',
    category: 'Trusted Digital Services',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dasho-whcxMkgP3NLY8B0iy8mhDDOTy50fRH.png',
    dark: false,
  },
]

// Fallback XB mark for Xom Bee Studio (no image provided)
function XBMark() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-20 h-20">
      <polygon points="60,10 102,34 102,86 60,110 18,86 18,34" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="oklch(0.78 0.12 55 / 0.08)" />
      <polygon points="60,25 88,40 88,70 60,85 32,70 32,40" stroke="oklch(0.78 0.12 55 / 0.4)" strokeWidth="0.5" fill="none" />
      <text x="60" y="68" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="20" fontWeight="700" fontFamily="serif">XB</text>
    </svg>
  )
}

export function LogoSection() {
  const { ref, revealed } = useReveal()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="logos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Visual Identity
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            Logos &amp; <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>Marks</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {logos.map((logo, i) => {
            const { ref: cardRef, revealed: cardRevealed } = useReveal()
            const isHovered = hoveredId === logo.id
            return (
              <div
                key={logo.id}
                ref={cardRef}
                className={`reveal ${cardRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
                onMouseEnter={() => setHoveredId(logo.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="relative rounded-2xl border border-border/40 overflow-hidden flex flex-col items-center gap-4 transition-all duration-500 cursor-default group"
                  style={{
                    background: isHovered ? 'oklch(0.78 0.12 55 / 0.06)' : 'oklch(0.09 0 0)',
                    borderColor: isHovered ? 'oklch(0.78 0.12 55 / 0.35)' : undefined,
                    boxShadow: isHovered ? '0 0 35px oklch(0.78 0.12 55 / 0.1)' : undefined,
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                  }}
                >
                  {/* Image area */}
                  <div className="w-full aspect-square relative flex items-center justify-center p-8">
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        loading="lazy"
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                        style={{
                          objectFit: logo.objectFit === 'cover' ? 'cover' : 'contain',
                        }}
                      />
                    ) : (
                      <div
                        className="transition-transform duration-500"
                        style={{ transform: isHovered ? 'scale(1.1) rotate(3deg)' : 'scale(1)' }}
                      >
                        <XBMark />
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className="w-full px-5 pb-5 text-center">
                    <p className="font-medium text-sm text-foreground">{logo.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{logo.category}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
