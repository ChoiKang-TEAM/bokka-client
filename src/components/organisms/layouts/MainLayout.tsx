import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import { Outlet } from 'react-router-dom'

const drawerWidth = 240

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0', // 연보라 색상
    },
    // 추가적인 테마 설정...
  },
  shape: {
    borderRadius: 8, // 모서리 둥글게
  },
  // 기타 테마 관련 설정...
})

const MainLayout = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Main Layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={open} onClose={handleDrawerToggle}>
        <Box sx={{ width: drawerWidth }}>
          <List>{/* 여기에 사이드바 메뉴 아이템들을 추가 */}</List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* 메인 컨텐츠 영역 */}
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default MainLayout
