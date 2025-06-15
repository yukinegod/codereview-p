import { VACANCIES_TITLE, VACANCIES_SUBTITLE } from '@/shared/config/config'
import Filters from '@/features/Filters/ui/Filters'
import PageTitle from '@/shared/ui/PageTitle/ui/PageTitle'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'
import VacanciesList from '@/widgets/VacanciesList/ui/VacanciesList'
import FooterAnimation from '@/widgets/FooterAnimation/ui/FooterAnimation'
import Footer from '@/widgets/Footer/ui/Footer'

export default async function Vacancies() {
  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] pb-[2px] overflow-x-hidden'>
      <TopMenu type='secondary' />
      <PageTitle title={VACANCIES_TITLE} subtitle={VACANCIES_SUBTITLE} />
      <Filters />
      <VacanciesList />
      <FooterAnimation />
      <Footer />
    </div>
  )
}
