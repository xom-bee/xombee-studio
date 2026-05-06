'use client'

import { useState, useEffect } from 'react'
import { useReveal } from '@/hooks/use-reveal'

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
  },
  {
    id: 6,
    name: 'Dasho',
    category: 'Digital Services',
    desc: 'Clean identity system for a trusted digital services platform built for modern businesses.',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dasho-whcxMkgP3NLY8B0iy8mhDDOTy50fRH.png',
  },
]

type Logo = typeof logos[number]

function SYMark({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: size, height: size }}>
      <polygon points="60,10 102,34 102,86 60,110 18,86 18,34" stroke="#E6A15A" strokeWidth="1.5" fill="rgba(230,161,90,0.08)" />
      <polygon points="60,25 88,40 88,70 60,85 32,70 32,40" stroke="rgba(230,161,90,0.35)" strokeWidth="0.5" fill="none" />
      <text x="60" y="68" textAnchor="middle" fill="#E6A15A" fontSize="20" fontWeight="700" fontFamily="serif" letterSpacing="2">SY</text>
    </svg>
  )
}

function Modal({ logo, onClose }: { logo: Logo; onClose: () => void }) {
  const isFeatured = 'featured' in logo && logo.featured

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        animation: 'modalFadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '460px',
          width: '100%',
          background: '#101014',
          border: '1px solid rgba(230,161,90,0.20)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(230,161,90,0.06)',
          animation: 'modalScaleIn 0.3s cubic-bezier(0.22,1,0.36,1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '14px', right: '14px', zIndex: 10,
            width: '30px', height: '30px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.40)',
            cursor: 'pointer', fontSize: '13px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(230,161,90,0.12)'
            e.currentTarget.style.color = '#E6A15A'
            e.currentTarget.style.borderColor = 'rgba(230,161,90,0.35)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.40)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          }}
        >
          ✕
        </button>

        {/* Image area */}
        <div style={{
          background: isFeatured ? 'rgba(230,161,90,0.03)' : '#0a0a0e',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '52px 44px',
          minHeight: '260px',
          position: 'relative',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(230,161,90,0.35), transparent)',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '220px', height: '220px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          {logo.src ? (
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                maxWidth: '260px', maxHeight: '180px',
                objectFit: 'objectFit' in logo && logo.objectFit === 'cover' ? 'cover' : 'contain',
                position: 'relative', zIndex: 1,
              }}
            />
          ) : (
            <SYMark size={130} />
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '22px 26px 26px' }}>
          <p style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#E6A15A', marginBottom: '8px',
          }}>
            {logo.category}
          </p>
          <p style={{
            fontFamily: 'serif', fontSize: '21px', fontWeight: 700,
            color: 'rgba(255,255,255,0.90)', letterSpacing: '-0.01em', marginBottom: '10px',
          }}>
            {logo.name}
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.70, color: 'rgba(255,255,255,0.36)' }}>
            {logo.desc}
          </p>
        </div>
      </div>
    </div>
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
  const isFeatured = 'featured' in logo && logo.featured

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
      className={`reveal ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s`, position: 'relative', paddingBottom: '118%', perspective: '1100px', cursor: 'pointer' }}
      onMouseEnter={() => !isTouchDevice && setFlipped(true)}
      onMouseLeave={() => !isTouchDevice && setFlipped(false)}
      onClick={handleClick}
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
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
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
          <div style={{ width: '100%', textAlign: 'center', padding: '0 20px 20px' }}>
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
              color: 'rgba(255,255,255,0.22)',
            }}>
              {logo.category}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-face flip-face-back"
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
            <p style={{
              fontFamily: 'serif', fontSize: '22px', fontWeight: 700,
              color: 'rgba(255,255,255,0.90)', letterSpacing: '-0.01em',
              marginBottom: '14px',
            }}>
              {logo.name}
            </p>
            <p style={{
              fontSize: '12px', lineHeight: 1.7,
              color: 'rgba(255,255,255,0.36)',
              maxWidth: '190px', margin: '0 auto',
            }}>
              {logo.desc}
            </p>
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

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalLogo(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalLogo ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalLogo])

  return (
    <>
      <style>{`
        .flip-inner {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 0.60s cubic-bezier(0.4, 0, 0.2, 1);
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
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalScaleIn {
          from { opacity: 0; transform: scale(0.94) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);   }
        }
      `}</style>

      <section id="logos" className="py-24" style={{ background: 'transparent' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <div ref={ref} className={`mb-12 reveal ${revealed ? 'revealed' : ''}`}>
            <span style={{
              fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#E6A15A',
              display: 'block', marginBottom: '14px',
            }}>
              Visual Identity
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance" style={{ marginBottom: '12px' }}>
              Marks that define{' '}
              <span style={{ color: '#E6A15A', textShadow: '0 0 24px rgba(230,161,90,0.22)' }}>identity</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.30)', lineHeight: 1.65, maxWidth: '460px' }}>
              Minimal marks built to carry meaning, memory, and identity.{' '}
              <span style={{ color: 'rgba(255,255,255,0.18)' }}>
                {isTouchDevice ? 'Tap to explore.' : 'Hover to explore, click to preview.'}
              </span>
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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

        </div>
      </section>

      {/* Modal */}
      {modalLogo && (
        <Modal logo={modalLogo} onClose={() => setModalLogo(null)} />
      )}
    </>
  )
}
