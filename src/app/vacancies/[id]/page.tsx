import Vacancy from '@/pages/Vacancy'

export default function VacancyPage({ params }: { params: { id: string } }) {
  return <Vacancy params={params} />
}
