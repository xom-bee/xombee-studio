'use client'

import Link from 'next/link'

const color = 'oklch(0.75 0.15 55)'
const accent = '#E6A15A'

// ─── Inline procedural visuals ──────────────────────────────────────────────

// Visual 1: QR scan landing screen on mobile
function Visual1() {
  return (
    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="400" fill="oklch(0.09 0 0)" />
      {/* Phone frame */}
      <rect x="270" y="20" width="260" height="360" rx="28" stroke={color} strokeWidth="1.5" fill="oklch(0.07 0 0)" fillOpacity="0.9" />
      {/* Camera notch */}
      <rect x="352" y="30" width="96" height="12" rx="6" fill="oklch(0.09 0 0)" opacity="0.8" />
      {/* Restaurant name */}
      <rect x="310" y="64" width="180" height="16" rx="8" fill={color} opacity="0.30" />
      <rect x="336" y="88" width="128" height="9" rx="4" fill={color} opacity="0.14" />
      {/* QR code block */}
      <rect x="310" y="116" width="180" height="180" rx="14" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.8" strokeOpacity="0.25" />
      {/* QR grid approximation */}
      {[0,1,2,3,4,5,6].map((row) =>
        [0,1,2,3,4,5,6].map((col) => {
          const isCorner = (row < 2 && col < 2) || (row < 2 && col > 4) || (row > 4 && col < 2)
          const show = isCorner || Math.sin(row * 7 + col * 3) > 0
          return show ? (
            <rect key={`${row}-${col}`}
              x={326 + col * 22} y={132 + row * 22}
              width="16" height="16" rx="3"
              fill={color} opacity={isCorner ? 0.40 : 0.18} />
          ) : null
        })
      )}
      {/* Scan label */}
      <rect x="322" y="310" width="156" height="10" rx="5" fill={color} opacity="0.20" />
      {/* CTA button */}
      <rect x="310" y="332" width="180" height="30" rx="15" fill={color} opacity="0.38" />
      <rect x="356" y="342" width="88" height="9" rx="4" fill="oklch(0.09 0 0)" opacity="0.55" />
      {/* Table card context */}
      <rect x="40" y="80" width="180" height="240" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      <rect x="64" y="108" width="132" height="80" rx="10" fill={color} opacity="0.10" />
      <rect x="64" y="204" width="80" height="9" rx="4" fill={color} opacity="0.22" />
      <rect x="64" y="220" width="120" height="7" rx="3" fill={color} opacity="0.13" />
      <rect x="64" y="248" width="132" height="28" rx="14" fill={color} opacity="0.25" />
      {/* Right info panel */}
      <rect x="580" y="80" width="180" height="240" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="598" y={108 + i * 52} width="40" height="40" rx="8" fill={color} opacity={0.08 + i * 0.04} />
          <rect x="648" y={114 + i * 52} width="80" height="9" rx="4" fill={color} opacity="0.22" />
          <rect x="648" y={130 + i * 52} width="60" height="7" rx="3" fill={color} opacity="0.13" />
        </g>
      ))}
    </svg>
  )
}

