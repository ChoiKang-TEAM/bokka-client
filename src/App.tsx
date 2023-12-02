import React from 'react'
import RouterConfig from 'src/routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  )
}

export default App
