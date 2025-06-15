import { cookies } from 'next/headers'
import { API_URL } from '@/shared/config/config'

type ApiResponse = {
  vacancies: any[]
  isAuth: boolean
}

export async function fetchVacancies() {
  try {
    const res = await fetch(`${API_URL}/vacancies`, {
      cache: 'no-store',
    })

    const data = await res.json()

    return {
      vacancies: Array.isArray(data) ? data : [],
      isAuth: false,
    }
  } catch (e) {
    console.error(e)
    return { vacancies: [], isAuth: false }
  }
}
