import { ThemeProvider } from '@emotion/react'
import {
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

const Main = () => {
  const [selected, setSelected] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleClickButton = () => {
    if (!selected) dispatch(openSnackbar('문항 갯수를 선택해주세요.'))
  }
  return (
    <>
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
    </>
  )
}

export default Main
