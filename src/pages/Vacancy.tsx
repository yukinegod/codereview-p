import AboutVacancy from '@/widgets/AboutVacancy/ui/AboutVacancy'
import CompanyInfo from '@/widgets/AboutVacancy/ui/CompanyInfo'
import List from '@/entities/Item/ui/List'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'
import {
  ABOUT_PROGRAM_ITEMS,
  CANDIDATE_REQUIREMENTS,
  ADDITIONAL_ADVANTAGE,
  WE_OFFER,
} from '@/widgets/AboutVacancy/config/config'
import SophiPromoBlock from '@/shared/ui/SophiPromoBlock/SophiPromoBlock'
import Footer from '@/widgets/Footer/ui/Footer'
import VacancySidebar from '@/widgets/VacancySidebar/ui/VacancySidebar'
import SeoKeysList from '@/shared/ui/SeoTags/ui/SeoKeysList'

type Props = {
  vacancy: any
}

export default function Vacancy({ vacancy }: Props) {
  console.log(vacancy)
  if (!vacancy) return null

  return (
    <div className='w-screen min-h-screen bg-white flex flex-col items-center pt-5'>
      <TopMenu type='arrow' buttonType='autoResponses' href='/vacancies' />
      <div className='mt-[176px] w-[1020px] flex gap-[60px]'>
        <div className='flex-1'>
          <AboutVacancy
            date={vacancy.date_publication}
            title={vacancy.title}
            remote={vacancy.remote}
            internship={vacancy.internship}
            salary={vacancy.salary}
          />
          <CompanyInfo />
          <List title='О программе:' items={ABOUT_PROGRAM_ITEMS} />
          <List title='Ожидания от кандитата:' items={CANDIDATE_REQUIREMENTS} />
          <SophiPromoBlock type='vacancy' />
          <List
            title='Дополнительное преимущество:'
            items={ADDITIONAL_ADVANTAGE}
          />
          <List
            title='Что мы предлагаем после успешного прохождения стажировки:'
            items={WE_OFFER}
          />
        </div>
        <VacancySidebar
          companyName={vacancy.company_name}
          location={vacancy.location}
          image='https://placekitten.com/402/602'
          url={vacancy.url}
        />
      </div>
      <SeoKeysList type='vacancy' />
      <Footer />
    </div>
  )
}
