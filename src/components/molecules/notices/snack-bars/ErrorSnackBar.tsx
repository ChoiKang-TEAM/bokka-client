import { Snackbar, Alert } from '@mui/material'
import TransitionSlide from 'src/components/atoms/slides/TransitionSlide'
import useAppDispatch from 'src/hooks/useAppDispatch'
import useAppSelector from 'src/hooks/useAppSelector'
import { closeSnackbar } from 'src/stores/notices/snackBarSlice'

const ErrorSnackBar = () => {
  const snackbar = useAppSelector((state) => state.snackBarReducer)
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(closeSnackbar())
  }
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbar.open}
      autoHideDuration={2000}
      TransitionComponent={TransitionSlide}
      onClose={handleClose}
    >
      <Alert
        severity="error"
        sx={{
          width: '100%',
          bgcolor: '#D32F2F',
          color: 'white',
          '& .MuiAlert-icon': {
            color: 'white',
          },
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  )
}

export default ErrorSnackBar
