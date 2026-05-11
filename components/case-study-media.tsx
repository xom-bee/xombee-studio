'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyMedia — cinematic video/image slot for case study pages.
//
// Playback:
//   • Viewport-gated autoplay via IntersectionObserver (≥25% visible)
//   • Pauses when tab is hidden; resumes only if still in view
//   • prefers-reduced-motion: skips autoplay, shows static poster
//   • preload="none" — zero bytes fetched until IO triggers play()
//
// Visual layers (inside → out):
//   • Video (bottom) → poster crossfade → cinematic overlays
//   • Ambient glow bleeds vertically outside the frame, integrating the
//     media into the surrounding atmospheric space
//
// Hover physicality:
//   • Wrapper lifts: translateY(-3px) scale(1.004) — surface emergence
//   • Shadow deepens; amber inner border replaces white-tint
//   • Top-edge rim highlight simulates directional light on a physical surface
//   • Ambient glow brightens in response
// ─────────────────────────────────────────────────────────────────────────────

interface CaseStudyMediaProps {
  /** CSS aspect-ratio value, e.g. "16 / 9" or "2 / 1" */
  aspectRatio?: string
  /** MP4 video path — e.g. /projects/xom-bee/reel-1.mp4 */
  video?: string
  /** WebM video path (optional) — served first; better compression */
  videoWebm?: string
  /** Poster image shown before play and in reduced-motion mode */
  poster?: string
  /** Alt text for the poster image */
  alt?: string
  /** Static image fallback — only used when no video and no poster */
  src?: string
  /** Bottom margin below the media block */
  marginBottom?: string
  /** Top margin above the media block — use to give extra breath before a reveal */
  marginTop?: string
  /** Optional caption rendered below the frame as <figcaption> */
  caption?: string
  /** Next.js Image sizes attribute */
  sizes?: string
}

