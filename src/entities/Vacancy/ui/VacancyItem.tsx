'use client'

import VacancyDate from './VacancyDate'
import VacancyImage from './VacancyImage'
import VacancyInfo from './VacancyInfo'
import VacancyTags from './VacancyTags'
import VacancyTitle from './VacancyTitle'
import useHoverStore from '../model/useHoverStore'
import Link from 'next/link'
import Image from 'next/image'

export type VacancyType = 'default' | 'custom'

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
  type?: VacancyType
  backgroundImage?: string
  textColor?: string
  customLogo?: string
  customIcon?: string
}

export default function VacancyItem({
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
  type = 'default',
  backgroundImage,
  textColor = 'text-black',
  customLogo,
  customIcon,
}: Props) {
  const { hoveredVacancyId, setHoveredVacancyId } = useHoverStore()

  if (type === 'custom') {
    return (
      <Link
        href={`/vacancies/${externalId}-${id}`}
        className={`flex flex-col justify-between min-w-[502px] min-h-[204px] p-[15px] cursor-default rounded-[10px] bg-cover bg-no-repeat bg-[#F6F6F6] ${textColor}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onMouseEnter={() => setHoveredVacancyId(id)}
        onMouseLeave={() => setHoveredVacancyId(null)}
      >
        <div>
          <VacancyTitle title={title} id={id} />
          <VacancyTags
            remote={remote}
            internship={internship}
            salary={salary}
          />
        </div>
        <div className='flex justify-between items-end'>
          <div className='flex gap-[10px]'>
            <VacancyImage logoLink={customLogo || logoLink} />
            <VacancyInfo companyName={companyName} location={location} />
          </div>
          {customIcon && (
            <Image src={customIcon} alt='icon' width={60} height={60} />
          )}
        </div>
      </Link>
    )
  } else {
    return (
      <Link
        href={`/vacancies/${externalId}-${id}`}
        className='flex flex-col justify-between min-w-[502px] min-h-[204px] p-[15px] cursor-default rounded-[10px] bg-[#F6F6F6]'
        onMouseEnter={() => setHoveredVacancyId(id)}
        onMouseLeave={() => setHoveredVacancyId(null)}
      >
        <div>
          <VacancyTitle title={title} id={id} />
          <VacancyTags
            remote={remote}
            internship={internship}
            salary={salary}
          />
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
}
