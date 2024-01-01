import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material'
import MainHeader from 'src/components/molecules/headers/MainHeader'
import MyPageHeader from 'src/components/molecules/headers/MyPageHeader'
import Footer from 'src/components/molecules/footers/MainFooter'

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
})

const MainLayout = () => {
  const location = useLocation()

  const renderHeader = () => {
    switch (location.pathname) {
      case '/my-page':
        return <MyPageHeader />
      default:
        return <MainHeader />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        {renderHeader()}
        <Container
          component="main"
          maxWidth="sm"
          style={{
            overflowY: 'auto',
            paddingTop: '20px',
          }}
        >
          <Outlet />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
