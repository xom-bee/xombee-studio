'use client'

import Link from 'next/link'
import { CaseStudyMedia } from '@/components/case-study-media'
import { CaseStudyNav } from '@/components/case-study-nav'

const accent = '#E6A15A'

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
  return (
    <div style={{ paddingTop: 'clamp(16px, 2.5vw, 28px)' }}>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: 'clamp(48px, 6vw, 64px)' }} />
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
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '48px',
            whiteSpace: 'pre-line',
          }}>
            {`The menu is a moment of decision under pressure.\nI designed an interface that clears the noise and makes the choice obvious.`}
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

          {/* ── Top CTA ──────────────────────────────────────────────────── */}
          <div style={{ marginTop: '32px' }}>
            <button
              onClick={() => document.getElementById('project-links')?.scrollIntoView({ behavior: 'smooth' })}
              className="cs-cta-top"
              aria-label="Jump to the final build"
            >
              See the Final Build
              <span className="cs-cta-arrow">↓</span>
            </button>
          </div>
        </div>

        {/* Visual 1 */}
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/scan2dine/reel-1.mp4" poster="/images/scan2dine-1.png" alt="Scan2Dine — screen 1" />

        <Divider />

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Designed specifically for the restaurant environment — standing users, divided attention, time pressure, varying light — not for an ideal user in ideal conditions',
              'Built the information architecture so food discovery happens by scanning, not reading — category first, item second, detail only on demand',
              'Reduced the interaction flow to its minimum: the fewest taps between QR scan and a decision made',
              'Applied visual hierarchy as a precision tool — strong enough to guide a distracted eye in under two seconds',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '10px', fontWeight: 500, letterSpacing: '0.10em',
                  color: accent, paddingTop: '5px', flexShrink: 0, opacity: 0.7,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.76)', lineHeight: 1.7 }}>
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
          gap: 'clamp(32px, 5vw, 56px)',
          marginBottom: 'clamp(48px, 6vw, 64px)',
        }}>
          <div>
            <SectionLabel>Problem</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
                Physical menus create friction before the experience begins. The problem was not access — it was the cognitive load around choosing while hungry, distracted, and in a hurry.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.52)', lineHeight: 1.75 }}>
                Most digital solutions digitize the menu without reimagining it. A cluttered screen is harder to navigate than paper.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Intent</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
              Design an interface fast enough to work under cognitive load — and clear enough that the right choice feels obvious, not effortful.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <CaseStudyMedia aspectRatio="2.22 / 1" video="/projects/scan2dine/reel-2.mp4" poster="/images/scan2dine-2.png" alt="Scan2Dine — screen 2" />

        <Divider />

        {/* ── 5. Approach ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Approach</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                step: 'Designing for Real Conditions',
                desc: 'Restaurant users are not browsing at a desk. They are scanning on a phone — possibly standing, in variable light, with ambient noise and divided attention. I designed for that person, not an ideal one.',
              },
              {
                step: 'Mapping to Minimum Interaction',
                desc: 'I traced every step from QR scan to menu decision and eliminated anything that did not serve forward momentum. The measure of success was tap count — fewer is better, always.',
              },
              {
                step: 'Hierarchy as Clarity',
                desc: 'Strong category headers. Compressed copy. Tap targets sized for thumbs under real-world constraints — standing posture, one hand, imprecise tapping. The screen needed to read in two seconds, not twenty.',
              },
              {
                step: 'Shipped',
                desc: 'Built and deployed to Netlify. The design met its test on real devices, in real restaurant conditions — which is the only test that matters.',
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
                    color: i === arr.length - 1 ? accent : 'rgba(255,255,255,0.72)',
                    marginBottom: '6px',
                  }}>
                    {item.step}
                  </p>
                  <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75 }}>
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
              'Mobile-first was non-negotiable. The QR scan opens on a phone — this is a phone interface, always. Desktop was a secondary consideration.',
              'Category navigation was elevated to top-level visibility. Food discovery starts by type, not scroll. Burying categories was the first thing cut.',
              'Tap targets were sized beyond standard guidance — restaurant light, standing posture, and one-handed interaction reduce precision significantly.',
              'Copy was compressed throughout. More name, more image, less description. Decisions happen faster with less to read, not more.',
              'The interface stayed visually neutral so food photography could do the persuading. The design\'s job was to step back.',
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
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7 }}>
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
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.88)',
            maxWidth: '620px',
            marginBottom: '20px',
          }}>
            I reduced the interaction model to what was strictly load-bearing. Everything else was removed.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            maxWidth: '560px',
          }}>
            The clarity came from designing in the real context, not the comfortable one — standing users, partial attention, varying light. I rebuilt the information hierarchy around those constraints. What remained was an interface that doesn&apos;t ask anything of the user beyond what the moment requires.
          </p>
        </div>

        <Divider />

        {/* ── 8. Project Links ────────────────────────────────────────────── */}
        <div id="project-links" style={{ marginBottom: 'clamp(56px, 7vw, 80px)' }}>
          <div style={{
            position: 'relative',
            padding: 'clamp(28px, 4vw, 44px)',
            border: '1px solid rgba(230,161,90,0.10)',
            borderRadius: '20px',
            background: 'rgba(230,161,90,0.025)',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '480px', height: '200px',
              background: 'radial-gradient(ellipse, rgba(230,161,90,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <SectionLabel>The Final Build</SectionLabel>
            <a
              href="https://scan2dinee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
              aria-label="View Scan2Dine live build — opens in new tab"
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
