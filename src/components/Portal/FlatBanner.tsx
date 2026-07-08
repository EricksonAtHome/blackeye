import Link from 'next/link'
import React from 'react'

import {
  CircleHelp,
  Coins,
  Laptop,
  Search,
  UserRound,
  Wrench,
} from 'lucide-react'

const actions = [
  { href: '/posts', icon: Laptop, label: 'Inschrijven als woningzoekende' },
  { href: '/bewonersportaal#reparaties', icon: Wrench, label: 'Reparaties' },
  { href: '/bewonersportaal#huur', icon: Coins, label: 'Huur betalen' },
  { href: '/bewonersportaal', icon: UserRound, label: 'Mijn belflat' },
  { href: '/hulp', icon: CircleHelp, label: 'Veelgestelde vragen' },
]

export const FlatBanner: React.FC = () => {
  return (
    <section className="bf-hero">
      <div
        className="bf-hero__photo"
        style={{ backgroundImage: "url('/portal/hero.jpg')" }}
      />

      <div className="container">
        <div className="bf-hero__layout">
          <div className="bf-hero__red">
            <p className="bf-hero__lead">Ik heb een vraag over</p>

            <form action="/search" className="bf-hero__search" method="get">
              <Search aria-hidden className="size-5 shrink-0 text-[var(--bf-grey)]" />
              <input
                aria-label="Zoek op trefwoord"
                className="bf-hero__search-input"
                name="q"
                placeholder="Zoek op trefwoord"
                type="search"
              />
            </form>

            <div className="bf-hero__icons">
              {actions.map(({ href, icon: Icon, label }) => (
                <Link className="bf-hero__icon-link" href={href} key={href}>
                  <Icon strokeWidth={1.75} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="bf-hero__white">
            <div>
              <h2 className="bf-hero__white-title">
                Hoe helpt belflat.be bij uw woonvragen?
              </h2>
              <Link className="bf-hero__white-link" href="/hulp">
                Veelgestelde vragen voor bewoners
              </Link>
            </div>

            <div>
              <h2 className="bf-hero__white-title">Bekijk actueel aanbod</h2>
              <ul className="bf-hero__white-list">
                <li>
                  <Link href="/posts">Huurwoningen Brussel</Link>
                </li>
                <li>
                  <Link href="/posts">Huurwoningen Antwerpen</Link>
                </li>
                <li>
                  <Link href="/posts">Huren in Gent</Link>
                </li>
                <li>
                  <Link href="/posts">Nieuwbouwprojecten</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
