import { API_URL } from '@/shared/config/config'

type ApiResponse = {
  vacancies: any[]
  isAuth: boolean
}

export default async function fetchQuestions() {
  try {
    const res = await fetch(`${API_URL}/questions/?limit=7`, {
      cache: 'no-store',
    })

    const data = await res.json()

    return data
  } catch (e) {
    console.error(e)
    return { questions: [], isAuth: false }
  }
}
