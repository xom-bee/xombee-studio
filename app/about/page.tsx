'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SkillsSection } from '@/components/skills-section'

const skills = [
  'UI/UX Design',
  'Frontend Development',
  'Wireframing & Prototyping',
  'Information Architecture',
  'Visual Design',
  'User Research Basics',
]

const experience = [
  {
    role: 'Lead Designer',
    org: 'Dasho Digital',
    context: 'Brand & Identity',
    desc: 'Created brand identity systems and ensured visual consistency across digital platforms.',
  },
  {
    role: 'Frontend Developer',
    org: 'Scan2Dine',
    context: 'Product & UX',
    desc: 'Built a QR-based digital menu system and improved usability and user flow.',
  },
  {
    role: 'Producer',
    org: 'Greener Way',
    context: 'Video & Storytelling',
    desc: 'Produced corporate video content and managed visual storytelling from concept to delivery.',
  },
]

const achievements = [
  {
    title: 'Best Project Award',
    subtitle: 'Scan2Dine — PRJ202 Showcase',
  },
  {
    title: 'Top 5 Finalist',
    subtitle: 'The Unique Voice Singing Competition',
  },
  {
    title: 'Completed Training',
    subtitle: 'De-Suung Accelerated Program',
  },
]

const divider = <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: 'clamp(48px, 6vw, 64px) 0' }} />

