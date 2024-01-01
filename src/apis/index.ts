import axios, { AxiosError } from 'axios'
import { AxiosErrorResultInterface, AxiosResponseData } from 'src/types'
import authApi from './auth'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3100/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

const isTokenExpiredError = (error: AxiosError): boolean => {
  const responseData = error.response
    ?.data as AxiosResponseData<AxiosErrorResultInterface>
  return responseData && responseData.code === 5002
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (isTokenExpiredError(error)) {
      await authApi.refresh()
      return axiosInstance(error.config)
    } else return Promise.reject(error)
  }
)
export default axiosInstance
