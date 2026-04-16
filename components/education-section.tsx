'use client'

import { useReveal } from '@/hooks/use-reveal'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function EducationSection() {
  const { ref, revealed } = useReveal()
  const { ref: cardRef, revealed: cardRevealed } = useReveal()

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`mb-16 reveal ${revealed ? 'revealed' : ''}`}>
          <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'oklch(0.78 0.12 55)' }}>
            Education
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-balance">
            The Foundation
          </h2>
        </div>

        <div ref={cardRef} className={`reveal ${cardRevealed ? 'revealed' : ''}`}>
          <div
            className="relative rounded-2xl border border-border/40 p-8 md:p-12 overflow-hidden glow-border"
            style={{ background: 'oklch(0.09 0 0)' }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-[0.04]"
              style={{
                background: 'radial-gradient(circle, oklch(0.78 0.12 55) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'oklch(0.78 0.12 55 / 0.12)', border: '1px solid oklch(0.78 0.12 55 / 0.3)' }}
              >
                <GraduationCap size={28} style={{ color: 'oklch(0.78 0.12 55)' }} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Bachelor in Interactive Design and Development
                    </h3>
                    <p className="text-lg font-medium" style={{ color: 'oklch(0.78 0.12 55)' }}>
                      Gyalpozhing College of Information Technology
                    </p>
                  </div>
                  <span
                    className="px-4 py-2 rounded-full text-xs tracking-wide border flex-shrink-0 self-start"
                    style={{
                      background: 'oklch(0.78 0.12 55 / 0.08)',
                      borderColor: 'oklch(0.78 0.12 55 / 0.3)',
                      color: 'oklch(0.78 0.12 55)',
                    }}
                  >
                    Completed
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin size={13} style={{ color: 'oklch(0.78 0.12 55)' }} />
                    Bhutan
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={13} style={{ color: 'oklch(0.78 0.12 55)' }} />
                    Interactive Design & Development
                  </div>
                </div>

                {/* Key subjects */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['User Interface Design', 'User Experience', 'Brand Identity', 'Web Development', 'Visual Communication', 'Digital Media'].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full text-xs border border-border/40 text-muted-foreground"
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
