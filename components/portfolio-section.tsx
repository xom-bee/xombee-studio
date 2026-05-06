'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ExternalLink, Award, Wrench, Users } from 'lucide-react'

// ─── Procedural visuals (unchanged) ───────────────────────────────────────────

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
    tagline: 'A digital platform for Bhutanese artists',
    award: null,
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-trOMxor0aJQS5vMDg7UA5eQLGxTDp7.png',
    shortDesc: 'A digital platform for Bhutanese artists to showcase and connect through art.\nFocused on cultural identity and creative community.',
    situation: 'Bhutanese artists had no dedicated platform to reach beyond local buyers.\nTheir work existed. Their audience did not.',
    action: 'Designed a culturally-sensitive marketplace from scratch.\nCelebrates Bhutanese artistry while enabling global discovery and transactions.',
    result: 'A platform that empowers independent artists to earn sustainably.\nBridges traditional craft and modern commerce through intentional design.',
    problem: 'How do you build a platform that feels culturally authentic\nwhile remaining globally accessible?',
    solution: 'Cultural visual cues. Accessible navigation. Artist-first features.\nThe work leads. The platform follows.',
    tools: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Brand Identity', 'Frontend'],
    team: ['Sangay Yoesel – UI/UX Lead', 'Collaborative team of 3'],
    liveUrl: undefined,
    caseStudyHref: '/work/druk-art-hub',
    image: '/images/druk-art-hub.png',
    imagePosition: '72% center',
    ongoing: true,
    compositeUi: undefined,
    preLine: 'Designed to help artists express identity and be seen',
  },
  {
    id: 'xom-bee',
    title: 'Xom Bee Official',
    category: 'UI/UX Design · Frontend Development',
    tagline: 'Personal website for a music artist',
    award: null,
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: undefined,
    shortDesc: 'A personal website for a music artist to showcase songs and music videos.\nDesigned to express identity through sound and visuals.',
    situation: 'Independent artists struggle to present their music and identity in one cohesive space.\nSocial platforms exist, but none truly belong to the artist.',
    action: 'Designed and built a personal website from concept to code.\nEvery detail — layout, motion, color — built to reflect the artist\'s sound.',
    result: 'A living digital stage that the artist fully owns.\nA space that feels like the music before a single note plays.',
    problem: 'How do you design a website that makes someone\nfeel the music before they press play?',
    solution: 'Dark, cinematic atmosphere. Intentional motion. Emotional hierarchy.\nThe design becomes part of the listening experience.',
    tools: ['Figma', 'Next.js', 'Tailwind CSS', 'Brand Identity', 'Frontend'],
    team: ['Sangay Yoesel – Designer & Developer'],
    liveUrl: undefined,
    caseStudyHref: '/work/xom-bee',
    image: '/images/xombee.png',
    imagePosition: 'center center',
    ongoing: true,
    compositeUi: undefined,
    preLine: 'Your sound deserves its own stage.',
  },
]

// ─── Project detail overlay (unchanged) ───────────────────────────────────────

function PreviewCard({ projectId, color, variant }: { projectId: string; color: string; variant: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '4/3',
        borderRadius: '12px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(200,136,74,0.30)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? '0 8px 32px rgba(0,0,0,0.55), 0 0 16px rgba(200,136,74,0.12)'
          : '0 4px 16px rgba(0,0,0,0.40)',
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
        cursor: 'default',
      }}
    >
      <div className="absolute inset-0 scale-95 sm:scale-100 origin-center">
        <ProceduralVisual projectId={projectId} color={color} variant={variant} />
      </div>
    </div>
  )
}

