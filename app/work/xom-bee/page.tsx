'use client'

import Link from 'next/link'

const color = 'oklch(0.75 0.15 55)'
const accent = '#E6A15A'

// ─── Inline procedural visuals ──────────────────────────────────────────────

// Visual 1: Homepage hero — XB mark + nav + hero text blocks
function Visual1() {
  return (
    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="400" fill="oklch(0.09 0 0)" />
      {/* Navbar strip */}
      <rect x="0" y="0" width="800" height="48" fill="oklch(0.07 0 0)" opacity="0.9" />
      <polygon points="36,14 46,20 46,34 36,40 26,34 26,20" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.12" />
      <text x="36" y="28" textAnchor="middle" fill={color} fontSize="9" fontWeight="700">XB</text>
      <rect x="550" y="18" width="40" height="8" rx="4" fill={color} opacity="0.20" />
      <rect x="600" y="18" width="40" height="8" rx="4" fill={color} opacity="0.20" />
      <rect x="680" y="14" width="80" height="18" rx="9" stroke={color} strokeWidth="0.8" fill="none" opacity="0.30" />
      {/* Hero radial glow */}
      <ellipse cx="400" cy="220" rx="260" ry="140" fill={color} fillOpacity="0.05" />
      {/* Small label */}
      <rect x="328" y="120" width="144" height="10" rx="5" fill={color} opacity="0.22" />
      {/* Big heading */}
      <rect x="180" y="148" width="440" height="36" rx="6" fill={color} opacity="0.30" />
      <rect x="240" y="194" width="320" height="28" rx="6" fill={color} opacity="0.20" />
      {/* Subline */}
      <rect x="280" y="238" width="240" height="10" rx="5" fill={color} opacity="0.13" />
      {/* CTA */}
      <rect x="330" y="268" width="140" height="30" rx="15" fill={color} opacity="0.35" />
      {/* Scroll hint */}
      <rect x="392" y="320" width="16" height="22" rx="8" stroke={color} strokeWidth="0.8" fill="none" opacity="0.20" />
      <rect x="398" y="325" width="4" height="8" rx="2" fill={color} opacity="0.25" />
    </svg>
  )
}

// Visual 2: Music section — track grid + audio player bar
function Visual2() {
  return (
    <svg viewBox="0 0 800 360" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="360" fill="oklch(0.09 0 0)" />
      {/* Section label */}
      <rect x="40" y="32" width="80" height="8" rx="4" fill={color} opacity="0.25" />
      <rect x="40" y="50" width="200" height="22" rx="4" fill={color} opacity="0.32" />
      {/* 4 track cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={40 + i * 182} y={96} width={166} height={166} rx="12"
            fill={color} opacity={0.07 + i * 0.02}
            stroke={color} strokeWidth="0.8" strokeOpacity="0.20" />
          {/* Album art placeholder */}
          <rect x={52 + i * 182} y={108} width={142} height={108} rx="8" fill={color} opacity={0.10 + i * 0.03} />
          {/* Play button */}
          <circle cx={123 + i * 182} cy={162} r="20" fill="oklch(0.07 0 0)" opacity="0.70" />
          <polygon points={`${117 + i * 182},154 ${117 + i * 182},170 ${133 + i * 182},162`} fill={color} opacity="0.55" />
          {/* Track title */}
          <rect x={52 + i * 182} y={224} width={90} height="8" rx="4" fill={color} opacity="0.28" />
          <rect x={52 + i * 182} y={238} width={64} height="6" rx="3" fill={color} opacity="0.14" />
        </g>
      ))}
      {/* Audio player bar */}
      <rect x="0" y="296" width="800" height="64" fill="oklch(0.07 0 0)" opacity="0.95" />
      {/* Album thumb */}
      <rect x="20" y="308" width="40" height="40" rx="6" fill={color} opacity="0.22" />
      {/* Track name */}
      <rect x="72" y="314" width="100" height="8" rx="4" fill={color} opacity="0.28" />
      <rect x="72" y="328" width="70" height="6" rx="3" fill={color} opacity="0.14" />
      {/* Controls */}
      <circle cx="400" cy="328" r="14" fill={color} opacity="0.20" />
      <polygon points="394,322 394,334 408,328" fill={color} opacity="0.50" />
      <rect x="358" y="325" width="24" height="6" rx="3" fill={color} opacity="0.14" />
      <rect x="418" y="325" width="24" height="6" rx="3" fill={color} opacity="0.14" />
      {/* Progress bar */}
      <rect x="80" y="350" width="640" height="3" rx="1.5" fill={color} opacity="0.10" />
      <rect x="80" y="350" width="200" height="3" rx="1.5" fill={color} opacity="0.45" />
      <circle cx="280" cy="351.5" r="5" fill={color} opacity="0.60" />
    </svg>
  )
}

