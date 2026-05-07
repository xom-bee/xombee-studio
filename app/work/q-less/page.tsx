'use client'

import Link from 'next/link'
import Image from 'next/image'

const accent = '#E6A15A'

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
            Q-Less
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '36px',
          }}>
            A digital queue management platform designed to simplify waiting experiences through real-time queue tracking and smarter user flow.
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
              { label: 'Team', value: 'Collaborative Project' },
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
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 'clamp(48px, 6vw, 64px)', position: 'relative', aspectRatio: '2 / 1' }}>
          <Image src="/images/q-less-1.png" alt="Q-Less — screen 1" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 860px" />
        </div>

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed a clean and intuitive interface for digital queue interaction',
              'Developed responsive frontend experiences for smoother usability',
              'Structured queue joining and tracking flows for clarity and efficiency',
              'Focused on accessibility, readability, and real-time user feedback',
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
                Traditional queue systems often create confusion, uncertainty, and long waiting experiences due to the lack of real-time visibility and structured communication.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                Users spend unnecessary time waiting without clear updates on their queue position, estimated wait time, or overall progress.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Goal</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              To create a digital queue experience that allows users to join, monitor, and manage queues in real time through a simple and user-friendly interface.
            </p>
          </div>
        </div>

        {/* Visual 2: Status tracking UI */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 'clamp(48px, 6vw, 64px)', position: 'relative', aspectRatio: '2.22 / 1' }}>
          <Image src="/images/q-less-2.png" alt="Q-Less — screen 2" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 860px" />
        </div>

        <Divider />

        {/* ── 5. Process ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Process</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                step: 'Research',
                desc: 'Observed real-world waiting environments and identified common frustrations related to uncertainty, inefficiency, and lack of communication.',
              },
              {
                step: 'Wireframing',
                desc: 'Created user flows and low-fidelity wireframes focused on fast interaction and queue visibility.',
              },
              {
                step: 'UI Design',
                desc: 'Designed a minimal and structured interface optimized for clarity, real-time updates, and ease of navigation.',
              },
              {
                step: 'Development',
                desc: 'Built responsive frontend interactions to support smooth queue tracking across devices.',
              },
            ].map((item, i, arr) => (
              <div key={item.step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: i === arr.length - 1 ? `1.5px solid ${accent}` : '1px solid rgba(255,255,255,0.14)',
                    background: i === arr.length - 1 ? 'rgba(230,161,90,0.10)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
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
              'Simplified interaction flow to reduce user confusion',
              'Prioritized real-time queue visibility and status clarity',
              'Used strong hierarchy to highlight important updates',
              'Designed mobile-friendly layouts for quick access on the go',
              'Reduced unnecessary interface elements to improve efficiency',
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
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 'clamp(48px, 6vw, 64px)', position: 'relative', aspectRatio: '2.67 / 1' }}>
          <Image src="/images/q-less-3.png" alt="Q-Less — screen 3" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 860px" />
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
            The final platform creates a more efficient and transparent queue experience by allowing users to track progress digitally in real time.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.75,
            maxWidth: '580px',
          }}>
            It reduces uncertainty, improves usability, and helps users manage waiting more comfortably.
          </p>
        </div>

        <Divider />

        {/* ── 8. Features ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Features</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Digital queue joining',
              'Real-time queue tracking',
              'Queue status updates',
              'Mobile-responsive experience',
              'Simplified user flow',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: accent, opacity: 0.5, flexShrink: 0,
                }} />
                <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.52)', lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 9. UX Considerations ────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>UX Considerations</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              The interface was designed around reducing uncertainty during waiting experiences.
            </p>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
              Special focus was placed on visibility, quick interaction, and reducing cognitive load through simple status communication.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── 10. Project Links ───────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <SectionLabel>Project Links</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://q-leess.netlify.app/"
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
                e.currentTarget.style.borderColor = 'rgba(230,161,90,0.30)'
                e.currentTarget.style.background = 'rgba(230,161,90,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.65 }}>
                <circle cx="12" cy="12" r="10" stroke={accent} strokeWidth="1.5" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.72)', marginBottom: '2px' }}>
                  View Live Experience
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.02em' }}>
                  q-leess.netlify.app ↗
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
            href="/work/druk-art-hub"
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
              Druk Art Hub →
            </span>
          </Link>
        </div>

      </main>
    </div>
  )
}
