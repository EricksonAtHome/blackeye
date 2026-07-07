'use client'

import {
  ConfirmPasswordField,
  EmailAndUsernameFields,
  Form,
  FormSubmit,
  PasswordField,
  RenderFields,
  useAuth,
  useConfig,
  useServerFunctions,
  useTranslation,
} from '@payloadcms/ui'
import { abortAndIgnore, handleAbortRef } from '@payloadcms/ui/shared'
import type { DocumentPreferences, FormState, LoginWithUsernameOptions, SanitizedDocumentPermissions } from 'payload'
import { formatAdminURL } from 'payload/shared'
import React, { useCallback, useEffect } from 'react'

type Props = {
  docPermissions: SanitizedDocumentPermissions
  docPreferences: DocumentPreferences
  initialState: FormState
  loginWithUsername?: false | LoginWithUsernameOptions
  userSlug: string
}

export const BelflatCreateFirstUserClient: React.FC<Props> = ({
  docPermissions,
  docPreferences,
  initialState,
  loginWithUsername,
  userSlug,
}) => {
  const {
    config: {
      routes: { admin, api: apiRoute },
    },
    getEntityConfig,
  } = useConfig()
  const { getFormState } = useServerFunctions()
  const { t } = useTranslation()
  const { setUser } = useAuth()
  const abortOnChangeRef = React.useRef<AbortController | null>(null)

  const collectionConfig = getEntityConfig({ collectionSlug: userSlug })

  const onChange = useCallback(
    async ({ formState: prevFormState, submitted }: { formState: FormState; submitted?: boolean }) => {
      const controller = handleAbortRef(abortOnChangeRef as React.RefObject<AbortController>)
      const response = await getFormState({
        collectionSlug: userSlug,
        docPermissions,
        docPreferences,
        formState: prevFormState,
        operation: 'create',
        schemaPath: userSlug,
        signal: controller.signal,
        skipValidation: !submitted,
      })
      abortOnChangeRef.current = null
      if (response?.state) return response.state
      return prevFormState
    },
    [docPermissions, docPreferences, getFormState, userSlug],
  )

  useEffect(() => {
    const abortOnChange = abortOnChangeRef.current
    return () => {
      if (abortOnChange) abortAndIgnore(abortOnChange)
    }
  }, [])

  return (
    <Form
      action={formatAdminURL({
        apiRoute,
        path: `/${userSlug}/first-register`,
      })}
      initialState={{
        ...initialState,
        'confirm-password': {
          ...initialState['confirm-password'],
          valid: initialState['confirm-password']?.valid || false,
          value: initialState['confirm-password']?.value || '',
        },
      }}
      method="POST"
      onChange={[onChange]}
      onSuccess={(data) => {
        setUser(data as Parameters<typeof setUser>[0])
      }}
      redirect={admin}
      validationOperation="create"
    >
      <EmailAndUsernameFields
        className="emailAndUsername"
        loginWithUsername={loginWithUsername}
        operation="create"
        readOnly={false}
        t={t as never}
      />
      <PasswordField
        autoComplete="off"
        field={{
          name: 'password',
          label: t('authentication:newPassword'),
          required: true,
        }}
        path="password"
      />
      <ConfirmPasswordField />
      <RenderFields
        fields={collectionConfig.fields}
        forceRender
        parentIndexPath=""
        parentPath=""
        parentSchemaPath={userSlug}
        permissions
        readOnly={false}
      />
      <FormSubmit size="large">{t('authentication:login')}</FormSubmit>
    </Form>
  )
}
