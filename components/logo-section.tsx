'use client'

import { useState, useEffect } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { Modal } from '@/components/ui/modal'

const logos = [
  {
    id: 1,
    name: 'Druk Art Hub',
    category: 'Arts & Culture',
    desc: 'Visual identity for a cultural arts platform celebrating Bhutanese creativity and artistic expression.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Druk%20Art%20Hub%20White-kzYwulz7gYVoRQqBP1KgzXaxdJRlkp.png',
  },
  {
    id: 2,
    name: 'Yoesel',
    category: 'Personal Brand',
    desc: 'Personal brand identity system built around design, music, and artistic storytelling.',
    src: null as null,
    featured: true,
  },
  {
    id: 3,
    name: 'Scan2Dine',
    category: 'Food & Tech',
    desc: 'Brand mark for a QR-based digital dining experience designed for modern restaurants.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scan2Dine%20White-x3WNAwxVFNMeAQ9FTb4HtadYTVmS7R.png',
  },
  {
    id: 4,
    name: 'No-Q',
    category: 'Healthcare',
    desc: 'Minimal identity for a digital queue management solution that reduces patient wait times.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/No%20Q%20White-6Po6wewd4f5Pu1PswooZ5bRDbvUYWc.png',
  },
  {
    id: 5,
    name: 'Serkhai Gawa',
    category: 'Music Identity',
    desc: 'Music artist identity — evocative, personal, and rooted in cultural emotion.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serkhai%20Gawa-kIxJZL1zDDc0SHHHT9XcJQnpki0nec.png',
    objectFit: 'cover' as const,
    link: 'https://www.youtube.com/watch?v=ElnpNEgbtR0',
    linkText: 'View Identity Usage',
  },
  {
    id: 6,
    name: 'Dasho',
    category: 'Digital Services',
    desc: 'Clean identity system for a trusted digital services platform built for modern businesses.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dasho-whcxMkgP3NLY8B0iy8mhDDOTy50fRH.png',
    link: 'https://www.tiktok.com/@dashodigital',
    linkText: 'Explore Brand Presence',
  },
]

type Logo = typeof logos[number]

function SYMark({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: size, height: size }}>
      <polygon points="60,10 102,34 102,86 60,110 18,86 18,34" stroke="#E6A15A" strokeWidth="1.5" fill="rgba(230,161,90,0.08)" />
      <polygon points="60,25 88,40 88,70 60,85 32,70 32,40" stroke="rgba(230,161,90,0.35)" strokeWidth="0.5" fill="none" />
      <text x="60" y="68" textAnchor="middle" fill="#E6A15A" fontSize="20" fontWeight="700" style={{ fontFamily: 'var(--font-cormorant)' }} letterSpacing="2">SY</text>
    </svg>
  )
}

