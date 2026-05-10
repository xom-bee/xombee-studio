'use client'

import Image from 'next/image'

interface CaseStudyMediaProps {
  aspectRatio: string
  src?: string
  alt?: string
  video?: string
  poster?: string
  marginBottom?: string
}

export function CaseStudyMedia({
  aspectRatio,
  src,
  alt = '',
  video,
  poster,
  marginBottom = 'clamp(48px, 6vw, 64px)',
}: CaseStudyMediaProps) {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        marginBottom,
        position: 'relative',
        aspectRatio,
      }}
    >
      {video ? (
        <video
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : src ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 860px"
        />
      ) : null}
    </div>
  )
}
