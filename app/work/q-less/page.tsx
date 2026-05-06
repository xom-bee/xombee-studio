'use client'

import Link from 'next/link'

const color = 'oklch(0.75 0.15 55)'
const accent = '#E6A15A'

// ─── Inline procedural visuals ──────────────────────────────────────────────

// Visual 1: Queue join screen — mobile entry point
function Visual1() {
  return (
    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="400" fill="oklch(0.09 0 0)" />
      {/* Phone frame */}
      <rect x="280" y="20" width="240" height="360" rx="26" stroke={color} strokeWidth="1.5" fill="oklch(0.07 0 0)" fillOpacity="0.95" />
      <rect x="356" y="30" width="88" height="10" rx="5" fill="oklch(0.09 0 0)" opacity="0.8" />
      {/* App header */}
      <rect x="296" y="56" width="208" height="36" rx="0" fill={color} fillOpacity="0.06" />
      <rect x="312" y="66" width="80" height="10" rx="5" fill={color} opacity="0.30" />
      <circle cx="476" cy="74" r="10" stroke={color} strokeWidth="0.8" fill="none" opacity="0.25" />
      {/* Queue name card */}
      <rect x="296" y="104" width="208" height="72" rx="12" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.8" strokeOpacity="0.22" />
      <rect x="312" y="118" width="120" height="12" rx="6" fill={color} opacity="0.32" />
      <rect x="312" y="138" width="80" height="8" rx="4" fill={color} opacity="0.16" />
      <rect x="440" y="116" width="44" height="28" rx="8" fill={color} opacity="0.22" />
      <rect x="447" y="123" width="30" height="14" rx="4" fill={color} opacity="0.18" />
      {/* Estimated wait */}
      <rect x="296" y="188" width="98" height="60" rx="12" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.7" strokeOpacity="0.18" />
      <rect x="310" y="200" width="60" height="20" rx="4" fill={color} opacity="0.28" />
      <rect x="310" y="226" width="70" height="8" rx="4" fill={color} opacity="0.14" />
      <rect x="406" y="188" width="98" height="60" rx="12" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.7" strokeOpacity="0.18" />
      <rect x="420" y="200" width="60" height="20" rx="4" fill={color} opacity="0.22" />
      <rect x="420" y="226" width="70" height="8" rx="4" fill={color} opacity="0.14" />
      {/* Join button */}
      <rect x="296" y="264" width="208" height="40" rx="20" fill={color} opacity="0.40" />
      <rect x="350" y="279" width="100" height="10" rx="5" fill="oklch(0.09 0 0)" opacity="0.55" />
      {/* Bottom hint */}
      <rect x="320" y="320" width="160" height="8" rx="4" fill={color} opacity="0.13" />
      {/* Left context: location/service list */}
      <rect x="40" y="60" width="200" height="280" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.03" />
      <rect x="56" y="78" width="120" height="10" rx="5" fill={color} opacity="0.26" />
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x="56" y={104 + i * 44} width="168" height="36" rx="8"
            fill={color} fillOpacity={i === 0 ? 0.10 : 0.04}
            stroke={color} strokeWidth="0.6" strokeOpacity={i === 0 ? 0.28 : 0.10} />
          <circle cx="72" cy={122 + i * 44} r="8" fill={color} opacity={0.12 + i * 0.03} />
          <rect x="90" y={115 + i * 44} width="80" height="8" rx="4" fill={color} opacity="0.22" />
          <rect x="90" y={129 + i * 44} width="54" height="6" rx="3" fill={color} opacity="0.12" />
          <rect x="198" y={118 + i * 44} width="18" height="10" rx="5" fill={color} opacity="0.18" />
        </g>
      ))}
      {/* Right: stats panel */}
      <rect x="560" y="60" width="200" height="280" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.03" />
      <rect x="576" y="78" width="100" height="10" rx="5" fill={color} opacity="0.26" />
      {[
        { label: 'Active', val: '3' },
        { label: 'Avg Wait', val: '~8 min' },
        { label: 'Served', val: '24' },
      ].map((stat, i) => (
        <g key={i}>
          <rect x="576" y={108 + i * 72} width="168" height="56" rx="10"
            fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.6" strokeOpacity="0.14" />
          <rect x="590" y={120 + i * 72} width="60" height="18" rx="4" fill={color} opacity={0.22 + i * 0.04} />
          <rect x="590" y={144 + i * 72} width="80" height="7" rx="3" fill={color} opacity="0.13" />
        </g>
      ))}
    </svg>
  )
}

