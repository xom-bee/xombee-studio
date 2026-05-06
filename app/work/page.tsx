'use client'

import Link from 'next/link'
import { LogoSection } from '@/components/logo-section'

const projects = [
  {
    number: '01',
    title: 'Druk Art Hub',
    description: 'A digital platform for Bhutanese artists to showcase and connect through art.',
    role: 'UI/UX Design · Branding',
    status: 'Ongoing',
    href: '/work/druk-art-hub',
  },
  {
    number: '02',
    title: 'Xom Bee Official',
    description: 'A personal website for a music artist to showcase songs and music videos.',
    role: 'UI/UX Design · Frontend Development',
    status: 'Ongoing',
    href: '/work/xom-bee',
  },
  {
    number: '03',
    title: 'Scan2Dine',
    description: 'A QR-based digital menu system for restaurants.',
    role: 'UI/UX Design · Frontend Development',
    status: null,
    href: '/work/scan2dine',
  },
  {
    number: '04',
    title: 'Q-Less',
    description: 'A queue management system designed to reduce waiting time.',
    role: 'UI/UX Design',
    status: null,
    href: '/work/q-less',
  },
]

export default function WorkPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <main
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
        style={{ paddingTop: 'clamp(120px, 14vw, 160px)', paddingBottom: 'clamp(80px, 10vw, 120px)' }}
      >

        {/* Header */}
        <div style={{ marginBottom: 'clamp(56px, 8vw, 80px)' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E6A15A',
            marginBottom: '20px',
          }}>
            Portfolio
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            marginBottom: '20px',
          }}>
            Selected Work
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '480px',
          }}>
            A collection of projects focused on digital experience, identity, and user interaction.
          </p>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} last={i === projects.length - 1} />
          ))}
        </div>

        <LogoSection />

        {/* Footer note */}
        <div style={{
          marginTop: 'clamp(64px, 8vw, 96px)',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em' }}>
            More projects available on request.
          </p>
          <Link
            href="/"
            style={{
              fontSize: '12px',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#E6A15A' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

function ProjectCard({
  project,
  last,
}: {
  project: typeof projects[0]
  last: boolean
}) {
  return (
    <div
      style={{
        padding: 'clamp(28px, 4vw, 40px) 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: last ? '1px solid rgba(255,255,255,0.06)' : 'none',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      {/* Left: content */}
      <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 48px)', alignItems: 'flex-start' }}>
        {/* Number */}
        <span style={{
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.10em',
          color: 'rgba(255,255,255,0.15)',
          paddingTop: '6px',
          flexShrink: 0,
          minWidth: '28px',
        }}>
          {project.number}
        </span>

        {/* Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}>
              {project.title}
            </h2>
            {project.status && (
              <span style={{
                fontSize: '9px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(200,136,74,0.75)',
                border: '1px solid rgba(200,136,74,0.25)',
                borderRadius: '999px',
                padding: '4px 10px',
              }}>
                {project.status}
              </span>
            )}
          </div>
          <p style={{
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.65,
            marginBottom: '14px',
            maxWidth: '520px',
          }}>
            {project.description}
          </p>
          <p style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#E6A15A',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.20)', fontWeight: 400, marginRight: '7px' }}>Role</span>
            {project.role}
          </p>
        </div>
      </div>

      {/* Right: CTA */}
      <CtaButton href={project.href} />
    </div>
  )
}

const btnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.35)',
  background: 'none',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '999px',
  padding: '10px 20px',
  cursor: 'pointer',
  whiteSpace: 'nowrap' as const,
  flexShrink: 0,
  textDecoration: 'none',
  transition: 'color 0.25s ease, border-color 0.25s ease, background 0.25s ease',
}

function CtaButton({ href }: { href?: string }) {
  const inner = (
    <>
      View Case Study
      <span style={{ fontSize: '14px', lineHeight: 1 }}>→</span>
    </>
  )

  const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = '#E6A15A'
    e.currentTarget.style.borderColor = 'rgba(230,161,90,0.40)'
    e.currentTarget.style.background = 'rgba(230,161,90,0.06)'
  }
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
    e.currentTarget.style.background = 'none'
  }

  if (href) {
    return (
      <Link href={href} style={btnStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        {inner}
      </Link>
    )
  }

  return (
    <button style={btnStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      {inner}
    </button>
  )
}