export function CaseStudyMedia({
  aspectRatio = '16 / 9',
  video,
  videoWebm,
  poster,
  alt = '',
  src,
  marginBottom = 'clamp(48px, 6vw, 64px)',
  marginTop = '0px',
  caption,
  sizes = '(max-width: 768px) 100vw, 860px',
}: CaseStudyMediaProps) {
  const videoRef     = useRef<HTMLVideoElement>(null)
  const intersecting = useRef(false)
  const [playing,      setPlaying]      = useState(false)
  const [hovered,      setHovered]      = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onMqChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onMqChange)

    const vid = videoRef.current
    if (mq.matches || !vid || !video) {
      return () => mq.removeEventListener('change', onMqChange)
    }

    const tryPlay = () => vid.play().catch(() => { /* autoplay blocked — poster stays */ })

    const io = new IntersectionObserver(
      ([entry]) => {
        intersecting.current = entry.isIntersecting
        if (entry.isIntersecting) tryPlay()
        else vid.pause()
      },
      { threshold: 0.25 }
    )
    io.observe(vid)

    const onVisibility = () => {
      if (document.hidden) vid.pause()
      else if (intersecting.current) tryPlay()
    }
    document.addEventListener('visibilitychange', onVisibility)

    const onPlay  = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    vid.addEventListener('play',  onPlay)
    vid.addEventListener('pause', onPause)

    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      vid.removeEventListener('play',  onPlay)
      vid.removeEventListener('pause', onPause)
      mq.removeEventListener('change', onMqChange)
    }
  }, [video])

  const hasVideo = !!video && !reducedMotion
  const posterSrc = poster ?? (!hasVideo ? src : undefined)

  return (
    <figure
      style={{ margin: 0, marginTop, marginBottom, position: 'relative' }}
      aria-label={alt || undefined}
    >

      {/*
        Hover/lift wrapper.
        Holds both the ambient glow AND the media frame so they rise together.
        The glow extends beyond this wrapper with negative insets — purely visual,
        pointerEvents: none, so hover detection stays clean.
      */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          // Physical surface emergence: lifts 3px, expands 0.4% — felt, not seen
          transform: hovered
            ? 'translateY(-3px) scale(1.004)'
            : 'translateY(0px) scale(1)',
          transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.30, 1)',
          willChange: 'transform',
        }}
      >

        {/*
          Ambient atmospheric glow.
          Sits OUTSIDE the overflow:hidden media frame (negative insets bleed it
          vertically into the page space above and below the frame).
          This is what makes the media feel embedded in the portfolio atmosphere
          rather than floating inside it. At rest it's subliminal; on hover it
          brightens just enough to register as warmth.
        */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-28px',
            bottom: '-28px',
            left: '-8px',
            right: '-8px',
            background: 'radial-gradient(ellipse 82% 100% at 50% 52%, rgba(230,161,90,0.038) 0%, transparent 70%)',
            opacity: hovered ? 0.88 : 0.46,
            transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.30, 1)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Media frame — overflow:hidden contains all visual layers ── */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio,
            // Dark base — fills the space before the poster loads, prevents flash
            background: '#07070C',
            boxShadow: hovered
              ? '0 44px 104px rgba(0,0,0,0.68), 0 0 0 1px rgba(230,161,90,0.10)'
              : '0 32px 80px rgba(0,0,0,0.58), 0 0 0 1px rgba(255,255,255,0.06)',
            transition: 'box-shadow 0.60s cubic-bezier(0.16, 1, 0.30, 1)',
          }}
        >

          {/* ── Video layer — underneath the poster ── */}
          {hasVideo && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            >
              {videoWebm && <source src={videoWebm} type="video/webm" />}
              <source src={video} type="video/mp4" />
            </video>
          )}

          {/*
            Poster / static image layer.
            Sits above the video and crossfades out once the video plays.
            At 1.4s with heavy easing, the transition is nearly imperceptible —
            the viewer registers the video is moving, not that the poster left.
            On pause, the poster returns quickly (0.32s) to show a clean still.
          */}
          {posterSrc && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                opacity: (hasVideo && playing) ? 0 : 1,
                transition: (hasVideo && playing)
                  ? 'opacity 1.4s cubic-bezier(0.16, 1, 0.30, 1)'
                  : 'opacity 0.32s linear',
                pointerEvents: 'none',
              }}
            >
              <Image
                src={posterSrc}
                alt={alt}
                fill
                sizes={sizes}
                priority={false}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          {/* ── Cinematic overlays — depth order: vignette → edges → edge light → border ── */}

          {/*
            Vignette.
            Darkens corners and edges — stages the content in a pool of light,
            like a subject under a softbox. Restrained: only 0.46 at the outer
            edge so wide-ratio frames don't get heavy dark bands.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 90% 88% at 50% 48%, transparent 42%, rgba(5,5,10,0.46) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/*
            Top-edge depth.
            A shallow ceiling shadow — grounds the frame at the top,
            making it feel like it has mass.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '20%',
              background: 'linear-gradient(to bottom, rgba(5,5,10,0.22) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/*
            Bottom-edge depth.
            Floor shadow — anchors the frame into the page, prevents it
            from floating. Slightly deeper than the top shadow (gravity).
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '26%',
              background: 'linear-gradient(to top, rgba(5,5,10,0.30) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/*
            Directional amber edge light.
            Consistent with the portfolio's left-edge amber light language
            (the 1px line in BackgroundLayer, the blob system in the hero).
            This is the ambient portfolio light falling on the media surface.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(230,161,90,0.052) 0%, transparent 42%)',
              pointerEvents: 'none',
            }}
          />

          {/*
            Inner border with top-edge rim highlight.
            The rim highlight (inset 0 1px 0) simulates directional light
            landing on the top edge of a physical framed surface — a matte,
            a print, a panel. At rest it's barely perceptible. On hover it
            brightens as the frame "rises toward the light source."
            The outer ring shifts from white-tint to amber-tint on hover,
            extending the ambient light language into the frame edge.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              boxShadow: hovered
                ? 'inset 0 1px 0 rgba(255,255,255,0.13), inset 0 0 0 1px rgba(230,161,90,0.14)'
                : 'inset 0 1px 0 rgba(255,255,255,0.09), inset 0 0 0 1px rgba(255,255,255,0.07)',
              transition: 'box-shadow 0.60s cubic-bezier(0.16, 1, 0.30, 1)',
              pointerEvents: 'none',
            }}
          />

        </div>{/* /media frame */}
      </div>{/* /hover-lift wrapper */}

      {/* Caption */}
      {caption && (
        <figcaption style={{
          marginTop: '16px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.26)',
          letterSpacing: '0.05em',
          textAlign: 'center',
          lineHeight: 1.55,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
