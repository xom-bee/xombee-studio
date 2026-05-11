'use client'

import { useRef, useState, useEffect } from 'react'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { Card } from '@/components/ui/card'

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding the problem and user needs',
    floatDelay: '0s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <line x1="19.5" y1="19.5" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Wireframes',
    description: 'Structuring layout and user flow',
    floatDelay: '1.4s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="14" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="17" y="21" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'UI Design',
    description: 'Designing clean and modern interfaces',
    floatDelay: '2.8s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="11.5" y1="14" x2="14.5" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="20.5" y1="14" x2="17.5" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building responsive and functional interfaces',
    floatDelay: '4.2s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="10,10 4,16 10,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,10 28,16 22,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="19" y1="8" x2="13" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.14 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        background: 'transparent',
        position: 'relative',
        paddingTop: 'var(--section-padding)',
        paddingBottom: 'var(--section-padding)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes process-float {
          0%, 100% { transform: translateY(0px);  opacity: 0.38; }
          50%       { transform: translateY(-7px); opacity: 0.68; }
        }
        .process-icon-wrap {
          animation: process-float 5.5s ease-in-out infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .process-atmo { animation: none !important; }
          .process-icon-wrap { animation: none !important; }
        }
      `}</style>

      {/* Atmospheric system — architectural: ceiling-right source + floor-left fill + central breath */}

      {/* Right ambient — primary architectural source, like a high directional ceiling light */}
      <div
        className="process-atmo"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-8%',
          width: '52%',
          height: '75%',
          background: 'radial-gradient(ellipse at 60% 30%, rgba(230,161,90,0.026) 0%, rgba(230,161,90,0.010) 45%, transparent 72%)',
          pointerEvents: 'none',
          animation: 'section-breathe-b 34s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Bottom-left ambient — reflected fill from the floor, countering the ceiling source */}
      <div
        className="process-atmo"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0%',
          left: '-5%',
          width: '42%',
          height: '60%',
          background: 'radial-gradient(ellipse at 30% 70%, rgba(230,161,90,0.018) 0%, transparent 68%)',
          pointerEvents: 'none',
          animation: 'section-breathe-c 44s ease-in-out infinite 4s',
          willChange: 'transform, opacity',
        }}
      />

      {/* Central faint luminance — breathes slowly, pure spatial depth */}
      <div
        className="process-atmo"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(230,161,90,0.014) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'section-breathe-a 26s ease-in-out infinite 10s',
          willChange: 'opacity, transform',
        }}
      />

      <Container>

        {/* Header */}
        <div
          style={{
            marginBottom: 'clamp(28px, 4vw, 40px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s cubic-bezier(0.16, 1, 0.30, 1)',
          }}
        >
          <SectionLabel>My Process</SectionLabel>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}>
            How I work
          </h2>
        </div>

        {/* Cards grid — each card reveals with a sequenced delay */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '10px',
        }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 1.4s ${0.10 + i * 0.15}s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s ${0.10 + i * 0.15}s cubic-bezier(0.16, 1, 0.30, 1)`,
              }}
            >
              <Card
                hover
                surface="elevated"
                className="process-card shimmer-surface"
                style={{ padding: '24px 24px 52px', position: 'relative', overflow: 'hidden', height: '100%' }}
              >
                {/* Step label */}
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(230,161,90,0.55)',
                  marginBottom: '10px',
                }}>
                  Step {step.number}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: 'clamp(13px, 1.1vw, 14px)',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.70,
                }}>
                  {step.description}
                </p>

                {/* Floating icon — bottom left, slow breath */}
                <div
                  className="process-icon-wrap"
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    color: '#E6A15A',
                    animationDelay: step.floatDelay,
                  }}
                >
                  {step.icon}
                </div>
              </Card>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
