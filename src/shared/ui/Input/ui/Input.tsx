'use client'

import styles from './styles.module.css'
import passReview from '../../../../../public/passReview.svg'
import required from '../../../assets/images/required.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  label: string
  value?: string
  type: 'text' | 'password' | 'email' | 'number'
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  inputClassName?: string
  isRequired?: boolean
}

export default function Input({
  label,
  value,
  type,
  placeholder,
  onChange,
  className,
  inputClassName,
  isRequired,
}: Props) {
  const [inputType, setInputType] = useState<string>(type)
  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      <div className='flex gap-[2px]'>
        <p
          className={clsx(
            'text-[#232325] text-[16px] font-medium',
            styles.label
          )}
        >
          {label}
        </p>
        {isRequired && (
          <Image
            width={6}
            height={6}
            src={required}
            alt='Обязательное поле'
            className='w-[6px] h-[6px]'
          />
        )}
      </div>
      <div className='relative'>
        <input
          value={value}
          type={inputType}
          placeholder={placeholder}
          className={clsx(
            'rounded-[12px] text-[#232325] font-semibold border border-[#D4D5D7] bg-white h-[52px] w-full px-[15px] placeholder:text-[#D4D5D7] placeholder:text-[18px] placeholder:font-medium placeholder:leading-[22px] placeholder:tracking-[-0.5px] focus:outline-none focus:ring-0 focus:border-[#9B16C9] transition-all duration-200',
            inputClassName
          )}
          onChange={onChange}
        />
        {type === 'password' && (
          <Image
            width={24}
            height={24}
            src={passReview}
            alt='Показать пароль'
            onClick={() =>
              setInputType((prev) =>
                prev === 'password' ? 'text' : 'password'
              )
            }
            className='absolute top-[14px] right-[14px] w-[24px] h-[24px]'
          />
        )}
      </div>
    </div>
  )
}
