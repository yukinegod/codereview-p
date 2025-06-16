import Vacancy from '@/pages/Vacancy'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function VacancyPage({ params }: PageProps) {
  const { id } = await params
  return <Vacancy id={id} />
}
