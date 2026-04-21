'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'

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
    featured: true,
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

function XBMark({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: size, height: size }}>
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
    <section id="logos" className="py-24 px-6" style={{ background: '#0B0B0F' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-10 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Visual Identity
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            Marks that define{' '}
            <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>identity</span>
          </h2>
          <p style={{
            marginTop: '16px',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            color: 'rgba(255,255,255,0.30)',
            fontWeight: 400,
            letterSpacing: '0.01em',
            lineHeight: 1.6,
            maxWidth: '600px',
          }}>
            Minimal marks built to carry meaning, memory, and identity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {logos.map((logo, i) => {
            const { ref: cardRef, revealed: cardRevealed } = useReveal()
            const isHovered = hoveredId === logo.id
            const isFeatured = 'featured' in logo && logo.featured

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
                  className="relative rounded-2xl border border-border/40 overflow-hidden flex flex-col items-center transition-all duration-500 cursor-default group"
                  style={{
                    background: isFeatured
                      ? (isHovered ? 'oklch(0.78 0.12 55 / 0.09)' : 'oklch(0.78 0.12 55 / 0.04)')
                      : (isHovered ? 'oklch(0.78 0.12 55 / 0.06)' : 'oklch(0.09 0 0)'),
                    borderColor: isFeatured
                      ? (isHovered ? 'oklch(0.78 0.12 55 / 0.50)' : 'oklch(0.78 0.12 55 / 0.22)')
                      : (isHovered ? 'oklch(0.78 0.12 55 / 0.35)' : undefined),
                    boxShadow: isFeatured
                      ? (isHovered
                          ? '0 0 24px oklch(0.78 0.12 55 / 0.07), 0 0 0 1px oklch(0.78 0.12 55 / 0.15)'
                          : '0 0 16px oklch(0.78 0.12 55 / 0.04), 0 0 0 1px oklch(0.78 0.12 55 / 0.08)')
                      : (isHovered ? '0 0 20px oklch(0.78 0.12 55 / 0.06)' : undefined),
                    transform: isFeatured
                      ? (isHovered ? 'translateY(-6px) scale(1.02)' : 'scale(1.02)')
                      : (isHovered ? 'translateY(-4px)' : 'none'),
                  }}
                >
                  {/* Image area */}
                  <div
                    className="w-full relative flex items-center justify-center"
                    style={{
                      aspectRatio: '1 / 1',
                      padding: isFeatured ? '28px' : '32px',
                    }}
                  >
                    {isFeatured && (
                      <div style={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '55%', height: '55%',
                        background: 'radial-gradient(ellipse at 50% 50%, oklch(0.78 0.12 55 / 0.07) 0%, transparent 70%)',
                        filter: 'blur(8px)',
                        pointerEvents: 'none',
                        transition: 'opacity 0.5s ease',
                        opacity: isHovered ? 1 : 0.6,
                      }} />
                    )}

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
                        style={{
                          transform: isHovered ? 'scale(1.1) rotate(3deg)' : 'scale(1)',
                          position: 'relative', zIndex: 1,
                        }}
                      >
                        <XBMark size={isFeatured ? 120 : 80} />
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className="w-full text-center" style={{ padding: '0 20px 22px' }}>
                    <p style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      color: isFeatured ? 'oklch(0.88 0.06 55)' : 'rgba(255,255,255,0.85)',
                      marginBottom: '5px',
                    }}>
                      {logo.name}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: isFeatured ? 'oklch(0.78 0.12 55 / 0.65)' : 'rgba(255,255,255,0.28)',
                    }}>
                      {logo.category}
                    </p>
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
