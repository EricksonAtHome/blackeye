import React from 'react'

import { FeatureBar } from './FeatureBar'
import { NewsFaqColumns } from './NewsFaqColumns'
import { QuickActionsGrid } from './QuickActionsGrid'
import { ResidenceHero } from './ResidenceHero'

export const PortalHome: React.FC = () => {
  return (
    <>
      <ResidenceHero />
      <FeatureBar />
      <NewsFaqColumns />
      <QuickActionsGrid />
    </>
  )
}
