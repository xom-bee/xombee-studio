'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Content ──────────────────────────────────────────────────────────────────
// Three thematic entries framed around what artists gain, not what tools are used.
// Tools appear only as a muted footnote — never a primary column.

const capabilities = [
  {
    id:    '01',
    title: 'Identity Systems',
    body:  "Who you are needs to be visible before anyone speaks. I design identity systems — marks, palettes, typography, voice — that hold an artist's character with clarity. Not decoration. A foundation that keeps you recognisable across every surface.",
    tools: 'Brand Identity  ·  Visual Design  ·  Figma',
    // Atmospheric signature: warm amber from the upper-left, like light catching a mark
    atmoA:    { top: '-40%', left: '-8%', width: '70%', height: '145%' },
    atmoB:    { bottom: '-20%', right: '-6%', width: '40%', height: '85%' },
    edgeGrad: 'linear-gradient(to right, rgba(230,161,90,0.048) 0%, transparent 38%)',
  },
  {
    id:    '02',
    title: 'Presence & Interface',
    body:  "A digital presence is not a portfolio page. It is the space where your audience arrives and immediately understands something true about you. I design and build those spaces — responsive, quiet, and functionally invisible so the work stays central.",
    tools: 'UI/UX Design  ·  Frontend Development  ·  Next.js',
    // Atmospheric signature: warm source from the upper-right, like a screen casting warmth
    atmoA:    { top: '0%', right: '-10%', width: '55%', height: '130%' },
    atmoB:    { bottom: '-18%', left: '-4%', width: '44%', height: '72%' },
    edgeGrad: 'linear-gradient(to left, rgba(230,161,90,0.040) 0%, transparent 42%)',
  },
  {
    id:    '03',
    title: 'Made to Be Remembered',
    body:  "People don't remember features. They remember how something made them feel. Every decision — the spacing, the color, the motion, the silence — is a deliberate emotional choice. The design should feel like yours before anyone reads your name.",
    tools: 'Visual Hierarchy  ·  Motion  ·  Storytelling',
    // Atmospheric signature: floor warmth rising, like a stage spotlight from below
    atmoA:    { bottom: '-30%', left: '16%', width: '68%', height: '115%' },
    atmoB:    { top: '-12%', right: '-3%', width: '36%', height: '68%' },
    edgeGrad: 'linear-gradient(to top, rgba(230,161,90,0.052) 0%, transparent 38%)',
  },
]

// ─── Individual panel — owns its own scroll-reveal ────────────────────────────

