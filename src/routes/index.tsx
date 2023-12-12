import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from 'src/components/organisms/layouts/MainLayout'
import Main from 'src/pages/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
])

const RouterConfig = () => {
  return <RouterProvider router={router} />
}

export default RouterConfig
