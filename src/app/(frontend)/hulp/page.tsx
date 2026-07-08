import type { Metadata } from 'next'
import React from 'react'

import { HelpHub } from '@/components/Portal/HelpHub'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata: Metadata = {
  description: 'Hulp, veelgestelde vragen en contact voor bewoners van belflat.be.',
  openGraph: mergeOpenGraph({
    title: 'Hulp | belflat.be',
  }),
  title: 'Hulp | belflat.be',
}

export default function HulpPage() {
  return (
    <div className="portal-page">
      <HelpHub />
    </div>
  )
}
