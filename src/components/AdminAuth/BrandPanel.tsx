import React from 'react'

export const AdminAuthBrandPanel: React.FC = () => {
  return (
    <aside aria-hidden="true" className="belflat-auth__brand">
      <div className="belflat-auth__brand-overlay" />
      <div className="belflat-auth__bento">
        <div className="belflat-auth__tile belflat-auth__tile--empty" />
        <div className="belflat-auth__tile belflat-auth__tile--pattern">
          <span>Total Care. Total Different.</span>
        </div>
        <div className="belflat-auth__tile belflat-auth__tile--empty belflat-auth__tile--fade" />

        <div className="belflat-auth__tile belflat-auth__tile--logo">
          <svg fill="none" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 10h18c12 0 20 8 20 20s-8 20-20 20H30v12H18V10zm12 30h6c6 0 10-4 10-10s-4-10-10-10h-6v20z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="belflat-auth__tile belflat-auth__tile--yellow">
          <span className="belflat-auth__plus">+</span>
          <span>Building trust in blockchain technology</span>
        </div>
        <div className="belflat-auth__tile belflat-auth__tile--empty belflat-auth__tile--fade" />

        <div className="belflat-auth__tile belflat-auth__tile--yellow belflat-auth__tile--wide">
          <span className="belflat-auth__plus">+</span>
          <span>Own your power</span>
        </div>
        <div className="belflat-auth__tile belflat-auth__tile--empty" />
        <div className="belflat-auth__tile belflat-auth__tile--empty belflat-auth__tile--fade" />
      </div>
    </aside>
  )
}
