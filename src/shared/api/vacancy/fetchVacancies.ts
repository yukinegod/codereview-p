import { API_URL } from '@/shared/config/config'

type Filters = {
  location?: string
  speciality?: string
  source?: string
  remote?: string
  internship?: string
}

export async function fetchVacancies({
  skip = 0,
  limit = 10,
  filters = {},
}: {
  skip?: number
  limit?: number
  filters?: Filters
}) {
  const params = new URLSearchParams()

  params.set('skip', skip.toString())
  params.set('limit', limit.toString())

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })

  const res = await fetch(`${API_URL}/vacancies/?${params.toString()}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('Failed to fetch vacancies')

  const vacancies = await res.json()
  return { vacancies }
}
