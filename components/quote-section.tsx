'use client'

import { useEffect, useRef, useState } from 'react'

type TextLine = {
  text: string
  weight: 400 | 500 | 700
  opacity: number
  color?: string
  highlight?: boolean
  delay: number
}

type GapLine = {
  gap: 'xs' | 'small' | 'medium' | 'large'
}

type Line = TextLine | GapLine

const lines: Line[] = [
  { text: 'You release your music.', weight: 400, opacity: 0.38, delay: 0 },
  { gap: 'xs' },
  { text: 'People listen.',           weight: 400, opacity: 0.38, delay: 0.25 },

  { gap: 'small' },

  { text: 'But they move on.',        weight: 700, opacity: 1,    delay: 0.5 },

  { gap: 'medium' },

  { text: "They don't remember you.", weight: 700, opacity: 1, color: 'var(--color-gold)', highlight: true, delay: 0.95 },

  { gap: 'large' },

  { text: 'Your work exists.',              weight: 400, opacity: 0.38, delay: 1.2 },
  { gap: 'xs' },
  { text: 'But your identity does not.',    weight: 700, opacity: 1,    delay: 1.45 },
]

const GAP_SIZES = {
  xs:     'clamp(12px, 1.4vw, 18px)',
  small:  'clamp(32px, 4vw, 52px)',
  medium: 'clamp(52px, 6.5vw, 80px)',
  large:  'clamp(76px, 9.5vw, 112px)',
}

export function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--color-bg)',
        padding: 'clamp(80px, 10vw, 120px) clamp(28px, 10vw, 140px)',
      }}
    >
      <div style={{ maxWidth: '900px' }}>
        {lines.map((line, i) => {
          if ('gap' in line) {
            return <div key={i} style={{ height: GAP_SIZES[line.gap] }} />
          }

          return (
            <div
              key={i}
              style={{
                position: 'relative',
                fontSize: 'clamp(26px, 4vw, 54px)',
                fontWeight: line.weight,
                lineHeight: 1.2,
                color: line.color ?? '#FFFFFF',
                opacity: visible ? line.opacity : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 1.2s ${line.delay}s cubic-bezier(0.22, 1, 0.36, 1),
                             transform 1.2s ${line.delay}s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {line.text}
              {line.highlight && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-24px -32px',
                    background:
                      'radial-gradient(ellipse at 38% 52%, oklch(0.78 0.12 55 / 0.05) 0%, transparent 55%)',
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
