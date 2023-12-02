import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  CssBaseline,
  Container,
  FormControl,
  Button,
  Box,
} from '@mui/material'
import { useState } from 'react'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'

const theme = createTheme({
  components: {
    // MUI 컨테이너에 대한 전역 스타일을 설정합니다.
    MuiContainer: {
      styleOverrides: {
        // 'main' 최대 너비(sm)를 가지는 컨테이너에 대해 스타일을 적용합니다.
        root: {
          height: '100vh', // 높이를 화면 전체 높이로 설정합니다.
          display: 'flex', // 자식 요소를 flex로 배치합니다.
          flexDirection: 'column', // 자식 요소를 세로로 정렬합니다.
          justifyContent: 'center', // 자식 요소를 중앙에 위치시킵니다.
          alignItems: 'center', // 자식 요소를 가로축에서 중앙에 위치시킵니다.
          backgroundColor: '#9A7DFF', // 배경색을 연보라색으로 설정합니다.
        },
      },
    },
  },
})

const Main = () => {
  const [selected, setSelected] = useState<string>('')
  const handleClickButton = () => {
    console.log
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Box sx={{ gap: 1, display: 'flex', width: '100%' }}>
          <FormControl sx={{ flex: 1, minWidth: 0 }} size="small">
            <QuestionCountDropdown value={selected} setValue={setSelected} />
          </FormControl>
          <Button
            onClick={handleClickButton}
            variant={'outlined'}
            sx={{ flex: 1, minWidth: 0 }}
          >
            오늘 문제 풀기
          </Button>
        </Box>
        {/* <SplashScreenMainImageField /> */}
      </Container>
    </ThemeProvider>
  )
}

export default Main
