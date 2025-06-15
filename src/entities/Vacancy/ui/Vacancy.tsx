'use client'

import VacancyDate from './VacancyDate'
import VacancyImage from './VacancyImage'
import VacancyInfo from './VacancyInfo'
import VacancyTags from './VacancyTags'
import VacancyTitle from './VacancyTitle'
import useHoverStore from '../model/useHoverStore'
import Link from 'next/link'

type Props = {
  id: number
  title: string
  remote: boolean
  internship: boolean
  salary: string
  logoLink: string
  companyName: string
  location: string
  publicationDate: string
  externalId: string
}

export default function Vacancy({
  id,
  title,
  remote,
  internship,
  salary,
  logoLink,
  companyName,
  location,
  publicationDate,
  externalId,
}: Props) {
  const { hoveredVacancyId, setHoveredVacancyId } = useHoverStore()

  return (
    <Link
      href={`/vacancies/${externalId}-${id}`}
      className='flex flex-col justify-between min-w-[502px] min-h-[204px] p-[15px] cursor-default'
      onMouseEnter={() => setHoveredVacancyId(id)}
      onMouseLeave={() => setHoveredVacancyId(null)}
    >
      <div>
        <VacancyTitle title={title} id={id} />
        <VacancyTags remote={remote} internship={internship} salary={salary} />
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-[10px]'>
          <VacancyImage logoLink={logoLink} />
          <VacancyInfo companyName={companyName} location={location} />
        </div>
        <VacancyDate publicationDate={publicationDate} />
      </div>
    </Link>
  )
}
