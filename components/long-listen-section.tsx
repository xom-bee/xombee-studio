'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'
import { SectionLabel } from '@/components/ui/section-label'

interface Phase {
  label: string
  body: ReactNode
  isThesis?: boolean
}

const phases: Phase[] = [
  {
    label: '01 — Heard',
    body: `We begin with a conversation that goes longer than you expect. I don't ask what you want. I ask what you've been trying to say. The first version of your site already lives in that conversation, before anything is drawn.`,
  },
  {
    label: '02 — Slow',
    body: `I make slowly. This is the part most people skip. We shape your visual identity together — not in pitch decks, but in moments. You'll know it when it lands. You won't have to be talked into it.`,
  },
  {
    label: '03 — Quiet',
    body: `I build the site in private and bring it to you when it's almost there. Nothing loud. No animations begging for attention. The work earns the room it sits in.`,
  },
  {
    label: '04 — Remembered',
    body: (
      <>
        When you launch, it doesn&apos;t feel like a launch. It feels like something that&apos;s been there all along,{' '}
        <span
          style={{
            color: 'rgba(248,232,206,0.96)',
            fontWeight: 500,
          }}
        >
          finally visible
        </span>
        . You&apos;ll send the link to one person first. You&apos;ll remember which one.
      </>
    ),
    isThesis: true,
  },
]

const EASING = 'cubic-bezier(0.16, 1, 0.30, 1)'
const REVEAL = `opacity 1.4s ${EASING}, transform 1.4s ${EASING}`

export function LongListenSection() {
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
      id="the-long-listen"
      aria-labelledby="long-listen-heading"
      style={{
        background: 'transparent',
        position: 'relative',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
        overflow: 'hidden',
      }}
    >
      {/* Atmospheric system — two restrained warm blobs */}

      {/* Lower-center warmth — the floor of the reading room */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: '20%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse 60% 55% at 50% 60%, rgba(230,161,90,0.024) 0%, rgba(230,161,90,0.008) 45%, transparent 72%)',
          pointerEvents: 'none',
          animation: 'section-breathe-a 34s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Upper-right halo — a single warm distant source */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-6%',
          right: '-4%',
          width: '46%',
          height: '60%',
          background: 'radial-gradient(ellipse 55% 60% at 60% 30%, rgba(230,161,90,0.018) 0%, transparent 68%)',
          pointerEvents: 'none',
          animation: 'section-breathe-b 48s ease-in-out infinite 9s',
          willChange: 'transform, opacity',
        }}
      />

      {/* Reading column — single column, centered, ~520px */}
      <div
        style={{
          position: 'relative',
          maxWidth: '520px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 32px)',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(22px)',
            transition: REVEAL,
          }}
        >
          <h2 id="long-listen-heading" style={{ margin: 0, lineHeight: 1, letterSpacing: 'normal' }}>
            <SectionLabel>The Long Listen</SectionLabel>
          </h2>
        </div>

        {/* Italic Cormorant intro — bridges from the hero thesis */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(20px, 2.2vw, 26px)',
            lineHeight: 1.55,
            color: 'rgba(255,247,235,0.78)',
            margin: '0 auto',
            maxWidth: '460px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(22px)',
            transition: `opacity 1.4s 0.20s ${EASING}, transform 1.4s 0.20s ${EASING}`,
          }}
        >
          Being heard takes a moment.
          <br />
          Being remembered takes care.
        </p>

        {/* The four phases */}
        <div style={{ marginTop: 'clamp(72px, 9vw, 112px)' }}>
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              style={{
                marginBottom: i < phases.length - 1 ? 'clamp(44px, 5.5vw, 68px)' : 0,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 1.4s ${0.45 + i * 0.30}s ${EASING}, transform 1.4s ${0.45 + i * 0.30}s ${EASING}`,
              }}
            >
              {/* Phase label */}
              <div
                className={phase.isThesis ? 'long-listen-thesis-label' : undefined}
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: phase.isThesis ? 'rgba(255,255,255,0.62)' : 'rgba(255,255,255,0.48)',
                  marginBottom: '20px',
                }}
              >
                {phase.label}
              </div>

              {/* Phase body */}
              <p
                style={{
                  fontSize: 'clamp(16px, 1.7vw, 19px)',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.78)',
                  margin: 0,
                  letterSpacing: '-0.005em',
                }}
              >
                {phase.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line — quiet thesis resolution */}
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            lineHeight: 1.6,
            color: 'rgba(255,247,235,0.55)',
            margin: 'clamp(48px, 6vw, 76px) auto 0',
            maxWidth: '420px',
            opacity: visible ? 1 : 0,
            transition: `opacity 1.4s ${0.45 + phases.length * 0.30 + 0.10}s ease-out`,
          }}
        >
          This is what it takes to be remembered.
        </p>
      </div>

      {/* Local styles — only the breathing thesis label */}
      <style>{`
        .long-listen-thesis-label {
          text-shadow: 0 0 24px rgba(230, 161, 90, 0.18);
          animation: cs-live-breathe 5.5s ease-in-out infinite;
          will-change: text-shadow;
        }
        @media (prefers-reduced-motion: reduce) {
          .long-listen-thesis-label { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
