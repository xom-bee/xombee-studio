'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'

// ─── Project data ──────────────────────────────────────────────────────────────
//
// Selected Work — a curated four-project sequence.
//   01 introduce   → Xom Bee Official    (artistic presence)
//   02 deepen      → Druk Art Hub        (cultural responsibility)
//   03 tighten     → Scan2Dine           (engineered restraint)
//   04 resolve     → Q-Less              (calm under uncertainty)
//
// Layout alternates per row to break template symmetry while preserving
// the locked visual system. Mobile always stacks text-first via flex-wrap
// row-reverse semantics.

const projects = [
  {
    id: 'xom-bee',
    title: 'Xom Bee Official',
    category: 'UI/UX Design · Frontend Development',
    accent: '#C8884A',
    preLine: 'Design and code. End to end.',
    shortDesc: 'I designed and built an artist platform around emotional presence instead of promotion.',
    caseStudyHref: '/work/xom-bee',
    image: '/images/xombee.png',
    imagePosition: 'center center',
    ongoing: true,
  },
  {
    id: 'druk-art-hub',
    title: 'Druk Art Hub',
    category: 'UI/UX Design · Branding',
    accent: '#C8884A',
    preLine: 'Identity, system, frontend.',
    shortDesc: 'I built a digital identity system that protects Bhutanese artistry online.',
    caseStudyHref: '/work/druk-art-hub',
    image: '/images/druk-art-hub.png',
    imagePosition: '72% center',
    ongoing: true,
  },
  {
    id: 'scan2dine',
    title: 'Scan2Dine',
    category: 'UI/UX Design · Frontend Development',
    accent: '#C8884A',
    preLine: 'For the table, not the desktop.',
    shortDesc: 'I designed an ordering interface for decisions made under pressure.',
    caseStudyHref: '/work/scan2dine',
    image: '/images/scan2dine-1.png',
    imagePosition: 'center center',
    ongoing: false,
  },
  {
    id: 'q-less',
    title: 'Q-Less',
    category: 'UI/UX Design · Frontend Development',
    accent: '#C8884A',
    preLine: 'For the wait, not the dashboard.',
    shortDesc: 'I designed a queue interface that makes the wait feel known, not endured.',
    caseStudyHref: '/work/q-less',
    image: '/images/q-less-1.png',
    imagePosition: 'center center',
    ongoing: false,
  },
]

// ─── Pacing variants ───────────────────────────────────────────────────────────
// Subtle padding variation per row creates introduce → deepen → tighten → resolve.
// Differences are felt, not seen — under 12px at any breakpoint.

const pacingByIndex = [
  // 01 introduce — standard cadence
  'clamp(48px, 7vw, 80px) 0',
  // 02 deepen — slightly more breath above; eye slows
  'clamp(56px, 7.6vw, 88px) 0 clamp(48px, 7vw, 80px)',
  // 03 tighten — standard; pace returns
  'clamp(48px, 7vw, 80px) 0',
  // 04 resolve — extra breath above and below; final exhale
  'clamp(56px, 7.6vw, 88px) 0 clamp(56px, 7.6vw, 88px)',
]

// ─── Project row ───────────────────────────────────────────────────────────────

