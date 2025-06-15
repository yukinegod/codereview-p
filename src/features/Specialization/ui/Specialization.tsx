'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FIRST_COLUMN_ITEMS, SECOND_COLUMN_ITEMS } from '../config/config'
import CategorySwitcher from '@/features/CategorySwitcher/ui/CategorySwitcher'
import PopupList from './PopupList'
import PopupItem from './PopupItem'
import itemMenu from '../../../../public/itemMenu.svg'
import arrow from '../../../../public/arrowDown.svg'
import type { ItemType } from '../types/types'
import type { TopMenuType } from '@/shared/types/types'
import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import styles from './styles.module.css'

type Props = {
  type?: TopMenuType
}

export default function Specialization({ type = 'main' }: Props) {
  const { activeCategory } = useCategoryStore()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className='relative'>
      <div
        className={`flex items-center justify-center h-full gap-[6px] cursor-pointer ${styles.specialization}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src={itemMenu} alt='menu image' />
        <p className='font-medium text-[18px]'>
          {type !== 'main' ? activeCategory : 'Специализация'}
        </p>
        <Image src={arrow} alt='arrow image' />
      </div>

      {isOpen && (
        <div
          className={`fixed flex flex-col p-[20px] top-[70px] left-1/2 w-[584px] h-[270px] z-50
               -translate-x-1/2 ${styles.popup}`}
          style={{
            boxShadow: '0px 1px 12px 2px rgba(36, 36, 36, 0.07)',
          }}
        >
          <CategorySwitcher type='popup' />
          <div className='flex gap-[80px]'>
            <PopupList>
              {FIRST_COLUMN_ITEMS.map((item) => (
                <PopupItem
                  type={item.type as ItemType}
                  to={item.to}
                  title={item.title}
                  key={item.id}
                />
              ))}
            </PopupList>

            <PopupList>
              {SECOND_COLUMN_ITEMS.map((item) => (
                <PopupItem
                  type={item.type as ItemType}
                  to={item.to}
                  title={item.title}
                  key={item.id}
                />
              ))}
            </PopupList>
          </div>
        </div>
      )}
    </div>
  )
}
