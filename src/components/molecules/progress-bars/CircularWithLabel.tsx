import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface CircularWithValueLabelChildProps {
  progress: number
}

const CircularWithValueLabel = (props: CircularWithValueLabelChildProps) => {
  const validProgress = Math.min(props.progress ?? 100, 100)

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={70}
        sx={{ color: '#ddd' }}
      />
      <CircularProgress
        variant="determinate"
        value={validProgress}
        color={'secondary'}
        size={70}
        sx={{ position: 'absolute', top: 0, left: 0 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          color={'purple'}
        >{`${Math.round(props.progress)}`}</Typography>
      </Box>
    </Box>
  )
}
export default CircularWithValueLabel
