import useAuthStore from '@/entities/User/model/useAuthStore'

export async function loginAndFetchUser(username: string, password: string) {
  const { setAuth, setUser } = useAuthStore.getState()

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  const loginData = await res.json()

  if (!res.ok) throw new Error(loginData?.error || 'Login failed')

  const token = loginData.access_token
  setAuth(token)

  const meRes = await fetch('/api/me', {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!meRes.ok) throw new Error('не удалось получить данные пользователя')

  const user = await meRes.json()
  setUser(user)
  return user
}
