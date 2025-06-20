'use client'

import { useState } from 'react'
import { loginAndFetchUser } from '../../api/loginAndFetchUser'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const login = async (username: string, password: string) => {
    try {
      setLoading(true)
      const user = await loginAndFetchUser(username, password)
      return user
    } catch (err: any) {
      setError(err.message || 'Ошибка авторизации')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error, setError }
}
