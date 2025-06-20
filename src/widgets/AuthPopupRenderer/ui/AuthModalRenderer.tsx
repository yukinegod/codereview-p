'use client'

import useAuthModalStore from '@/shared/model/useAuthModalStore'
import AuthModal from '@/widgets/AuthModal/ui/AuthModal'

export const AuthModalRenderer = () => {
  const { isAuthModalOpen } = useAuthModalStore()
  if (!isAuthModalOpen) return null

  return <AuthModal />
}
