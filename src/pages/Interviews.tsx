import TopMenu from '@/widgets/TopMenu/ui/TopMenu'
import Filters from '@/features/Filters/ui/Filters'
import PageTitle from '@/shared/ui/PageTitle/ui/PageTitle'
import {
  INTERVIEWS_SUBTITLE,
  INTERVIEWS_TITLE_FIRST,
  INTERVIEWS_TITLE_SECOND,
} from '@/shared/config/config'
import QuestionList from '@/entities/Question/ui/QuestionList'
import Footer from '@/widgets/Footer/ui/Footer'
import Pagination from '@/shared/ui/Pagination/ui/Pagination'
import SeoKeysList from '@/shared/ui/SeoTags/ui/SeoKeysList'
import { TOTAL_PAGES, ITEMS_PER_PAGE } from '@/shared/config/paginationMock'

type Props = {
  pageNumber?: string
}

export default async function Interviews({ pageNumber }: Props) {
  const currentPage = Number(pageNumber) || 1
  const skip = (currentPage - 1) * ITEMS_PER_PAGE

  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] pb-[2px] overflow-x-hidden'>
      <TopMenu type='secondary' buttonType='questionSimulator' />
      <PageTitle
        title={INTERVIEWS_TITLE_FIRST}
        titleSecond={INTERVIEWS_TITLE_SECOND}
        subtitle={INTERVIEWS_SUBTITLE}
      />
      <Filters type='interviews' />
      <QuestionList />
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        basePath='/interviews'
      />
      <SeoKeysList type='interviews' />
      <Footer />
    </div>
  )
}
