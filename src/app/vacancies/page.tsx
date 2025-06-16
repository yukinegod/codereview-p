import Vacancies from '@/pages/Vacancies'

type PageProps = {
  searchParams: Promise<{ page: string }>
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  const { page } = await searchParams
  return <Vacancies page={page} />
}
