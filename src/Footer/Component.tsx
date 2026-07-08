import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Facebook, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/over-belflat' },
  { label: 'Bewonersportaal', href: '/bewonersportaal' },
  { label: 'Nieuws', href: '/posts' },
  { label: 'Contact', href: '/contact' },
]

const infoLinks = [
  { label: 'Reglementen', href: '/hulp' },
  { label: 'Privacybeleid', href: '/hulp' },
  { label: 'Disclaimer', href: '/hulp' },
  { label: 'Toegankelijkheid', href: '/hulp' },
]

const serviceLinks = [
  { label: 'Reparatie melden', href: '/bewonersportaal#reparaties' },
  { label: 'Klachten', href: '/hulp' },
  { label: 'Contact', href: '/contact' },
  { label: 'Veelgestelde vragen', href: '/hulp' },
]

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="br-footer">
      <div className="container br-footer__grid">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <p className="br-footer__text">
            Voorbeeldstraat 123
            <br />
            1000 Brussel
            <br />
            Tel: 02 123 45 67
            <br />
            info@belflat.be
          </p>
          <div className="br-footer__social">
            <a aria-label="LinkedIn" href="https://linkedin.com">
              <Linkedin className="size-4" />
            </a>
            <a aria-label="Facebook" href="https://facebook.com">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="br-footer__heading">Snel naar</h2>
          <ul className="br-footer__links">
            {navItems.length > 0
              ? navItems.map(({ link }, i) => (
                  <li key={i}>
                    <CMSLink {...link} appearance="link" />
                  </li>
                ))
              : quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
          </ul>
        </div>

        <div>
          <h2 className="br-footer__heading">Informatie</h2>
          <ul className="br-footer__links">
            {infoLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="br-footer__heading">Service</h2>
          <ul className="br-footer__links">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="br-footer__heading">Meldpunt</h2>
          <p className="br-footer__text">
            Heeft u een melding of klacht? Laat het ons weten via het meldpunt.
          </p>
          <Link className="br-btn br-btn--primary mt-3" href="/hulp">
            Melding maken
          </Link>
        </div>
      </div>

      <div className="br-footer__bottom">
        <div className="container br-footer__bottom-inner">
          <span>© {new Date().getFullYear()} Belflat Residence</span>
          <div className="br-footer__legal">
            <Link href="/hulp">Algemene voorwaarden</Link>
            <Link href="/hulp">Privacy</Link>
            <Link href="/hulp">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
