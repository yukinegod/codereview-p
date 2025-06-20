'use client'

import useAuthModalStore from '@/shared/model/useAuthModalStore'
import ByLoginForm from '@/features/Auth/byLoginForm/ui/ByLoginForm'
import ByRegisterForm from '@/features/Auth/byRegisterForm/ui/byRegisterForm'
import SubscribeToChannelsForm from '@/features/Auth/SubscribeToChannelsForm/ui/SubscribeToChannelsForm'
import SuccessForm from '@/features/Auth/SuccessForm/ui/SuccessForm'

export default function FormRenderer() {
  const { modalType } = useAuthModalStore()

  if (modalType === 'login') {
    return <ByLoginForm />
  } else if (modalType === 'register') {
    return <ByRegisterForm />
  } else if (modalType === 'subscribe') {
    return <SubscribeToChannelsForm />
  } else if (modalType === 'success') {
    return <SuccessForm />
  }
}
