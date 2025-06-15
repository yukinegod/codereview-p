'use client'

import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import styles from './styles.module.css'

type Props = {
  title: string
  titleSecond?: string
  subtitle: string
}

export default function PageTitle({ title, titleSecond, subtitle }: Props) {
  const { activeCategory } = useCategoryStore()

  return (
    <div className='flex flex-col items-start justify-between gap-5 mt-[156px] w-[1022px] min-h-[116px] shrink-0'>
      <h1
        className={`flex items-center text-[#232325] text-[50px] min-h-[52px] font-bold ${styles.title}`}
      >
        {
          <>
            {title} {activeCategory} <br />
            {titleSecond ?? ''}
          </>
        }
      </h1>
      <p
        className={`text-[#414246] text-[18px] font-medium ${styles.subtitle}`}
      >
        {subtitle}
      </p>
    </div>
  )
}
