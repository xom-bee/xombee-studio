'use client'

import { useState, useEffect } from 'react'
import { useReveal } from '@/hooks/use-reveal'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Before design, we understand you.\nYour sound. Your story. Your silence.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="8" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2" fill="oklch(0.78 0.12 55)" />
        <line x1="16" y1="2" x2="16" y2="8" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="16" x2="8" y2="16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="30" y2="16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Feel',
    description: 'We sit with your music.\nWe absorb what makes your art ache.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 12 C8 8 12 5 16 5 C20 5 24 8 24 12 L24 18 C24 22 20 26 16 26" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="20" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Shape',
    description: 'Many paths. One direction.\nWe find what resonates and commit.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <line x1="6" y1="26" x2="26" y2="6" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="16,6 26,6 26,16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="24" r="3" stroke="oklch(0.78 0.12 55)" strokeWidth="1" fill="oklch(0.78 0.12 55 / 0.2)" />
        <circle cx="24" cy="8" r="3" fill="oklch(0.78 0.12 55)" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Build',
    description: 'The invisible becomes visible.\nColor, form, and type shaped by your truth.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 26 L12 20 L18 24 L26 10" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="10" r="3" fill="oklch(0.78 0.12 55)" />
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="oklch(0.78 0.12 55 / 0.2)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Not finished. Still alive.\nA system that grows with your music.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <polyline points="6,16 13,23 26,9" stroke="oklch(0.78 0.12 55)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="13" stroke="oklch(0.78 0.12 55 / 0.3)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  const { ref, revealed } = useReveal()
  const [activeStep, setActiveStep] = useState(0)
  const [displayStep, setDisplayStep] = useState(0)
  const [cardVisible, setCardVisible] = useState(true)

  function changeStep(i: number) {
    if (i === activeStep) return
    setCardVisible(false)
    setTimeout(() => {
      setDisplayStep(i)
      setActiveStep(i)
      setCardVisible(true)
    }, 280)
  }

  // dot position: percentage along the line (10% → 90% of container)
  const dotPercent = 10 + (activeStep / (steps.length - 1)) * 80

  return (
    <section
      id="process"
      style={{
        background: '#0B0B0F',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${revealed ? 'revealed' : ''}`}
          style={{ marginBottom: 'clamp(48px, 7vw, 80px)', textAlign: 'center' }}
        >
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'oklch(0.78 0.12 55)',
            display: 'block',
            marginBottom: '16px',
          }}>
            My Process
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            From Silence to{' '}
            <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>Identity</span>
          </h2>
          <p style={{
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.75,
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            How identity takes shape through understanding, direction, and creation.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {/* Step indicators */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '48px', position: 'relative' }}>

            {/* Background line */}
            <div style={{
              position: 'absolute',
              top: '27px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            {/* Glowing progress dot */}
            <div style={{
              position: 'absolute',
              top: '23px',
              left: `${dotPercent}%`,
              transform: 'translateX(-50%)',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: 'oklch(0.78 0.12 55)',
              boxShadow: '0 0 8px oklch(0.78 0.12 55 / 0.9), 0 0 20px oklch(0.78 0.12 55 / 0.5)',
              pointerEvents: 'none',
              transition: 'left 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              zIndex: 2,
            }} />

            {steps.map((step, i) => {
              const isActive = activeStep === i
              const isPast = activeStep > i

              return (
                <div key={step.number} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
                  <button
                    onClick={() => changeStep(i)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '14px',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                      opacity: isActive ? 1 : (isPast ? 0.45 : 0.22),
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <div style={{
                      width: '56px', height: '56px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${isActive ? 'oklch(0.78 0.12 55 / 0.9)' : 'rgba(255,255,255,0.07)'}`,
                      background: isActive ? 'oklch(0.78 0.12 55 / 0.12)' : 'rgba(11,11,15,1)',
                      boxShadow: isActive
                        ? '0 0 24px oklch(0.78 0.12 55 / 0.35), 0 0 48px oklch(0.78 0.12 55 / 0.12), inset 0 0 12px oklch(0.78 0.12 55 / 0.08)'
                        : 'none',
                      transition: 'all 0.4s ease',
                      position: 'relative', zIndex: 1,
                    }}>
                      {step.icon}
                    </div>
                    <span style={{
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: isActive ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.35)',
                      transition: 'color 0.4s ease',
                    }}>
                      {step.title}
                    </span>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Detail card — fades + slides on step change */}
          <div style={{
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.04)',
            padding: 'clamp(40px, 5vw, 60px)',
            background: 'rgba(255,255,255,0.015)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.32s ease, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px' }}>
              <div style={{
                fontSize: 'clamp(64px, 7vw, 96px)',
                fontWeight: 700,
                lineHeight: 1,
                opacity: 0.05,
                color: 'oklch(0.78 0.12 55)',
                flexShrink: 0,
                fontFamily: 'serif',
                userSelect: 'none',
              }}>
                {steps[displayStep].number}
              </div>
              <div>
                <h3 style={{
                  fontSize: 'clamp(22px, 2.5vw, 30px)',
                  fontWeight: 700,
                  marginBottom: '24px',
                  color: '#F4F4F4',
                }}>
                  {steps[displayStep].title}
                </h3>
                <p style={{
                  fontSize: 'clamp(15px, 1.4vw, 18px)',
                  color: 'rgba(255,255,255,0.52)',
                  lineHeight: 1.9,
                  whiteSpace: 'pre-line',
                  maxWidth: '520px',
                }}>
                  {steps[displayStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
