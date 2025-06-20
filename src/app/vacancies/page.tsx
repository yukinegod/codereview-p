import Vacancies from '@/pages/Vacancies'

import { Metadata } from 'next'
import { VACANCIES_TITLE, VACANCIES_SUBTITLE } from '@/shared/config/config'

export const metadata: Metadata = {
  title: `${VACANCIES_TITLE} | Вакансии для IT-специалистов`,
  description: VACANCIES_SUBTITLE,
  keywords: ['вакансии', 'работа IT', 'карьера в IT', 'программист работа'],
  openGraph: {
    title: VACANCIES_TITLE,
    description: VACANCIES_SUBTITLE,
    url: '/vacancies',
    type: 'website',
  },
  alternates: {
    canonical: '/vacancies',
  },
}

type PageProps = {
  searchParams: Promise<{ page: string }>
}

export default async function VacanciesPage({ searchParams }: PageProps) {
  return <Vacancies searchParams={await searchParams} />
}
