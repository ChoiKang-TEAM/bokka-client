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
    console.log(error)
    //window.dispatchEvent(new CustomEvent('api-error', { detail: '' }))
    return Promise.reject(error)
  }
)
export default axiosInstance
