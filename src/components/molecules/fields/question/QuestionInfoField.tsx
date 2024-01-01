import React, { useState } from 'react'
import { Avatar, Box, Button, FormControl, Stack } from '@mui/material'

import CircularWithValueLabel from '../../progress-bars/CircularWithLabel'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import useAppDispatch from 'src/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { openSnackbar } from 'src/stores/notices/snackBarSlice'
import { setTotalQuestions } from 'src/stores/quizs/questionSlice'

const QuestionInfoField = () => {
  const [selected, setSelected] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickButton = () => {
    if (!selected) return dispatch(openSnackbar('문항 갯수를 선택해주세요.'))
    const questions: number = parseInt(selected)

    dispatch(setTotalQuestions(questions))
    navigate('/question/interview')
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(220,220,220)',
        borderRadius: '8px',
        height: '33.3%',
        width: '100%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          alt="Character"
          src="/temp.jpg"
          sx={{ width: 128, height: 128 }}
        />
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          width={'100%'}
        >
          <CircularWithValueLabel progress={progress} />
          <Box sx={{ gap: 1, display: 'flex', width: '100%' }}>
            <FormControl sx={{ flex: 1, minWidth: 0 }} size="small">
              <QuestionCountDropdown value={selected} setValue={setSelected} />
            </FormControl>
          </Box>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        color={'secondary'}
        sx={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          borderRadius: '50px',
          height: '50px',
          fontSize: '1.25rem',
        }}
        onClick={handleClickButton}
      >
        {progress >= 100 ? '추가 학습' : '학습하기'}
      </Button>
    </Box>
  )
}

export default QuestionInfoField
