import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <span className={clsx('br-logo', className)}>
      <span aria-hidden className="br-logo__icon">
        <svg fill="none" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
          <rect fill="#1A2B49" height="36" rx="2" width="36" />
          <path d="M9 26V10h6.5c3.2 0 5.5 2 5.5 5.2 0 2.2-1.2 3.8-3 4.6L22 26h-3.4l-3.6-5.6H12.2V26H9zm3.2-8.6h3.1c1.5 0 2.4-.8 2.4-2.1S16.8 13 15.3 13h-3.1v4.4z" fill="#fff" />
        </svg>
      </span>
      <span className="br-logo__text">Belflat Residence</span>
    </span>
  )
}
