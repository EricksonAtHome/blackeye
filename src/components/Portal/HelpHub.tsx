import Link from 'next/link'
import React from 'react'

const faqs = [
  {
    answer:
      'U kunt uw huur betalen via automatische incasso of handmatig met het betalingskenmerk uit uw portaal.',
    id: 'huur',
    question: 'Hoe betaal ik mijn huur?',
  },
  {
    answer:
      'Meld een reparatie via het bewonersportaal onder Reparaties. Voor spoed buiten kantooruren kunt u ons storingsnummer bellen.',
    id: 'reparatie',
    question: 'Hoe meld ik een reparatie?',
  },
  {
    answer:
      'Ons klantcontact is bereikbaar op werkdagen van 08:30 tot 17:00. Online hulp en veelgestelde vragen zijn altijd beschikbaar.',
    id: 'contact',
    question: 'Wanneer kan ik contact opnemen?',
  },
  {
    answer:
      'Log in op Mijn Belflat met uw e-mailadres. Nog geen account? Neem contact op met de servicedesk.',
    id: 'portaal',
    question: 'Hoe kom ik in het bewonersportaal?',
  },
]

export const HelpHub: React.FC = () => {
  return (
    <section className="portal-help-hub">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="portal-help-intro">
          <p className="portal-help-intro__eyebrow">Hulp &amp; contact</p>
          <h1 className="portal-help-intro__title">Waarmee kunnen we u helpen?</h1>
          <p className="portal-help-intro__text">
            Vind antwoorden over huur, reparaties en uw bewonersportaal. Staat uw vraag er niet bij?
            Neem contact op met Belflat.
          </p>
          <div className="portal-help-intro__actions">
            <Link className="portal-cta-button portal-cta-button--teal" href="/bewonersportaal">
              Naar bewonersportaal
            </Link>
            <Link className="portal-secondary-button" href="/contact">
              Contact opnemen
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details className="portal-faq-item" id={faq.id} key={faq.id} open={faq.id === 'huur'}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
