import api from '@/lib/axios.ts'
import { useAuthStore } from '@/stores/useAuthStore'
import type { SignInResponse } from '@/types/auth'
import type { TokenResponse } from '@react-oauth/google'
import axios from 'axios'
import { toast } from 'sonner'

const googleSignIn = async (tokenResponse: TokenResponse) => {
  try {
    const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
    })

    const { data: credentialResponse } = userInfo

    const res = await api.post<SignInResponse, SignInResponse>('/auth/signinwithexternal', {
      credentialResponse,
      type: 'GOOGLE'
    })

    const { accessToken } = res

    if (accessToken) {
      useAuthStore.getState().setAccessToken(accessToken)
    }
  } catch (error) {
    console.error('Authentication error: ', error)
    toast.error('Authentication error')
  }
}

export const externalAuthService = { googleSignIn }
