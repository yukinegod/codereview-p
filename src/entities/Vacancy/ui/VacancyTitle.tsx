'use client'

import useHoverStore from '../model/useHoverStore'
import styles from './styles.module.css'
import Link from 'next/link'

type Props = {
  title: string
  id: number
  externalId?: string
}

export default function VacancyTitle({ title, id, externalId }: Props) {
  const { hoveredVacancyId } = useHoverStore()
  return (
    <h3
      className={`${
        hoveredVacancyId === id ? 'text-[#0560c9]' : 'text-[#232325]'
      } text-[22px] font-semibold line-clamp-2 text-ellipsis overflow-hidden cursor-pointer ${
        styles.title
      }`}
      itemProp='title'
    >
      <Link
        href={`/vacancies/${externalId}-${id}`}
        className='hover:underline focus:underline outline-none'
        aria-label={`Вакансия: ${title}`}
      >
        {title}
      </Link>
    </h3>
  )
}