// Visual 3: Identity + interaction — brand system + hover states
function Visual3() {
  return (
    <svg viewBox="0 0 800 320" style={{ width: '100%', height: '100%' }}>
      <rect width="800" height="320" fill="oklch(0.09 0 0)" />
      {/* Left: brand mark panel */}
      <rect x="40" y="40" width="320" height="240" rx="14" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      <polygon points="200,90 228,106 228,138 200,154 172,138 172,106"
        stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
      <text x="200" y="127" textAnchor="middle" fill={color} fontSize="18" fontWeight="700" opacity="0.65">XB</text>
      <rect x="130" y="172" width="140" height="10" rx="5" fill={color} opacity="0.25" />
      <rect x="150" y="190" width="100" height="7" rx="3" fill={color} opacity="0.14" />
      {/* Color swatches */}
      {[color, 'rgba(255,255,255,0.60)', 'rgba(255,255,255,0.12)', 'oklch(0.07 0 0)'].map((c, i) => (
        <rect key={i} x={100 + i * 46} y={220} width="36" height="36" rx="8" fill={c} opacity={c === color ? 1 : 0.9} />
      ))}
      {/* Right: interaction states */}
      <rect x="400" y="40" width="360" height="240" rx="14" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.04" />
      {/* Track card hover state */}
      <rect x="420" y="58" width="150" height="150" rx="10" fill={color} opacity="0.10"
        stroke={color} strokeWidth="1" strokeOpacity="0.40" />
      <rect x="420" y="58" width="150" height="150" rx="10"
        fill="url(#vignette)" opacity="0.35" />
      <circle cx="495" cy="133" r="22" fill="oklch(0.07 0 0)" opacity="0.75" />
      <polygon points="488,125 488,141 506,133" fill={color} opacity="0.70" />
      {/* Waveform bars */}
      {[18,28,14,32,22,30,16,26,20,24,12,28].map((h, i) => (
        <rect key={i} x={424 + i * 10} y={222 - h} width="6" height={h} rx="2"
          fill={color} opacity={0.15 + (i % 3) * 0.08} />
      ))}
      {/* Button states */}
      <rect x="590" y="68" width="148" height="34" rx="17" stroke={color} strokeWidth="0.8" fill="none" opacity="0.25" />
      <rect x="590" y="68" width="148" height="34" rx="17" fill={color} opacity="0.08" />
      <rect x="616" y="80" width="90" height="8" rx="4" fill={color} opacity="0.30" />
      <rect x="590" y="118" width="148" height="34" rx="17" fill={color} opacity="0.35" />
      <rect x="620" y="130" width="80" height="8" rx="4" fill="oklch(0.09 0 0)" opacity="0.60" />
      <rect x="590" y="168" width="148" height="34" rx="17" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.05" opacity="0.55" />
      <rect x="616" y="180" width="90" height="8" rx="4" fill={color} opacity="0.22" />
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.6" />
        </radialGradient>
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

export default function XomBeePage() {
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
            Xom Bee Official
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            A personal website designed for a music artist to showcase songs, music videos,
            and visual identity through a clean and emotional digital experience.
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
              { label: 'Duration', value: 'Jan 2025 – Apr 2025' },
              { label: 'Role', value: 'UI/UX Design · Frontend Development' },
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

        {/* Visual 1: Homepage */}
        <VisualBlock ratio="2 / 1"><Visual1 /></VisualBlock>

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed the full website layout and user interface',
              'Built the frontend using modern web technologies',
              'Structured content for music, videos, and identity',
              'Focused on creating an emotional and minimal user experience',
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
                Most music artists share their work across different platforms without a unified identity.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                This makes it difficult for audiences to understand and remember the artist.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To design a personal website that brings music, visuals, and identity into one place,
              creating a stronger and more memorable presence.
            </p>
          </div>
        </div>

        {/* Visual 2: Music section */}
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
            Began by understanding how music artists present themselves online.
            Translated those insights into a structured layout, refined through UI design
            and brought to life through frontend development.
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
              'Used a dark theme to create a cinematic and focused experience',
              'Applied minimal layouts to highlight music and visuals',
              'Designed interactive elements to make the experience engaging',
              'Maintained consistent visual identity across sections',
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

        {/* Visual 3: Identity + interactions */}
        <VisualBlock ratio="2.5 / 1"><Visual3 /></VisualBlock>

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
            The final website provides a complete digital identity for the artist, allowing
            users to explore music and visuals in a more engaging and structured way.
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
