import { createSlice } from '@reduxjs/toolkit'
import { QuizState } from 'src/types/states/sliceInitialState'

const initialState: QuizState = {
  totalQuestions: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload
    },
  },
})

export const { setTotalQuestions } = quizSlice.actions
export default quizSlice