// Visual 2: Queue status tracking UI
function Visual2() {
  return (
    <svg viewBox="0 0 800 360" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="360" fill="oklch(0.09 0 0)" />
      {/* Position tracker — left panel */}
      <rect x="40" y="30" width="340" height="300" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      <rect x="60" y="50" width="120" height="10" rx="5" fill={color} opacity="0.28" />
      <rect x="60" y="68" width="80" height="7" rx="3" fill={color} opacity="0.14" />
      {/* Big position number */}
      <rect x="130" y="100" width="120" height="64" rx="12" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1" strokeOpacity="0.30" />
      <rect x="152" y="116" width="76" height="30" rx="6" fill={color} opacity="0.35" />
      <rect x="152" y="152" width="76" height="8" rx="4" fill={color} opacity="0.16" />
      {/* Queue line viz */}
      {[0,1,2,3,4,5,6,7].map((i) => (
        <g key={i}>
          <circle cx={70 + i * 36} cy={210} r={i === 0 ? 14 : 10}
            fill={i < 3 ? color : 'transparent'} fillOpacity={i === 0 ? 0.50 : i < 3 ? 0.20 : 0}
            stroke={color} strokeWidth={i === 0 ? '1.5' : '0.8'}
            strokeOpacity={i < 3 ? 0.45 : 0.18} />
          {i < 7 && <rect x={84 + i * 36} y={208} width={22} height={4} rx={2} fill={color} opacity={i < 2 ? 0.20 : 0.08} />}
        </g>
      ))}
      <rect x="60" y="234" width="80" height="8" rx="4" fill={color} opacity="0.24" />
      <rect x="60" y="248" width="60" height="6" rx="3" fill={color} opacity="0.13" />
      {/* Progress bar */}
      <rect x="60" y="272" width="300" height="6" rx="3" fill={color} opacity="0.10" />
      <rect x="60" y="272" width="180" height="6" rx="3" fill={color} opacity="0.42" />
      <rect x="60" y="284" width="60" height="7" rx="3" fill={color} opacity="0.20" />
      <rect x="280" y="284" width="80" height="7" rx="3" fill={color} opacity="0.14" />
      {/* Right: notification + action panel */}
      <rect x="420" y="30" width="340" height="300" rx="16" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      <rect x="440" y="50" width="120" height="10" rx="5" fill={color} opacity="0.28" />
      {/* Notification cards */}
      {[
        { w: 260, op: 0.12, dot: true },
        { w: 200, op: 0.07, dot: false },
        { w: 240, op: 0.07, dot: false },
      ].map((item, i) => (
        <g key={i}>
          <rect x="440" y={76 + i * 64} width="280" height="52" rx="10"
            fill={color} fillOpacity={item.op}
            stroke={color} strokeWidth="0.7" strokeOpacity={item.dot ? 0.30 : 0.12} />
          {item.dot && <circle cx="456" cy={102 + i * 64} r="5" fill={color} opacity="0.60" />}
          <rect x={item.dot ? 468 : 456} y={88 + i * 64} width={item.w} height="9" rx="4" fill={color} opacity="0.26" />
          <rect x={item.dot ? 468 : 456} y={104 + i * 64} width={item.w - 40} height="7" rx="3" fill={color} opacity="0.14" />
        </g>
      ))}
      {/* Leave queue + notify-me buttons */}
      <rect x="440" y="272" width="130" height="34" rx="17" stroke={color} strokeWidth="0.8" fill="none" strokeOpacity="0.25" />
      <rect x="452" y="282" width="106" height="12" rx="6" fill={color} opacity="0.18" />
      <rect x="586" y="272" width="134" height="34" rx="17" fill={color} opacity="0.35" />
      <rect x="600" y="282" width="106" height="12" rx="6" fill="oklch(0.09 0 0)" opacity="0.50" />
    </svg>
  )
}

