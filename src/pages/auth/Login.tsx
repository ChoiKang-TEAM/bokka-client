import React from 'react'
import authApi from 'src/apis/auth'
import LoginForm from 'src/components/molecules/forms/LoginForm'

const Login = () => {
  const onLogin = async (userName: string, password: string) => {
    await authApi.login({
      userId: userName,
      password: password,
      authProvider: 'LOCAL',
    })
  }

  return <LoginForm onLogin={onLogin} />
}

export default Login
