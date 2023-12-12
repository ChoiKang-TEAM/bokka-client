import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3100/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)
export default axiosInstance
