import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <span className={clsx('bf-logo inline-flex items-center gap-2.5', className)}>
      <span aria-hidden className="bf-logo__mark">
        <svg fill="none" height="34" viewBox="0 0 34 34" width="34" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#E34255" height="34" rx="4" width="10" />
          <rect fill="#333333" height="34" rx="4" width="10" x="12" />
          <rect fill="#E34255" height="34" opacity="0.85" rx="4" width="10" x="24" />
        </svg>
      </span>
      <span className="bf-logo__text">
        <span className="bf-logo__name">belflat</span>
        <span className="bf-logo__domain">.be</span>
        <span className="bf-logo__tagline">Belgium Flat</span>
      </span>
    </span>
  )
}
