import React from 'react'

type Props = {
  name?: string
}

export const WelcomeBar: React.FC<Props> = ({ name = 'bewoner' }) => {
  return (
    <div className="bf-welcome">
      <div className="container bf-welcome__inner">
        Welkom bij Belflat Residence — hallo {name}
      </div>
    </div>
  )
}
