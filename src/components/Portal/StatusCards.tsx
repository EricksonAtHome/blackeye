import Link from 'next/link'
import React from 'react'

import { Droplets, FileCheck, Sun, Waves } from 'lucide-react'

const cards = [
  {
    href: '/bewonersportaal#reparaties',
    icon: FileCheck,
    status: 'Openstaand: 1 verzoek',
    title: 'Reparaties',
  },
  {
    href: '/bewonersportaal#huur',
    icon: Sun,
    status: 'Volgende incasso: 1e van de maand',
    title: 'Huur & betalingen',
  },
  {
    href: '/bewonersportaal#gegevens',
    icon: Droplets,
    status: 'Gegevens compleet',
    title: 'Persoonlijke gegevens',
  },
  {
    href: '/hulp',
    icon: Waves,
    status: '24/7 online hulp beschikbaar',
    title: 'Hulp & contact',
  },
]

export const StatusCards: React.FC = () => {
  return (
    <section className="portal-status">
      <div className="container">
        <h2 className="portal-section-title">Status overzicht</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ href, icon: Icon, status, title }) => (
            <Link className="portal-status-card" href={href} key={title}>
              <Icon className="size-6 text-[var(--portal-teal)]" />
              <div>
                <h3 className="font-semibold text-[var(--portal-navy)]">{title}</h3>
                <p className="mt-1 text-sm text-[var(--portal-muted)]">{status}</p>
              </div>
              <span className="portal-status-card__more">Meer</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
