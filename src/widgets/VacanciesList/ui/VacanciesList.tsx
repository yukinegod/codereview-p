'use client'

import VacancyItem from '@/entities/Vacancy/ui/VacancyItem'
import AccessBanner from '@/widgets/AccessBanner/ui/AccessBanner'

export default function VacanciesList({ vacancies }: any) {
  console.log(vacancies)
  return (
    <section
      className='relative grid grid-cols-2 grid-rows-4 gap-4 w-[1022px] min-h-[972px] mt-[40px]'
      aria-label='Список вакансий'
      itemScope
      itemType='https://schema.org/ItemList'
    >
      {vacancies.map((vacancy: any) => (
        <VacancyItem
          type='default'
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
    </section>
  )
}
