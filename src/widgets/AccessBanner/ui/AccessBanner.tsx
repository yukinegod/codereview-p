'use client'

import useAuthModalStore from '@/shared/model/useAuthModalStore'
import useAuthStore from '@/entities/User/model/useAuthStore'
import styles from './styles.module.css'

type Props = {
  type: 'vacancies' | 'interviews'
}

export default function AccessBanner({ type }: Props) {
  const { isAuth } = useAuthStore()
  const { setAuthModalStatus, setModalType } = useAuthModalStore()

  const openAuthModal = () => {
    setModalType('register')
    setAuthModalStatus()
  }

  if (isAuth) return

  return (
    <div
      className={`absolute bottom-0 w-full h-[320px] flex flex-col items-center shrink-0 pt-[129px] z-[50] ${styles.banner}`}
    >
      <p className='text-[#232325] text-[22px] font-bold leading-[26px] tracking-[-0.5px] mb-[10px]'>
        {type === 'vacancies'
          ? 'Получите доступ к 1200 вакансиям и стажировкам'
          : 'Получите доступ к 10000+ вопросам с собеседований'}
      </p>
      <p className='text-[#86888E] text-[18px] font-medium leading-[22px] tracking-[-0.5px] w-[626px] mb-[25px] text-center'>
        Сервис можно использовать бесплатно, без ограничений. Чтобы получить
        полный доступ, вам необходимо зарегистрироваться.
      </p>
      <button
        onClick={openAuthModal}
        className={`text-white text-[18px] rounded-[18px] font-medium leading-[22px] tracking-[-0.5px] w-[214px] h-[56px] cursor-pointer ${styles.button}`}
      >
        Зарегистрироваться
      </button>
    </div>
  )
}
