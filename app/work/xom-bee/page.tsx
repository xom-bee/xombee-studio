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

export default function XomBeePage() {
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
            color: 'rgba(255,255,255,0.30)',
            textDecoration: 'none',
            marginBottom: 'clamp(40px, 5vw, 56px)',
            transition: 'color 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = accent }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.30)' }}
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
            Xom Bee Official
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            fontWeight: 500,
            color: accent,
            letterSpacing: '-0.005em',
            lineHeight: 1.4,
            marginBottom: '44px',
          }}>
            A digital stage where the artist&rsquo;s presence speaks before the first note plays.
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
              { label: 'Team', value: 'Solo Project' },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: '20px 24px',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', marginBottom: '10px' }}>
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
              aria-label="Jump to the live experience"
            >
              Visit the Live Experience
              <span className="cs-cta-arrow">↓</span>
            </button>
          </div>
        </div>

        {/* Visual 1 */}
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/xom-bee/reel-1.mp4" poster="/images/xom-bee-1.png" alt="Xom Bee Official — screen 1" />

        <Divider />

        {/* ── 2. What I Designed ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>What I Designed</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Translated the concept of “feeling the music before it plays” into a fully designed and developed digital platform from idea to deployment.',
              'Designed and developed the complete frontend using Next.js and TypeScript with design and functionality built together as one system.',
              'Created a refined motion system where transitions, hover states, and interactions supported the artist’s mood and visual rhythm.',
              'Applied a minimal and intentional design approach by removing unnecessary elements and focusing on clarity, balance, and user experience.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '11px', fontWeight: 500, letterSpacing: '0.10em',
                  color: 'rgba(255,255,255,0.30)', paddingTop: '5px', flexShrink: 0,
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
              The artist’s identity was fragmented across platforms that lacked consistency, personality, and emotional connection.
            </p>
          </div>
          <div>
            <SectionLabel>Intent</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.74)', lineHeight: 1.7, maxWidth: '440px' }}>
              Designed and developed a unified digital platform where the artist’s presence, emotion, and identity lead every interaction.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <CaseStudyMedia aspectRatio="2.22 / 1" video="/projects/xom-bee/reel-2.mp4" poster="/images/xom-bee-2.png" alt="Xom Bee Official — screen 2" />

        <Divider />

        {/* ── 5. Approach ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(52px, 6.5vw, 68px)' }}>
          <SectionLabel>Approach</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {[
              {
                step: 'Designing Through Emotion',
                desc: 'Defined the platform direction by focusing on the emotional tone of the artist’s music before designing the interface and user experience.',
              },
              {
                step: 'Minimal Interface Design',
                desc: 'Removed unnecessary elements and distractions to create a clean interface that keeps attention on the artist and content.',
              },
              {
                step: 'Motion and Interaction System',
                desc: 'Designed slow and intentional transitions, hover states, and animations to match the artist’s visual rhythm and mood.',
              },
              {
                step: 'Development Driven by Design',
                desc: 'Built the full platform independently using Next.js and TypeScript with every frontend and performance decision supporting the overall experience and identity.',
              },
            ].map((item, i, arr) => (
              <div key={item.step} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em',
                      color: 'rgba(255,255,255,0.30)',
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
              'The dark visual atmosphere was chosen to reflect the emotional tone of the artist’s music and identity.',
              'Interactions and animations were intentionally slowed to create a calm and immersive browsing experience.',
              'The artist’s name, imagery, and presence were given visual priority through clear hierarchy and minimal interface distractions.',
              'Typography and spacing were kept clean and editorial to support readability without overpowering the content.',
              'Embedded music and media were integrated naturally so discovery felt intentional rather than promotional.',
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
                  color: 'rgba(255,255,255,0.30)',
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
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/xom-bee/reel-3.mp4" poster="/images/xom-bee-3.png" alt="Xom Bee Official — screen 3" />

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
            Designed and developed the complete platform from concept to deployment with the artist’s identity shaping every design and development decision.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.56)',
            lineHeight: 1.7,
            maxWidth: '600px',
          }}>
            Visual atmosphere, motion, typography, and interface behavior were crafted as one unified and intentional experience.
          </p>
        </div>

        <Divider />

        {/* ── 9. Project Links ───────────────────────────────────────────── */}
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
            <SectionLabel>The Final Build</SectionLabel>
            <a
              href="https://sangayyoesel.wixsite.com/xombeeofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
              aria-label="Visit xombeeofficial — opens in new tab"
            >
              <span>Visit the Live Experience</span>
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
        <CaseStudyNav nextHref="/work/scan2dine" nextTitle="Scan2Dine" />

      </main>
    </div>
  )
}
