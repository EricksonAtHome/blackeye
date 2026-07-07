import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Bewonersportaal', href: '/bewonersportaal' },
  { label: 'Hulp', href: '/hulp' },
  { label: 'Contact', href: '/contact' },
]

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="portal-footer mt-auto">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--portal-muted)]">
            belflat.be — Belgium Flat is uw Belgische woningorganisatie voor betaalbaar en
            prettig wonen. Vragen? Bezoek het bewonersportaal of onze hulppagina.
          </p>
        </div>

        <div>
          <h2 className="portal-footer-heading">Snel naar</h2>
          <nav className="mt-3 flex flex-col gap-2">
            {navItems.length > 0
              ? navItems.map(({ link }, i) => (
                  <CMSLink className="portal-footer-link" key={i} {...link} appearance="link" />
                ))
              : footerLinks.map((item) => (
                  <Link className="portal-footer-link" href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
          </nav>
        </div>

        <div>
          <h2 className="portal-footer-heading">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--portal-muted)]">
            <li>Telefoon: 0800 12 34 56</li>
            <li>E-mail: info@belflat.be</li>
            <li>Ma–vr 08:30 – 17:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--portal-border)]">
        <div className="container flex flex-col gap-2 py-4 text-xs text-[var(--portal-muted)] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} belflat.be — Belgium Flat</span>
          <span>Disclaimer · Toegankelijkheid · Cookies</span>
        </div>
      </div>
    </footer>
  )
}
