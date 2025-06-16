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
  page?: string
}

export default async function Vacancies({ page }: Props) {
  const { vacancies } = await fetchVacancies()

  const currentPage = Number(page) || 1
  const skip = (currentPage - 1) * ITEMS_PER_PAGE

  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] pb-[2px] overflow-x-hidden'>
      <TopMenu type='secondary' buttonType='autoResponses' />
      <PageTitle title={VACANCIES_TITLE} subtitle={VACANCIES_SUBTITLE} />
      <Filters />
      <VacanciesList vacancies={vacancies} />
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        basePath='/vacancies'
      />
      <SeoKeysList type='vacancies' />
      <Footer />
    </div>
  )
}
