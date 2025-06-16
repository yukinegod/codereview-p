'use client'

import useFilterStore from '../model/useFilterStore'

type Props = {
  filterKey: string
}

export default function Switch({ filterKey }: Props) {
  const { isActive, toggleRemote, toggleInternship } = useFilterStore()

  const isOn = isActive(filterKey, 'true')

  const handleClick = () => {
    if (filterKey === 'remote') toggleRemote()
    if (filterKey === 'internship') toggleInternship()
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`w-[36px] h-[22px] flex items-center px-[2px] border-2 rounded-[18px] flex-shrink-0 transition-colors duration-300 cursor-pointer ${
        isOn ? 'border-black' : 'bg-transparent border-[#D4D5D7]'
      }`}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div
        className={`w-[14px] h-[14px] rounded-full transition-transform duration-300 ${
          isOn ? 'translate-x-[14px] bg-black' : 'translate-x-0 bg-[#D4D5D7]'
        }`}
      />
    </button>
  )
}
