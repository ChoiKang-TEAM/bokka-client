import { combineReducers } from 'redux'
import snackBarSlice from 'src/stores/notices/snackBarSlice'

const rootReducer = combineReducers({
  snackBarReducer: snackBarSlice.reducer,
})

export default rootReducer
