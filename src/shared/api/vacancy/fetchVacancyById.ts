import { API_URL } from '@/shared/config/config'

export async function fetchVacancyById(id: number) {
  try {
    const res = await fetch(`${API_URL}/vacancies/${id}`, {
      cache: 'no-store',
    })

    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