function CapabilityPanel({
  cap,
  index,
}: {
  cap: typeof capabilities[0]
  index: number
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.10 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 1.4s ${0.06 + index * 0.20}s cubic-bezier(0.16, 1, 0.30, 1),
                     transform 1.4s ${0.06 + index * 0.20}s cubic-bezier(0.16, 1, 0.30, 1)`,
      }}
    >
      <div className="cap-panel">

        {/* ── Surface layers (back → front) ───────────────────────────── */}

        {/* Top-edge surface highlight — the panel face catching ambient light */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.09) 25%, rgba(255,255,255,0.075) 75%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Atmospheric orb A — primary, directionally unique per capability */}
        <div
          aria-hidden="true"
          className="cap-atmo-primary"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.060) 0%, rgba(230,161,90,0.018) 44%, transparent 68%)',
            filter: 'blur(52px)',
            ...cap.atmoA,
          }}
        />

        {/* Atmospheric orb B — secondary, counter-positioned */}
        <div
          aria-hidden="true"
          className="cap-atmo-secondary"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.036) 0%, transparent 62%)',
            filter: 'blur(64px)',
            ...cap.atmoB,
          }}
        />

        {/* Directional edge light — unique per panel, very restrained */}
        <div
          aria-hidden="true"
          className="cap-edge-light"
          style={{
            position: 'absolute', inset: 0,
            background: cap.edgeGrad,
            pointerEvents: 'none',
          }}
        />

        {/* Inner vignette — frames the light, grounds the surface */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 95% 88% at 38% 52%, transparent 28%, rgba(6,6,10,0.44) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Shimmer band — sweeps on hover, consistent with portfolio interaction language */}
        <div
          aria-hidden="true"
          className="cap-shimmer"
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, transparent 28%, rgba(230,161,90,0.040) 50%, transparent 72%)',
            transform: 'translateX(-100%) skewX(-12deg)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* ── Typography content ────────────────────────────────────────── */}
        <div style={{ position: 'relative', zIndex: 2 }}>

          {/* Scene index — cinematic scene marker, not a list counter */}
          <span
            className="cap-index"
            aria-hidden="true"
            style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: 'rgba(230,161,90,0.38)',
              marginBottom: 'clamp(20px, 2.5vw, 26px)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {cap.id}
          </span>

          {/* Title — stage headline */}
          <h3
            className="cap-title"
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: '-0.026em',
              color: 'rgba(255,255,255,0.90)',
              marginBottom: 'clamp(22px, 2.8vw, 32px)',
              maxWidth: '700px',
            }}
          >
            {cap.title}
          </h3>

          {/* Body — editorial measure, generous leading */}
          <p
            className="cap-body"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              lineHeight: 1.80,
              color: 'rgba(255,255,255,0.68)',
              maxWidth: '560px',
              marginBottom: 'clamp(30px, 3.5vw, 44px)',
            }}
          >
            {cap.body}
          </p>

          {/* Tools footnote — quietest layer */}
          <p
            className="cap-tools"
            style={{
              fontSize: '11px',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.60)',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {cap.tools}
          </p>

        </div>
      </div>
    </div>
  )
}

// ─── Section header — scroll reveal ─────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 'clamp(40px, 5.5vw, 60px)',
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(22px)',
        transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s cubic-bezier(0.16, 1, 0.30, 1)',
      }}
    >
      <span style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#E6A15A',
        display: 'block',
        marginBottom: '20px',
      }}>
        What I Create
      </span>
      <p style={{
        fontSize: 'clamp(13px, 1.3vw, 15px)',
        color: 'rgba(255,255,255,0.48)',
        lineHeight: 1.75,
        maxWidth: '400px',
      }}>
        Three disciplines. One aim: to make artists seen, understood, and remembered.
      </p>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        background:    'transparent',
        position:      'relative',
        overflow:      'hidden',
        paddingTop:    'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(64px, 8vw, 96px)',
      }}
    >
      {/* ── All cinematic hover behaviour — no useState, no re-renders ───── */}
      <style>{`

        /* ── Panel surface ─────────────────────────────────────────────── */
        .cap-panel {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(
            158deg,
            rgba(255,255,255,0.027) 0%,
            rgba(255,255,255,0.016) 55%,
            rgba(255,255,255,0.021) 100%
          );
          padding: clamp(44px, 5.5vw, 68px) clamp(36px, 5vw, 60px) clamp(48px, 6vw, 72px);
          cursor: default;
          will-change: transform, box-shadow;
          transition:
            transform      0.80s cubic-bezier(0.16, 1, 0.30, 1),
            box-shadow     0.80s cubic-bezier(0.16, 1, 0.30, 1),
            border-color   0.80s cubic-bezier(0.16, 1, 0.30, 1);
          box-shadow:
            0 2px  10px rgba(0, 0, 0, 0.30),
            0 14px 44px rgba(0, 0, 0, 0.28),
            0 36px 80px rgba(0, 0, 0, 0.20),
            inset 0 1px 0 rgba(255, 255, 255, 0.042);
        }

        /* Panel hover — slow, heavy cinematic elevation */
        .cap-panel:hover {
          transform:    translateY(-8px) scale(1.004);
          border-color: rgba(230, 161, 90, 0.11);
          box-shadow:
            0 8px  28px rgba(0, 0, 0, 0.46),
            0 32px 80px rgba(0, 0, 0, 0.54),
            0 72px 140px rgba(0, 0, 0, 0.32),
            0 0 0 1px rgba(230, 161, 90, 0.07),
            0 0 90px rgba(230, 161, 90, 0.028),
            inset 0 1px 0 rgba(255, 255, 255, 0.072);
        }

        /* ── Atmospheric orbs — lift on hover ──────────────────────────── */
        .cap-atmo-primary {
          opacity: 0.72;
          transition: opacity 0.80s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-atmo-primary { opacity: 1.0; }

        .cap-atmo-secondary {
          opacity: 0.50;
          transition: opacity 0.80s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-atmo-secondary { opacity: 0.82; }

        /* ── Edge light — gently deepens on hover ──────────────────────── */
        .cap-edge-light {
          opacity: 0.80;
          transition: opacity 0.80s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-edge-light { opacity: 1.0; }

        /* ── Shimmer — fires once on hover enter ───────────────────────── */
        .cap-panel:hover .cap-shimmer {
          animation: shimmer-sweep 1.8s cubic-bezier(0.16, 1, 0.30, 1) forwards;
        }

        /* ── Typography luminance lifts ────────────────────────────────── */
        .cap-index {
          transition: color 0.75s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-index {
          color: rgba(230, 161, 90, 0.72) !important;
        }

        .cap-title {
          transition: color 0.75s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-title {
          color: rgba(255, 255, 255, 1.0) !important;
        }

        .cap-body {
          transition: color 0.75s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-body {
          color: rgba(255, 255, 255, 0.88) !important;
        }

        .cap-tools {
          transition: color 0.75s cubic-bezier(0.16, 1, 0.30, 1);
        }
        .cap-panel:hover .cap-tools {
          color: rgba(255, 255, 255, 0.50) !important;
        }

        /* ── Reduced motion ────────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .cap-panel {
            transition: none !important;
            will-change: auto;
          }
          .cap-panel:hover { transform: none !important; }
          .cap-atmo-primary,
          .cap-atmo-secondary,
          .cap-edge-light  { transition: none !important; }
          .cap-panel:hover .cap-shimmer { animation: none !important; }
          .cap-index, .cap-title, .cap-body, .cap-tools { transition: none !important; }
        }

      `}</style>

      {/* ── Section-level atmospheric depth ──────────────────────────────── */}

      {/* Top spatial bracket — faint warmth above the panels */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '35%',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,161,90,0.018) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'section-breathe-a 30s ease-in-out infinite',
        }}
      />

      {/* Bottom spatial bracket — quiet floor warmth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '30%',
          background: 'radial-gradient(ellipse 68% 48% at 50% 100%, rgba(230,161,90,0.014) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'section-breathe-b 40s ease-in-out infinite 10s',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <SectionHeader />

        {/* ── Three cinematic panels ──────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 20px)' }}>
          {capabilities.map((cap, i) => (
            <CapabilityPanel key={cap.id} cap={cap} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
