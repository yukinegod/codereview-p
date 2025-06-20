'use client'

import useAuthModalStore from '@/shared/model/useAuthModalStore'
import Button from '@/shared/ui/Button/ui/Button'

export default function SuccessForm() {
  const { setAuthModalStatus } = useAuthModalStore()

  return (
    <div className='flex flex-col p-[30px] h-[532px]'>
      <p className='text-black text-[24px] font-bold leading-[28px] tracking-[-1px] mb-[20px]'>
        Спасибо за подписки!
      </p>
      <p className='text-[#232325] text-[18px] leading-[22px] tracking-[-0.5px] mb-auto'>
        Доступ к платформе полностью открыт и будет всегда доступен для твоего
        аккаунта.
        <br />
        <br />
        Желаем тебе быстрого поиска работы 🩵
      </p>
      <Button text='Ура, спасибо :)' onClick={setAuthModalStatus} />
    </div>
  )
}
