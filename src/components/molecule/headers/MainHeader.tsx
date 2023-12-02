import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const MainHeader = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      style={{ backgroundColor: '#9A7DFF' }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          면접보까
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader
