'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import tick from '../../../../shared/assets/images/tick.svg'

type Props = {
  text: string
  className?: string
}

export default function Checkbox({ text, className }: Props) {
  const [isActive, setIsActive] = useState(true)

  return (
    <div
      className={clsx('flex gap-2 select-none cursor-pointer', className)}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div
        className={clsx(
          'flex items-center justify-center w-[22px] h-[22px] rounded-[7px]',
          isActive ? 'bg-[#0560C9]' : 'border-[1.5px] border-[#D4D5D7]'
        )}
      >
        <Image
          width={12}
          height={12}
          src={tick}
          alt='tick icon'
          className='w-[12px] h-[12px]'
        />
      </div>
      <p className='text-[#232325] text-[18px] font-medium leading-[22px] tracking-[-0.5px]'>
        {text}
      </p>
    </div>
  )
}
