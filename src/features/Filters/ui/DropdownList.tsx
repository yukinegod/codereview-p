import Image from 'next/image'
import checkMark from '../../../../public/checkMark.svg'

type Props = {
  filterKey: string
  options: string[]
  onSelect: (value: string) => void
  selectedValues: string[]
}

export default function DropdownList({
  filterKey,
  options,
  onSelect,
  selectedValues,
}: Props) {
  return (
    <div
      className={`flex flex-col items-end absolute top-[60px] left-0 bg-white pt-[10px] pb-[5px] w-[224px] overflow-hidden scroll-auto rounded-[14px] z-[30]`}
    >
      {options.map((option) => (
        <div
          key={option}
          onClick={(e) => {
            e.stopPropagation()
            onSelect(option)
          }}
          className={`flex items-center justify-between px-[15px] w-full h-[40px] cursor-pointer hover:bg-gray-100`}
        >
          <p className='text-[18px] text-[#232325]'>{option}</p>
          {selectedValues.includes(option) && (
            <Image src={checkMark} alt='check icon' />
          )}
        </div>
      ))}
    </div>
  )
}
