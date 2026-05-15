'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Atmospheric hero media — primary capability layer.
 *
 * Desktop: <video> with cinematic treatment (blur, low opacity, warm grade,
 * screen blend, soft radial mask). Slow Ken-Burns drift masks the loop seam.
 *
 * Mobile: static <img> of the hero poster — same emotional content without
 * the battery/data cost of decoded video on small screens.
 *
 * prefers-reduced-motion: static image only.
 *
 * This layer sits below grain + mouse-glow + vignette so the readability
 * protection still composites on top and typography contrast is preserved.
 */
export function HeroVideo() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    setIsMobile(window.matchMedia('(max-width: 767px)').matches)

    // Lazy mount after first paint so hero typography appears first
    const idle = (cb: () => void) => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
      if (typeof w.requestIdleCallback === 'function') w.requestIdleCallback(cb)
      else setTimeout(cb, 0)
    }
    idle(() => setMounted(true))
  }, [])

  if (!mounted) return null

  // Shared cinematic filter — used by both video and image fallback
  const cinematicFilter =
    'blur(10px) saturate(0.55) brightness(0.75) contrast(0.92) sepia(0.18) hue-rotate(-8deg)'

  // Static image branch: mobile OR reduced-motion
  const useStaticImage = isMobile || reducedMotion

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden hero-video-layer"
      style={{
        // Soft radial mask — kills the rectangle edge, bleeds into surrounding darkness
        WebkitMaskImage:
          'radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 92%)',
        maskImage:
          'radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 92%)',
      }}
    >
      {/* Poster image — also serves as the under-layer while video loads */}
      <img
        src="/hero_image.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: cinematicFilter,
          mixBlendMode: 'screen',
          opacity: useStaticImage ? 0.20 : (videoReady ? 0 : 0.24),
          transition: 'opacity 1.4s ease-out',
        }}
      />

      {!useStaticImage && (
        <video
          ref={videoRef}
          src="/hero_video.mp4"
          poster="/hero_image.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setVideoReady(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: cinematicFilter,
            mixBlendMode: 'screen',
            opacity: videoReady ? 0.26 : 0,
            transition: 'opacity 1.6s ease-out',
            animation: 'hero-video-drift 42s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        />
      )}
    </div>
  )
}
