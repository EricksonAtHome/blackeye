'use client'

import {
  EmailField,
  Form,
  FormSubmit,
  PasswordField,
  useAuth,
  useConfig,
  useTranslation,
} from '@payloadcms/ui'
import { email, formatAdminURL, getSafeRedirect } from 'payload/shared'
import React from 'react'

type Props = {
  prefillEmail?: string
  prefillPassword?: string
  prefillUsername?: string
  searchParams?: {
    redirect?: string
  }
}

export const BelflatLoginForm: React.FC<Props> = ({
  prefillEmail,
  prefillPassword,
  prefillUsername,
  searchParams,
}) => {
  const baseClass = 'login__form'
  const { config } = useConfig()
  const {
    admin: {
      user: userSlug,
    },
    routes: { admin: adminRoute, api: apiRoute },
  } = config

  const { t } = useTranslation()
  const { setUser } = useAuth()

  const initialState: Record<string, { initialValue?: string; valid: boolean; value?: string }> = {
    email: {
      initialValue: prefillEmail ?? undefined,
      valid: true,
      value: prefillEmail ?? undefined,
    },
    password: {
      initialValue: prefillPassword ?? undefined,
      valid: true,
      value: prefillPassword ?? undefined,
    },
  }

  return (
    <Form
      action={formatAdminURL({
        apiRoute,
        path: `/${userSlug}/login`,
      })}
      className={baseClass}
      disableSuccessStatus
      initialState={initialState}
      method="POST"
      onSuccess={(data) => {
        setUser(data as Parameters<typeof setUser>[0])
      }}
      redirect={getSafeRedirect({
        fallbackTo: adminRoute,
        redirectTo: searchParams?.redirect ?? adminRoute,
      })}
      waitForAutocomplete
    >
      <div className={`${baseClass}__inputWrap`}>
        <EmailField
          field={{
            name: 'email',
            admin: {
              autoComplete: 'email',
            },
            label: t('general:email'),
            required: true,
          }}
          path="email"
          validate={email}
        />
        <PasswordField
          field={{
            name: 'password',
            label: t('general:password'),
            required: true,
          }}
          path="password"
        />
      </div>
      <FormSubmit size="large">{t('authentication:login')}</FormSubmit>
    </Form>
  )
}
