import Vacancy from '@/entities/Vacancy/ui/Vacancy'
import { fetchVacancies } from '@/shared/api/vacancy/fetchVacancies'

export default async function VacanciesList() {
  const { vacancies } = await fetchVacancies()

  return (
    <div className='grid grid-cols-2 grid-rows-4 gap-4 w-[1022px] mt-[40px]'>
      {vacancies &&
        vacancies.map((vacancy) => (
          <Vacancy
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
            key={vacancy.id}
          />
        ))}
    </div>
  )
}
