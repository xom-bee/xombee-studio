'use client'

import { useReveal } from '@/hooks/use-reveal'
import { useState } from 'react'

const designSkills = [
  { name: 'UI/UX Design', level: 92 },
  { name: 'Visual Design', level: 95 },
  { name: 'Wireframing', level: 88 },
  { name: 'Prototyping', level: 85 },
  { name: 'Brand Identity', level: 97 },
]

const tools = [
  {
    name: 'Figma',
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
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.65 0.15 55 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.78 0.12 55)" fontSize="14" fontWeight="700">Ai</text>
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.6 0.14 220 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.7 0.12 220)" fontSize="13" fontWeight="700">Ps</text>
      </svg>
    ),
  },
  {
    name: 'Canva',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="20" fill="oklch(0.65 0.15 190 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.7 0.12 190)" fontSize="13" fontWeight="700">Ca</text>
      </svg>
    ),
  },
  {
    name: 'After Effects',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="oklch(0.55 0.12 280 / 0.2)" />
        <text x="20" y="26" textAnchor="middle" fill="oklch(0.7 0.10 280)" fontSize="13" fontWeight="700">Ae</text>
      </svg>
    ),
  },
]

const strengths = [
  'Creative Thinking',
  'Problem Solving',
  'Attention to Detail',
  'Communication',
  'Adaptability',
  'Time Management',
]

function SkillBar({ name, level, revealed }: { name: string; level: number; revealed: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground/80">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-0.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: revealed ? `${level}%` : '0%',
            background: 'oklch(0.78 0.12 55)',
            boxShadow: '0 0 8px oklch(0.78 0.12 55 / 0.6)',
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, revealed } = useReveal()
  const [hoveredStrength, setHoveredStrength] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Capabilities
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            Skills & <span className="text-glow" style={{ color: 'oklch(0.78 0.12 55)' }}>Tools</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Design Skills */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Design Skills
            </h3>
            <div className="space-y-5">
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} revealed={revealed} />
              ))}
            </div>
          </SkillsCard>

          {/* Tools */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Tools
            </h3>
            <div className="space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5 group"
                >
                  <div className="flex-shrink-0">{tool.icon}</div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tool.name}</span>
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </SkillsCard>

          {/* Strengths */}
          <SkillsCard revealed={revealed}>
            <h3 className="font-semibold text-foreground mb-6 text-sm tracking-widest uppercase" style={{ color: 'oklch(0.78 0.12 55)' }}>
              Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <button
                  key={strength}
                  onMouseEnter={() => setHoveredStrength(strength)}
                  onMouseLeave={() => setHoveredStrength(null)}
                  className="px-4 py-2.5 rounded-xl text-sm border transition-all duration-300"
                  style={{
                    background: hoveredStrength === strength ? 'oklch(0.78 0.12 55 / 0.12)' : 'oklch(0.12 0 0)',
                    borderColor: hoveredStrength === strength ? 'oklch(0.78 0.12 55 / 0.5)' : 'oklch(0.18 0 0)',
                    color: hoveredStrength === strength ? 'oklch(0.78 0.12 55)' : 'oklch(0.55 0 0)',
                    transform: hoveredStrength === strength ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredStrength === strength ? '0 0 15px oklch(0.78 0.12 55 / 0.15)' : 'none',
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
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border/40 p-8 reveal ${cardRevealed ? 'revealed' : ''}`}
      style={{ background: 'oklch(0.09 0 0)' }}
    >
      {children}
    </div>
  )
}
