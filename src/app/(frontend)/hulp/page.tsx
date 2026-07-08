import type { Metadata } from 'next'
import React from 'react'

import { HelpHub } from '@/components/Portal/HelpHub'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  description: 'Hulp, veelgestelde vragen en contact voor bewoners van Belflat Residence.',
  openGraph: mergeOpenGraph({
    title: 'Hulp | Belflat Residence',
  }),
  title: 'Hulp | Belflat Residence',
}

export default function HulpPage() {
  return (
    <div className="portal-page">
      <HelpHub />
    </div>
  )
}
