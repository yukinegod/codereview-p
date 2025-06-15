import { API_URL } from '@/shared/config/config'

type ApiResponse = {
  vacancies: any[]
  isAuth: boolean
}

export async function fetchQuestions() {
  try {
    const res = await fetch(`${API_URL}/questions`, {
      cache: 'no-store',
    })

    const data = await res.json()

    return data
  } catch (e) {
    console.error(e)
    return { questions: [], isAuth: false }
  }
}