// Visual 2: Mobile menu browsing UI — categories + item list
function Visual2() {
  return (
    <svg viewBox="0 0 800 360" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="360" fill="oklch(0.09 0 0)" />
      {/* Phone shell */}
      <rect x="60" y="20" width="240" height="320" rx="24" stroke={color} strokeWidth="1.2" fill="oklch(0.07 0 0)" fillOpacity="0.95" />
      {/* Status bar */}
      <rect x="80" y="36" width="200" height="8" rx="4" fill={color} opacity="0.10" />
      {/* Search bar */}
      <rect x="76" y="56" width="208" height="24" rx="12" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.6" strokeOpacity="0.20" />
      <rect x="90" y="63" width="100" height="8" rx="4" fill={color} opacity="0.16" />
      {/* Category pills */}
      {['Starters', 'Mains', 'Desserts', 'Drinks'].map((_, i) => (
        <rect key={i} x={76 + i * 54} y={92} width={i === 0 ? 50 : 46} height={22} rx={11}
          fill={i === 0 ? color : 'transparent'}
          fillOpacity={i === 0 ? 0.35 : 0}
          stroke={color} strokeWidth="0.7"
          strokeOpacity={i === 0 ? 0.50 : 0.18} />
      ))}
      {/* Menu items */}
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x="76" y={128 + i * 52} width="208" height="44" rx="10"
            fill={color} fillOpacity={i === 0 ? 0.10 : 0.04}
            stroke={color} strokeWidth="0.6" strokeOpacity={i === 0 ? 0.28 : 0.12} />
          <rect x="88" y={137 + i * 52} width="36" height="26" rx="6" fill={color} opacity={0.12 + i * 0.02} />
          <rect x="134" y={141 + i * 52} width="80" height="8" rx="4" fill={color} opacity="0.26" />
          <rect x="134" y={156 + i * 52} width="54" height="6" rx="3" fill={color} opacity="0.14" />
          <rect x="236" y={143 + i * 52} width="32" height="12" rx="6" fill={i === 0 ? color : 'transparent'}
            fillOpacity={i === 0 ? 0.38 : 0} stroke={color} strokeWidth="0.6" strokeOpacity="0.22" />
        </g>
      ))}
      {/* Right: tablet/desktop view */}
      <rect x="340" y="20" width="420" height="320" rx="16" stroke={color} strokeWidth="1" fill="oklch(0.08 0 0)" fillOpacity="0.95" />
      {/* Top nav */}
      <rect x="340" y="20" width="420" height="36" rx="0" fill={color} fillOpacity="0.06" />
      <rect x="360" y="30" width="60" height="10" rx="5" fill={color} opacity="0.28" />
      {['All','Starters','Mains','Drinks'].map((_, i) => (
        <rect key={i} x={440 + i * 72} y={28} width={60} height={12} rx={6}
          fill={i === 0 ? color : 'none'} fillOpacity={i === 0 ? 0.30 : 0}
          stroke={color} strokeWidth="0.6" strokeOpacity={i === 0 ? 0.40 : 0.15} />
      ))}
      {/* Grid of items */}
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x={352 + (i % 3) * 136} y={72 + Math.floor(i / 3) * 128} width={120} height={110} rx={10}
            fill={color} fillOpacity={0.06 + (i % 2) * 0.02}
            stroke={color} strokeWidth="0.6" strokeOpacity="0.16" />
          <rect x={358 + (i % 3) * 136} y={78 + Math.floor(i / 3) * 128} width={108} height={66} rx={8} fill={color} opacity={0.09 + i * 0.02} />
          <rect x={358 + (i % 3) * 136} y={152 + Math.floor(i / 3) * 128} width={72} height={8} rx={4} fill={color} opacity="0.24" />
          <rect x={358 + (i % 3) * 136} y={166 + Math.floor(i / 3) * 128} width={50} height={6} rx={3} fill={color} opacity="0.14" />
        </g>
      ))}
    </svg>
  )
}

