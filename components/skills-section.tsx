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
    name: 'Illustrator',
    desc: 'Vector marks, logos, and detailed brand assets.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.65 0.15 55 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="14" fontWeight="700">Ai</text>
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
]

const strengths = [
  'Design with intention',
  'Listen before creating',
  'Translate feeling into form',
  'Deliver with care',
]

function SkillItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div>
      <p style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.78)', marginBottom: '5px', letterSpacing: '0.01em' }}>{name}</p>
      <p style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.24)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}

export function SkillsSection() {
  const { ref, revealed } = useReveal()
  const [hoveredStrength, setHoveredStrength] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 px-6" style={{ background: '#0B0B0F' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} className={`mb-16 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Capabilities
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            What I Bring to Your <span style={{ color: 'oklch(0.78 0.12 55)', textShadow: '0 0 20px oklch(0.78 0.12 55 / 0.25)' }}>Identity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ alignItems: 'start' }}>
          {/* Design Skills */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Design Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {designSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} desc={skill.desc} />
              ))}
            </div>
          </SkillsCard>

          {/* Tools */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Tools
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-start gap-4 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5 group"
                  style={{ padding: '12px 14px' }}
                >
                  <div className="shrink-0 mt-0.5">{tool.icon}</div>
                  <div>
                    <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors font-medium">{tool.name}</p>
                    <p className="text-xs mt-0.5 transition-colors" style={{ color: 'rgba(255,255,255,0.28)' }}>{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SkillsCard>

          {/* Strengths */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Strengths
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {strengths.map((strength) => (
                <button
                  key={strength}
                  onMouseEnter={() => setHoveredStrength(strength)}
                  onMouseLeave={() => setHoveredStrength(null)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    fontWeight: 500,
                    textAlign: 'left',
                    border: `1px solid ${hoveredStrength === strength ? 'oklch(0.78 0.12 55 / 0.35)' : 'rgba(255,255,255,0.07)'}`,
                    background: hoveredStrength === strength ? 'oklch(0.78 0.12 55 / 0.08)' : 'transparent',
                    color: hoveredStrength === strength ? 'oklch(0.82 0.10 55)' : 'rgba(255,255,255,0.45)',
                    boxShadow: hoveredStrength === strength ? '0 0 18px oklch(0.78 0.12 55 / 0.10)' : 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    width: '100%',
                  }}
                >
                  {strength}
                </button>
              ))}
            </div>
          </SkillsCard>
        </div>
      </div>
    </section>
  )
}

function SkillsCard({ children, revealed }: { children: React.ReactNode; revealed: boolean }) {
  const { ref, revealed: cardRevealed } = useReveal()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      className={`rounded-2xl reveal ${cardRevealed ? 'revealed' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(200,136,74,0.20)' : 'rgba(255,255,255,0.05)'}`,
        padding: 'clamp(24px, 3vw, 36px) clamp(18px, 2.5vw, 32px)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.3), 0 0 24px oklch(0.78 0.12 55 / 0.08)' : 'none',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
      }}
    >
      {children}
    </div>
  )
}
