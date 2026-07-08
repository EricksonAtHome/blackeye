'use client'

import React from 'react'

export const SocialAuthButtons: React.FC = () => {
  return (
    <div className="belflat-auth__social">
      <div className="belflat-auth__divider">
        <span>Or</span>
      </div>
      <div className="belflat-auth__social-buttons">
        <button className="belflat-auth__social-button" type="button">
          Google
        </button>
        <button className="belflat-auth__social-button" type="button">
          Facebook
        </button>
      </div>
    </div>
  )
}
