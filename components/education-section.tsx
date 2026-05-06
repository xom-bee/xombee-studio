'use client'

import { useReveal } from '@/hooks/use-reveal'
import { GraduationCap } from 'lucide-react'

export function EducationSection() {
  const { ref, revealed } = useReveal()
  const { ref: cardRef, revealed: cardRevealed } = useReveal()

  return (
    <section id="education" className="px-6" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(48px, 7vw, 88px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 72px)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`reveal ${revealed ? 'revealed' : ''}`} style={{ marginBottom: '40px', maxWidth: '860px', margin: '0 auto 40px' }}>
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Education
          </span>
          <h2 className="font-serif font-bold text-balance" style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>
            The Foundation
          </h2>
        </div>

        <div ref={cardRef} className={`reveal ${cardRevealed ? 'revealed' : ''}`} style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            className="relative rounded-2xl border border-border/40 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)', padding: '24px 28px' }}
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'oklch(0.78 0.12 55 / 0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <GraduationCap size={22} style={{ color: 'oklch(0.78 0.12 55)' }} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '6px' }}>
                      Bachelor in Interactive Design and Development
                    </h3>
                    <p style={{ fontSize: '13px', color: 'oklch(0.78 0.12 55)', fontWeight: 500 }}>
                      Gyalpozhing College of Information Technology
                    </p>
                  </div>
                </div>

                {/* Key subjects */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                  {['UI/UX Design', 'Brand Identity', 'Web Development'].map((subject) => (
                    <span
                      key={subject}
                      style={{
                        padding: '5px 14px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.30)',
                      }}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
