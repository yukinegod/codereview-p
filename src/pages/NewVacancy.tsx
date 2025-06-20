'use client'

import AddVacancyButton from '@/features/NewVacancy/ui/AddVacancyButton'
import UploadPhoto from '@/features/UploadPhoto/ui/UploadPhoto'
import Checkbox from '@/shared/ui/Checkbox/ui/Checkbox'
import Input from '@/shared/ui/Input/ui/Input'
import Footer from '@/widgets/Footer/ui/Footer'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'
import useAuthStore from '@/entities/User/model/useAuthStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NewVacancy() {
  const { user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!user || !user.is_superuser) {
      router.push('/')
    }
  }, [user, router])

  if (!user || !user.is_superuser) {
    return null
  }

  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] overflow-x-hidden'>
      <TopMenu type='arrow' />
      <div className='flex flex-col w-[560px] mt-[141px]'>
        <p className=' text-black font-bold text-[26px] leading-[30px] tracking-[-0.5px] w-[541px] mb-[25px]'>
          Разместить вакансию
        </p>
        <Input
          label='Заголовок вакансии'
          placeholder='Avito.Tech'
          type='text'
          isRequired
        />
        <div className='flex flex-col gap-2 my-[20px]'>
          <p className='text-[#232325] text-[16px] font-medium leading-[20px] tracking-[-0.5px]'>
            Описание вакансии
          </p>
          <textarea
            name='w'
            id='1'
            className='p-[15px] rounded-[12px] bg-white border border-[#D4D5D7] h-[415px] text-[#232325] font-semibold resize-none focus:outline-none focus:ring-0 focus:border-[#9B16C9] transition-all duration-200 leading-[22px] tracking-[-0.5px]'
          />
        </div>

        <Input
          label='Зарплата'
          placeholder='от 40 000 ₽'
          type='number'
          className='mb-[20px]'
        />
        <Checkbox text='Стажировка' className='mb-4' />
        <Checkbox text='Удаленно' className='mb-[40px]' />
        <Input
          label='Город'
          placeholder='Красноярск'
          type='text'
          className='mb-[16px]'
        />
        <div className='flex items-end justify-between gap-[10px]'>
          <Input
            label='Компания'
            placeholder='Bell Integrator'
            type='text'
            className='w-full'
          />
          <UploadPhoto />
        </div>
        <div className='flex justify-between gap-[15px] mt-5 mb-[30px]'>
          <Input
            label='Telegram'
            placeholder='bsodpacific'
            type='text'
            className='w-[270px]'
          />
          <Input
            label='Почта'
            placeholder='recrut@avito.com'
            type='email'
            className='w-[270px]'
          />
        </div>
        <AddVacancyButton />
      </div>
      <Footer />
    </div>
  )
}
