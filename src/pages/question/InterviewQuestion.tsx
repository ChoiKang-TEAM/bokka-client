import { FormControl, Button, Box, Container, AppBar } from '@mui/material'
import { useState } from 'react'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import QuestionForm from 'src/components/molecules/forms/QuestionForm'
import ProgressHeader from 'src/components/molecules/headers/ProgressHeader'
import ProgressBar from 'src/components/molecules/progress-bars/ProgressBar'
import useAppDispatch from 'src/hooks/useAppDispatch'
import useAppSelector from 'src/hooks/useAppSelector'
import { openSnackbar } from 'src/stores/notices/snackBarSlice'

const InterviewQuestion = () => {
  const totalQuestions = useAppSelector(
    (state) => state.questionReducer.totalQuestions
  )

  const [progress, setProgress] = useState<number>(0)

  const dispatch = useAppDispatch()

  const submitAnswer = (answer: string) => {
    if (answer === '1234') return setProgress((state) => state + 1)
  }
  return (
    <>
      {/* <ProgressHeader progress={progress} maxProgress={totalQuestions} /> */}

      <Box
        sx={{
          height: 'calc(100vh - 120px)',
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            backgroundColor: 'white',
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            height: '100%',
          }}
        >
          <ProgressBar progress={progress} maxBlocks={totalQuestions} />
          <QuestionForm submitAnswer={submitAnswer} />
        </Container>
      </Box>
      <AppBar
        position="static"
        color="primary"
        sx={{ top: 'auto', bottom: 0 }}
      ></AppBar>
    </>
  )
}

export default InterviewQuestion
