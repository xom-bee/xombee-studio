'use client'

import { useState, useRef, useCallback } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { X, Award, Users, Wrench, ChevronLeft, ExternalLink } from 'lucide-react'

// Procedural SVG visual generator for projects (IP-compliant, no stock images)
function ProceduralVisual({ projectId, color, variant }: { projectId: string; color: string; variant: number }) {
  const patterns: Record<string, JSX.Element[]> = {
    'scan2dine': [
      // QR Code aesthetic
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
      // Mobile menu interface
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
      // Dashboard analytics
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
      // Art gallery grid
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
      // Artist profile
      <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <circle cx="200" cy="80" r="40" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
        <rect x="100" y="140" width="200" height="12" rx="6" fill={color} opacity="0.4" />
        <rect x="130" y="165" width="140" height="8" rx="4" fill={color} opacity="0.2" />
        <rect x="50" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
        <rect x="155" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
        <rect x="260" y="200" width="90" height="70" rx="8" fill={color} opacity="0.15" />
      </svg>,
      // Marketplace cart
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
      // Queue interface
      <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="oklch(0.09 0 0)" />
        <circle cx="200" cy="100" r="50" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
        <text x="200" y="115" textAnchor="middle" fill={color} fontSize="36" fontWeight="bold" opacity="0.8">07</text>
        <rect x="100" y="170" width="200" height="8" rx="4" fill={color} opacity="0.2" />
        <rect x="100" y="170" width="120" height="8" rx="4" fill={color} opacity="0.5" />
        <rect x="80" y="200" width="240" height="40" rx="8" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
        <text x="200" y="225" textAnchor="middle" fill={color} fontSize="12" opacity="0.6">Estimated wait: 12 minutes</text>
      </svg>,
      // Patient list
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
      // Notification system
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

const projects = [
  {
    id: 'scan2dine',
    title: 'Scan2Dine',
    category: 'UI/UX Design · Digital Product',
    tagline: 'QR-Based Digital Menu System',
    award: 'Best Project Award',
    color: 'oklch(0.75 0.15 55)',
    accent: 'oklch(0.78 0.12 55)',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scan2Dine%20White-u5zMokeFXdYcPIgXF4HWjFKTdSc02e.png',
    shortDesc: 'Transforming the dining experience through seamless QR-based menus that eliminate wait times and delight guests.',
    situation: 'Restaurants struggled with outdated physical menus that were costly to update, unhygienic, and created friction in the ordering experience.',
    action: 'Designed a clean, intuitive QR-based digital menu system with a focus on usability, accessibility, and visual hierarchy that guides customers naturally.',
    result: 'Awarded Best Project for exceptional usability and clean UI. Reduced menu update time by 90% and improved customer satisfaction scores.',
    problem: 'How do you modernize the dining experience without losing warmth and personality?',
    solution: 'A beautifully crafted digital menu that feels premium, loads instantly, and puts control back into the hands of both restaurant owners and diners.',
    tools: ['Figma', 'Adobe Illustrator', 'Prototyping', 'User Research'],
    team: ['Sangay Yoesel – Lead Designer', 'Team of 3 developers'],
    visuals: 'procedural',
    liveUrl: 'https://scan2dinee.netlify.app/',
  },
  {
    id: 'druk-art-hub',
    title: 'Druk Art Hub',
    category: 'Platform Design · Marketplace',
    tagline: 'Platform for artists to buy and sell art',
    award: null,
    color: 'oklch(0.65 0.14 200)',
    accent: 'oklch(0.7 0.12 200)',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-trOMxor0aJQS5vMDg7UA5eQLGxTDp7.png',
    shortDesc: 'A digital home for Bhutanese artists — a marketplace where creativity meets commerce and culture is preserved.',
    situation: 'Local Bhutanese artists lacked a dedicated platform to showcase and monetize their work, limiting reach to only local buyers.',
    action: 'Created a vibrant, culturally-sensitive marketplace design that celebrates Bhutanese artistry while enabling global discovery and transactions.',
    result: 'A platform that empowers independent artists to earn sustainably, with an intuitive UI that bridges traditional craft and modern commerce.',
    problem: 'How do you create a marketplace that feels authentic to Bhutanese culture while being globally accessible?',
    solution: 'A thoughtfully designed platform with cultural visual cues, accessible navigation, and artist-first features that put creative work at the forefront.',
    tools: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Brand Identity'],
    team: ['Sangay Yoesel – UI/UX Lead', 'Collaborative team of 4'],
    visuals: 'procedural',
  },
  {
    id: 'no-q',
    title: 'Q-Less',
    category: 'Healthcare UX · System Design',
    tagline: 'Queue management system for patients',
    award: null,
    color: 'oklch(0.7 0.12 150)',
    accent: 'oklch(0.72 0.11 150)',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/No%20Q%20White-2jMDdM7Mp0FgKbWUQVmrmhFEA7ab8J.png',
    shortDesc: 'Eliminating the anxiety of waiting rooms by giving patients a dignified, smart queuing experience.',
    situation: 'Hospital waiting rooms created stress, confusion, and wasted hours for patients who had no visibility into their wait time or position.',
    action: 'Designed a digital queue management system with real-time updates, SMS notifications, and a calm, reassuring interface that reduces patient anxiety.',
    result: 'A system that reclaims patient time, reduces walk-aways, and allows medical staff to manage flow efficiently — improving outcomes for everyone.',
    problem: 'How do you bring humanity and clarity to an experience that is inherently stressful?',
    solution: 'A gentle, informative interface that keeps patients in control of their time and relieves the psychological burden of the unknown wait.',
    tools: ['Figma', 'Canva', 'UX Research', 'Prototyping'],
    team: ['Sangay Yoesel – Design Lead', 'Healthcare consultants', 'Dev team of 2'],
    visuals: 'procedural',
    liveUrl: 'https://q-leess.netlify.app/',
  },
]

function ProjectDetail({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {

  return (
    <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-12 transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to work
        </button>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: project.accent }}>
            {project.category}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4">{project.title}</h2>
          <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>
          <div className="flex flex-wrap items-center gap-3">
            {project.award && (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wide"
                style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
              >
                <Award size={12} />
                {project.award}
              </div>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wide transition-all hover:opacity-80"
                style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
              >
                <ExternalLink size={12} />
                View Live Site
              </a>
            )}
          </div>
        </div>

        {/* Visuals - Procedural SVG designs */}
        <div className="grid grid-cols-3 gap-3 mb-16">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-border/30"
            >
              <ProceduralVisual projectId={project.id} color={project.color} variant={i} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>The Situation</h3>
            <p className="text-muted-foreground leading-relaxed">{project.situation}</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>The Action</h3>
            <p className="text-muted-foreground leading-relaxed">{project.action}</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>The Problem</h3>
            <p className="text-muted-foreground leading-relaxed italic">&ldquo;{project.problem}&rdquo;</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>The Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Result */}
        <div className="rounded-2xl border border-border/50 p-8 mb-12 glow-border">
          <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>Final Outcome</h3>
          <p className="text-foreground text-lg leading-relaxed">{project.result}</p>
        </div>

        {/* Tools & Team */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={14} style={{ color: project.accent }} />
              <h3 className="text-xs tracking-widest uppercase" style={{ color: project.accent }}>Tools Used</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-full text-xs border border-border/60 text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users size={14} style={{ color: project.accent }} />
              <h3 className="text-xs tracking-widest uppercase" style={{ color: project.accent }}>Team</h3>
            </div>
            <div className="flex flex-col gap-2">
              {project.team.map((member) => (
                <span key={member} className="text-sm text-muted-foreground">{member}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const { ref, revealed } = useReveal()
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      {activeProject && (
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <section id="portfolio" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={ref} className={`mb-16 reveal ${revealed ? 'revealed' : ''}`}>
            <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Selected Work
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
              Projects that <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>move</span>
            </h2>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0]
  index: number
  onClick: () => void
}) {
  const { ref, revealed } = useReveal()
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLButtonElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    setTilt({ rotateX, rotateY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s`, perspective: '1000px' }}
    >
      <button
        ref={cardRef}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full text-left group rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:glow-border"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${project.accent}08 0%, oklch(0.09 0 0) 100%)`
            : 'oklch(0.09 0 0)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${hovered ? 'scale(1.01)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-0">
          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs tracking-widest uppercase mb-2 block" style={{ color: project.accent }}>
                  {project.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{project.title}</h3>
              </div>
              {project.award && (
                <div
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap flex-shrink-0"
                  style={{ background: `${project.accent}15`, color: project.accent }}
                >
                  <Award size={10} />
                  {project.award}
                </div>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">{project.shortDesc}</p>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-300" style={{ color: project.accent }}>
              <span>View Project</span>
              <ChevronLeft size={12} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Logo preview */}
          <div
            className="hidden md:flex w-72 items-center justify-center relative overflow-hidden p-10"
            style={{
              background: `radial-gradient(ellipse at center, ${project.accent}30 0%, transparent 70%)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-50" />
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              loading="lazy"
              className="relative z-10 w-48 h-48 object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </button>
    </div>
  )
}
