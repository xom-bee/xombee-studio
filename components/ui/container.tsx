import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  const cls = ['max-w-7xl mx-auto px-6 md:px-10 lg:px-16', className]
    .filter(Boolean)
    .join(' ')
  return <div className={cls}>{children}</div>
}
