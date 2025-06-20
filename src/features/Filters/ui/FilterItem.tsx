'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import Switch from './Switch'
import Image from 'next/image'
import DropdownList from './DropdownList'
import arrowDown from '../../../../public/arrowDown.svg'
import styles from './styles.module.css'
import type { FilterType } from '../types/types'

type Props = {
  label: string
  type: FilterType
  id: string
  options?: string[]
}

export default function FilterItem({ label, type, id, options }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { activeCategory } = useCategoryStore()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString())
    const current = params.get(id)?.split(',') || []

    if (current.includes(value)) {
      const updated = current.filter((v) => v !== value)
      updated.length ? params.set(id, updated.join(',')) : params.delete(id)
    } else {
      current.push(value)
      params.set(id, current.join(','))
    }

    params.delete('page') // reset pagination
    router.push(`/vacancies?${params.toString()}`)
  }

  return (
    <div
      ref={ref}
      className={`flex relative items-center justify-center px-[15px] py-3 select-none shrink-0 bg-[#F6F6F6] rounded-[12px] ${
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
      {open && options && (
        <DropdownList
          options={options}
          filterKey={id}
          onSelect={handleSelect}
          selectedValues={searchParams?.get(id)?.split(',') || []}
        />
      )}
    </div>
  )
}
