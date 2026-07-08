import Link from 'next/link'
import React from 'react'

export const ResidenceHero: React.FC = () => {
  return (
    <section className="br-hero">
      <div className="br-hero__grid">
        <div className="br-hero__content">
          <p className="br-hero__eyebrow">Welkom bij</p>
          <h1 className="br-hero__title">Belflat Residence</h1>
          <p className="br-hero__text">
            Belflat is een moderne woon- en zorgomgeving waar bewoners centraal staan. Wij
            bieden comfortabel wonen, persoonlijke begeleiding en een levendige gemeenschap in het
            hart van Brussel.
          </p>
          <div className="br-hero__actions">
            <Link className="br-btn br-btn--primary" href="/contact">
              Contact opnemen
            </Link>
            <Link className="br-btn br-btn--outline" href="/over-belflat">
              Over Belflat
            </Link>
          </div>
        </div>

        <div
          aria-hidden
          className="br-hero__image"
          style={{ backgroundImage: "url('/portal/hero-building.jpg')" }}
        />
      </div>
    </section>
  )
}
