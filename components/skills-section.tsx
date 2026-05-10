'use client'

import { useReveal } from '@/hooks/use-reveal'

// ─── Content ──────────────────────────────────────────────────────────────────
// Three thematic entries framed around what artists gain, not what tools are used.
// Tools appear only as a muted footnote — never a primary column.

const capabilities = [
  {
    id:    '01',
    title: 'Identity Systems',
    body:  "Who you are needs to be visible before anyone speaks. I design identity systems — marks, palettes, typography, voice — that hold an artist's character with clarity. Not decoration. A foundation that keeps you recognisable across every surface.",
    tools: 'Brand Identity  ·  Visual Design  ·  Figma',
  },
  {
    id:    '02',
    title: 'Presence & Interface',
    body:  "A digital presence is not a portfolio page. It is the space where your audience arrives and immediately understands something true about you. I design and build those spaces — responsive, quiet, and functionally invisible so the work stays central.",
    tools: 'UI/UX Design  ·  Frontend Development  ·  Next.js',
  },
  {
    id:    '03',
    title: 'Made to Be Remembered',
    body:  "People don't remember features. They remember how something made them feel. Every decision — the spacing, the color, the motion, the silence — is a deliberate emotional choice. The design should feel like yours before anyone reads your name.",
    tools: 'Visual Hierarchy  ·  Motion  ·  Storytelling',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export function SkillsSection() {
  const { ref, revealed } = useReveal()

  return (
    <section
      id="skills"
      style={{
        background: 'transparent',
        paddingTop:    'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(64px, 8vw, 96px)',
      }}
    >
      {/*
        All hover behaviour lives here — no useState, no re-renders.
        Transitions are slow (0.45s) to match the cinematic, unhurried brand tempo.
      */}
      <style>{`
        .cap-entry {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: clamp(40px, 5.5vw, 64px) 0;
          cursor: default;
          transition: background 0.60s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.60s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap-entry:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        /* Hover: amber surface wash — perceptible but not assertive */
        .cap-entry:hover {
          background: rgba(230,161,90,0.032);
          box-shadow: inset 3px 0 0 rgba(230,161,90,0.30);
        }
        /* Index: lifts into amber presence on hover */
        .cap-index {
          transition: color 0.60s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap-entry:hover .cap-index {
          color: rgba(230,161,90,0.72) !important;
        }
        /* Title: resolves to pure white — full clarity at focus */
        .cap-title {
          transition: color 0.60s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap-entry:hover .cap-title {
          color: rgba(255,255,255,1.0) !important;
        }
        /* Body: luminance lift — the whole entry brightens, not just the heading */
        .cap-body {
          transition: color 0.60s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap-entry:hover .cap-body {
          color: rgba(255,255,255,0.88) !important;
        }
        /* Tools: rises from secondary to gently legible on hover */
        .cap-tools {
          transition: color 0.60s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cap-entry:hover .cap-tools {
          color: rgba(255,255,255,0.56) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section header */}
        <div
          ref={ref}
          className={`reveal ${revealed ? 'revealed' : ''}`}
          style={{ marginBottom: 'clamp(44px, 6vw, 68px)' }}
        >
          <span style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#E6A15A',
            display: 'block',
            marginBottom: '20px',
          }}>
            What I Create
          </span>
          <p style={{
            fontSize: 'clamp(13px, 1.3vw, 15px)',
            color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.75,
            maxWidth: '400px',
          }}>
            Three disciplines. One aim: to make artists seen, understood, and remembered.
          </p>
        </div>

        {/* Editorial entries */}
        <div>
          {capabilities.map((cap) => (
            <div key={cap.id} className="cap-entry">
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(28px, 4vw, 56px)',
                paddingLeft: 'clamp(16px, 2vw, 24px)',
              }}>

                {/* Index — narrow fixed column */}
                <span
                  className="cap-index"
                  aria-hidden="true"
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    color: 'rgba(230,161,90,0.42)',
                    flexShrink: 0,
                    paddingTop: '8px',
                    minWidth: '24px',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {cap.id}
                </span>

                {/* Content */}
                <div style={{ flex: 1 }}>

                  <h3
                    className="cap-title"
                    style={{
                      fontSize: 'clamp(22px, 3vw, 34px)',
                      fontWeight: 700,
                      lineHeight: 1.08,
                      letterSpacing: '-0.022em',
                      color: 'rgba(255,255,255,0.92)',
                      marginBottom: 'clamp(18px, 2vw, 26px)',
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p
                    className="cap-body"
                    style={{
                      fontSize: 'clamp(14px, 1.3vw, 15px)',
                      lineHeight: 1.9,
                      color: 'rgba(255,255,255,0.78)',
                      maxWidth: '560px',
                      marginBottom: 'clamp(24px, 2vw, 32px)',
                    }}
                  >
                    {cap.body}
                  </p>

                  {/* Tool footnote — secondary layer, receded but legible */}
                  <p
                    className="cap-tools"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.36)',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {cap.tools}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
