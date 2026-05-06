'use client'

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding the problem and user needs',
    delay: '0s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <line x1="19.5" y1="19.5" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Wireframes',
    description: 'Structuring layout and user flow',
    delay: '0.7s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="14" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="14" width="8" height="4" rx="1" fill="currentColor" opacity="0.35" />
        <rect x="17" y="21" width="5" height="4" rx="1" fill="currentColor" opacity="0.20" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'UI Design',
    description: 'Designing clean and modern interfaces',
    delay: '1.4s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="11.5" y1="14" x2="14.5" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="20.5" y1="14" x2="17.5" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building responsive and functional interfaces',
    delay: '2.1s',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="10,10 4,16 10,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,10 28,16 22,22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="19" y1="8" x2="13" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: 'transparent',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)',
      }}
    >
      <style>{`
        @keyframes process-float {
          0%, 100% { transform: translateY(0px);  opacity: 0.40; }
          50%       { transform: translateY(-6px); opacity: 0.72; }
        }
        .process-icon-wrap {
          animation: process-float 3s ease-in-out infinite;
        }
        .process-card {
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }
        .process-card:hover {
          transform: translateY(-3px);
          border-color: rgba(230,161,90,0.25) !important;
          box-shadow: 0 10px 32px rgba(0,0,0,0.38);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(28px, 4vw, 40px)' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E6A15A',
            marginBottom: '14px',
          }}>
            My Process
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}>
            How I work
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card"
              style={{
                position: 'relative',
                background: '#111115',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '24px 24px 52px',
                overflow: 'hidden',
              }}
            >
              {/* Step label */}
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(230,161,90,0.55)',
                marginBottom: '10px',
              }}>
                Step {step.number}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(16px, 1.8vw, 20px)',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '6px',
                letterSpacing: '-0.01em',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(12px, 1.1vw, 13px)',
                color: 'rgba(255,255,255,0.38)',
                lineHeight: 1.65,
              }}>
                {step.description}
              </p>

              {/* Animated icon — bottom left */}
              <div
                className="process-icon-wrap"
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  color: '#E6A15A',
                  animationDelay: step.delay,
                }}
              >
                {step.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
