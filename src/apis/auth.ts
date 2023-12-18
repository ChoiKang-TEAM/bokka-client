import { SocialLoginDto } from 'src/types'
import axiosInstance from '.'
import { DEFAULT_WEB_SITE_NAME } from 'src/constants/datas'

const socialLogin = async (dto: SocialLoginDto) => {
  try {
    switch (dto.authProvider) {
      case 'GOOGLE':
        return await axiosInstance.get(
          `/auth/login/google?site=${DEFAULT_WEB_SITE_NAME}`,
          { withCredentials: true }
        )
      case 'KAKAO':
      case 'NAVER':
    }
  } catch (e) {
    console.error(e)
  }
}

const checkCookie = async () => {
  try {
    await axiosInstance.get('/auth/jwt/check', {
      withCredentials: true,
    })
  } catch (e) {
    console.error(e)
  }
}

const authApi = {
  socialLogin,
  checkCookie,
}

export default authApi
