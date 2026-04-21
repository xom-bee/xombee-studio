'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ExternalLink, Award, Wrench, Users } from 'lucide-react'

// ─── Procedural visuals (unchanged) ───────────────────────────────────────────

function ProceduralVisual({ projectId, color, variant }: { projectId: string; color: string; variant: number }) {
  const patterns: Record<string, React.ReactNode[]> = {
    'scan2dine': [
      <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="s2d-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="50" y="30" width="60" height="60" rx="8" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
        <rect x="60" y="40" width="40" height="40" rx="4" fill={color} opacity="0.3" />
        <rect x="290" y="30" width="60" height="60" rx="8" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
        <rect x="300" y="40" width="40" height="40" rx="4" fill={color} opacity="0.3" />
        <rect x="50" y="210" width="60" height="60" rx="8" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
        <rect x="60" y="220" width="40" height="40" rx="4" fill={color} opacity="0.3" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={140 + (i % 4) * 30} y={80 + Math.floor(i / 4) * 30} width="20" height="20" fill={color} opacity={0.2 + (i * 0.08)} rx="2" />
        ))}
        <line x1="180" y1="160" x2="220" y2="160" stroke={color} strokeWidth="3" opacity="0.5" />
        <circle cx="200" cy="200" r="30" stroke={color} strokeWidth="2" fill="url(#s2d-grad)" />
        <path d="M190 200 L200 210 L215 190" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>,
      <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="120" y="20" width="160" height="260" rx="20" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
        <rect x="140" y="50" width="120" height="20" rx="4" fill={color} opacity="0.3" />
        <rect x="140" y="85" width="120" height="50" rx="8" fill={color} opacity="0.15" />
        <rect x="140" y="145" width="120" height="50" rx="8" fill={color} opacity="0.15" />
        <rect x="140" y="205" width="120" height="50" rx="8" fill={color} opacity="0.15" />
        <circle cx="200" cy="110" r="15" fill={color} opacity="0.5" />
        <circle cx="200" cy="170" r="15" fill={color} opacity="0.5" />
        <circle cx="200" cy="230" r="15" fill={color} opacity="0.5" />
      </svg>,
      <svg key="2" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="30" y="30" width="340" height="240" rx="12" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
        {[80, 140, 200, 260, 320].map((x, i) => (
          <rect key={i} x={x} y={250 - (40 + i * 25)} width="30" height={40 + i * 25} fill={color} opacity={0.3 + i * 0.1} rx="4" />
        ))}
        <path d="M60 200 Q120 150 180 180 T300 120" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="60" cy="200" r="4" fill={color} />
        <circle cx="180" cy="180" r="4" fill={color} />
        <circle cx="300" cy="120" r="4" fill={color} />
      </svg>,
    ],
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
    'no-q': [
      <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <circle cx="200" cy="100" r="50" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
        <text x="200" y="115" textAnchor="middle" fill={color} fontSize="36" fontWeight="bold" opacity="0.8">07</text>
        <rect x="100" y="170" width="200" height="8" rx="4" fill={color} opacity="0.2" />
        <rect x="100" y="170" width="120" height="8" rx="4" fill={color} opacity="0.5" />
        <rect x="80" y="200" width="240" height="40" rx="8" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
        <text x="200" y="225" textAnchor="middle" fill={color} fontSize="12" opacity="0.6">Estimated wait: 12 minutes</text>
      </svg>,
      <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        {[50, 110, 170, 230].map((y, i) => (
          <g key={i}>
            <rect x="50" y={y} width="300" height="50" rx="8" fill={color} opacity={i === 1 ? 0.25 : 0.1} stroke={color} strokeWidth={i === 1 ? 2 : 1} strokeOpacity="0.3" />
            <circle cx="85" cy={y + 25} r="15" fill={color} opacity="0.3" />
            <rect x="115" y={y + 15} width="80" height="8" rx="4" fill={color} opacity="0.4" />
            <rect x="115" y={y + 28} width="50" height="6" rx="3" fill={color} opacity="0.2" />
            <rect x="280" y={y + 18} width="50" height="14" rx="7" fill={color} opacity={i === 1 ? 0.6 : 0.3} />
          </g>
        ))}
      </svg>,
      <svg key="2" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <rect x="80" y="40" width="240" height="100" rx="16" fill={color} opacity="0.15" stroke={color} strokeWidth="2" strokeOpacity="0.4" />
        <circle cx="130" cy="90" r="25" fill={color} opacity="0.3" />
        <path d="M120 90 L130 100 L145 80" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="170" y="75" width="120" height="10" rx="5" fill={color} opacity="0.5" />
        <rect x="170" y="95" width="80" height="8" rx="4" fill={color} opacity="0.3" />
        <rect x="100" y="170" width="200" height="50" rx="12" stroke={color} strokeWidth="1" fill="none" opacity="0.2" />
        <rect x="100" y="235" width="200" height="50" rx="12" stroke={color} strokeWidth="1" fill="none" opacity="0.2" />
      </svg>,
    ],
  }
  return patterns[projectId]?.[variant] || patterns['scan2dine'][0]
}

