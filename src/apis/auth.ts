import axiosInstance from '.'

const test = () => {
  const result = axiosInstance.post('/user/sign-up', {
    userId: 'test',
    password: 'est',
  })
  console.log(result)
}

const authApi = {
  test,
}

export default authApi
