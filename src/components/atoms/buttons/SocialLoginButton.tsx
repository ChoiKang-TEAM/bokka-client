import React, { ReactNode } from 'react'
import { Button, Stack } from '@mui/material'
import { AuthProviderType } from 'src/types'
import { DEFAULT_WEB_SITE_NAME } from 'src/constants/datas'

export interface SocialLoginButtonProps {
  icon: ReactNode
  label: AuthProviderType
  color: string
}

const SocialLoginButtons = (props: SocialLoginButtonProps) => {
  const handleClickSocialLogin = () => {
    const url = `http://localhost:3100/api/auth/login/google?site=${DEFAULT_WEB_SITE_NAME}`
    window.location.replace(url)
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button
        startIcon={props.icon}
        variant="contained"
        style={{ backgroundColor: props.color, color: '#fff' }}
        onClick={handleClickSocialLogin}
      ></Button>
    </Stack>
  )
}

export default SocialLoginButtons
