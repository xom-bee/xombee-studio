'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'

// ─── Procedural visuals ───────────────────────────────────────────────────────

function ProceduralVisual({ projectId, color, variant }: { projectId: string; color: string; variant: number }) {
  const patterns: Record<string, React.ReactNode[]> = {
    'druk-art-hub': [
      <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        {[
          { x: 30, y: 30, w: 100, h: 120 },
          { x: 150, y: 30, w: 100, h: 80 },
          { x: 270, y: 30, w: 100, h: 120 },
          { x: 150, y: 130, w: 100, h: 70 },
          { x: 30, y: 170, w: 100, h: 100 },
          { x: 150, y: 220, w: 220, h: 50 },
        ].map((rect, i) => (
          <rect key={i} x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx="8" fill={color} opacity={0.15 + i * 0.05} stroke={color} strokeWidth="1" strokeOpacity="0.3" />
        ))}
        <circle cx="320" cy="180" r="40" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M300 180 L320 160 L340 180 L320 200 Z" fill={color} opacity="0.3" />
      </svg>,
      <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <circle cx="200" cy="80" r="40" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
        <rect x="100" y="140" width="200" height="12" rx="6" fill={color} opacity="0.4" />
        <rect x="130" y="165" width="140" height="8" rx="4" fill={color} opacity="0.2" />
        <rect x="50" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
        <rect x="155" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
        <rect x="260" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
      </svg>,
      <svg key="2" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="50" y="50" width="180" height="200" rx="12" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
        <rect x="260" y="50" width="120" height="200" rx="12" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
        <rect x="70" y="70" width="140" height="80" rx="8" fill={color} opacity="0.2" />
        <rect x="70" y="165" width="140" height="30" rx="4" fill={color} opacity="0.15" />
        <rect x="70" y="205" width="80" height="25" rx="4" fill={color} opacity="0.15" />
        <rect x="280" y="70" width="80" height="15" rx="4" fill={color} opacity="0.3" />
        <rect x="280" y="95" width="60" height="10" rx="4" fill={color} opacity="0.2" />
        <rect x="280" y="200" width="80" height="30" rx="15" fill={color} opacity="0.5" />
      </svg>,
    ],
    'xom-bee': [
      <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <polygon points="200,40 240,62 240,106 200,128 160,106 160,62" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.10" opacity="0.7" />
        <text x="200" y="93" textAnchor="middle" fill={color} fontSize="22" fontWeight="700" opacity="0.7">XB</text>
        <rect x="60" y="155" width="280" height="40" rx="20" stroke={color} strokeWidth="1" fill="none" opacity="0.25" />
        <rect x="60" y="155" width="140" height="40" rx="20" fill={color} opacity="0.18" />
        <rect x="70" y="210" width="110" height="12" rx="6" fill={color} opacity="0.20" />
        <rect x="70" y="230" width="80" height="8" rx="4" fill={color} opacity="0.12" />
        <rect x="220" y="210" width="110" height="12" rx="6" fill={color} opacity="0.20" />
        <rect x="220" y="230" width="80" height="8" rx="4" fill={color} opacity="0.12" />
      </svg>,
      <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="50" y="50" width="140" height="200" rx="14" stroke={color} strokeWidth="1.5" fill="none" opacity="0.30" />
        <rect x="70" y="70" width="100" height="70" rx="8" fill={color} opacity="0.18" />
        <rect x="70" y="155" width="100" height="10" rx="5" fill={color} opacity="0.30" />
        <rect x="70" y="172" width="70" height="8" rx="4" fill={color} opacity="0.18" />
        <rect x="70" y="195" width="100" height="30" rx="8" fill={color} opacity="0.14" />
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <rect key={i} x={220 + (i % 5) * 32} y={70 + Math.floor(i / 5) * 80} width="24" height="60" rx="8" fill={color} opacity={0.12 + i * 0.03} />
        ))}
        <rect x="220" y="230" width="152" height="8" rx="4" fill={color} opacity="0.10" />
        <rect x="220" y="246" width="100" height="6" rx="3" fill={color} opacity="0.08" />
      </svg>,
      <svg key="2" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        {[30,60,44,72,38,55,66,48,36,60,42,70,52,40,58].map((h, i) => (
          <rect key={i} x={32 + i * 23} y={180 - h} width="14" height={h} rx="3" fill={color} opacity={0.15 + (i % 3) * 0.08} />
        ))}
        <circle cx="200" cy="80" r="36" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" opacity="0.6" />
        <polygon points="194,68 218,80 194,92" fill={color} opacity="0.55" />
        <rect x="100" y="210" width="200" height="4" rx="2" fill={color} opacity="0.12" />
        <rect x="100" y="210" width="90" height="4" rx="2" fill={color} opacity="0.45" />
        <circle cx="100" cy="212" r="6" fill={color} opacity="0.60" />
      </svg>,
    ],
  }
  return patterns[projectId]?.[variant] ?? patterns['druk-art-hub'][0]
}

