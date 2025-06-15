'use client'

import Switch from './Switch'
import Image from 'next/image'
import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import type { FilterType } from '../types/types'
import arrowDown from '../../../../public/arrowDown.svg'
import styles from './styles.module.css'

type Props = {
  text: string
  type: FilterType
}

export default function FilterItem({ text, type = 'dropdown' }: Props) {
  const { activeCategory } = useCategoryStore()

  return (
    <div
      className={`flex items-center justify-center px-[15px] py-3 select-none ${
        type === 'dropdown' ? 'gap-[5px]' : 'gap-[8px]'
      }`}
    >
      <p className={`text-[##232325] text-[18px] font-medium ${styles.text}`}>
        {text === 'auto' ? activeCategory : text}
      </p>
      {type === 'dropdown' ? (
        <Image src={arrowDown} alt='arrow icon' />
      ) : (
        <Switch />
      )}
    </div>
  )
}
