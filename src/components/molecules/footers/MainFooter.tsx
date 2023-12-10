// Footer 컴포넌트
import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 1, backgroundColor: '#9A7DFF' }}>
      {' '}
      {/* 여기서 py는 y축 패딩을 의미합니다. */}
      <Typography variant="overline" align="center" sx={{ lineHeight: '1.2' }}>
        © 2023 Your App Name
      </Typography>
    </Box>
  )
}

export default Footer
