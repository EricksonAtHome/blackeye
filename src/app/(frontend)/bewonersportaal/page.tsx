import type { Metadata } from 'next'
import React from 'react'

import { PortalDashboard } from '@/components/Portal/PortalDashboard'
import { StatusCards } from '@/components/Portal/StatusCards'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  description: 'Bewonersportaal van Belflat — berichten, reparaties, huur en persoonlijke gegevens.',
  openGraph: mergeOpenGraph({
    title: 'Bewonersportaal | Belflat',
  }),
  title: 'Bewonersportaal | Belflat',
}

export default function BewonersportaalPage() {
  return (
    <div className="portal-page">
      <section className="portal-dashboard border-b border-[var(--portal-border)] pt-8">
        <div className="container">
          <h1 className="portal-help-intro__title">Mijn bewonersportaal</h1>
          <p className="portal-help-intro__text">
            Beheer uw berichten, lopende zaken en persoonlijke gegevens op één plek.
          </p>
        </div>
      </section>
      <StatusCards />
      <PortalDashboard />
    </div>
  )
}