const sectionTitle = (label: string) => (
  <h2 style={{
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#E6A15A',
    marginBottom: '32px',
  }}>
    {label}
  </h2>
)

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <main
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
        style={{
          paddingTop: 'clamp(120px, 14vw, 160px)',
          paddingBottom: 'clamp(80px, 10vw, 120px)',
        }}
      >

        {/* Hero — two column */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(40px, 7vw, 80px)',
          flexWrap: 'wrap',
          marginBottom: 'clamp(48px, 7vw, 72px)',
        }}>

          {/* Left: text */}
          <div style={{ flex: '1 1 300px', maxWidth: '520px' }}>
            <style>{`
              .about-tag {
                transition: background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, color 0.22s ease;
              }
              .about-tag:hover {
                background: rgba(230,161,90,0.14) !important;
                border-color: rgba(230,161,90,0.40) !important;
                box-shadow: 0 0 10px rgba(230,161,90,0.15);
                color: rgba(230,161,90,1) !important;
              }
            `}</style>

            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              marginBottom: '14px',
            }}>
              About Me
            </h1>

            {/* Accent line */}
            <div style={{
              width: '50px',
              height: '2px',
              background: '#E6A15A',
              borderRadius: '999px',
              marginBottom: '20px',
              opacity: 0.8,
            }} />

            <p style={{
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '16px',
            }}>
              I design professional personal websites for creative artists.
            </p>
            <p style={{
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.38)',
              letterSpacing: '0.01em',
              marginBottom: '40px',
            }}>
              Focused on identity, experience, and visual storytelling
            </p>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['UI/UX Design', 'Frontend Development', 'Visual Identity', 'Prototyping'].map((tag) => (
                <span key={tag} className="about-tag" style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'rgba(230,161,90,0.75)',
                  background: 'rgba(230,161,90,0.08)',
                  border: '1px solid rgba(230,161,90,0.18)',
                  borderRadius: '999px',
                  padding: '5px 14px',
                  boxShadow: '0 0 6px rgba(230,161,90,0.08)',
                  cursor: 'default',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: portrait image */}
          <div style={{ flex: '1 1 260px', maxWidth: '380px', position: 'relative' }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              inset: '-32px',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(230,161,90,0.14) 0%, transparent 65%)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3 / 3.6',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(230,161,90,0.10)',
              boxShadow: '0 32px 72px rgba(0,0,0,0.60), 0 0 0 1px rgba(230,161,90,0.06)',
              zIndex: 1,
            }}>
              <Image
                src="/images/about-page.JPG"
                alt="Sangay Yoesel"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 55%, rgba(11,11,15,0.55) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(230,161,90,0.04)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>

        </div>

        {divider}

        {/* Bio */}
        <div style={{ marginBottom: 'clamp(56px, 7vw, 72px)', maxWidth: '520px' }}>
          {/* Vertical guide line + content */}
          <div style={{ position: 'relative', paddingLeft: '24px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: '6px',
              bottom: '6px',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(230,161,90,0.40), rgba(230,161,90,0.10) 60%, transparent)',
            }} />

            {/* Origin */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(230,161,90,0.55)', marginBottom: '16px' }}>Origin</p>
              <p style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', fontWeight: 700, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)', marginBottom: '10px' }}>
                I started with music.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 400, lineHeight: 1.85, color: 'rgba(255,255,255,0.45)' }}>
                It was the first way I expressed myself.
              </p>
            </div>

            {/* Realization — no label */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 400, lineHeight: 1.85, color: 'rgba(255,255,255,0.40)', marginBottom: '10px' }}>
                But I realized something was missing.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 600, lineHeight: 1.85, color: 'rgba(255,255,255,0.72)' }}>
                The feeling was there.{' '}
                <span style={{ color: '#E6A15A', fontWeight: 700 }}>The identity was not.</span>
              </p>
            </div>

            {/* Turning point — no label */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', fontWeight: 700, lineHeight: 1.5, color: 'rgba(255,255,255,0.88)', marginBottom: '12px' }}>
                That is where{' '}
                <span style={{ color: '#E6A15A' }}>design</span>
                {' '}came in.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 400, lineHeight: 1.85, color: 'rgba(255,255,255,0.42)' }}>
                I use design to translate ideas and emotions into clear digital experiences. Experiences that people can see, understand, and remember.
              </p>
            </div>

            {/* Today */}
            <div>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(230,161,90,0.55)', marginBottom: '16px' }}>Today</p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 400, lineHeight: 1.85, color: 'rgba(255,255,255,0.38)', marginBottom: '12px' }}>
                I am currently pursuing a degree in Interactive Design and Development at Gyalpozhing College of Information Technology.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', fontWeight: 600, lineHeight: 1.85, color: 'rgba(255,255,255,0.80)', marginBottom: '10px' }}>
                My work focuses on{' '}
                <span style={{ color: '#E6A15A' }}>UI/UX design, frontend development, and visual identity.</span>
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.3vw, 15px)', fontWeight: 400, lineHeight: 1.85, color: 'rgba(255,255,255,0.40)' }}>
                I aim to create modern, minimal, and meaningful digital products that improve how people interact with technology.
              </p>
            </div>

          </div>
        </div>

        {divider}

        {/* Skills */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          {sectionTitle('Core Skills')}
          <style>{`
            .skill-row {
              transition: background 0.2s ease, padding-left 0.2s ease;
            }
            .skill-row:hover {
              background: rgba(230,161,90,0.04);
              padding-left: 12px !important;
            }
            .skill-row:hover .skill-dot {
              opacity: 0.9;
              box-shadow: 0 0 6px rgba(230,161,90,0.6);
            }
            .skill-row:hover .skill-label {
              color: rgba(255,255,255,1) !important;
            }
          `}</style>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {skills.map((skill, i) => {
              const isKey = skill === 'UI/UX Design' || skill === 'Frontend Development'
              return (
                <div
                  key={skill}
                  className="skill-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 0',
                    paddingLeft: '0',
                    borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                    cursor: 'default',
                  }}
                >
                  {/* Left dot */}
                  <div
                    className="skill-dot"
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#E6A15A',
                      opacity: isKey ? 0.7 : 0.28,
                      flexShrink: 0,
                      transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                    }}
                  />
                  <span
                    className="skill-label"
                    style={{
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      fontWeight: isKey ? 600 : 500,
                      color: isKey ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.65)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>
          <p style={{
            marginTop: '24px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.7,
          }}>
            <span style={{ color: 'rgba(230,161,90,0.55)', marginRight: '8px', letterSpacing: '0.06em', fontWeight: 500, fontSize: '11px' }}>Tools I use:</span>
            Figma, Adobe Illustrator, Photoshop, Canva, CapCut
          </p>
        </div>

        <SkillsSection />

        {divider}

        {/* Experience */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          {sectionTitle('Experience')}
          <style>{`
            .exp-item {
              transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
            }
            .exp-item:hover {
              transform: translateY(-3px);
              border-color: rgba(230,161,90,0.22) !important;
              box-shadow: 0 8px 28px rgba(0,0,0,0.30);
            }
            .exp-item:hover .exp-dot {
              box-shadow: 0 0 8px rgba(230,161,90,0.7);
              opacity: 1 !important;
            }
          `}</style>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '28px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '7px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(230,161,90,0.45), rgba(230,161,90,0.10) 70%, transparent)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {experience.map((item, i) => (
                <div
                  key={item.org}
                  className="exp-item"
                  style={{
                    position: 'relative',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px',
                    padding: '20px 22px',
                  }}
                >
                  {/* Dot on the line */}
                  <div
                    className="exp-dot"
                    style={{
                      position: 'absolute',
                      left: '-35px',
                      top: '22px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#E6A15A',
                      opacity: i === 0 ? 0.9 : 0.45,
                      border: '2px solid #0B0B0F',
                      transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                    }}
                  />

                  {/* Context tag */}
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(230,161,90,0.50)',
                    marginBottom: '8px',
                  }}>
                    {item.context}
                  </div>

                  {/* Role + Org */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', fontWeight: 700, color: '#FFFFFF' }}>
                      {item.role}
                    </span>
                    <span style={{ fontSize: '12px', color: '#E6A15A', fontWeight: 500 }}>
                      — {item.org}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {divider}

        {/* Achievements */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 64px)' }}>
          {sectionTitle('Achievements')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {achievements.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '18px 20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  borderLeft: '2px solid rgba(230,161,90,0.35)',
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: 'clamp(14px, 1.4vw, 16px)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                    lineHeight: 1.4,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(230,161,90,0.60)',
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          position: 'relative',
          marginTop: 'clamp(48px, 7vw, 80px)',
          padding: 'clamp(48px, 6vw, 72px) 0',
          textAlign: 'center',
          overflow: 'hidden',
        }}>
          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Let&apos;s build something that people remember.
          </p>
          <p style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '36px',
          }}>
            Your work deserves more than just being seen.
          </p>

          <ContactButton />

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.03em',
          }}>
            Usually reply within 24 hours
          </p>
        </div>

      </main>
    </div>
  )
}

function ContactButton() {
  return (
    <>
      <style>{`
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0B0B0F;
          background: #E6A15A;
          border: none;
          border-radius: 999px;
          padding: 15px 32px;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .cta-btn:hover {
          transform: scale(1.04) translateY(-2px);
          background: #d4904d;
          box-shadow: 0 8px 32px rgba(230,161,90,0.35), 0 0 0 1px rgba(230,161,90,0.2);
        }
        .cta-btn:hover .cta-arrow {
          transform: translateX(4px);
        }
        .cta-arrow {
          font-size: 16px;
          line-height: 1;
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>
      <Link href="/#contact" style={{ textDecoration: 'none' }}>
        <button className="cta-btn">
          Build Your Stage
          <span className="cta-arrow">→</span>
        </button>
      </Link>
    </>
  )
}
