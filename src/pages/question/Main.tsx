import { FormControl, Button, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionCountDropdown from 'src/components/atoms/dropdowns/QuestionCountDropdown'
import QuestionInfoField from 'src/components/molecules/fields/question/QuestionInfoField'
import MainHeader from 'src/components/molecules/headers/MainHeader'
import useAppDispatch from 'src/hooks/useAppDispatch'
import { openSnackbar } from 'src/stores/notices/snackBarSlice'
import { setTotalQuestions } from 'src/stores/quizs/questionSlice'

const Main = () => {
  const [selected, setSelected] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickButton = () => {
    if (!selected) return dispatch(openSnackbar('문항 갯수를 선택해주세요.'))
    const questions: number = parseInt(selected)

    dispatch(setTotalQuestions(questions))
    navigate('/question/interview')
  }
  return (
    <>
      <QuestionInfoField />
    </>
  )
}

export default Main
