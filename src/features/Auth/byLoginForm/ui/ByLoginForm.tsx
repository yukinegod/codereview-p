'use client'

import { useState, useCallback } from 'react'
import Input from '@/shared/ui/Input/ui/Input'
import Button from '@/shared/ui/Button/ui/Button'
import useAuthModalStore from '@/shared/model/useAuthModalStore'
import RememberPasswordButton from '../../RememberPasswordButton/ui/RememberPasswordButton'
import TgAuthButton from '../../ui/TgAuthButton'
import HhAuthButton from '../../ui/HhAuthButton'
import Register from './Register'
import { useLogin } from '../model/useLogin'

export default function ByLoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [inputErrors, setInputErrors] = useState({
    username: false,
    password: false,
  })

  const { login, loading, error, setError } = useLogin()
  const { setAuthModalStatus } = useAuthModalStore()

  const handleLogin = useCallback(async () => {
    const isUsernameEmpty = !username.trim()
    const isPasswordEmpty = !password.trim()

    if (isUsernameEmpty || isPasswordEmpty) {
      setInputErrors({ username: isUsernameEmpty, password: isPasswordEmpty })
      setError('Заполните все поля')
      return
    }

    try {
      await login(username, password)
      setAuthModalStatus()
    } catch {
      setUsername('')
      setPassword('')
      setInputErrors({ username: true, password: true })
    }
  }, [username, password])

  const clearErrors = () => {
    error && setError('')
    inputErrors && setInputErrors({ username: false, password: false })
  }

  return (
    <div className='flex flex-col px-[30px]'>
      <div className='flex flex-col gap-2 mb-[15px]'>
        <TgAuthButton />
        <HhAuthButton />
      </div>

      <div className='flex items-center gap-2 h-[20px] mb-[15px]'>
        <div className='w-[157px] h-[1px] bg-[#F5F5F5]' />
        <p className='text-[#636469] text-[16px] font-medium'>или</p>
        <div className='w-[157px] h-[1px] bg-[#F5F5F5]' />
      </div>

      <Input
        label='Почта'
        type='email'
        placeholder='example@mail.ru'
        value={username}
        onChange={(e) => {
          clearErrors()
          setUsername(e.target.value)
        }}
        inputClassName={inputErrors.username ? 'border-red-500' : ''}
        className='mb-[15px]'
      />

      <Input
        label='Пароль'
        type='password'
        placeholder='****'
        value={password}
        onChange={(e) => {
          clearErrors()
          setPassword(e.target.value)
        }}
        inputClassName={inputErrors.password ? 'border-red-500' : ''}
        className='mb-[10px]'
      />

      {error && <p className='text-red-500 text-sm mb-[10px]'>{error}</p>}

      <RememberPasswordButton />
      <Button
        text='Войти'
        className='mb-[15px]'
        onClick={handleLogin}
        disabled={loading}
      />
      <Register />
    </div>
  )
}
