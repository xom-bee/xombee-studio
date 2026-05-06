'use client'

import { useReveal } from '@/hooks/use-reveal'
import { useState } from 'react'

const designSkills = [
  { name: 'Brand Identity', desc: 'Marks and systems built to carry meaning.' },
  { name: 'UI/UX Design', desc: 'Interfaces that feel intuitive and alive.' },
  { name: 'Visual Design', desc: 'Every element placed with intention.' },
  { name: 'Wireframing', desc: 'Structure before style. Clarity first.' },
  { name: 'Prototyping', desc: 'Ideas made real, fast and testable.' },
]

const tools = [
  {
    name: 'Figma',
    desc: 'Primary tool for UI, identity systems, and prototypes.',
    icon: (
      <svg viewBox="0 0 38 57" fill="none" className="w-6 h-6">
        <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="oklch(0.78 0.12 55)" />
        <path d="M9.5 57A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57z" fill="oklch(0.78 0.12 55 / 0.5)" />
        <path d="M19 0H9.5A9.5 9.5 0 0 0 9.5 19H19z" fill="oklch(0.78 0.12 55 / 0.7)" />
        <path d="M19 0h9.5A9.5 9.5 0 0 1 28.5 19H19z" fill="oklch(0.78 0.12 55 / 0.9)" />
        <path d="M19 19h9.5A9.5 9.5 0 0 1 28.5 38H19z" fill="oklch(0.78 0.12 55 / 0.6)" />
      </svg>
    ),
  },
  {
    name: 'VS Code',
    desc: 'Building and refining design systems in code.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.55 0.14 240 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.70 0.12 240)" fontSize="11" fontWeight="700">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    desc: 'Image treatment, compositing, and visual polish.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.6 0.14 220 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.7 0.12 220)" fontSize="13" fontWeight="700">Ps</text>
      </svg>
    ),
  },
  {
    name: 'Canva',
    desc: 'Rapid content design and client deliverables.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="20" fill="oklch(0.65 0.15 190 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.7 0.12 190)" fontSize="13" fontWeight="700">Ca</text>
      </svg>
    ),
  },
]

const strengths = [
  'Design with intention',
  'Listen before creating',
  'Translate feeling into form',
  'Build with clarity and structure',
  'Focus on user experience first',
  'Deliver clean and scalable work',
]

function SkillItem({ name, desc }: { name: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        cursor: 'default',
        transition: 'transform 0.2s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
    >
      {/* Left dot indicator */}
      <div style={{
        width: '3px',
        height: '3px',
        borderRadius: '50%',
        background: '#E6A15A',
        opacity: hovered ? 0.9 : 0.35,
        marginTop: '7px',
        flexShrink: 0,
        transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
        boxShadow: hovered ? '0 0 6px rgba(230,161,90,0.7)' : 'none',
      }} />
      <div>
        <p style={{
          fontSize: '14px',
          fontWeight: 500,
          color: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.78)',
          marginBottom: '4px',
          letterSpacing: '0.01em',
          transition: 'color 0.2s ease',
        }}>{name}</p>
        <p style={{
          fontSize: '12px',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.22)',
          lineHeight: 1.6,
        }}>{desc}</p>
      </div>
    </div>
  )
}

function ToolItem({ tool }: { tool: typeof tools[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        padding: '10px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        cursor: 'default',
        transition: 'transform 0.2s ease',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
    >
      <div style={{
        flexShrink: 0,
        filter: hovered ? 'drop-shadow(0 0 6px rgba(230,161,90,0.45))' : 'none',
        transition: 'filter 0.25s ease',
        marginTop: '2px',
      }}>
        {tool.icon}
      </div>
      <div>
        <p style={{
          fontSize: '13px',
          fontWeight: 500,
          color: hovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.75)',
          marginBottom: '3px',
          transition: 'color 0.2s ease',
        }}>{tool.name}</p>
        <p style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.22)',
          lineHeight: 1.6,
        }}>{tool.desc}</p>
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="skills" style={{ background: 'transparent', paddingTop: 'clamp(48px, 7vw, 80px)', paddingBottom: 'clamp(48px, 7vw, 80px)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''}`} style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E6A15A', display: 'block', marginBottom: '14px' }}>
            Capabilities
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance" style={{ marginBottom: '12px' }}>
            What I Bring to Your <span style={{ color: 'oklch(0.78 0.12 55)', textShadow: '0 0 20px oklch(0.78 0.12 55 / 0.25)' }}>Brand</span>
          </h2>
          <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.30)', lineHeight: 1.65 }}>
            Design, development, and identity systems that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ alignItems: 'stretch' }}>

          {/* Design Skills */}
          <SkillsCard>
            <h3 style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E6A15A', marginBottom: '24px' }}>
              Design Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {designSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} desc={skill.desc} />
              ))}
            </div>
          </SkillsCard>

          {/* Tools */}
          <SkillsCard prominent>
            <h3 style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E6A15A', marginBottom: '20px' }}>
              Tools
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {tools.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </div>
          </SkillsCard>

          {/* Strengths */}
          <SkillsCard>
            <h3 style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E6A15A', marginBottom: '24px' }}>
              Strengths
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {strengths.map((strength) => (
                <StrengthItem key={strength} label={strength} />
              ))}
            </div>
          </SkillsCard>

        </div>
      </div>
    </section>
  )
}

function StrengthItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        cursor: 'default',
        transition: 'transform 0.2s ease',
        transform: hovered ? 'translateX(5px)' : 'translateX(0)',
      }}
    >
      <div style={{
        width: '20px',
        height: '1px',
        background: '#E6A15A',
        opacity: hovered ? 0.8 : 0.25,
        flexShrink: 0,
        transition: 'opacity 0.2s ease, width 0.2s ease',
      }} />
      <p style={{
        fontSize: '14px',
        fontWeight: 500,
        color: hovered ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.50)',
        transition: 'color 0.2s ease',
      }}>
        {label}
      </p>
    </div>
  )
}

function SkillsCard({ children, prominent }: { children: React.ReactNode; prominent?: boolean }) {
  const { ref, revealed } = useReveal()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      className={`rounded-2xl reveal ${revealed ? 'revealed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: '100%',
        background: prominent
          ? 'rgba(230,161,90,0.03)'
          : 'rgba(255,255,255,0.02)',
        border: hovered
          ? `1px solid rgba(230,161,90,${prominent ? '0.30' : '0.20'})`
          : `1px solid ${prominent ? 'rgba(230,161,90,0.10)' : 'rgba(255,255,255,0.05)'}`,
        padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 32px)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.35), 0 0 28px rgba(230,161,90,${prominent ? '0.12' : '0.07'})`
          : prominent ? '0 0 0 1px rgba(230,161,90,0.04)' : 'none',
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {children}
    </div>
  )
}
