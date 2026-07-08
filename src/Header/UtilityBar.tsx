import Link from 'next/link'
import React from 'react'

import { SearchIcon } from 'lucide-react'

export const UtilityBar: React.FC = () => {
  return (
    <div className="portal-utility-bar">
      <div className="container flex items-center justify-between gap-4 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact">Contact</Link>
          <Link href="/hulp">Veelgestelde vragen</Link>
          <Link href="/search">Zoeken</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link className="hidden items-center gap-1 sm:inline-flex" href="/search">
            <SearchIcon className="size-4" />
            Zoeken
          </Link>
          <Link className="portal-utility-login" href="/admin">
            Inloggen
          </Link>
        </div>
      </div>
    </div>
  )
}