// Visual 3: Order flow + confirmation screen
function Visual3() {
  return (
    <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="300" fill="oklch(0.09 0 0)" />
      {/* Step indicators */}
      {['Scan', 'Browse', 'Select', 'Confirm'].map((label, i) => (
        <g key={i}>
          <circle cx={100 + i * 180} cy={50} r={20}
            fill={i < 3 ? color : 'transparent'} fillOpacity={i < 3 ? (i === 2 ? 0.40 : 0.18) : 0}
            stroke={color} strokeWidth={i === 2 ? '1.8' : '0.8'}
            strokeOpacity={i === 3 ? 0.22 : 0.40} />
          <text x={100 + i * 180} y={55} textAnchor="middle"
            fill={color} fontSize="10" fontWeight={i === 2 ? '700' : '400'} opacity={i === 2 ? 0.80 : 0.35}>
            {i + 1}
          </text>
          {i < 3 && (
            <rect x={120 + i * 180} y={48} width={120} height={4} rx={2}
              fill={color} opacity={i < 2 ? 0.28 : 0.10} />
          )}
          <rect x={60 + i * 180} y={80} width={80} height={7} rx={3.5}
            fill={color} opacity={i === 2 ? 0.30 : 0.14} />
        </g>
      ))}
      {/* Order summary panel */}
      <rect x="40" y="108" width="320" height="168" rx="14" fill={color} fillOpacity="0.05" stroke={color} strokeWidth="0.8" strokeOpacity="0.20" />
      <rect x="60" y="124" width="100" height="10" rx="5" fill={color} opacity="0.28" />
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x="60" y={150 + i * 36} width="28" height="22" rx="6" fill={color} opacity="0.12" />
          <rect x="98" y={155 + i * 36} width="120" height="8" rx="4" fill={color} opacity="0.22" />
          <rect x="98" y={168 + i * 36} width="72" height="6" rx="3" fill={color} opacity="0.12" />
          <rect x="290" y={155 + i * 36} width="48" height="8" rx="4" fill={color} opacity="0.20" />
        </g>
      ))}
      <rect x="40" y="252" width="320" height="1" fill={color} opacity="0.12" />
      <rect x="230" y="260" width="108" height="8" rx="4" fill={color} opacity="0.28" />
      {/* Confirm panel */}
      <rect x="400" y="108" width="360" height="168" rx="14" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1" strokeOpacity="0.30" />
      {/* Checkmark circle */}
      <circle cx="580" cy="165" r="28" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
      <path d="M567 165 L577 175 L595 153" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.70" />
      <rect x="506" y="202" width="148" height="10" rx="5" fill={color} opacity="0.28" />
      <rect x="526" y="218" width="108" height="7" rx="3" fill={color} opacity="0.15" />
      {/* CTA */}
      <rect x="440" y="244" width="280" height="28" rx="14" fill={color} opacity="0.35" />
      <rect x="516" y="252" width="128" height="9" rx="4" fill="oklch(0.09 0 0)" opacity="0.55" />
    </svg>
  )
}

// ─── Shared primitives ──────────────────────────────────────────────────────

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

function VisualBlock({ children, ratio = '2 / 1' }: { children: React.ReactNode; ratio?: string }) {
  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.06)',
      marginBottom: 'clamp(48px, 6vw, 64px)',
      aspectRatio: ratio,
    }}>
      {children}
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Scan2DinePage() {
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
            Scan2Dine
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            A QR-based digital menu system designed to improve the restaurant experience
            by reducing waiting time and simplifying how customers access menus.
          </p>

          {/* Meta */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            {[
              { label: 'Duration', value: 'Feb 2025 – June 2025' },
              { label: 'Role', value: 'UI/UX Design · Frontend Development' },
              { label: 'Team', value: 'Team Project' },
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

        {/* Visual 1: QR scan landing */}
        <VisualBlock ratio="2 / 1"><Visual1 /></VisualBlock>

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed the user interface for the digital menu system',
              'Developed the frontend for smooth user interaction',
              'Structured menu navigation for easy browsing',
              'Focused on improving usability and clarity',
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
                Traditional restaurant menus are slow and inefficient.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                Customers often wait too long to access menus or place orders.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To design a digital menu system that allows customers to quickly scan,
              view, and interact with menus in a simple and efficient way.
            </p>
          </div>
        </div>

        {/* Visual 2: Menu browsing UI */}
        <VisualBlock ratio="2.22 / 1"><Visual2 /></VisualBlock>

        <Divider />

        {/* ── 5. Process ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Process</SectionLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0',
            marginBottom: '24px',
          }}>
            {['Research', 'Wireframes', 'UI Design', 'Development'].map((step, i, arr) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: i === arr.length - 1 ? accent : 'rgba(255,255,255,0.65)',
                  padding: '10px 16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  background: i === arr.length - 1 ? 'rgba(230,161,90,0.08)' : 'transparent',
                  whiteSpace: 'nowrap' as const,
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
            Started by observing real restaurant pain points and customer behaviour.
            Translated findings into wireframes, refined the interface through design iterations,
            then built and tested the frontend for usability.
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
              'Simplified navigation for quick access to menu items',
              'Used clear layout to improve readability',
              'Focused on mobile-friendly design',
              'Reduced unnecessary steps for better user flow',
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

        {/* Visual 3: Order flow + confirmation */}
        <VisualBlock ratio="2.67 / 1"><Visual3 /></VisualBlock>

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
            The final product improves customer experience by making menu access faster
            and more convenient, reducing waiting time and improving usability.
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
