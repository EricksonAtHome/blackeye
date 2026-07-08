import Link from 'next/link'
import React from 'react'

import { ChevronDown, MapPin, Phone, Search } from 'lucide-react'

export const UtilityBar: React.FC = () => {
  return (
    <div className="br-utility">
      <div className="container br-utility__inner">
        <div className="br-utility__left">
          <span className="br-utility__item">
            <MapPin className="size-3.5 shrink-0" />
            Voorbeeldstraat 123, 1000 Brussel
          </span>
          <a className="br-utility__item" href="tel:021234567">
            <Phone className="size-3.5 shrink-0" />
            02 123 45 67
          </a>
        </div>

        <div className="br-utility__right">
          <Link className="br-utility__link" href="/bewonersportaal">
            Inloggen bewoners
          </Link>
          <Link className="br-utility__item" href="/search">
            <Search className="size-3.5 shrink-0" />
            Zoeken
          </Link>
          <button className="br-utility__lang" type="button">
            NL
            <ChevronDown className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
