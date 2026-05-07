'use client'

import Link from 'next/link'
import Image from 'next/image'

const accent = '#E6A15A'

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
          ← View All Projects
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
              { label: 'Duration', value: 'Feb 2025 – Present' },
              { label: 'Role', value: 'UI/UX Design · Branding' },
              { label: 'Team', value: 'Solo Project' },
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
          position: 'relative',
          aspectRatio: '2 / 1',
        }}>
          <Image
            src="/images/druk-art-hub-1.png"
            alt="Druk Art Hub — screen 1"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 860px"
          />
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
                Bhutanese artists lacked a dedicated digital space that reflected both their work and cultural identity.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                Existing platforms felt generic and disconnected from the emotional depth of the artwork itself.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To create a modern digital platform where Bhutanese artists can present their work with clarity, identity, and emotional presence.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
          position: 'relative',
          aspectRatio: '2.5 / 1',
        }}>
          <Image
            src="/images/druk-art-hub-2.png"
            alt="Druk Art Hub — screen 2"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 860px"
          />
        </div>

        <Divider />

        {/* ── 5. Process ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Process</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                step: 'Research',
                desc: 'Observed how local artists currently present their work and identified gaps in structure, visibility, and identity.',
              },
              {
                step: 'Wireframing',
                desc: 'Built low-fidelity layouts focused on readability, navigation, and artwork presentation.',
              },
              {
                step: 'UI Design',
                desc: 'Developed a minimal visual system that keeps attention on the artwork while maintaining emotional tone.',
              },
              {
                step: 'Final Interface',
                desc: 'Refined spacing, hierarchy, typography, and interactions for a clean and immersive experience.',
              },
            ].map((item, i, arr) => (
              <div key={item.step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: i === arr.length - 1 ? `1.5px solid ${accent}` : '1px solid rgba(255,255,255,0.14)',
                    background: i === arr.length - 1 ? 'rgba(230,161,90,0.10)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.05em',
                      color: i === arr.length - 1 ? accent : 'rgba(255,255,255,0.30)',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.07)', marginTop: '4px' }} />
                  )}
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <p style={{
                    fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
                    color: i === arr.length - 1 ? accent : 'rgba(255,255,255,0.65)',
                    marginBottom: '6px',
                  }}>
                    {item.step}
                  </p>
                  <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              'Used generous spacing to give artwork visual breathing room',
              'Kept the interface minimal to avoid distracting from the art',
              'Introduced subtle cultural influence without overwhelming the modern aesthetic',
              'Maintained consistent typography and visual hierarchy across pages',
              'Focused on emotional presentation instead of heavy interface elements',
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
          position: 'relative',
          aspectRatio: '2.67 / 1',
        }}>
          <Image
            src="/images/druk-art-hub-3.png"
            alt="Druk Art Hub — screen 3"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 860px"
          />
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
            marginBottom: '20px',
          }}>
            The final platform creates a more immersive and identity-driven experience for Bhutanese artists.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.75,
            maxWidth: '580px',
          }}>
            It improves clarity, strengthens presentation, and gives artwork a stronger emotional presence online.
          </p>
        </div>

        <Divider />

        {/* ── 8. Project Links ────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <SectionLabel>Project Links</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://www.figma.com/design/iUdEtBJ7TWF6genMqsl1lR/RITA?node-id=7-10&t=v3LfCWCHC3CzBGg5-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.02)',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                maxWidth: '400px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(230,161,90,0.30)`
                e.currentTarget.style.background = 'rgba(230,161,90,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.7 }}>
                <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill={accent}/>
                <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill={accent} fillOpacity="0.5"/>
                <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill={accent} fillOpacity="0.8"/>
                <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill={accent} fillOpacity="0.6"/>
                <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill={accent} fillOpacity="0.7"/>
              </svg>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.72)', marginBottom: '2px' }}>
                  Figma Prototype
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.02em' }}>
                  View interactive design file ↗
                </p>
              </div>
            </a>
          </div>
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
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.28)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.72)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
          >
            ← View All Projects
          </Link>
          <Link
            href="/work/xom-bee"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '4px',
              textDecoration: 'none',
              transition: 'opacity 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
            }}>
              Next Case Study
            </span>
            <span style={{
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: accent,
            }}>
              Xom Bee Official →
            </span>
          </Link>
        </div>

      </main>
    </div>
  )
}
