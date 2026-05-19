'use client'

import Link from 'next/link'
import { CaseStudyMedia } from '@/components/case-study-media'
import { CaseStudyNav } from '@/components/case-study-nav'

const accent = '#E6A15A'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.20em',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: '22px',
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{ paddingTop: 'clamp(20px, 3vw, 32px)' }}>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: 'clamp(52px, 6.5vw, 68px)' }} />
    </div>
  )
}

export default function Scan2DinePage() {
  return (
    <div id="case-study-top" style={{ minHeight: '100vh' }}>
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
            color: 'rgba(255,255,255,0.62)',
            textDecoration: 'none',
            marginBottom: 'clamp(40px, 5vw, 56px)',
            transition: 'color 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = accent }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.62)' }}
        >
          ← View All Projects
        </Link>

        {/* ── 1. Project Overview ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>Case Study</SectionLabel>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.06,
            color: '#FFFFFF',
            marginBottom: '14px',
          }}>
            Scan2Dine
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            fontWeight: 500,
            color: accent,
            letterSpacing: '-0.005em',
            lineHeight: 1.4,
            marginBottom: '44px',
          }}>
            A menu interface designed for decisions made under pressure.
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
              { label: 'Role', value: 'UI/UX Design · Frontend Development' },
              { label: 'Team', value: 'Collaborative Project' },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: '20px 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)', marginBottom: '10px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.74)', lineHeight: 1.5 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Top CTA ──────────────────────────────────────────────────── */}
          <div style={{ marginTop: '32px' }}>
            <button
              onClick={() => document.getElementById('project-links')?.scrollIntoView({ behavior: 'smooth' })}
              className="cs-cta-top"
              aria-label="Jump to the live build"
            >
              View the Live Build
              <span className="cs-cta-arrow">↓</span>
            </button>
          </div>
        </div>

        {/* Visual 1 */}
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/scan2dine/reel-1.mp4" poster="/images/scan2dine-1.png" alt="Scan2Dine — screen 1" />

        <Divider />

        {/* ── 2. What I Designed ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>What I Designed</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'A QR-first ordering interface built for one-handed use at a seated table.',
              'A menu hierarchy readable in a single glance, even in low light.',
              'An order flow reduced to the fewest taps needed to complete a decision.',
              'A shipped frontend, deployed and tested against real restaurant conditions.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.10em',
                  color: 'rgba(255,255,255,0.62)', paddingTop: '5px', flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.74)', lineHeight: 1.7, maxWidth: '600px' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 3 & 4. Problem + Intent ───────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(36px, 5vw, 56px)',
          marginBottom: 'clamp(52px, 6.5vw, 68px)',
        }}>
          <div>
            <SectionLabel>Problem</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.74)', lineHeight: 1.7, maxWidth: '440px' }}>
              Restaurant menus are designed to be read in calm; they are used in noise, hunger, and hesitation.
            </p>
          </div>
          <div>
            <SectionLabel>Intent</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.74)', lineHeight: 1.7, maxWidth: '440px' }}>
              Build a menu interface that absorbs the pressure of the moment instead of adding to it.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <CaseStudyMedia aspectRatio="2.22 / 1" video="/projects/scan2dine/reel-2.mp4" poster="/images/scan2dine-2.png" alt="Scan2Dine — screen 2" />

        <Divider />

        {/* ── 5. Approach ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>Approach</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {[
              {
                step: 'Designing Real Conditions',
                desc: 'The interface was tested against the table, not the desktop. Type sizes, contrast, and tap zones were sized for low light and a held phone.',
              },
              {
                step: 'Minimum Interaction Path',
                desc: 'Every tap between hunger and order was traced and challenged. What remained is the shortest path possible without losing clarity.',
              },
              {
                step: 'Hierarchy Through Clarity',
                desc: 'Categories carry the structure; items carry the decision. Nothing competes for the eye that does not also carry weight in the choice.',
              },
              {
                step: 'Built And Shipped',
                desc: 'The design was carried through to a deployed frontend, not handed off as a file. Production constraints shaped the final interface as much as the research did.',
              },
            ].map((item, i, arr) => (
              <div key={item.step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em',
                      color: 'rgba(255,255,255,0.62)',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.06)', marginTop: '6px' }} />
                  )}
                </div>
                <div style={{ paddingTop: '5px', flex: 1 }}>
                  <p style={{
                    fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.74)',
                    marginBottom: '8px',
                  }}>
                    {item.step}
                  </p>
                  <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.56)', lineHeight: 1.7, maxWidth: '560px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 6. Design Decisions ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>Design Decisions</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              "Type was sized for arm’s-length reading, not for screen review.",
              'Categories were reduced until the full menu could be understood in one scroll.',
              'The cart was kept persistent so the order never had to be remembered.',
              'Imagery was reserved for dishes that carried decision weight.',
              'Confirmation was made unmistakable so no guest leaves the screen unsure.',
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '22px 0',
                borderTop: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.10em',
                  color: 'rgba(255,255,255,0.62)',
                  paddingTop: '5px',
                  flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums',
                  minWidth: '20px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{
                  fontSize: 'clamp(14px, 1.3vw, 15px)',
                  color: 'rgba(255,255,255,0.74)',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual 3 */}
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/scan2dine/reel-3.mp4" poster="/images/scan2dine-3.png" alt="Scan2Dine — screen 3" />

        <Divider />

        {/* ── 7. Outcome ──────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <SectionLabel>Outcome</SectionLabel>
          <p style={{
            fontSize: 'clamp(18px, 2.4vw, 24px)',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.92)',
            maxWidth: '600px',
            marginBottom: '14px',
          }}>
            A live ordering interface that holds its clarity under the conditions a real table actually creates.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.56)',
            lineHeight: 1.7,
            maxWidth: '600px',
          }}>
            Deployed and in use. The interface carried its restraint from prototype through production.
          </p>
        </div>

        <Divider />

        {/* ── 8. Project Links ────────────────────────────────────────────── */}
        <div id="project-links" style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <div style={{
            position: 'relative',
            padding: 'clamp(24px, 3.4vw, 36px)',
            border: '1px solid rgba(230,161,90,0.10)',
            borderRadius: '18px',
            background: 'rgba(230,161,90,0.025)',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '440px', height: '180px',
              background: 'radial-gradient(ellipse, rgba(230,161,90,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <SectionLabel>The Live Build</SectionLabel>
            <a
              href="https://scan2dinee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
              aria-label="Visit Scan2Dine live build — opens in new tab"
            >
              <span>View the Live Build</span>
              <span className="cs-live-arrow">↗</span>
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
            <button
              onClick={() => document.getElementById('case-study-top')?.scrollIntoView({ behavior: 'smooth' })}
              className="cs-back-top"
              aria-label="Return to top of case study"
            >
              <span className="cs-back-arrow">↑</span>
              Return to overview
            </button>
          </div>
        </div>

        {/* ── Footer nav ──────────────────────────────────────────────────── */}
        <CaseStudyNav nextHref="/work/q-less" nextTitle="Q-Less" />

      </main>
    </div>
  )
}
