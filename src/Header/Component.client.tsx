'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

import type { Header } from '@/payload-types'

import { MainNav } from './MainNav'
import { WelcomeBar } from './WelcomeBar'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const showWelcome = pathname.startsWith('/bewonersportaal')

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  return (
    <header className="portal-header relative z-30">
      {showWelcome && <WelcomeBar />}
      <MainNav data={data} />
    </header>
  )
}