function ProjectRow({
  project,
  reverse,
  padding,
}: {
  project: typeof projects[0]
  reverse: boolean
  padding: string
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const tiltState = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 })
  const [visible, setVisible] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 }
    )
    if (rowRef.current) observer.observe(rowRef.current)
    return () => observer.disconnect()
  }, [])

  // Mouse-based perspective tilt — slow lerp, max 4deg, cinematic not reactive
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const MAX_TILT = 4   // degrees
    const LERP = 0.06    // lower = slower, heavier feel
    let tiltSettled = true

    const startTick = () => {
      if (tiltSettled) { tiltSettled = false; rafRef.current = requestAnimationFrame(tick) }
    }

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width  - 0.5
      const cy = (e.clientY - rect.top)  / rect.height - 0.5
      tiltState.current.tx = -cy * MAX_TILT
      tiltState.current.ty =  cx * MAX_TILT
      startTick()
    }
    const onLeave = () => {
      tiltState.current.tx = 0
      tiltState.current.ty = 0
      startTick()
    }

    const tick = () => {
      const s = tiltState.current
      const dx = s.tx - s.cx
      const dy = s.ty - s.cy
      s.cx += dx * LERP
      s.cy += dy * LERP
      if (tiltRef.current) {
        tiltRef.current.style.transform =
          `perspective(900px) rotateX(${s.cx.toFixed(3)}deg) rotateY(${s.cy.toFixed(3)}deg)`
      }
      if (Math.abs(dx) < 0.005 && Math.abs(dy) < 0.005) { tiltSettled = true; return }
      rafRef.current = requestAnimationFrame(tick)
    }

    card.addEventListener('mousemove', onMove, { passive: true })
    card.addEventListener('mouseleave', onLeave)

    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const href = project.caseStudyHref ?? '/work'

  return (
    <div
      ref={rowRef}
      style={{
        // row-reverse + flex-wrap behavior:
        //   desktop → text and visual swap sides
        //   mobile  → items wrap onto separate lines in DOM order; text always lands first
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: 'clamp(40px, 6vw, 96px)',
        padding,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        flexWrap: 'wrap',
      }}
    >
      {/* Text side */}
      <div
        style={{
          flex: '1 1 320px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1.4s 0s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s 0s cubic-bezier(0.16, 1, 0.30, 1)',
        }}
      >
        {/* Ongoing badge */}
        {project.ongoing && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(200,136,74,0.80)',
            border: '1px solid rgba(200,136,74,0.28)',
            borderRadius: '999px',
            padding: '7px 16px',
            marginBottom: '20px',
            boxShadow: '0 0 12px rgba(200,136,74,0.10), inset 0 0 8px rgba(200,136,74,0.06)',
          }}>
            <span style={{
              width: '5px', height: '5px',
              borderRadius: '50%',
              background: '#C8884A',
              display: 'inline-block',
              boxShadow: '0 0 6px #C8884A',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            Ongoing
          </div>
        )}

        {/* Editorial pre-line */}
        {project.preLine && (
          <p style={{
            fontSize: 'clamp(11px, 1vw, 13px)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.52)',
            marginBottom: '10px',
            lineHeight: 1.5,
          }}>
            {project.preLine}
          </p>
        )}

        {/* Title — navigates directly to case study */}
        <Link
          href={href}
          onMouseEnter={(e) => {
            const h3 = e.currentTarget.querySelector('h3') as HTMLElement
            if (h3) h3.style.color = 'rgba(255,255,255,0.76)'
          }}
          onMouseLeave={(e) => {
            const h3 = e.currentTarget.querySelector('h3') as HTMLElement
            if (h3) h3.style.color = '#FFFFFF'
          }}
          style={{
            textDecoration: 'none',
            display: 'block',
            marginBottom: '24px',
          }}
        >
          <h3 style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            transition: 'color 0.40s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(14px, 1.3vw, 16px)',
          fontWeight: 400,
          lineHeight: 1.75,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: '380px',
          marginBottom: '26px',
        }}>
          {project.shortDesc}
        </p>

        {/* Role — editorial metadata strip with hairline above for visual anchor */}
        <div style={{
          paddingTop: '14px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '32px',
          maxWidth: '380px',
          display: 'flex',
          alignItems: 'baseline',
          gap: '12px',
        }}>
          <span style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.62)',
            flexShrink: 0,
          }}>
            Role
          </span>
          <span style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: '#E6A15A',
          }}>
            {project.category}
          </span>
        </div>

        {/* CTA — navigates directly to case study */}
        <Link
          href={href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            textDecoration: 'none',
            transition: 'gap 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.gap = '16px'
            const arrow = e.currentTarget.querySelector('.cta-view-arrow') as HTMLElement
            if (arrow) { arrow.style.animation = 'none'; arrow.style.transform = 'translateX(4px)' }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.gap = '10px'
            const arrow = e.currentTarget.querySelector('.cta-view-arrow') as HTMLElement
            if (arrow) { arrow.style.animation = ''; arrow.style.transform = '' }
          }}
        >
          Enter Case Study
          <span className="cta-view-arrow">→</span>
        </Link>
      </div>

      {/* Visual side — perspective tilt wrapper (preserves 3D on outer, overflow:hidden on inner) */}
      <div
        style={{
          flex: '1 1 340px',
          perspective: '900px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px) scale(0.96)',
          transition: 'opacity 1.4s 0.24s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s 0.24s cubic-bezier(0.16, 1, 0.30, 1)',
        }}
      >
      {/* Inner — receives perspective tilt; also the shadow+border host */}
      <div
        ref={tiltRef}
        style={{
          width: '100%',
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.65s cubic-bezier(0.16, 1, 0.30, 1)',
          boxShadow: imgHovered
            ? `0 48px 110px rgba(0,0,0,0.80), 0 0 90px ${project.accent}3A, 0 0 0 1px rgba(255,255,255,0.10)`
            : `0 36px 90px rgba(0,0,0,0.72), 0 0 80px ${project.accent}28, 0 0 0 1px rgba(255,255,255,0.05)`,
          borderRadius: '20px',
        }}
      >
      <Link
        ref={cardRef}
        href={href}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        style={{
          display: 'block',
          aspectRatio: '4 / 3',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          background: '#06060A',
          cursor: 'pointer',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
          style={{
            objectFit: 'cover',
            objectPosition: project.imagePosition ?? 'center center',
            filter: imgHovered ? 'brightness(0.88) contrast(0.94)' : 'brightness(0.78) contrast(0.92)',
            transform: imgHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
            transformOrigin: 'center center',
          }}
        />
        {/* Inner dark shadow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(6,6,10,0.28) 0%, transparent 30%, transparent 70%, rgba(6,6,10,0.38) 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.52) 100%)`,
          pointerEvents: 'none',
        }} />
        {/* Accent wash */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `${project.accent}0A`,
          pointerEvents: 'none',
        }} />
        {/* Noise texture — cinematic grain */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.28, mixBlendMode: 'overlay', pointerEvents: 'none' }}>
          <filter id={`img-grain-${project.id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#img-grain-${project.id})`} />
        </svg>
        {/* Cinematic edge vignette — frames the image like a stage spotlight */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 88% 85% at 50% 48%, transparent 30%, rgba(6,6,10,0.62) 100%)',
          pointerEvents: 'none',
        }} />
        {/* Ambient amber edge light — directional warmth from top-left */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(230,161,90,0.048) 0%, transparent 42%)',
          pointerEvents: 'none',
        }} />
      </Link>
      </div>{/* /tilt inner */}
      </div>{/* /perspective wrapper */}
    </div>
  )
}