// Visual 3: Admin / management flow overview
function Visual3() {
  return (
    <svg viewBox="0 0 800 300" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="300" fill="oklch(0.09 0 0)" />
      {/* Flow steps */}
      {[
        { label: 'Join Queue', sub: 'Scan or tap' },
        { label: 'Get Token', sub: 'Receive position' },
        { label: 'Track Status', sub: 'Live updates' },
        { label: 'Get Served', sub: 'Notified when ready' },
      ].map((step, i) => (
        <g key={i}>
          {/* Step card */}
          <rect x={40 + i * 188} y={40} width={160} height={90} rx="12"
            fill={color} fillOpacity={i === 2 ? 0.12 : 0.05}
            stroke={color} strokeWidth={i === 2 ? '1.2' : '0.7'}
            strokeOpacity={i === 2 ? 0.40 : 0.16} />
          {/* Step number */}
          <circle cx={72 + i * 188} cy={68} r="14"
            fill={i === 2 ? color : 'transparent'} fillOpacity={i === 2 ? 0.30 : 0}
            stroke={color} strokeWidth="0.8" strokeOpacity="0.30" />
          <text x={72 + i * 188} y={73} textAnchor="middle"
            fill={color} fontSize="10" fontWeight="600" opacity={i === 2 ? 0.80 : 0.35}>
            {i + 1}
          </text>
          <rect x={94 + i * 188} y={60} width={88} height="10" rx="5" fill={color} opacity={i === 2 ? 0.32 : 0.22} />
          <rect x={94 + i * 188} y={76} width={64} height="7" rx="3" fill={color} opacity="0.14" />
          {/* Arrow connector */}
          {i < 3 && (
            <path d={`M ${200 + i * 188} 85 L ${228 + i * 188} 85`}
              stroke={color} strokeWidth="1" opacity="0.20"
              markerEnd="url(#arr)" strokeDasharray="4 3" />
          )}
        </g>
      ))}
      {/* Admin dashboard panel */}
      <rect x="40" y="154" width="720" height="120" rx="14" fill={color} fillOpacity="0.05" stroke={color} strokeWidth="0.8" strokeOpacity="0.18" />
      <rect x="60" y="170" width="100" height="10" rx="5" fill={color} opacity="0.28" />
      {/* Queue rows */}
      {[0,1,2].map((i) => (
        <g key={i}>
          <rect x="60" y={194 + i * 26} width="680" height="20" rx="6"
            fill={color} fillOpacity={i === 0 ? 0.08 : 0.04} />
          <rect x="70" y={199 + i * 26} width="60" height="8" rx="4" fill={color} opacity="0.24" />
          <rect x="170" y={199 + i * 26} width="100" height="8" rx="4" fill={color} opacity="0.16" />
          <rect x="340" y={199 + i * 26} width="60" height="8" rx="4" fill={color} opacity="0.20" />
          <rect x="480" y={199 + i * 26} width="80" height="8" rx="4" fill={color} opacity="0.16" />
          <rect x="650" y={197 + i * 26} width="72" height="12" rx="6"
            fill={i === 0 ? color : 'transparent'} fillOpacity={i === 0 ? 0.32 : 0}
            stroke={color} strokeWidth="0.6" strokeOpacity={i === 0 ? 0 : 0.18} />
        </g>
      ))}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} opacity="0.25" />
        </marker>
      </defs>
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

export default function QLessPage() {
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
            Q-Less
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            A digital queue management system designed to reduce waiting time and improve
            how users manage queues in real-world environments.
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
              { label: 'Duration', value: 'Aug 2025 – Dec 2025' },
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

        {/* Visual 1: Queue join screen */}
        <VisualBlock ratio="2 / 1"><Visual1 /></VisualBlock>

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed the user interface for the queue system',
              'Developed the frontend for smooth interaction',
              'Structured user flow for joining and tracking queues',
              'Focused on clarity and ease of use',
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
                Traditional queue systems are inefficient and time-consuming.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                Users often wait without clear information about their position or progress.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To design a system that allows users to join queues digitally and track
              their status in a simple and efficient way.
            </p>
          </div>
        </div>

        {/* Visual 2: Status tracking UI */}
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
            Started with observing how people experience physical queues and where
            frustration builds. Mapped the user journey, built wireframes around key
            moments, and refined the interface through iterative design and development.
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
              'Created a simple interface for quick interaction',
              'Focused on clear status updates for users',
              'Designed smooth navigation for queue tracking',
              'Prioritized usability and efficiency',
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

        {/* Visual 3: User flow + admin view */}
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
            The final system reduces waiting time and improves user experience by providing
            a clear and structured way to manage queues digitally.
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
