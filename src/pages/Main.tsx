import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  CssBaseline,
  Container,
  FormControl,
  Button,
  Box,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import useAppDispatch from 'src/hooks/useAppDispatch'
import { openSnackbar } from 'src/stores/notices/snackBarSlice'

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
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
  const dispatch = useAppDispatch()

  const handleClickButton = () => {
    if (!selected) dispatch(openSnackbar('문항 갯수를 선택해주세요.'))
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: 'white' }}
        >
          면접보까
        </Typography>
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
