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
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75,
            maxWidth: '580px',
            marginBottom: '48px',
            whiteSpace: 'pre-line',
          }}>
            {`The brief was the feeling, not the features.\nI designed and built a space where the artist's presence arrives before the sound does.`}
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

        {/* ── 2. My Contribution ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>My Contribution</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Translated an emotional brief — "feel the music before it plays" — into a complete designed and built system, alone, from concept to deployed product',
              'Designed and developed the full frontend in Next.js and TypeScript — every implementation decision was also a design decision',
              'Built a motion language where every transition, hover state, and pause communicates the artist\'s tempo — unhurried, cinematic, controlled',
              'Used deliberate restraint as the primary design tool: what to leave out, where to hold silence, was as considered as what to include',
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
                The artist had a presence scattered across platforms that did not belong to her. None of them felt like her.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.52)', lineHeight: 1.75 }}>
                When identity is fragmented, audiences connect with the platform — not the artist. The space itself needed to feel like Xom Bee.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Intent</SectionLabel>
            <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
              Design and build a space where the artist's emotional presence arrives before any content does — and where every interaction extends that feeling rather than interrupting it.
            </p>
          </div>
        </div>

        {/* Visual 2 */}
        <CaseStudyMedia aspectRatio="2.22 / 1" video="/projects/xom-bee/reel-2.mp4" poster="/images/xom-bee-2.png" alt="Xom Bee Official — screen 2" />

        <Divider />

        {/* ── 5. Approach ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Approach</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                step: 'Starting with the Feeling',
                desc: 'I asked: what does this music feel like before it plays? Dark. Still. Present. That became the brief — and the constraint every decision was measured against.',
              },
              {
                step: 'Making the Interface Disappear',
                desc: 'Every element was evaluated against one standard: does this add presence, or does it add noise? Noise was removed. The interface had to earn its invisibility.',
              },
              {
                step: 'Building the Motion Language',
                desc: 'Transitions are slow. Hover states are deliberate. Motion communicates the artist\'s tempo — not a generic "smooth" feel, but specifically unhurried, arriving, controlled.',
              },
              {
                step: 'Development as Creative Direction',
                desc: 'I built this in Next.js and TypeScript, alone. Every implementation choice — animation timing, spacing units, performance tradeoffs — was made in service of the feeling, not convenience.',
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
              'Dark atmosphere was not a style choice — it was the only honest response to the music\'s emotional register. Anything lighter would have felt dishonest.',
              'Interactions were slowed intentionally. Fast UI signals urgency. This needed to signal arrival — something coming toward you, not demanding your attention.',
              'The artist\'s name and image lead everything. All other content recedes until it is needed. Hierarchy as a form of respect.',
              'Typography was set wide and quiet — editorial spacing, minimal weight contrast. Not promotional. The music is the promotion.',
              'Embedded media was structured to feel discovered, not advertised. The sound arrives; it is not pushed.',
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
        <CaseStudyMedia aspectRatio="2 / 1" video="/projects/xom-bee/reel-3.mp4" poster="/images/xom-bee-3.png" alt="Xom Bee Official — screen 3" />

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
            I designed and built the entire experience end-to-end. The mood was the brief. Every decision traces back to one question: does this feel like the artist?
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            maxWidth: '560px',
          }}>
            The dark atmosphere, the motion pacing, the typographic weight — authored, not assembled. I kept design and development as one continuous act so nothing was lost in translation. What shipped is what I intended.
          </p>
        </div>

        <Divider />

        {/* ── 8. Tech Stack ───────────────────────────────────────────────── */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          <SectionLabel>Built With</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'].map((tech) => (
              <span key={tech} style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.55)',
                padding: '8px 16px',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.03)',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── 9. Project Links ───────────────────────────────────────────── */}
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
