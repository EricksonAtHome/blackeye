'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { cn } from '@/utilities/ui'
import { ChevronDown } from 'lucide-react'

const defaultNav: Array<{
  label: string
  href: string
  children?: Array<{ label: string; href: string }>
}> = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/over-belflat' },
  {
    label: 'Voor bewoners',
    href: '/bewonersportaal',
    children: [
      { label: 'Bewonersportaal', href: '/bewonersportaal' },
      { label: 'Reparatie melden', href: '/bewonersportaal#reparaties' },
      { label: 'Huur betalen', href: '/bewonersportaal#huur' },
      { label: 'Hulp & contact', href: '/hulp' },
    ],
  },
  { label: 'Vacatures', href: '/posts' },
  { label: 'Nieuws', href: '/posts' },
  { label: 'Contact', href: '/contact' },
]

export const MainNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const pathname = usePathname()
  const cmsItems = data?.navItems || []

  return (
    <div className="br-header">
      <div className="container br-header__inner">
        <Link href="/">
          <Logo />
        </Link>

        <nav aria-label="Hoofdnavigatie" className="br-header__nav">
          {cmsItems.length > 0
            ? cmsItems.map(({ link }, i) => (
                <CMSLink className="br-header__link" key={i} {...link} appearance="link" />
              ))
            : defaultNav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)

                if (item.children) {
                  return (
                    <details className="br-header__dropdown" key={item.label}>
                      <summary>
                        {item.label}
                        <ChevronDown className="size-3.5" />
                      </summary>
                      <ul className="br-header__dropdown-menu">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )
                }

                return (
                  <Link
                    className={cn('br-header__link', active && 'br-header__link--active')}
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </Link>
                )
              })}
        </nav>
      </div>
    </div>
  )
}
