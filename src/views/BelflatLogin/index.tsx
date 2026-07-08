import type { AdminViewServerProps } from 'payload'
import { RenderServerComponent } from '@payloadcms/ui/elements/RenderServerComponent'
import { redirect } from 'next/navigation.js'
import { getSafeRedirect } from 'payload/shared'
import React from 'react'

import { AdminAuthLayout } from '@/components/AdminAuth/AdminAuthLayout'
import { SocialAuthButtons } from '@/components/AdminAuth/SocialAuthButtons'

import { BelflatLoginForm } from './LoginForm.client'

export default function BelflatLoginView({
  initPageResult,
  params,
  searchParams,
}: AdminViewServerProps) {
  const { locale, permissions, req } = initPageResult
  const {
    i18n,
    payload: { config },
    payload,
    user,
  } = req

  const {
    admin: {
      components: { afterLogin } = {},
      user: userSlug,
    },
    routes: { admin },
  } = config

  const redirectUrl = getSafeRedirect({
    fallbackTo: admin,
    redirectTo: searchParams?.redirect ?? admin,
  })

  if (user) {
    redirect(redirectUrl)
  }

  const collectionConfig = payload.collections.users.config
  const prefillAutoLogin =
    typeof config.admin?.autoLogin === 'object' && config.admin?.autoLogin.prefillOnly
  const prefillUsername =
    prefillAutoLogin && typeof config.admin?.autoLogin === 'object'
      ? config.admin?.autoLogin.username
      : undefined
  const prefillEmail =
    prefillAutoLogin && typeof config.admin?.autoLogin === 'object'
      ? config.admin?.autoLogin.email
      : undefined
  const prefillPassword =
    prefillAutoLogin && typeof config.admin?.autoLogin === 'object'
      ? config.admin?.autoLogin.password
      : undefined

  return (
    <AdminAuthLayout
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus."
      title="Log In"
    >
      {!collectionConfig?.auth?.disableLocalStrategy && (
        <BelflatLoginForm
          prefillEmail={prefillEmail}
          prefillPassword={prefillPassword}
          prefillUsername={prefillUsername}
          searchParams={searchParams}
        />
      )}
      <SocialAuthButtons />
      {RenderServerComponent({
        Component: afterLogin,
        importMap: payload.importMap,
        serverProps: {
          i18n,
          locale,
          params,
          payload,
          permissions,
          searchParams,
          user,
        },
      })}
    </AdminAuthLayout>
  )
}
