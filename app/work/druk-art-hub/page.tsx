'use client'

import Link from 'next/link'

const color = 'oklch(0.75 0.15 55)'
const accent = '#E6A15A'

// ─── Inline procedural visuals ──────────────────────────────────────────────

function Visual1() {
  return (
    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="400" fill="oklch(0.09 0 0)" />
      {[
        { x: 40, y: 40, w: 200, h: 240 },
        { x: 260, y: 40, w: 200, h: 160 },
        { x: 480, y: 40, w: 280, h: 240 },
        { x: 260, y: 220, w: 200, h: 140 },
        { x: 40, y: 300, w: 200, h: 80 },
        { x: 260, y: 380, w: 500, h: 80 },
      ].map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx="10"
          fill={color} opacity={0.10 + i * 0.04}
          stroke={color} strokeWidth="1" strokeOpacity="0.25" />
      ))}
      <circle cx="680" cy="300" r="60" stroke={color} strokeWidth="1.5" fill="none" opacity="0.35" />
      <path d="M655 300 L680 275 L705 300 L680 325 Z" fill={color} opacity="0.28" />
    </svg>
  )
}

function Visual2() {
  return (
    <svg viewBox="0 0 800 320" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="320" fill="oklch(0.09 0 0)" />
      <circle cx="400" cy="110" r="56" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.14" />
      <rect x="240" y="182" width="320" height="14" rx="7" fill={color} opacity="0.35" />
      <rect x="280" y="204" width="240" height="9" rx="4" fill={color} opacity="0.18" />
      {[[80,240],[280,240],[480,240]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="160" height="60" rx="10" fill={color} opacity={0.10 + i * 0.04} />
      ))}
    </svg>
  )
}

function Visual3() {
  return (
    <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="300" fill="oklch(0.09 0 0)" />
      <rect x="60" y="40" width="300" height="220" rx="14" stroke={color} strokeWidth="1" fill="none" opacity="0.22" />
      <rect x="420" y="40" width="320" height="220" rx="14" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />
      <rect x="80" y="60" width="260" height="110" rx="8" fill={color} opacity="0.16" />
      <rect x="80" y="186" width="260" height="28" rx="4" fill={color} opacity="0.12" />
      <rect x="440" y="60" width="280" height="18" rx="4" fill={color} opacity="0.28" />
      <rect x="440" y="88" width="200" height="12" rx="4" fill={color} opacity="0.16" />
      <rect x="440" y="108" width="240" height="12" rx="4" fill={color} opacity="0.12" />
      <rect x="440" y="200" width="280" height="36" rx="18" fill={color} opacity="0.42" />
    </svg>
  )
}

// ─── Section title component ────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: '16px',
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: 'clamp(48px, 6vw, 64px) 0' }} />
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function DrukArtHubPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <main style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: 'clamp(120px, 14vw, 160px) clamp(24px, 6vw, 48px) clamp(80px, 10vw, 120px)',
      }}>

        {/* Back */}
        <Link
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            textDecoration: 'none',
            marginBottom: 'clamp(40px, 5vw, 56px)',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = accent }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.30)' }}
        >
          ← All Work
        </Link>

        {/* ── 1. Project Overview ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Case Study</SectionLabel>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.06,
            color: '#FFFFFF',
            marginBottom: '24px',
          }}>
            Druk Art Hub
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            A digital platform designed to help Bhutanese artists showcase their work
            and connect with a wider audience.
          </p>

          {/* Meta */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '0',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            {[
              { label: 'Duration', value: 'Feb 2025 – June 2025' },
              { label: 'Role', value: 'UI/UX Design · Branding' },
              { label: 'Team', value: 'Individual Project' },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: '20px 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '8px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual 1 */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
          aspectRatio: '2 / 1',
        }}>
          <Visual1 />
        </div>

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed the overall user interface and layout',
              'Developed the visual identity and branding direction',
              'Structured the user experience for better content flow',
              'Focused on clean and minimal presentation of artwork',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '10px', fontWeight: 500, letterSpacing: '0.10em',
                  color: accent, paddingTop: '5px', flexShrink: 0, opacity: 0.7,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.60)', lineHeight: 1.7 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 3 & 4. Problem + Goal ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(32px, 5vw, 56px)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
        }}>
          <div>
            <SectionLabel>Problem</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
                Artists lacked a clear and structured way to present their work online.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                Existing platforms did not reflect their identity or cultural context.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To design a platform that allows artists to showcase their work clearly
              while maintaining identity and emotional depth.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
          aspectRatio: '2.5 / 1',
        }}>
          <Visual2 />
        </div>

        <Divider />

        {/* ── 5. Process ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Process</SectionLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}>
            {['Research', 'Wireframing', 'UI Design', 'Final Interface'].map((step, i, arr) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: i === arr.length - 1 ? accent : 'rgba(255,255,255,0.65)',
                  letterSpacing: '0.02em',
                  padding: '10px 16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  background: i === arr.length - 1 ? 'rgba(230,161,90,0.08)' : 'transparent',
                  whiteSpace: 'nowrap',
                }}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px', padding: '0 6px' }}>→</span>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: '520px' }}>
            Started with understanding the needs of Bhutanese artists through observation.
            Moved through structured wireframes into a refined visual interface that balances
            cultural context with modern usability.
          </p>
        </div>

        <Divider />

        {/* ── 6. Design Decisions ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Design Decisions</SectionLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            {[
              'Used a minimal layout to keep focus on artwork',
              'Applied strong visual hierarchy for better readability',
              'Balanced modern UI with cultural elements',
              'Maintained consistency across all sections',
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: accent, opacity: 0.55, marginBottom: '12px',
                }} />
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: 1.7 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual 3 */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
          aspectRatio: '2.67 / 1',
        }}>
          <Visual3 />
        </div>

        <Divider />

        {/* ── 7. Outcome ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <SectionLabel>Outcome</SectionLabel>
          <p style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '620px',
          }}>
            The final design provides a clearer and more structured way for artists to
            present their work, improving both usability and visual experience.
          </p>
        </div>

        {/* ── Footer nav ──────────────────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <Link
            href="/work"
            style={{
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = accent }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
          >
            ← All Work
          </Link>
          <Link
            href="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0B0B0F',
              background: accent,
              borderRadius: '999px',
              padding: '12px 24px',
              textDecoration: 'none',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d4904d'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = accent
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Start a Project →
          </Link>
        </div>

      </main>
    </div>
  )
}