// ─── Section header ────────────────────────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        paddingBottom: 'clamp(16px, 3vw, 32px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: 'opacity 1.4s 0s cubic-bezier(0.16, 1, 0.30, 1), transform 1.4s 0s cubic-bezier(0.16, 1, 0.30, 1)',
      }}
    >
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        marginBottom: '16px',
      }}>
        Selected Work
      </h2>
      <p style={{
        fontSize: 'clamp(13px, 1.2vw, 15px)',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.48)',
        letterSpacing: '0.01em',
        lineHeight: 1.65,
      }}>
        I build presence through design, motion, and identity.
      </p>
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        background: 'transparent',
        position: 'relative',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(40px, 6vw, 72px)',
        overflow: 'hidden',
      }}
    >
      {/* Gallery atmosphere system — floating luminance with independent drifts.
          Each orb has a different phase and duration, creating an asymmetric gallery float. */}

      {/* Floating orb 1 — top center, slow upward drift, primary gallery source */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '72%',
          height: '38%',
          background: 'radial-gradient(ellipse, rgba(230,161,90,0.022) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'section-breathe-a 26s ease-in-out infinite',
        }}
      />

      {/* Floating orb 2 — mid-right, counter-phase drift, spatial separation */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '35%',
          right: '-5%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse at 70% 40%, rgba(230,161,90,0.016) 0%, transparent 68%)',
          pointerEvents: 'none',
          animation: 'section-breathe-b 34s ease-in-out infinite 6s',
        }}
      />

      {/* Floating orb 3 — bottom-left, the slowest, gallery floor warmth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-3%',
          width: '38%',
          height: '40%',
          background: 'radial-gradient(ellipse at 30% 65%, rgba(230,161,90,0.012) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'section-breathe-c 44s ease-in-out infinite 12s',
        }}
      />

      <Container>
        <SectionHeader />

        {projects.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
            padding={pacingByIndex[i] ?? pacingByIndex[0]}
          />
        ))}
      </Container>
    </section>
  )
}
