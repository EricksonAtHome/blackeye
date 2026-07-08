import React from 'react'

import { FlatBanner } from './FlatBanner'
import { NewsStrip } from './NewsStrip'
import { PortalDashboard } from './PortalDashboard'

export const PortalHome: React.FC = () => {
  return (
    <>
      <FlatBanner />
      <NewsStrip />
      <PortalDashboard />
    </>
  )
}
