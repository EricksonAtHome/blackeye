import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  variant?: 'default' | 'light'
}

export const Logo = ({ className, variant = 'default' }: Props) => {
  return (
    <span
      className={clsx(
        'inline-flex items-baseline gap-1 font-bold tracking-tight',
        variant === 'light' ? 'text-white' : 'text-[var(--portal-navy)]',
        className,
      )}
    >
      <span className="text-[1.35rem] leading-none">Belflat</span>
      <span
        className={clsx(
          'text-xs font-medium uppercase tracking-[0.2em]',
          variant === 'light' ? 'text-white/80' : 'text-[var(--portal-orange)]',
        )}
      >
        Wonen
      </span>
    </span>
  )
}
