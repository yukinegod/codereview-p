'use client'

import useFilterStore from '../model/useFilterStore'
import checkMark from '../../../../public/checkMark.svg'
import Image from 'next/image'

type Props = {
  text: string
  filterKey: string
}

export default function DropdownItem({ text, filterKey }: Props) {
  const { toggleFilter, isActive } = useFilterStore()
  const active = isActive(filterKey, text)

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        toggleFilter(filterKey, text)
      }}
      className={`flex items-center justify-between px-[15px] w-full h-[40px] cursor-pointer`}
    >
      <p className='text-[18px] text-[#232325]'>{text}</p>
      {active && <Image src={checkMark} alt='check icon' />}
    </div>
  )
}
