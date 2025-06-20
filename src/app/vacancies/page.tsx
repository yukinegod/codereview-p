import Vacancies from '@/pages/Vacancies'

type PageProps = {
  searchParams: Promise<{ page: string }>
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  return <Vacancies searchParams={await searchParams} />
}
