import React from 'react'

type Props = {
  name?: string
}

export const WelcomeBar: React.FC<Props> = ({ name = 'bewoner' }) => {
  return (
    <div className="portal-welcome-bar">
      <div className="container py-2 text-sm font-medium">
        Welkom op belflat.be — hallo {name}
      </div>
    </div>
  )
}
