'use client'

import { ReactNode, useEffect, useRef, useCallback } from 'react'

type ModalProps = {
  onClose: () => void
  children: ReactNode
  label: string
  /** Whether clicking the backdrop (not content) closes the modal (default true) */
  backdropClose?: boolean
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({ onClose, children, label, backdropClose = true }: ModalProps) {
  const dialogRef       = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Always-current ref so the ESC listener never needs to re-subscribe
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose })

  // Save + restore focus
  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement
    const frame = requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    })
    return () => {
      cancelAnimationFrame(frame)
      previousFocusRef.current?.focus()
    }
  }, [])

  // ESC — stable listener, always calls the latest onClose via ref
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCloseRef.current() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Tab focus trap
  const trapFocus = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !dialogRef.current) return
    const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (!nodes.length) return
    const first = nodes[0]
    const last  = nodes[nodes.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus() }
    }
  }, [])

  // Backdrop click: only close when the click target IS the backdrop itself,
  // not when a bubbled event from nested content reaches this element.
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (backdropClose && e.target === e.currentTarget) onCloseRef.current()
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onKeyDown={trapFocus}
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'modal-enter 0.28s ease',
      }}
    >
      {children}
    </div>
  )
}
