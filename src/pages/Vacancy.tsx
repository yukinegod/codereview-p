'use client'

import fetchVacancyById from '@/shared/api/vacancy/fetchVacancyById'
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
  vacancy: any
}

export default function Vacancy({ vacancy }: Props) {
  // const vacancy = await fetchVacancyById(getVacancyId(id))
  // const vacancy = {
  //   id: 1,
  //   active: false,
  //   external_id: 'aedc21ec-6b86-4b14-91ff-0d29c2b9e8aa',
  //   company_name: 'Nixon, Perez and Cruz',
  //   title: 'Make',
  //   salary: '3364-10666',
  //   location: 'Andrewchester',
  //   speciality: 'Java',
  //   internship: true,
  //   remote: true,
  //   url: 'https://morris-brown.org/',
  //   description:
  //     'Service language star appear. Church beautiful shake believe.\nDog bill argue explain since. Likely run must system policy himself. Like among leg herself next art.\nChoose nearly be.',
  //   source: 'Hh.ru',
  //   image: 'https://placekitten.com/429/901',
  //   date_publication: '2025-05-11T09:56:18.791940',
  // }

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
          url={vacancy.url}
        />
      </div>
      <SeoKeysList type='vacancy' />
      <Footer />
    </div>
  )
}
