import { combineReducers } from 'redux'
import snackBarSlice from 'src/stores/notices/snackBarSlice'
import questionSlice from 'src/stores/quizs/questionSlice'

const rootReducer = combineReducers({
  snackBarReducer: snackBarSlice.reducer,
  questionReducer: questionSlice.reducer,
})

export default rootReducer
