import React, { ReactNode } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material'
import MainHeader from 'src/components/molecules/headers/MainHeader'
import MyPageHeader from 'src/components/molecules/headers/MyPageHeader'

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
            flex: 1,
            overflowY: 'auto',
            display: 'flex', // Flex 컨테이너로 설정
            flexDirection: 'column', // 자식 요소들을 수직 방향으로 정렬
            alignItems: 'center', // 가로 중앙 정렬
            paddingTop: '20px', // 상단 여백 (선택적)
          }}
        >
          <Outlet />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
