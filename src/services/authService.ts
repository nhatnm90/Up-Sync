import api from '@/lib/axios.ts'
import { handleApi } from '@/lib/handleApi'
import type { SignInResponse } from '@/types/auth'
import type { User } from '@/types/user'

const signUp = (username: string, password: string, email: string, firstName: string, lastName: string) =>
  handleApi(async () => {
    const res = await api.post<unknown, SignInResponse>(
      '/auth/signup',
      { username, password, email, firstName, lastName },
      { withCredentials: true }
    )
    return res
  })

const signIn = (username: string, password: string) =>
  handleApi(async () => {
    const res = await api.post<unknown, SignInResponse>(
      '/auth/signin',
      { username, password },
      { withCredentials: true }
    )
    return res
  })

const signOut = () =>
  handleApi(async () => {
    const res = await api.post<unknown, SignInResponse>('/auth/signout', null, { withCredentials: true })
    return res
  })

const fetchMe = () =>
  handleApi(async () => {
    const res = await api.get<unknown, { user: User }>('/user/me', { withCredentials: true })
    return res.user
  })

const refresh = () =>
  handleApi(async () => {
    const res = await api.post<unknown, SignInResponse>('/auth/refreshtoken', { withCredentials: true })
    return res
  })

export const authService = { signUp, signIn, signOut, fetchMe, refresh }
