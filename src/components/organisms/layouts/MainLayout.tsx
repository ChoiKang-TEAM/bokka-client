import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material'
import MainHeader from 'src/components/molecules/headers/MainHeader'

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9A7DFF',
        },
      },
    },
  },
})

const MainLayout = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <MainHeader />
        <Container
          component="main"
          maxWidth="sm"
          style={{ flex: 1, overflowY: 'auto' }}
        >
          <Outlet />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
