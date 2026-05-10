import { ReactNode, CSSProperties } from 'react'

type Surface = 'glass' | 'elevated'
type Radius  = 'default' | 'lg'

type CardProps = {
  children: ReactNode
  surface?: Surface
  radius?: Radius
  hover?: boolean
  className?: string
  style?: CSSProperties
}

const SURFACE: Record<Surface, string> = {
  glass:    'rgba(255, 255, 255, 0.025)',
  elevated: '#111115',
}

const RADIUS: Record<Radius, string> = {
  default: 'var(--radius-card)',
  lg:      'var(--radius-card-lg)',
}

export function Card({
  children,
  surface = 'glass',
  radius = 'default',
  hover = false,
  className,
  style,
}: CardProps) {
  const classes = ['card-base', hover ? 'card-hover' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={{
        background: SURFACE[surface],
        border: '1px solid var(--border-subtle)',
        borderRadius: RADIUS[radius],
        ...style,
      }}
    >
      {children}
    </div>
  )
}
