import Link from 'next/link'
import React from 'react'

import { ArrowUpRight, CreditCard, TriangleAlert, UserRound, Wrench } from 'lucide-react'

const actions = [
  {
    href: '/bewonersportaal#reparaties',
    icon: Wrench,
    text: 'Meld een defect of storing in uw woning eenvoudig online.',
    title: 'Reparatie verzoek',
  },
  {
    href: '/bewonersportaal#huur',
    icon: CreditCard,
    text: 'Betaal uw huur veilig via het bewonersportaal.',
    title: 'Huur betalen',
  },
  {
    href: '/bewonersportaal#gegevens',
    icon: UserRound,
    text: 'Bekijk en wijzig uw persoonlijke gegevens.',
    title: 'Mijn gegevens inzien',
  },
  {
    href: '/hulp#contact',
    icon: TriangleAlert,
    text: 'Meld overlast of een klacht bij ons servicedesk.',
    title: 'Overlast melden',
  },
]

export const QuickActionsGrid: React.FC = () => {
  return (
    <section className="br-actions">
      <div className="container">
        <h2 className="br-actions__title">Wat kunnen bewoners doen?</h2>
        <div className="br-actions__grid">
          {actions.map(({ href, icon: Icon, text, title }) => (
            <Link className="br-action-card" href={href} key={title}>
              <Icon className="br-action-card__icon size-7" strokeWidth={1.5} />
              <h3 className="br-action-card__title">{title}</h3>
              <p className="br-action-card__text">{text}</p>
              <ArrowUpRight className="br-action-card__arrow size-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
