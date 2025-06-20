import { API_URL } from '@/shared/config/config'

export type LoginResponse = {
  access_token: string
  token_type: string
  expires_in?: number
  refresh_token?: string
}

export async function auth(
  username: string,
  password: string
): Promise<LoginResponse> {
  const form = new URLSearchParams()
  form.append('username', username)
  form.append('password', password)
  form.append('grant_type', '')
  form.append('scope', '')
  form.append('client_id', '')
  form.append('client_secret', '')

  const response = await fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.detail || 'Login failed')
  }

  return data
}
