import React, { ReactNode } from 'react'
import { Button, Stack } from '@mui/material'

interface SocialLoginButtonProps {
  icon: ReactNode
  label: string
  color: string
}

const SocialLoginButtons = (props: SocialLoginButtonProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        startIcon={props.icon}
        variant="contained"
        style={{ backgroundColor: props.color, color: '#fff' }}
        onClick={() => console.log(props.label)}
      ></Button>
    </Stack>
  )
}

export default SocialLoginButtons
