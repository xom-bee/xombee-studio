'use client'

import { useEffect, useRef } from 'react'

export function BackgroundLayer() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let running = true
    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 22
      targetY = (e.clientY / window.innerHeight - 0.5) * 22
    }

    const tick = () => {
      if (!running) return
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      if (parallaxRef.current) {
        parallaxRef.current.style.transform =
          `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(tick)
    return () => {
      running = false
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        /* Blob 1 — amber, top-right, strongest */
        @keyframes blob1 {
          0%,100% { transform: translate3d(  0px,   0px, 0) scale(1.00); opacity: 0.28; }
          20%      { transform: translate3d( 50px, -35px, 0) scale(1.06); opacity: 0.34; }
          45%      { transform: translate3d(-30px,  50px, 0) scale(0.96); opacity: 0.22; }
          70%      { transform: translate3d( 40px,  20px, 0) scale(1.08); opacity: 0.30; }
        }

        /* Blob 2 — indigo, bottom-left, medium */
        @keyframes blob2 {
          0%,100% { transform: translate3d(  0px,   0px, 0) scale(1.00); opacity: 0.22; }
          25%      { transform: translate3d(-55px,  40px, 0) scale(1.07); opacity: 0.28; }
          55%      { transform: translate3d( 35px, -45px, 0) scale(0.94); opacity: 0.16; }
          80%      { transform: translate3d(-20px,  20px, 0) scale(1.04); opacity: 0.24; }
        }

        /* Blob 3 — soft amber, center, weakest */
        @keyframes blob3 {
          0%,100% { transform: translate3d(  0px,  0px, 0) scale(1.00); opacity: 0.14; }
          35%      { transform: translate3d( 30px, 55px, 0) scale(1.05); opacity: 0.18; }
          65%      { transform: translate3d(-40px,-15px, 0) scale(0.97); opacity: 0.12; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-blob { animation: none !important; }
        }
        @media (max-width: 768px) {
          .bg-blob { animation-duration: 90s !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background: '#0B0B0F',
          overflow: 'hidden',
        }}
      >
        {/* Mouse-parallax container — drifts up to 8px */}
        <div ref={parallaxRef} style={{ position: 'absolute', inset: '-30px' }}>

          {/* Blob 1 — warm amber, top-right, STRONGEST */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              top: '0%',
              right: '0%',
              width: '580px',
              height: '520px',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,140,60,0.18) 0%, rgba(255,120,40,0.08) 40%, transparent 70%)',
              filter: 'blur(58px)',
              animation: 'blob1 46s ease-in-out infinite',
              willChange: 'transform, opacity',
            }}
          />

          {/* Blob 2 — deep indigo, bottom-left, MEDIUM */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              bottom: '-5%',
              left: '-2%',
              width: '520px',
              height: '560px',
              background: 'radial-gradient(circle at 40% 60%, rgba(80,120,255,0.14) 0%, rgba(50,80,200,0.06) 40%, transparent 70%)',
              filter: 'blur(70px)',
              animation: 'blob2 62s ease-in-out infinite',
              willChange: 'transform, opacity',
            }}
          />

          {/* Blob 3 — soft amber, center-left, WEAKEST */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              top: '38%',
              left: '25%',
              width: '440px',
              height: '400px',
              background: 'radial-gradient(circle at 50% 45%, rgba(255,170,90,0.10) 0%, rgba(230,140,60,0.04) 45%, transparent 68%)',
              filter: 'blur(80px)',
              animation: 'blob3 78s ease-in-out infinite',
              willChange: 'transform, opacity',
            }}
          />

        </div>
      </div>
    </>
  )
}
