import { createSlice } from '@reduxjs/toolkit'
import { QuestionState } from 'src/types'

const initialState: QuestionState = {
  totalQuestions: 0,
}

export const questionSlice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: {
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload
    },
  },
})

export const { setTotalQuestions } = questionSlice.actions
export default questionSlice
