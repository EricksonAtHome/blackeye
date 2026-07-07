'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { cn } from '@/utilities/ui'
import { Search, UserRound } from 'lucide-react'

const defaultNav = [
  { label: 'Ik huur', href: '/bewonersportaal' },
  { label: 'Ik zoek', href: '/posts' },
  { label: 'Over belflat', href: '/over-belflat' },
  { label: 'Contact', href: '/contact' },
]

export const MainNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const pathname = usePathname()
  const cmsItems = data?.navItems || []

  return (
    <div className="bf-header">
      <div className="container bf-header__inner">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="bf-header__nav hidden lg:flex">
          {cmsItems.length > 0
            ? cmsItems.map(({ link }, i) => (
                <CMSLink className="bf-header__link" key={i} {...link} appearance="link" />
              ))
            : defaultNav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    className={cn('bf-header__link', active && 'bf-header__link--active')}
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                )
              })}
        </nav>

        <div className="bf-header__actions">
          <Link aria-label="Zoeken" className="bf-header__search" href="/search">
            <Search className="size-5" />
          </Link>
          <Link className="bf-cta" href="/bewonersportaal">
            <UserRound className="size-4" />
            Mijn belflat
          </Link>
        </div>
      </div>
    </div>
  )
}