// ─── Project data ──────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'druk-art-hub',
    title: 'Druk Art Hub',
    category: 'UI/UX Design · Branding',
    tagline: 'I designed the identity before I designed the platform.\nEvery surface was built to hold Bhutanese artistry with clarity — and carry it globally without losing what it is.',
    award: null,
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-trOMxor0aJQS5vMDg7UA5eQLGxTDp7.png',
    shortDesc: 'Cultural identity is the hardest thing to hold in a digital system.\nI built one that holds it — so Bhutanese artistry reaches the world without losing what it is.',
    situation: 'Bhutanese artists had no dedicated platform to reach beyond local buyers.\nTheir work existed. Their audience did not.',
    action: 'I designed a culturally-sensitive system from scratch.\nEvery decision — the marks, the navigation, the visual hierarchy — was made to let the art lead and the platform disappear.',
    result: 'A platform that gives independent artists a sustainable stage.\nTraditional craft, made globally visible through intentional design.',
    problem: 'How do you build a platform that feels culturally authentic\nwhile remaining globally accessible?',
    solution: 'Cultural visual cues. Accessible navigation. Artist-first architecture.\nThe work leads. The platform disappears.',
    tools: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Brand Identity', 'Frontend'],
    team: ['Sangay Yoesel – UI/UX Lead', 'Collaborative team of 3'],
    liveUrl: undefined,
    caseStudyHref: '/work/druk-art-hub',
    image: '/images/druk-art-hub.png',
    imagePosition: '72% center',
    ongoing: true,
    compositeUi: undefined,
    preLine: 'I designed the foundation they were missing.',
  },
  {
    id: 'xom-bee',
    title: 'Xom Bee Official',
    category: 'UI/UX Design · Frontend Development',
    tagline: 'The brief was the feeling, not the features.\nI designed and built a space where the artist\'s presence arrives before the sound does.',
    award: null,
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: undefined,
    shortDesc: 'The music was the brief.\nI designed and built a space that makes you feel the artist before a single note plays.',
    situation: 'Independent artists struggle to present their music and identity in one cohesive space.\nSocial platforms exist, but none truly belong to the artist.',
    action: 'I designed and built this from concept to code.\nEvery detail — the atmosphere, the motion, the silence — was shaped to feel like the music before it plays.',
    result: 'A digital stage the artist fully owns.\nThe design arrives before the sound does.',
    problem: 'How do you design a space that makes someone\nfeel the music before they press play?',
    solution: 'Dark atmosphere. Intentional motion. Deliberate restraint.\nI disappeared the interface so the sound could arrive first.',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Brand Identity', 'Frontend'],
    team: ['Sangay Yoesel – Designer & Developer'],
    liveUrl: undefined,
    caseStudyHref: '/work/xom-bee',
    image: '/images/xombee.png',
    imagePosition: 'center center',
    ongoing: true,
    compositeUi: undefined,
    preLine: 'Design and code. End to end.',
  },
]

// ─── Project row ───────────────────────────────────────────────────────────────

