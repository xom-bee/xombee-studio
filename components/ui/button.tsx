'use client'

import Link from 'next/link'
import { ReactNode, ComponentPropsWithoutRef } from 'react'

type Variant = 'filled' | 'ghost'
type Size = 'default' | 'sm'

type BaseProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

// Renders as <button>
type AsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps> & {
    href?: never
    download?: never
  }

// Renders as <a> or <Link>
type AsLink = BaseProps & {
  href: string
  target?: string
  rel?: string
  download?: boolean | string
  onClick?: (e: React.MouseEvent) => void
  'aria-label'?: string
}

type ButtonProps = AsButton | AsLink

function cls(variant: Variant, size: Size, extra?: string) {
  return ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : '', extra]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  const { variant = 'filled', size = 'default', children, className, ...rest } = props
  const classes = cls(variant, size, className)

  if ('href' in rest && rest.href) {
    const { href, target, rel, download, onClick, 'aria-label': ariaLabel } = rest
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      !!download

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download as string | undefined}
          onClick={onClick}
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  const { onClick, type, disabled, 'aria-label': ariaLabel, ...buttonRest } = rest as AsButton
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  )
}
