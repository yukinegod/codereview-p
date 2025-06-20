'use client'

import Image from 'next/image'
import useAuthModalStore from '@/shared/model/useAuthModalStore'
import useAuthStore from '@/entities/User/model/useAuthStore'
import profile from '../../../../public/profile.svg'
import styles from './styles.module.css'

export default function LoginButton() {
  const { setAuthModalStatus, setModalType } = useAuthModalStore()
  const { isAuth, logout } = useAuthStore()

  return (
    <button
      type='button'
      aria-label='Войти в профиль'
      onClick={() => {
        isAuth ? logout() : setModalType('login'), setAuthModalStatus()
      }}
      className='flex items-center gap-[6px] min-w-[77px] cursor-pointer'
    >
      <Image src={profile} alt='Иконка профиля' />
      <span className={`text-[18px] ${styles.login}`}>
        {isAuth ? 'Выйти' : 'Войти'}
      </span>
    </button>
  )
}
