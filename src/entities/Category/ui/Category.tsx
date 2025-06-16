'use client'

import useCategoryStore from '../model/useCategoryStore'
import { CategoryType } from '@/shared/types/types'
import styles from './styles.module.css'

type Props = {
  title: CategoryType
  type?: 'popup' | 'default'
}

export default function Category({ title, type = 'default' }: Props) {
  const { activeCategory, setActiveCategory } = useCategoryStore()
  const isActive = activeCategory === title

  return (
    <button
      type='button'
      role='menuitemradio'
      aria-checked={isActive}
      onClick={() => setActiveCategory(title)}
      className={`flex ${
        type === 'default'
          ? `text-[22px] px-[15px] ${styles.category}`
          : `text-[18px] px-[12px] ${styles.categoryPopup}`
      } pt-[5px] pb-[7px] h-full cursor-pointer shrink-0 ${
        isActive && `${styles.activeCategory} text-white`
      }`}
      aria-label={`Выбрать категорию ${title}`}
    >
      {title}
    </button>
  )
}
