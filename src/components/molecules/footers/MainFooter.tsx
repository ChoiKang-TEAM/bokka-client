import React, { useState } from 'react'
import { Box, Paper, Tabs, Tab } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BusinessIcon from '@mui/icons-material/Business'
import QuizIcon from '@mui/icons-material/Quiz'
const Footer = () => {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    switch (newValue) {
      case 0:
        return
      case 1:
        return
      case 2:
        return
    }
  }

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <Paper elevation={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor={'secondary'}
          textColor={'secondary'}
          variant="fullWidth"
        >
          <Tab icon={<QuizIcon />} label="면접보까" />
          <Tab icon={<BusinessIcon />} label="회사보까" />
          <Tab icon={<EmojiEventsIcon />} label="리그" />
        </Tabs>
      </Paper>
    </Box>
  )
}

export default Footer
