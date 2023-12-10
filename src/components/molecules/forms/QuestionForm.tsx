import React, { useEffect, useState } from 'react'
import { TextField, Typography, Box, InputAdornment, Fade } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

interface QuestionFormChildProps {
  submitAnswer: (answer: string) => void
}
interface Content {
  answer: string
  mode: string
  question: string[]
}

const QuestionForm = (props: QuestionFormChildProps) => {
  const [content, setContent] = useState<Content>({
    answer: '',
    mode: '',
    question: [],
  })
  const [answer, setAnswer] = useState<string>('')
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.submitAnswer(answer)
  }
  return (
    <>
      <Box
        sx={{
          mx: 2, // 좌우 마진
          my: 4, // 상하 마진
          p: 2, // 패딩
          backgroundColor: '#EAEAEA', // 박스 배경색
          borderRadius: 2, // 둥근 모서리
        }}
      >
        <Fade in={true}>
          <CheckCircleOutlineIcon style={{ color: 'green' }} />
        </Fade>
        <Typography variant="body1"></Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: 'primary.main' }}
          component={'div'}
        >
          {content.question.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Typography>
      </Box>

      {/* 입력 필드 */}
      <Box sx={{ mx: 2, my: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="filled"
            placeholder="이곳에 답변을 입력하세요."
            value={answer}
            onChange={handleAnswerChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SendIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              sx: {
                color: 'black',
                backgroundColor: '#EAEAEA',
                borderRadius: 2,
              }, // 입력 필드 스타일
            }}
          />
        </form>
      </Box>
    </>
  )
}

export default QuestionForm
