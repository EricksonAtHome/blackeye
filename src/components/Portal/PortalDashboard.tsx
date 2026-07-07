import Link from 'next/link'
import React from 'react'

import { ArrowRight, Mail, MessageSquare } from 'lucide-react'

const sections = [
  {
    description: 'Bekijk berichten, documenten en updates van Belflat op één plek.',
    href: '/bewonersportaal#berichten',
    id: 'berichten',
    title: 'Berichtenbox',
  },
  {
    description: 'Volg reparaties, aanvragen en lopende zaken in uw portaal.',
    href: '/bewonersportaal#zaken',
    id: 'zaken',
    title: 'Lopende zaken',
  },
  {
    description: 'Wijzig contactgegevens, huurcontract en persoonlijke instellingen.',
    href: '/bewonersportaal#gegevens',
    id: 'gegevens',
    title: 'Persoonlijke gegevens',
  },
]

export const PortalDashboard: React.FC = () => {
  return (
    <section className="portal-dashboard">
      <div className="container grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {sections.map((section) => (
            <article className="portal-panel" id={section.id} key={section.title}>
              <h2 className="portal-panel__title">{section.title}</h2>
              <p className="portal-panel__text">{section.description}</p>
              <Link className="portal-arrow-link" href={section.href}>
                Naar {section.title.toLowerCase()}
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="portal-panel portal-panel--accent">
            <h2 className="portal-panel__title portal-panel__title--accent">Accountgegevens</h2>
            <div className="mt-4 flex items-start gap-3 text-sm">
              <Mail className="mt-0.5 size-5 text-[var(--portal-teal)]" />
              <div>
                <p className="font-medium">bewoner@belflat.nl</p>
                <Link className="portal-inline-link" href="/bewonersportaal#gegevens">
                  Wijzigen
                </Link>
              </div>
            </div>
          </div>

          <div className="portal-panel">
            <h2 className="portal-panel__title portal-panel__title--accent">Veelgestelde vragen</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="portal-faq-link" href="/hulp#huur">
                  Hoe betaal ik mijn huur?
                </Link>
              </li>
              <li>
                <Link className="portal-faq-link" href="/hulp#reparatie">
                  Hoe meld ik een reparatie?
                </Link>
              </li>
              <li>
                <Link className="portal-faq-link" href="/hulp#contact">
                  Wanneer is het klantcontact open?
                </Link>
              </li>
            </ul>
            <Link className="portal-arrow-link mt-5" href="/hulp">
              Meer vragen
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="portal-help-card">
            <MessageSquare className="size-6" />
            <div>
              <h3 className="font-semibold">Hulp nodig?</h3>
              <p className="mt-1 text-sm opacity-90">
                Onze servicedesk helpt u met huur, reparaties en uw bewonersportaal.
              </p>
              <Link className="portal-help-card__button" href="/hulp">
                Naar hulp &amp; contact
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
