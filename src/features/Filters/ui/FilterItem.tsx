'use client'

import { useRef, useState, useEffect } from 'react'
import Switch from './Switch'
import Image from 'next/image'
import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import DropdownList from './DropdownList'
import type { FilterType } from '../types/types'
import arrowDown from '../../../../public/arrowDown.svg'
import styles from './styles.module.css'

type Props = {
  label: string
  type: FilterType
  id: string
  options?: string[]
}

export default function FilterItem({
  label,
  type = 'dropdown',
  id,
  options,
}: Props) {
  const { activeCategory } = useCategoryStore()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={ref}
      className={`flex relative items-center justify-center px-[15px] py-3 select-none shrink-0 ${
        type === 'dropdown' ? 'gap-[5px]' : 'gap-[8px]'
      }`}
      onClick={() => type === 'dropdown' && setOpen((prev) => !prev)}
    >
      <p className={`text-[#232325] text-[18px] font-medium ${styles.text}`}>
        {label === 'auto' ? activeCategory : label}
      </p>
      {type === 'dropdown' ? (
        <Image src={arrowDown} alt='arrow' />
      ) : (
        <Switch filterKey={id} />
      )}
      {open && options && <DropdownList options={options} filterKey={id} />}
    </div>
  )
}
