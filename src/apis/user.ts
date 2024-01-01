import axiosInstance from '.'

const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get<{
      code: number
      result: { name: string; userId: string }
    }>('/user/info', { withCredentials: true })
    return response.data.result
  } catch (e) {
    console.error(e)
  }
}

const userApi = {
  getUserInfo,
}

export default userApi
