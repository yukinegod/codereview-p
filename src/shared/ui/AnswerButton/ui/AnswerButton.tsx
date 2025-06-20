'use client'

import Link from 'next/link'
import useAuthStore from '@/entities/User/model/useAuthStore'
import useAuthModalStore from '@/shared/model/useAuthModalStore'
import styles from './styles.module.css'

type Props = {
  url: string
}

export default function AnswerButton({ url }: Props) {
  const { setAuthModalStatus, setModalType } = useAuthModalStore()
  const { isAuth } = useAuthStore()

  if (isAuth) {
    return (
      <Link
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={`flex justify-center text-[#232325] text-[18px] mt-[5px] font-medium py-[13px] px-[12px] gap-2 rounded-[12px] select-none cursor-pointer bg-[#F0F1F1] hover:bg-[#D4D5D7] ${styles.button}`}
      >
        Откликнуться
      </Link>
    )
  }

  return (
    <button
      type='button'
      onClick={() => {
        setModalType('register')
        setAuthModalStatus()
      }}
      className={`flex justify-center text-[#232325] text-[18px] mt-[5px] font-medium py-[13px] px-[12px] gap-2 rounded-[12px] select-none cursor-pointer bg-[#F0F1F1] hover:bg-[#D4D5D7] ${styles.button}`}
    >
      Откликнуться
    </button>
  )
}
