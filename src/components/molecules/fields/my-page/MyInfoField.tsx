import React from 'react'
import { Box } from '@mui/material'

const MyInfoField = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px', // 둥근 모서리
        height: '33.3%', // 컨테이너의 높이의 약 1/3
        width: '100%', // 전체 너비
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // 그림자 추가 (선택적)
        padding: '20px', // 내부 여백 (선택적)
      }}
    >
      {/* 여기에 MyInfoField 컴포넌트의 내용을 추가합니다 */}
    </Box>
  )
}

export default MyInfoField
