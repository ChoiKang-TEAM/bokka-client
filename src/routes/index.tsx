import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from 'src/pages/Main'

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default RouterConfig
