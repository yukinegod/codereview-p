import { API_URL } from '@/shared/config/config'

export default async function fetchVacancyById(id: number) {
  try {
    const res = await fetch(`${API_URL}/vacancies/${id}`, {
      cache: 'no-store',
    })

    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}
