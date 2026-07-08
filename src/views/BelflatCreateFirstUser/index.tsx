import type { AdminViewServerProps, SanitizedDocumentPermissions } from 'payload'
import { buildFormState } from '@payloadcms/ui/utilities/buildFormState'
import React from 'react'

import { AdminAuthLayout } from '@/components/AdminAuth/AdminAuthLayout'
import { SocialAuthButtons } from '@/components/AdminAuth/SocialAuthButtons'

import { BelflatCreateFirstUserClient } from './index.client'

export default async function BelflatCreateFirstUserView({ initPageResult }: AdminViewServerProps) {
  const {
    locale,
    req,
    req: {
      payload: {
        collections,
        config: {
          admin: { user: userSlug },
        },
      },
    },
  } = initPageResult

  const collectionConfig = collections.users.config
  const { auth: authOptions } = collectionConfig
  const loginWithUsername = authOptions.loginWithUsername

  const baseFields = Object.fromEntries(
    collectionConfig.fields
      .filter((f): f is Extract<typeof f, { name: string }> => 'name' in f && typeof f.name === 'string')
      .map((f) => [
        f.name,
        {
          create: true,
          read: true,
          update: true,
        },
      ]),
  )

  const docPermissionsForForm = {
    create: true,
    delete: true,
    fields: baseFields,
    read: true,
    readVersions: true,
    update: true,
  } as SanitizedDocumentPermissions

  const { state: formState } = await buildFormState({
    collectionSlug: collectionConfig.slug,
    data: undefined,
    docPermissions: docPermissionsForForm,
    docPreferences: { fields: {} },
    locale: locale?.code,
    operation: 'create',
    renderAllFields: true,
    req,
    schemaPath: collectionConfig.slug,
    skipClientConfigAuth: true,
    skipValidation: true,
  })

  return (
    <AdminAuthLayout
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus."
      title="Sign Up"
    >
      <div className="create-first-user">
        <BelflatCreateFirstUserClient
          docPermissions={docPermissionsForForm}
          docPreferences={{ fields: {} }}
          initialState={formState}
          loginWithUsername={loginWithUsername}
          userSlug={userSlug}
        />
      </div>
      <SocialAuthButtons />
    </AdminAuthLayout>
  )
}
