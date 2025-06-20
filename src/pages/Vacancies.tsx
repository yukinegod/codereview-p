import { VACANCIES_TITLE, VACANCIES_SUBTITLE } from '@/shared/config/config'
import Filters from '@/features/Filters/ui/Filters'
import PageTitle from '@/shared/ui/PageTitle/ui/PageTitle'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'
import VacanciesList from '@/widgets/VacanciesList/ui/VacanciesList'
import Footer from '@/widgets/Footer/ui/Footer'
import { fetchVacancies } from '@/shared/api/vacancy/fetchVacancies'
import Pagination from '@/shared/ui/Pagination/ui/Pagination'
import SeoKeysList from '@/shared/ui/SeoTags/ui/SeoKeysList'
import { TOTAL_PAGES, ITEMS_PER_PAGE } from '@/shared/config/paginationMock'

type Props = {
  searchParams?: { [key: string]: string }
}

export default async function Vacancies({ searchParams }: Props) {
  const page = Number(searchParams?.page || 1)
  const skip = (page - 1) * ITEMS_PER_PAGE

  const filters: Record<string, string> = {
    location: searchParams?.location || '',
    speciality: searchParams?.speciality || '',
    source: searchParams?.source || '',
    remote: searchParams?.remote || '',
    internship: searchParams?.internship || '',
  }

  const { vacancies } = await fetchVacancies({
    skip,
    limit: ITEMS_PER_PAGE,
    filters,
  })

  return (
    <main className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] overflow-x-hidden'>
      <TopMenu type='secondary' buttonType='autoResponses' />
      <PageTitle title={VACANCIES_TITLE} subtitle={VACANCIES_SUBTITLE} />
      <Filters />
      <VacanciesList vacancies={vacancies} />
      <Pagination
        currentPage={page}
        totalPages={TOTAL_PAGES}
        basePath='/vacancies'
      />
      <SeoKeysList type='vacancies' />
      <Footer />
    </main>
  )
}
