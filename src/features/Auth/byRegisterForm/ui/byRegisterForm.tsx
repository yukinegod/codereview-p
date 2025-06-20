'use client'

import Input from '@/shared/ui/Input/ui/Input'
import Button from '@/shared/ui/Button/ui/Button'
import Login from './Login'
import TgAuthButton from '../../ui/TgAuthButton'
import HhAuthButton from '../../ui/HhAuthButton'

export default function ByRegisterForm() {
  return (
    <div className='flex flex-col p-[30px]'>
      <div className='flex flex-col mb-[15px] gap-2'>
        <TgAuthButton />
        <HhAuthButton />
      </div>
      <div className='flex items-center gap-2 mb-[15px] h-[20px]'>
        <div className='w-[157px] h-[1px] bg-[#F5F5F5]' />
        <p className={`text-[#636469] text-[16px] font-medium`}>или</p>
        <div className='w-[157px] h-[1px] bg-[#F5F5F5]' />
      </div>
      <Input
        label='Имя'
        type='text'
        placeholder='example@mail.ru'
        className='mb-[15px]'
      />
      <Input
        label='Почта'
        type='email'
        placeholder='example@mail.ru'
        className='mb-[15px]'
      />
      <Input
        label='Пароль'
        type='password'
        placeholder='example@mail.ru'
        className='mb-[15px]'
      />
      <Input
        label='Ещё раз пароль'
        type='password'
        placeholder='****'
        className='mb-[20px]'
      />
      <Button text='Войти' className='mb-[15px]' />
      <Login />
    </div>
  )
}
