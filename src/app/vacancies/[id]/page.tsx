import Vacancy from '@/pages/Vacancy'

interface PageParams {
  params: {
    id: string
  }
}

export default async function VacancyPage({ params }: PageParams) {
  return <Vacancy params={params} />
}
