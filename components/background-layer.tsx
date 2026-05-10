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
      targetX = (e.clientX / window.innerWidth  - 0.5) * 28
      targetY = (e.clientY / window.innerHeight - 0.5) * 28
    }

    const tick = () => {
      if (!running) return
      currentX += (targetX - currentX) * 0.038   // slower lerp = heavier, more cinematic
      currentY += (targetY - currentY) * 0.038
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
          0%,100% { transform: translate3d(  0px,   0px, 0) scale(1.00); opacity: 0.26; }
          20%      { transform: translate3d( 55px, -38px, 0) scale(1.06); opacity: 0.32; }
          45%      { transform: translate3d(-28px,  52px, 0) scale(0.95); opacity: 0.20; }
          70%      { transform: translate3d( 42px,  18px, 0) scale(1.08); opacity: 0.28; }
        }

        /* Blob 2 — indigo, bottom-left, medium */
        @keyframes blob2 {
          0%,100% { transform: translate3d(  0px,   0px, 0) scale(1.00); opacity: 0.18; }
          25%      { transform: translate3d(-58px,  42px, 0) scale(1.07); opacity: 0.24; }
          55%      { transform: translate3d( 36px, -48px, 0) scale(0.94); opacity: 0.14; }
          80%      { transform: translate3d(-22px,  22px, 0) scale(1.04); opacity: 0.20; }
        }

        /* Blob 3 — soft amber, center, weakest */
        @keyframes blob3 {
          0%,100% { transform: translate3d(  0px,  0px, 0) scale(1.00); opacity: 0.12; }
          35%      { transform: translate3d( 32px, 58px, 0) scale(1.05); opacity: 0.16; }
          65%      { transform: translate3d(-42px,-16px, 0) scale(0.97); opacity: 0.10; }
        }

        /* Blob 4 — deep amber, top-left, very faint directional edge light */
        @keyframes blob4 {
          0%,100% { transform: translate3d(0px,   0px, 0) scale(1.00); opacity: 0.10; }
          40%      { transform: translate3d(30px, 40px, 0) scale(1.06); opacity: 0.16; }
          75%      { transform: translate3d(-20px, 10px, 0) scale(0.96); opacity: 0.08; }
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
        {/* Directional edge light — faint amber tracing the left screen edge, fixed */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(230,161,90,0.10) 20%, rgba(230,161,90,0.18) 50%, rgba(230,161,90,0.10) 80%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Soft left-edge glow — spills inward from the light edge */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '280px',
            height: '100%',
            background: 'linear-gradient(to right, rgba(230,161,90,0.028) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Mouse-parallax container — drifts up to 8px */}
        <div ref={parallaxRef} style={{ position: 'absolute', inset: '-30px' }}>

          {/* Blob 1 — warm amber, top-right, STRONGEST */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              top: '-2%',
              right: '-2%',
              width: '620px',
              height: '560px',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,140,60,0.16) 0%, rgba(255,120,40,0.07) 42%, transparent 70%)',
              filter: 'blur(62px)',
              animation: 'blob1 48s ease-in-out infinite',
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
              width: '540px',
              height: '580px',
              background: 'radial-gradient(circle at 40% 60%, rgba(80,120,255,0.11) 0%, rgba(50,80,200,0.05) 42%, transparent 70%)',
              filter: 'blur(72px)',
              animation: 'blob2 65s ease-in-out infinite',
              willChange: 'transform, opacity',
            }}
          />

          {/* Blob 3 — soft amber, center-left, WEAKEST */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              top: '38%',
              left: '22%',
              width: '460px',
              height: '420px',
              background: 'radial-gradient(circle at 50% 45%, rgba(255,170,90,0.09) 0%, rgba(230,140,60,0.03) 46%, transparent 68%)',
              filter: 'blur(82px)',
              animation: 'blob3 82s ease-in-out infinite',
              willChange: 'transform, opacity',
            }}
          />

          {/* Blob 4 — soft amber, top-left, DIRECTIONAL FILL */}
          <div
            className="bg-blob"
            style={{
              position: 'absolute',
              top: '5%',
              left: '-5%',
              width: '380px',
              height: '340px',
              background: 'radial-gradient(ellipse at 60% 40%, rgba(230,161,90,0.08) 0%, rgba(210,130,50,0.03) 48%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'blob4 92s ease-in-out infinite 6s',
              willChange: 'transform, opacity',
            }}
          />

        </div>
      </div>
    </>
  )
}
