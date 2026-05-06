'use client'

import { useEffect, useRef, useState } from 'react'

type TextBlock = {
  lines: string[]
  weight: 500 | 600 | 700
  delay: number
}

type GapBlock = { gap: 'medium' }

type Block = TextBlock | GapBlock

const blocks: Block[] = [
  { lines: ['I have been there.'],                                          weight: 700, delay: 0 },
  { gap: 'medium' },
  { lines: ['Creating something real', 'but feeling unseen.'],             weight: 500, delay: 0.2 },
  { gap: 'medium' },
  { lines: ['Trying to express something deep', 'but not knowing how to present it.'], weight: 500, delay: 0.5 },
  { gap: 'medium' },
  { lines: ['That is where it started for me.'],                           weight: 600, delay: 0.82 },
]

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'transparent',
        padding: 'clamp(64px, 9vw, 112px) clamp(20px, 8vw, 140px)',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Left: Text */}
        <div className="w-full lg:flex-1" style={{ minWidth: 0 }}>
          <div className="space-y-6 sm:space-y-8" style={{ maxWidth: '90%' }}>
            {blocks.map((block, i) => {
              if ('gap' in block) return null

              return (
                <div
                  key={i}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 1.1s ${block.delay}s cubic-bezier(0.22, 1, 0.36, 1),
                                 transform 1.1s ${block.delay}s cubic-bezier(0.22, 1, 0.36, 1)`,
                  }}
                >
                  {block.lines.map((text, j) => (
                    <div
                      key={j}
                      className="text-base sm:text-lg lg:text-xl leading-relaxed"
                      style={{
                        fontSize: undefined,
                        fontWeight: block.weight,
                        color: '#E5E5E5',
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="w-full lg:flex-none"
          style={{
            maxWidth: 'min(360px, 100%)',
            width: '100%',
            aspectRatio: '4 / 5',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
            background: '#06060A',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.3s 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 1.3s 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/trust-portrait.jpg"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 55%',
              display: 'block',
              filter: 'brightness(0.78) contrast(0.88) blur(2px)',
            }}
          />

          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.72) 100%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(160, 88, 28, 0.07)',
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '22%',
            background: 'linear-gradient(to top, rgba(11,11,15,0.80), transparent)',
            pointerEvents: 'none',
          }} />
        </div>

      </div>
    </section>
  )
}