// ─── Project data ──────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'scan2dine',
    title: 'Scan2Dine',
    category: 'UI/UX Design · Digital Product',
    tagline: 'QR-Based Digital Menu System',
    award: 'Best Project Award',
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scan2Dine%20White-u5zMokeFXdYcPIgXF4HWjFKTdSc02e.png',
    shortDesc: 'A QR-based digital menu system that removes friction from the dining experience — built for speed, clarity, and delight.',
    situation: 'Restaurants relied on physical menus that were costly to update.\nHygiene concerns made them increasingly impractical.',
    action: 'Designed an intuitive QR-based menu system from the ground up.\nFocused on usability, clear hierarchy, and a seamless guest experience.',
    result: 'Awarded Best Project for exceptional usability.\n90% reduction in menu update time.\nImproved customer satisfaction across all test environments.',
    problem: 'How do you modernize dining\nwithout losing warmth and human touch?',
    solution: 'A premium digital menu that feels effortless to use.\nLoads instantly. Puts control in the hands of both owner and guest.',
    tools: ['Figma', 'Adobe Illustrator', 'Prototyping', 'User Research'],
    team: ['Sangay Yoesel – Lead Designer', 'Team of 3 developers'],
    liveUrl: 'https://scan2dinee.netlify.app/',
    image: '/images/scan2dine.png',
    imagePosition: 'center center',
    ongoing: false,
    compositeUi: ['/images/scan2dine-ui-1.png', '/images/scan2dine-ui-2.png'],
    preLine: undefined,
  },
  {
    id: 'druk-art-hub',
    title: 'Druk Art Hub',
    category: 'Platform Design · Marketplace',
    tagline: 'Platform for artists to buy and sell art',
    award: null,
    color: 'oklch(0.75 0.15 55)',
    accent: '#C8884A',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-trOMxor0aJQS5vMDg7UA5eQLGxTDp7.png',
    shortDesc: 'A space for Bhutanese artists to be seen.\nWhere culture meets a wider world.',
    situation: 'Bhutanese artists had no dedicated platform to reach beyond local buyers.\nTheir work existed. Their audience did not.',
    action: 'Designed a culturally-sensitive marketplace from scratch.\nCelebrates Bhutanese artistry while enabling global discovery and transactions.',
    result: 'A platform that empowers independent artists to earn sustainably.\nBridges traditional craft and modern commerce through intentional design.',
    problem: 'How do you build a marketplace that feels culturally authentic\nwhile remaining globally accessible?',
    solution: 'Cultural visual cues. Accessible navigation. Artist-first features.\nThe work leads. The platform follows.',
    tools: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Brand Identity', 'Frontend'],
    team: ['Sangay Yoesel – UI/UX Lead', 'Collaborative team of 3'],
    liveUrl: undefined,
    image: '/images/druk-art-hub.png',
    imagePosition: '72% center',
    ongoing: true,
    compositeUi: undefined,
    preLine: 'Built for artists who were never seen.',
  },
  {
    id: 'no-q',
    title: 'Q-Less',
    category: 'Healthcare UX · System Design',
    tagline: 'Queue management system for patients',
    award: null,
    color: 'oklch(0.65 0.10 185)',
    accent: '#3D9E8C',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/No%20Q%20White-2jMDdM7Mp0FgKbWUQVmrmhFEA7ab8J.png',
    shortDesc: 'Long queues. No clarity. No control.\nBuilt to give patients back their time.',
    situation: 'Patients faced stressful waiting rooms with no visibility into their position.\nWasted hours. No updates. No system.',
    action: 'Designed a queue system with real-time updates and SMS notifications.\nA calm interface built to reduce anxiety, not add to it.',
    result: 'Patients reclaim their time. Walk-aways reduced significantly.\nMedical staff manage flow with ease. Outcomes improve for everyone.',
    problem: 'How do you bring humanity and clarity\nto an experience that is inherently stressful?',
    solution: 'A gentle interface that keeps patients in control of their wait.\nClarity replaces uncertainty. Dignity replaces frustration.',
    tools: ['Figma', 'Canva', 'UX Research', 'Prototyping', 'Backend'],
    team: ['Sangay Yoesel – Design Lead', 'Healthcare consultants', 'Dev team of 2'],
    liveUrl: 'https://q-leess.netlify.app/',
    image: '/images/q-less.png',
    imagePosition: 'center 20%',
    ongoing: false,
    compositeUi: undefined,
    preLine: 'Built for moments that should not feel frustrating.',
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
      <ProceduralVisual projectId={projectId} color={color} variant={variant} />
    </div>
  )
}

