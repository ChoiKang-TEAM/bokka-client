import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

interface ProgressHeaderChildProps {
  progress: number
  maxProgress: number
}

const ProgressHeader = (props: ProgressHeaderChildProps) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h6">
          진행도: {`${props.progress}/${props.maxProgress}`}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ProgressHeader
