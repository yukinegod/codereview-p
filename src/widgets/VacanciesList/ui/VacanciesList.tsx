'use client'

import VacancyItem from '@/entities/Vacancy/ui/VacancyItem'
import useFilterStore from '@/features/Filters/model/useFilterStore'

export default function VacanciesList({ vacancies }: any) {
  const { filters } = useFilterStore()

  const groupFilters = filters.reduce(
    (acc: Record<string, string[]>, { key, value }) => {
      if (!acc[key]) acc[key] = []
      acc[key].push(value)
      return acc
    },
    {}
  )

  const filtered = filters.length
    ? vacancies.filter((v: any) =>
        Object.entries(groupFilters).every(([key, values]) => {
          const val = v[key]

          if (typeof val === 'boolean') {
            return values.includes(String(val))
          }

          if (val) {
            const valStr = String(val).toLowerCase()
            return values.some((v) => valStr.includes(v.toLowerCase()))
          }

          return false
        })
      )
    : vacancies

  return (
    <div className='grid grid-cols-2 grid-rows-4 gap-4 w-[1022px] mt-[40px]'>
      {filtered &&
        filtered.map((vacancy: any) => (
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
    </div>
  )
}
