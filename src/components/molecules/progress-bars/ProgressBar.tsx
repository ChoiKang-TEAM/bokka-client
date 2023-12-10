import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

interface ProgressBarProps {
  progress: number
  maxBlocks: number
}

const ProgressBarContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
})

const Block = styled(Box)(() => ({
  height: 20,
  transition: 'background-color 0.3s ease',
}))

const ProgressBar = (props: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [blockWidth, setBlockWidth] = useState(0)

  useEffect(() => {
    const resizeListener = () => {
      if (progressBarRef.current) {
        const containerWidth = progressBarRef.current.offsetWidth
        const newBlockWidth =
          (containerWidth - (props.maxBlocks - 1) * 0.5) / props.maxBlocks
        setBlockWidth(newBlockWidth)
      }
    }

    window.addEventListener('resize', resizeListener)
    resizeListener()

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [props.maxBlocks])

  return (
    <ProgressBarContainer ref={progressBarRef}>
      {[...Array(props.maxBlocks)].map((_, index) => (
        <Block
          key={index}
          width={blockWidth}
          bgcolor={index < props.progress ? 'primary.main' : 'grey.300'}
          marginRight={index < props.maxBlocks - 1 ? 0.5 : 0}
        />
      ))}
    </ProgressBarContainer>
  )
}
export default ProgressBar
