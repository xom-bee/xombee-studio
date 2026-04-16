'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'

const steps = [
  {
    number: '01',
    title: 'Discover',
    week: 'Week 1',
    description: 'Understanding who you are before the world tells you. We dig deep — into your sound, your story, your silence.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="8" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2" fill="oklch(0.78 0.12 55)" />
        <line x1="16" y1="2" x2="16" y2="8" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="16" x2="8" y2="16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="30" y2="16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Listen',
    week: 'Week 2',
    description: 'Translating sound into feeling. We absorb your music, your mood, and what makes your art ache beautifully.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 12 C8 8 12 5 16 5 C20 5 24 8 24 12 L24 18 C24 22 20 26 16 26" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="20" y2="30" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Direction',
    week: 'Weeks 3–4',
    description: 'Where multiple futures become one vision. We map possibilities, compare paths, and choose the one that resonates.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="6" y1="26" x2="26" y2="6" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="16,6 26,6 26,16" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="24" r="3" stroke="oklch(0.78 0.12 55)" strokeWidth="1" fill="oklch(0.78 0.12 55 / 0.2)" />
        <circle cx="24" cy="8" r="3" fill="oklch(0.78 0.12 55)" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Create',
    week: 'Weeks 5–7',
    description: 'Bringing the invisible into view. The identity takes shape — colors, marks, type, texture — all in service of your truth.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26 L12 20 L18 24 L26 10" stroke="oklch(0.78 0.12 55)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="10" r="3" fill="oklch(0.78 0.12 55)" />
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="oklch(0.78 0.12 55 / 0.2)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Deliver & Refine',
    week: 'Week 8',
    description: 'A living system, not a finished product. We hand you tools that evolve with your music, your growth, your becoming.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="6,16 13,23 26,9" stroke="oklch(0.78 0.12 55)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="13" stroke="oklch(0.78 0.12 55 / 0.3)" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  const { ref, revealed } = useReveal()
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.78 0.12 55 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`mb-16 text-center reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            My Process
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">The Journey</h2>
          <p className="text-muted-foreground text-lg">How Identity Takes Shape</p>
        </div>

        {/* Steps — desktop timeline */}
        <div className="hidden lg:block">
          {/* Step indicators */}
          <div className="flex items-center gap-0 mb-16">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center flex-1">
                <button
                  onClick={() => setActiveStep(i)}
                  className="relative flex flex-col items-center gap-3 group w-full"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 border"
                    style={{
                      background: activeStep === i ? 'oklch(0.78 0.12 55 / 0.15)' : 'oklch(0.09 0 0)',
                      borderColor: activeStep === i ? 'oklch(0.78 0.12 55)' : 'oklch(0.18 0 0)',
                      boxShadow: activeStep === i ? '0 0 20px oklch(0.78 0.12 55 / 0.3)' : 'none',
                    }}
                  >
                    <div
                      className="transition-opacity duration-300"
                      style={{ opacity: activeStep === i ? 1 : 0.4 }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <span
                    className="text-xs tracking-widest uppercase font-medium transition-colors duration-300"
                    style={{ color: activeStep === i ? 'oklch(0.78 0.12 55)' : 'oklch(0.55 0 0)' }}
                  >
                    {step.title}
                  </span>
                  <span className="text-[10px] tracking-wide text-muted-foreground">{step.week}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className="h-px flex-1 mx-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-border" />
                    <div
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        background: 'oklch(0.78 0.12 55)',
                        width: activeStep > i ? '100%' : '0%',
                        boxShadow: '0 0 8px oklch(0.78 0.12 55 / 0.6)',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active step detail */}
          <div
            className="rounded-2xl border border-border/40 p-10 glow-border transition-all duration-500"
            style={{ background: 'oklch(0.09 0 0)' }}
          >
            <div className="flex items-start gap-8">
              <div
                className="text-7xl font-serif font-bold leading-none opacity-10 select-none flex-shrink-0"
                style={{ color: 'oklch(0.78 0.12 55)' }}
              >
                {steps[activeStep].number}
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold mb-3">{steps[activeStep].title}</h3>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-6" style={{ color: 'oklch(0.78 0.12 55)' }}>
                  {steps[activeStep].week}
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stacked steps */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const { ref: stepRef, revealed: stepRevealed } = useReveal()
            return (
              <div
                key={step.number}
                ref={stepRef}
                className={`reveal ${stepRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="rounded-2xl border border-border/40 p-6" style={{ background: 'oklch(0.09 0 0)' }}>
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border"
                      style={{ borderColor: 'oklch(0.78 0.12 55 / 0.4)', background: 'oklch(0.78 0.12 55 / 0.08)' }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <span className="text-xs text-muted-foreground">{step.week}</span>
                    </div>
                    <span
                      className="ml-auto text-2xl font-serif font-bold opacity-20"
                      style={{ color: 'oklch(0.78 0.12 55)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
