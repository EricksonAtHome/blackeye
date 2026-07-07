import Link from 'next/link'
import React from 'react'

import {
  CircleHelp,
  CreditCard,
  Laptop,
  Search,
  UserRound,
  Wrench,
} from 'lucide-react'

const actions = [
  {
    href: '/posts',
    icon: Laptop,
    label: 'Inschrijven als woningzoekende',
  },
  {
    href: '/bewonersportaal#reparaties',
    icon: Wrench,
    label: 'Reparaties',
  },
  {
    href: '/bewonersportaal#huur',
    icon: CreditCard,
    label: 'Huur betalen',
  },
  {
    href: '/bewonersportaal',
    icon: UserRound,
    label: 'Mijn Belflat',
  },
  {
    href: '/hulp',
    icon: CircleHelp,
    label: 'Hulp nodig',
  },
]

export const FlatBanner: React.FC = () => {
  return (
    <section className="portal-flat-banner">
      <div
        className="portal-flat-banner__image"
        style={{ backgroundImage: "url('/portal/hero.jpg')" }}
      />
      <div className="container relative">
        <div className="portal-flat-banner__grid">
          <div className="portal-flat-banner__action-box">
            <p className="portal-flat-banner__eyebrow">Ik heb een vraag over</p>
            <h1 className="portal-flat-banner__title">Wonen bij Belflat</h1>
            <form action="/search" className="portal-flat-banner__search" method="get">
              <Search className="size-5 shrink-0 opacity-70" />
              <input
                aria-label="Zoeken"
                className="portal-flat-banner__search-input"
                name="q"
                placeholder="Zoek op trefwoord, reparatie of huur..."
                type="search"
              />
            </form>
            <div className="portal-flat-banner__quick">
              {actions.map(({ href, icon: Icon, label }) => (
                <Link className="portal-quick-link" href={href} key={href}>
                  <Icon className="size-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="portal-flat-banner__side-card">
            <h2 className="portal-side-card__title">Bekijk actueel aanbod</h2>
            <ul className="portal-side-card__list">
              <li>
                <Link href="/posts">Nieuwbouw in de wijk</Link>
              </li>
              <li>
                <Link href="/posts">Direct te huur</Link>
              </li>
              <li>
                <Link href="/bewonersportaal">Reparatieverzoek indienen</Link>
              </li>
            </ul>
            <Link className="portal-side-card__cta" href="/hulp">
              Hulp nodig? Bekijk veelgestelde vragen
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