function ProjectDetail({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-100 bg-background/98 backdrop-blur-xl overflow-y-auto">
      <div
        className="max-w-250 mx-auto px-3 sm:px-6 pt-10 sm:pt-16 pb-24 sm:pb-32"
      >
        {/* Back */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 mb-8 sm:mb-14"
          style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.35)',
            background: 'none', border: 'none', cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.80)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
        >
          <ChevronLeft size={14} />
          Back to work
        </button>

        {/* All sections separated by consistent space */}
        <div className="space-y-6 sm:space-y-10">

          {/* Header */}
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, display: 'block', marginBottom: '16px' }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '12px' }}>
              {project.title}
            </h2>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.40)', lineHeight: 1.6, marginBottom: '20px' }}>
              {project.tagline}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.award && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: project.accent, border: `1px solid ${project.accent}50`, borderRadius: '999px', padding: '7px 16px', boxShadow: `0 0 10px ${project.accent}1A` }}>
                  <Award size={9} />{project.award}
                </div>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: project.accent, border: `1px solid ${project.accent}40`, borderRadius: '999px', padding: '7px 16px', textDecoration: 'none' }}>
                  <ExternalLink size={9} />View Live Site
                </a>
              )}
            </div>
          </div>

          {/* Preview cards */}
          <div className="grid grid-cols-1 space-y-5 sm:space-y-0 sm:grid-cols-3 sm:gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="mx-auto w-full max-w-72 sm:max-w-none px-2 sm:px-0">
                <PreviewCard projectId={project.id} color={project.color} variant={i} />
              </div>
            ))}
          </div>

          {/* Situation + Action */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Situation</h3>
              <p className="text-sm sm:text-base" style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.situation}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Action</h3>
              <p className="text-sm sm:text-base" style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.action}</p>
            </div>
          </div>

          {/* The Problem — pull quote */}
          <div style={{ borderLeft: `2px solid ${project.accent}`, paddingLeft: '20px' }}>
            <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Problem</h3>
            <p className="text-lg sm:text-xl" style={{ fontWeight: 600, lineHeight: 1.5, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
              {project.problem}
            </p>
          </div>

          {/* The Solution */}
          <div>
            <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Solution</h3>
            <p className="text-sm sm:text-base" style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.solution}</p>
          </div>

          {/* Final Outcome */}
          <div className="rounded-xl p-4 sm:p-6 shadow-sm" style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}>
            <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '20px' }}>Final Outcome</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {project.result.split('\n').map((line, i) => (
                <p key={i} className={i === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} style={{
                  fontWeight: i === 0 ? 600 : 400,
                  lineHeight: 1.55,
                  color: i === 0 ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
                }}>
                  {line.includes('%') ? (
                    <>
                      {line.split(/(\d+%)/g).map((part, j) =>
                        /\d+%/.test(part)
                          ? <span key={j} style={{ color: project.accent, fontWeight: 700 }}>{part}</span>
                          : part
                      )}
                    </>
                  ) : line}
                </p>
              ))}
            </div>
          </div>

          {/* Tools + Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <Wrench size={12} style={{ color: project.accent }} />
                <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent }}>Tools Used</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.tools.map((tool) => (
                  <ToolPill key={tool} label={tool} accent={project.accent} />
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <Users size={12} style={{ color: project.accent }} />
                <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent }}>Team</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.team.map((member) => (
                  <span key={member} className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{member}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function ToolPill({ label, accent }: { label: string; accent: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: '11px',
        letterSpacing: '0.06em',
        color: hovered ? accent : 'rgba(255,255,255,0.45)',
        border: `1px solid ${hovered ? `${accent}55` : 'rgba(255,255,255,0.12)'}`,
        borderRadius: '999px',
        padding: '6px 14px',
        cursor: 'default',
        boxShadow: hovered ? `0 0 10px ${accent}20` : 'none',
        transition: 'color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {label}
    </span>
  )
}

// ─── Project row ───────────────────────────────────────────────────────────────

function ProjectRow({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0]
  index: number
  onClick: () => void
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)
  const isReversed = false

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (rowRef.current) observer.observe(rowRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rowRef}
      style={{
        display: 'flex',
        flexDirection: isReversed ? 'row-reverse' : 'row',
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
          transition: 'opacity 0.75s 0s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s 0s cubic-bezier(0.22, 1, 0.36, 1)',
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
            <Award size={9} />
            {project.award}
          </div>
        )}

        {/* Emotional pre-line */}
        {project.preLine && (
          <p style={{
            fontSize: 'clamp(11px, 1vw, 13px)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.22)',
            marginBottom: '10px',
            lineHeight: 1.5,
          }}>
            {project.preLine}
          </p>
        )}

        {/* Title */}
        <h3 style={{
          fontSize: 'clamp(36px, 5.5vw, 72px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          marginBottom: '24px',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(14px, 1.3vw, 16px)',
          fontWeight: 400,
          lineHeight: 1.85,
          color: '#7A7A84',
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

        {/* CTA */}
        {project.caseStudyHref ? (
          <Link
            href={project.caseStudyHref}
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', color: '#FFFFFF', transition: 'gap 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = '16px'
              const arrow = e.currentTarget.querySelector('span') as HTMLElement
              if (arrow) arrow.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '10px'
              const arrow = e.currentTarget.querySelector('span') as HTMLElement
              if (arrow) arrow.style.transform = 'translateX(0)'
            }}
          >
            View Case Study
            <span style={{ fontSize: '18px', lineHeight: 1, color: '#C8884A', transition: 'transform 0.3s ease' }}>→</span>
          </Link>
        ) : (
          <button
            onClick={onClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'gap 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = '16px'
              const arrow = e.currentTarget.querySelector('span') as HTMLElement
              if (arrow) arrow.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '10px'
              const arrow = e.currentTarget.querySelector('span') as HTMLElement
              if (arrow) arrow.style.transform = 'translateX(0)'
            }}
          >
            View Case Study
            <span style={{ fontSize: '18px', lineHeight: 1, color: '#C8884A', transition: 'transform 0.3s ease' }}>→</span>
          </button>
        )}
      </div>

      {/* Visual side */}
      <div
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        style={{
          flex: '1 1 340px',
          aspectRatio: '4 / 3',
          borderRadius: '20px',
          overflow: 'hidden',
          position: 'relative',
          background: '#06060A',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'opacity 0.85s 0.2s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
          boxShadow: project.image
            ? `0 32px 80px rgba(0,0,0,0.7), 0 0 72px ${project.accent}30, 0 0 0 1px rgba(255,255,255,0.04)`
            : '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {project.image && project.compositeUi ? (
          <>
            {/* Background — dining scene, pushed back with more blur */}
            <Image
              src={project.image}
              alt=""
              fill
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

            {/* Gradient plate — dark base behind UI, gives it ground */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -48%)',
              width: '82%', height: '70%',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(10,8,6,0.72) 0%, transparent 75%)',
              filter: 'blur(12px)',
              pointerEvents: 'none',
            }} />

            {/* Secondary UI — smaller, receded, low opacity */}
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

            {/* Primary UI — centered with equal breathing room top/bottom */}
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

            {/* Amber glow — sits behind primary UI */}
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
              style={{
                objectFit: 'cover',
                objectPosition: project.imagePosition ?? 'center center',
                filter: 'brightness(0.78) contrast(0.92)',
                transform: imgHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                transformOrigin: 'center center',
              }}
            />
            {/* Inner dark shadow — top and bottom edges */}
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
          </>
        ) : (
          <>
            <ProceduralVisual projectId={project.id} color={project.color} variant={0} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(6,6,10,0.55) 100%)',
              pointerEvents: 'none',
            }} />
          </>
        )}
      </div>
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
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      {activeProject && (
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <section
        id="portfolio"
        style={{
          background: 'transparent',
          paddingTop: 'clamp(56px, 8vw, 96px)',
          paddingBottom: 'clamp(40px, 6vw, 72px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <SectionHeader />

          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>
    </>
  )
}
