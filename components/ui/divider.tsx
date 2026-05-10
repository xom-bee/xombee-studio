type DividerProps = {
  opacity?: number
}

export function Divider({ opacity = 0.18 }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, rgba(230,161,90,${opacity}) 35%, rgba(230,161,90,${opacity}) 65%, transparent)`,
      }}
    />
  )
}
