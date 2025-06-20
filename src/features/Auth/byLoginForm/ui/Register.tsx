'use client'

import useAuthModalStore from '@/shared/model/useAuthModalStore'

export default function Register() {
  const { setModalType } = useAuthModalStore()

  return (
    <p
      className='text-[#636469] text-[18px] font-medium leading-[22px] tracking-[-0.5px] mx-auto'
      onClick={() => setModalType('register')}
    >
      Ещё нет аккаунта?{' '}
      <button className='text-[#0560C9] cursor-pointer'>Регистрация</button>
    </p>
  )
}
