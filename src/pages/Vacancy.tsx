import { fetchVacancyById } from '@/shared/api/vacancy/fetchVacancyById'
import getVacancyId from '@/shared/utils/getVacancyId'
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
  params: { id: string }
}

export default async function Vacancy({ params }: Props) {
  const vacancy = await fetchVacancyById(getVacancyId(await params.id))

  if (!vacancy) return null

  return (
    <div className='w-screen min-h-screen bg-white flex flex-col items-center pt-5'>
      <TopMenu type='arrow' buttonType='autoResponses' href='/vacancies' />
      <div className='mt-[176px] w-[1020px] flex gap-[60px]'>
        {/* левая колонка */}
        <div className='flex-1'>
          <AboutVacancy />
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

        {/* правая колонка */}
        <VacancySidebar
          companyName='Bell Integrator'
          location='Москва'
          image='https://placekitten.com/402/602'
        />
      </div>
      <SeoKeysList type='vacancy' />
      <Footer />
    </div>
  )
}
