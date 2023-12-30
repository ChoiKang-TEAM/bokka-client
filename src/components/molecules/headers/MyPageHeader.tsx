import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const MyPageHeader = () => {
  const navigate = useNavigate()
  const handleOnClickGoBackButton = () => {
    navigate(-1)
  }

  return (
    <AppBar
      position="static"
      color="primary"
      style={{ backgroundColor: '#9A7DFF' }}
    >
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="goBack"
          onClick={handleOnClickGoBackButton}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit" aria-label="market">
          <LocalGroceryStoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MyPageHeader