function ProjectDetail({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-100 bg-background/98 backdrop-blur-xl overflow-y-auto">
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 32px 120px' }}>

        {/* Back */}
        <button
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', color: 'rgba(255,255,255,0.35)',
            background: 'none', border: 'none', cursor: 'pointer',
            marginBottom: '64px', transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.80)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
        >
          <ChevronLeft size={14} />
          Back to work
        </button>

        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, display: 'block', marginBottom: '16px' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '12px' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.40)', lineHeight: 1.6, marginBottom: '24px' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '72px' }}>
          {[0, 1, 2].map((i) => (
            <PreviewCard key={i} projectId={project.id} color={project.color} variant={i} />
          ))}
        </div>

        {/* Situation + Action */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Situation</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.situation}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Action</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.action}</p>
          </div>
        </div>

        {/* The Problem — pull quote */}
        <div style={{
          borderLeft: `2px solid ${project.accent}`,
          paddingLeft: '24px',
          marginBottom: '48px',
        }}>
          <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Problem</h3>
          <p style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.5, color: '#FFFFFF', whiteSpace: 'pre-line' }}>
            {project.problem}
          </p>
        </div>

        {/* The Solution */}
        <div style={{ marginBottom: '72px' }}>
          <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '14px' }}>The Solution</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.45)', whiteSpace: 'pre-line' }}>{project.solution}</p>
        </div>

        {/* Final Outcome */}
        <div style={{
          borderRadius: '16px',
          border: `1px solid rgba(255,255,255,0.07)`,
          background: 'rgba(255,255,255,0.025)',
          padding: '40px',
          marginBottom: '64px',
        }}>
          <h3 style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: project.accent, marginBottom: '20px' }}>Final Outcome</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {project.result.split('\n').map((line, i) => (
              <p key={i} style={{
                fontSize: i === 0 ? '18px' : '16px',
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
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
                <span key={member} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{member}</span>
              ))}
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
  const isReversed = index % 2 !== 0

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
        {/* Label */}
        <div style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: project.accent,
          marginBottom: '20px',
        }}>
          {project.category}
        </div>

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
          marginBottom: '40px',
          whiteSpace: 'pre-line',
        }}>
          {project.shortDesc}
        </p>

        {/* CTA */}
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
          Explore Case Study
          <span style={{ fontSize: '18px', lineHeight: 1, color: '#C8884A', transition: 'transform 0.3s ease' }}>→</span>
        </button>
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
      <div style={{
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#C8884A',
        marginBottom: '16px',
      }}>
        Selected Work
      </div>
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
        marginBottom: '16px',
      }}>
        Projects that matter.
      </h2>
      <p style={{
        fontSize: 'clamp(13px, 1.2vw, 15px)',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.28)',
        letterSpacing: '0.01em',
        lineHeight: 1.65,
      }}>
        Not just projects.<br />Real problems. Real people. Real impact.
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
          background: '#0B0B0F',
          padding: 'clamp(56px, 8vw, 96px) clamp(28px, 10vw, 140px) clamp(40px, 6vw, 72px)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
