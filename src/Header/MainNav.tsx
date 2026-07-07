'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { cn } from '@/utilities/ui'
import { UserRound } from 'lucide-react'

const defaultNav = [
  { label: 'Home', href: '/' },
  { label: 'Ik zoek', href: '/posts' },
  { label: 'Bewonersportaal', href: '/bewonersportaal' },
  { label: 'Hulp', href: '/hulp' },
  { label: 'Over Belflat', href: '/contact' },
]

export const MainNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const pathname = usePathname()
  const cmsItems = data?.navItems || []

  return (
    <div className="portal-main-nav">
      <div className="container flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/">
          <Logo variant="light" />
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {cmsItems.length > 0
            ? cmsItems.map(({ link }, i) => (
                <CMSLink
                  className="portal-nav-link"
                  key={i}
                  {...link}
                  appearance="link"
                />
              ))
            : defaultNav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    className={cn('portal-nav-link', active && 'portal-nav-link--active')}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                )
              })}
        </nav>

        <Link className="portal-cta-button" href="/bewonersportaal">
          <UserRound className="size-4" />
          Mijn Belflat
        </Link>
      </div>
    </div>
  )
}
