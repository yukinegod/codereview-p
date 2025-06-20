import { auth } from './auth'
import { API_URL } from '@/shared/config/config'
import useAuthStore from '@/entities/User/model/useAuthStore'

export async function loginAndFetchUser(username: string, password: string) {
  const { setAuth, setUser } = useAuthStore.getState()

  const res = await auth(username, password)
  const token = res.access_token

  setAuth(token)

  const userRes = await fetch(`${API_URL}/auth/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!userRes.ok) throw new Error('не удалось получить данные пользователя')

  const user = await userRes.json()
  setUser(user)

  return user
}
