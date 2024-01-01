import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from 'src/components/organisms/layouts/MainLayout'
import Main from 'src/pages/question/Main'
import Login from 'src/pages/auth/Login'
import InterviewQuestion from 'src/pages/question/InterviewQuestion'
import MyPage from 'src/pages/user/MyPage'

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Main />,
        },
        {
          path: 'question',
          children: [
            {
              path: 'interview',
              element: <InterviewQuestion />,
            },
          ],
        },
        {
          path: 'my-page',
          element: <MyPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default RouterConfig