function ProjectRow({
  project,
}: {
  project: typeof projects[0]
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

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width  - 0.5   // -0.5 to 0.5
      const cy = (e.clientY - rect.top)  / rect.height - 0.5
      tiltState.current.tx = -cy * MAX_TILT   // invert Y: mouse up → tilt back-top
      tiltState.current.ty =  cx * MAX_TILT
    }
    const onLeave = () => {
      tiltState.current.tx = 0
      tiltState.current.ty = 0
    }

    const tick = () => {
      const s = tiltState.current
      s.cx += (s.tx - s.cx) * LERP
      s.cy += (s.ty - s.cy) * LERP
      if (tiltRef.current) {
        tiltRef.current.style.transform =
          `perspective(900px) rotateX(${s.cx.toFixed(3)}deg) rotateY(${s.cy.toFixed(3)}deg)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    card.addEventListener('mousemove', onMove, { passive: true })
    card.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(tick)

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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'clamp(40px, 6vw, 96px)',
        padding: 'clamp(48px, 7vw, 80px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
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

        {/* Award badge */}
        {project.award && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: project.accent,
            border: `1px solid ${project.accent}50`,
            borderRadius: '999px',
            padding: '7px 16px',
            marginBottom: '20px',
            boxShadow: `0 0 12px ${project.accent}22, inset 0 0 8px ${project.accent}08`,
          }}>
            {project.award}
          </div>
        )}

        {/* Emotional pre-line */}
        {project.preLine && (
          <p style={{
            fontSize: 'clamp(11px, 1vw, 13px)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.40)',
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
          lineHeight: 1.85,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: '360px',
          marginBottom: '16px',
          whiteSpace: 'pre-line',
        }}>
          {project.shortDesc}
        </p>

        {/* Role */}
        <p style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#E6A15A',
          maxWidth: '360px',
          marginBottom: '36px',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '8px', fontWeight: 400, letterSpacing: '0.06em' }}>Role</span>
          {project.category}
        </p>

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
          View Case Study
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
            : project.image
              ? `0 36px 90px rgba(0,0,0,0.72), 0 0 80px ${project.accent}28, 0 0 0 1px rgba(255,255,255,0.05)`
              : '0 36px 90px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
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
        {project.image && project.compositeUi ? (
          <>
            {/* Background — pushed back with blur */}
            <Image
              src={project.image}
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: project.imagePosition ?? 'center center',
                filter: 'brightness(0.42) blur(3px) saturate(0.85)',
              }}
            />
            {/* Dark warm scrim */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(6,5,4,0.50) 0%, rgba(8,6,4,0.25) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Gradient plate */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -48%)',
              width: '82%', height: '70%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(10,8,6,0.72) 0%, transparent 75%)',
              filter: 'blur(12px)',
              pointerEvents: 'none',
            }} />
            {/* Secondary UI */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.compositeUi[1]}
              alt=""
              style={{
                position: 'absolute',
                bottom: '8%', right: '4%',
                width: '42%',
                borderRadius: '10px',
                opacity: 0.45,
                transform: 'rotate(2deg) scale(0.92)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.55)',
                filter: 'brightness(0.75)',
              }}
            />
            {/* Primary UI */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.compositeUi[0]}
              alt="Product UI"
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '72%',
                transform: 'translate(-50%, -50%) rotate(-0.6deg)',
                borderRadius: '12px',
                opacity: 0.96,
                boxShadow: '0 4px 12px rgba(0,0,0,0.30), 0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.07)',
                filter: 'brightness(1.02)',
              }}
            />
            {/* Amber glow */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '68%', height: '55%',
              background: `radial-gradient(ellipse at 50% 50%, ${project.accent}1C 0%, transparent 65%)`,
              filter: 'blur(28px)',
              pointerEvents: 'none',
            }} />
            {/* Edge vignette */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,5,8,0.68) 100%)',
              pointerEvents: 'none',
            }} />
          </>
        ) : project.image ? (
          <>
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
              <filter id="img-grain">
                <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#img-grain)" />
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
          </>
        ) : (
          <>
            <ProceduralVisual projectId={project.id} color={project.color} variant={0} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 88% 85% at 50% 48%, transparent 30%, rgba(6,6,10,0.70) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Ambient amber edge light */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(230,161,90,0.036) 0%, transparent 40%)',
              pointerEvents: 'none',
            }} />
          </>
        )}
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
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s 0s cubic-bezier(0.22, 1, 0.36, 1), transform 1s 0s cubic-bezier(0.22, 1, 0.36, 1)',
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
        color: 'rgba(255,255,255,0.28)',
        letterSpacing: '0.01em',
        lineHeight: 1.65,
      }}>
        A collection of projects focused on identity, experience, and visual storytelling
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
      {/* Atmospheric trace — amber warmth carried from the hero into the work */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '35%',
          background: 'radial-gradient(ellipse, rgba(230,161,90,0.018) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <Container>
        <SectionHeader />

        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
          />
        ))}
      </Container>
    </section>
  )
}
