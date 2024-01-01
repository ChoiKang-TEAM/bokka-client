import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AttendanceCheckField = () => {
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'black',
        py: 2,
        px: 2,
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ minWidth: 100, flexShrink: 0 }}>
        출석체크
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ flexGrow: 1, flexShrink: 0, justifyContent: 'flex-end' }}
      >
        {daysOfWeek.map((day, index) => (
          <Avatar
            key={index}
            sx={{ bgcolor: 'rgb(240,240,240)', width: 36, height: 36 }}
          >
            <Typography variant="caption" color={'black'}>
              {day}
            </Typography>
          </Avatar>
        ))}
      </Stack>
    </Stack>
  )
}

export default AttendanceCheckField
