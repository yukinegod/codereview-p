'use client'

import Image from 'next/image'
import useAuthModalStore from '@/shared/model/useAuthModalStore'
import close from '../../../../public/close.svg'

export default function CloseModal() {
  const { setAuthModalStatus } = useAuthModalStore()

  return (
    <button
      type='button'
      onClick={setAuthModalStatus}
      className='ml-[10px] mt-[5px] w-[28px] h-[28px] rounded-full bg-white cursor-pointer select-none'
    >
      <Image
        width={14}
        height={14}
        src={close}
        alt='Закрыть попап'
        className='m-auto'
      />
    </button>
  )
}