function LogoModalContent({ logo, onClose }: { logo: Logo; onClose: () => void }) {
  const [imgHovered, setImgHovered] = useState(false)
  const isFeatured = 'featured' in logo && logo.featured

  return (
    <>
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 10001,
          width: '38px', height: '38px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.10)',
          color: 'rgba(255,255,255,0.62)',
          cursor: 'pointer', fontSize: '14px',
          transition: 'background 0.42s cubic-bezier(0.22, 1, 0.36, 1), color 0.42s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(230,161,90,0.14)'
          e.currentTarget.style.color = '#E6A15A'
          e.currentTarget.style.borderColor = 'rgba(230,161,90,0.40)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
        }}
      >
        ✕
      </button>

      {/* Image wrapper */}
      <div
        style={{
          animation: 'modal-content-scale 0.34s cubic-bezier(0.22, 1, 0.36, 1)',
          cursor: 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {logo.src ? (
          <img
            src={logo.src}
            alt=""
            loading="eager"
            style={{
              maxWidth: 'min(85vw, 860px)',
              maxHeight: '82vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '14px',
              boxShadow: '0 48px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(230,161,90,0.04)',
              transform: imgHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
              cursor: 'default',
              display: 'block',
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          />
        ) : (
          <div
            style={{
              width: 'min(300px, 82vw)',
              height: 'min(300px, 60vh)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '14px',
              background: 'rgba(230,161,90,0.04)',
              border: '1px solid rgba(230,161,90,0.18)',
              boxShadow: '0 48px 140px rgba(0,0,0,0.85)',
              transform: imgHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <SYMark size={isFeatured ? 180 : 140} />
          </div>
        )}
      </div>
    </>
  )
}

function LogoCard({
  logo,
  index,
  isTouchDevice,
  onOpenModal,
}: {
  logo: Logo
  index: number
  isTouchDevice: boolean
  onOpenModal: (logo: Logo) => void
}) {
  const { ref, revealed } = useReveal()
  const [flipped, setFlipped] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const isFeatured = 'featured' in logo && logo.featured
  const hasLink = 'link' in logo && !!logo.link

  const handleClick = () => {
    if (isTouchDevice) {
      if (flipped) {
        onOpenModal(logo)
      } else {
        setFlipped(true)
      }
    } else {
      onOpenModal(logo)
    }
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`${logo.name} — ${logo.category}. ${isTouchDevice ? 'Tap to explore.' : 'Hover to explore, click to preview.'}`}
      className={`reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s`, position: 'relative', paddingBottom: '118%', perspective: '1100px', cursor: 'pointer' }}
      onMouseEnter={() => !isTouchDevice && setFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setFlipped(false)}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick() } }}
    >
      {/* Flip container */}
      <div
        className={`flip-inner ${flipped ? 'flipped' : ''}`}
        style={{ position: 'absolute', inset: 0 }}
      >

        {/* ── FRONT ── */}
        <div
          className="flip-face"
          style={{
            position: 'absolute', inset: 0,
            borderRadius: '16px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: isFeatured ? 'rgba(230,161,90,0.035)' : '#0d0d11',
            border: isFeatured
              ? '1px solid rgba(230,161,90,0.22)'
              : '1px solid rgba(255,255,255,0.06)',
            transition: 'border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Logo area */}
          <div style={{
            flex: 1, width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: isFeatured ? '28px' : '32px',
            position: 'relative',
          }}>
            {isFeatured && (
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '60%', height: '60%',
                background: 'radial-gradient(ellipse, rgba(230,161,90,0.08) 0%, transparent 70%)',
                filter: 'blur(12px)', pointerEvents: 'none',
              }} />
            )}
            {logo.src ? (
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'objectFit' in logo && logo.objectFit === 'cover' ? 'cover' : 'contain',
                }}
              />
            ) : (
              <SYMark size={isFeatured ? 108 : 80} />
            )}
          </div>

          {/* Front label */}
          <div className="logo-front-label" style={{ width: '100%', textAlign: 'center', padding: '0 20px 20px' }}>
            <p style={{
              fontSize: '13px', fontWeight: 600,
              color: isFeatured ? 'rgba(230,161,90,0.88)' : 'rgba(255,255,255,0.80)',
              marginBottom: '4px',
            }}>
              {logo.name}
            </p>
            <p style={{
              fontSize: '10px', fontWeight: 500,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.62)',
            }}>
              {logo.category}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-face flip-face-back logo-back-face"
          style={{
            position: 'absolute', inset: 0,
            borderRadius: '16px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '32px 26px',
            background: '#0d0d14',
            border: '1px solid rgba(230,161,90,0.25)',
            boxShadow: 'inset 0 0 80px rgba(230,161,90,0.02)',
          }}
        >
          {/* Top amber line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(230,161,90,0.50), transparent)',
          }} />

          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#E6A15A', marginBottom: '12px',
            }}>
              {logo.category}
            </p>
            <p className="logo-back-name font-serif" style={{
              fontSize: '22px', fontWeight: 700,
              color: 'rgba(255,255,255,0.90)', letterSpacing: '-0.01em',
              marginBottom: '14px',
            }}>
              {logo.name}
            </p>
            <p className="logo-back-desc" style={{
              fontSize: '12px', lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '190px', margin: '0 auto',
            }}>
              {logo.desc}
            </p>

            {/* External identity link — only for logos that have one */}
            {hasLink && (
              <a
                href={('link' in logo && logo.link) || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '20px',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  color: linkHovered ? '#E6A15A' : 'rgba(255,255,255,0.48)',
                  textDecoration: 'none',
                  padding: '6px 13px',
                  border: `1px solid ${linkHovered ? 'rgba(230,161,90,0.38)' : 'rgba(255,255,255,0.09)'}`,
                  borderRadius: '999px',
                  background: linkHovered ? 'rgba(230,161,90,0.08)' : 'transparent',
                  boxShadow: linkHovered ? '0 0 16px rgba(230,161,90,0.12)' : 'none',
                  transition: 'color 0.42s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.42s cubic-bezier(0.22, 1, 0.36, 1), background 0.42s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                  cursor: 'pointer',
                  minHeight: '30px',
                }}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                {'linkText' in logo && logo.linkText ? logo.linkText : 'Explore'}
                <span style={{
                  display: 'inline-block',
                  transform: linkHovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                  lineHeight: 1,
                }}>
                  →
                </span>
              </a>
            )}
          </div>

          {/* Hint */}
          <div style={{
            position: 'absolute', bottom: '20px',
            display: 'flex', alignItems: 'center', gap: '7px',
            fontSize: '10px', color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.06em',
          }}>
            <span style={{ width: '14px', height: '1px', background: 'rgba(230,161,90,0.35)', display: 'inline-block' }} />
            {isTouchDevice ? 'Tap to preview' : 'Click to preview'}
            <span style={{ width: '14px', height: '1px', background: 'rgba(230,161,90,0.35)', display: 'inline-block' }} />
          </div>
        </div>

      </div>
    </div>
  )
}

export function LogoSection() {
  const { ref, revealed } = useReveal()
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [modalLogo, setModalLogo] = useState<Logo | null>(null)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          .logo-back-face {
            padding: 20px 14px !important;
          }
          .logo-front-label {
            padding: 0 10px 14px !important;
          }
        }
        .flip-inner {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .flip-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-face-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <section id="logos" className="py-24" style={{ background: 'transparent' }}>
        <Container>

          {/* Header */}
          <div ref={ref} className={`mb-12 reveal ${revealed ? 'revealed' : ''}`}>
            <SectionLabel>Visual Identity</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance" style={{ marginBottom: '12px' }}>
              Marks that define{' '}
              <span style={{ color: '#E6A15A', textShadow: '0 0 24px rgba(230,161,90,0.22)' }}>identity</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.56)', lineHeight: 1.65, maxWidth: '460px' }}>
              Each mark here was built to hold character — recognisable before a word is spoken.{' '}
              <span style={{ color: 'rgba(255,255,255,0.62)' }}>
                {isTouchDevice ? 'Tap to explore.' : 'Hover to explore, click to preview.'}
              </span>
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {logos.map((logo, i) => (
              <LogoCard
                key={logo.id}
                logo={logo}
                index={i}
                isTouchDevice={isTouchDevice}
                onOpenModal={setModalLogo}
              />
            ))}
          </div>

        </Container>
      </section>

      {/* Image modal */}
      {modalLogo && (
        <Modal onClose={() => setModalLogo(null)} label={`${modalLogo.name} logo preview`}>
          <LogoModalContent logo={modalLogo} onClose={() => setModalLogo(null)} />
        </Modal>
      )}
    </>
  )
}
