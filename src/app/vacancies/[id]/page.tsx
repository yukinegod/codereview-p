import Vacancy from '@/pages/Vacancy'
import fetchVacancyById from '@/shared/api/vacancy/fetchVacancyById'
import getVacancyId from '@/shared/utils/getVacancyId'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function VacancyPage({ params }: PageProps) {
  const { id } = await params
  const vacancy = await fetchVacancyById(getVacancyId(id))
  return <Vacancy vacancy={vacancy} />
}
