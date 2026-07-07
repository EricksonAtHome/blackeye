import React from 'react'

import { FlatBanner } from './FlatBanner'
import { PortalDashboard } from './PortalDashboard'
import { StatusCards } from './StatusCards'

export const PortalHome: React.FC = () => {
  return (
    <>
      <FlatBanner />
      <StatusCards />
      <PortalDashboard />
    </>
  )
}
