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

export default function DrukArtHubPage() {
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
            Druk Art Hub
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            fontWeight: 500,
            color: accent,
            letterSpacing: '-0.005em',
            lineHeight: 1.4,
            marginBottom: '44px',
          }}>
            A digital identity system for Bhutanese artistry.
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
              aria-label="Jump to the design file"
            >
              View the Design File
              <span className="cs-cta-arrow">↓</span>
            </button>
          </div>
        </div>

        {/* Visual 1 */}
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/druk-art-hub/reel-1.mp4" poster="/images/druk-art-hub-1.png" alt="Druk Art Hub — screen 1" />

        <Divider />

        {/* ── 2. What I Designed ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>What I Designed</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Crafted a culturally rooted brand identity and visual design system',
              'Developed interface structure with refined interaction flow and hierarchy',
              'Designed and implemented an artist focused browsing experience',
              'Built scalable frontend and branding foundations for long term platform growth',
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
              Bhutanese artists lacked a modern digital platform that balanced cultural identity with clear and user friendly design.
            </p>
          </div>
          <div>
            <SectionLabel>Intent</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.74)', lineHeight: 1.7, maxWidth: '440px' }}>
              Designed a minimal digital platform where cultural identity and user experience work together as one unified system.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <CaseStudyMedia aspectRatio="2.5 / 1" video="/projects/druk-art-hub/reel-2.mp4" poster="/images/druk-art-hub-2.png" alt="Druk Art Hub — screen 2" />

        <Divider />

        {/* ── 5. Approach ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>Approach</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {[
              {
                step: 'Identity Led Design',
                desc: 'Built the visual identity system first through typography, color, and branding direction. The interface was then designed to follow the same visual language and structure.',
              },
              {
                step: 'Focused User Architecture',
                desc: 'Designed the platform structure to keep the artwork as the main focus. Navigation, layout hierarchy, and interaction flow were refined to support clear browsing.',
              },
              {
                step: 'Minimal Interface Structure',
                desc: 'Used clean spacing and balanced layouts to create clarity across the platform. Reduced visual noise to give the content stronger presence and readability.',
              },
              {
                step: 'Refined System Design',
                desc: 'Removed unnecessary elements and simplified interactions throughout the platform. Every component was kept intentional to maintain consistency and usability.',
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
              'Spacing was used intentionally to create a clean and balanced interface structure.',
              'A neutral interface palette was applied so the artwork remained the primary visual focus.',
              'Navigation was kept minimal to support clear browsing and reduce distraction.',
              'Cultural elements were integrated subtly to support the identity without overpowering the experience.',
              'Typography was selected for clarity and readability while allowing the artwork to carry the visual expression.',
            ].map((item, i, arr) => (
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
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/druk-art-hub/reel-3.mp4" poster="/images/druk-art-hub-3.png" alt="Druk Art Hub — screen 3" />

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
            A unified brand and digital platform designed with clarity, consistency, and purpose.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.56)',
            lineHeight: 1.7,
            maxWidth: '600px',
          }}>
            Hierarchy, spacing, and visual styling were developed together to create a cohesive user experience across the platform. The final result delivers a modern digital space that balances cultural identity with clean and functional design.
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
            <SectionLabel>The Design File</SectionLabel>
            <a
              href="https://www.figma.com/design/iUdEtBJ7TWF6genMqsl1lR/RITA?node-id=7-10&t=v3LfCWCHC3CzBGg5-1"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
              aria-label="Open Figma design file — opens in new tab"
            >
              <span>Open in Figma</span>
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
        <CaseStudyNav nextHref="/work/xom-bee" nextTitle="Xom Bee Official" />

      </main>
    </div>
  )
}
