import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import authApi from 'src/apis/auth'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import userApi from 'src/apis/user'

const MyInfoField = () => {
  const [name, setName] = useState<string>('')
  const logout = async () => {
    await authApi.logout()
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await userApi.getUserInfo()
      const newName = result?.name ? result.name : result?.userId
      setName(newName ?? '')
    }
    fetchData()
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // 내용을 상단과 하단에 정렬
        backgroundColor: 'white',
        borderRadius: '8px',
        height: '33.3%',
        width: '100%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          alt="Character"
          src="/temp.jpg"
          sx={{ width: 128, height: 128 }}
        />
        <Stack direction="column" justifyContent="center" sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color={'primary'}>
            면접보카 30일째 이용 중
          </Typography>
        </Stack>
        <IconButton aria-label="edit">
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
      <Button variant="contained" color="error" onClick={logout}>
        로그아웃
      </Button>
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Button variant={'text'} color={'success'} sx={{ width: '50%' }}>
          구독 관리
        </Button>

        <Button variant={'text'} color={'info'} sx={{ width: '50%' }}>
          친구 관리
        </Button>
      </Stack>
    </Box>
  )
}

export default MyInfoField
