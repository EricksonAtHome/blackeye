import React from 'react'

import { AdminAuthBrandPanel } from './BrandPanel'

type Props = {
  children: React.ReactNode
  description: string
  title: string
}

export const AdminAuthLayout: React.FC<Props> = ({ children, description, title }) => {
  return (
    <div className="belflat-auth">
      <AdminAuthBrandPanel />
      <section className="belflat-auth__panel">
        <div className="belflat-auth__content">
          <h1 className="belflat-auth__title">{title}</h1>
          <p className="belflat-auth__description">{description}</p>
          {children}
        </div>
      </section>
    </div>
  )
}
