'use client'

import VacancyItem from '@/entities/Vacancy/ui/VacancyItem'
import useFilterStore from '@/features/Filters/model/useFilterStore'
import AccessBanner from '@/widgets/AccessBanner/ui/AccessBanner'

export default function VacanciesList({ vacancies }: any) {
  return (
    <div className='relative grid grid-cols-2 grid-rows-4 gap-4 w-[1022px] min-h-[972px] mt-[40px]'>
      {vacancies.map((vacancy: any) => (
        <VacancyItem
          key={vacancy.id}
          id={vacancy.id}
          title={vacancy.title}
          remote={vacancy.remote}
          internship={vacancy.internship}
          salary={vacancy.salary}
          logoLink={vacancy.image}
          companyName={vacancy.company_name}
          location={vacancy.location}
          publicationDate={vacancy.date_publication}
          externalId={vacancy.external_id}
        />
      ))}
      <AccessBanner type='vacancies' />
    </div>
  )
}
