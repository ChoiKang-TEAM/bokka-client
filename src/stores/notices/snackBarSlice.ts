import { createSlice } from '@reduxjs/toolkit'

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    message: '',
  },
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true
      state.message = action.payload
    },
    closeSnackbar: (state) => {
      state.open = false
      state.message = ''
    },
  },
})

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions
export default snackbarSlice
