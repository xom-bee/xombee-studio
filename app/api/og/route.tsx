import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0B0B0F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(230,161,90,0.10) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Hexagon mark */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 80 80"
          style={{ marginBottom: '28px' }}
        >
          <polygon
            points="40,8 70,24 70,56 40,72 10,56 10,24"
            stroke="#E6A15A"
            strokeWidth="2"
            fill="rgba(230,161,90,0.08)"
          />
          <text
            x="40"
            y="47"
            textAnchor="middle"
            fill="#E6A15A"
            fontSize="20"
            fontWeight="700"
          >
            XB
          </text>
        </svg>

        {/* Studio name */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: '700',
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          Xom Bee Studio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
            fontWeight: '400',
            display: 'flex',
          }}
        >
          Design &amp; Music
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            width: '48px',
            height: '1px',
            background: 'rgba(230,161,90,0.40)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
