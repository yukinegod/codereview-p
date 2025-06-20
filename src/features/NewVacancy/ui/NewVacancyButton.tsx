'use client'

import { useRouter } from 'next/navigation'
import useAuthStore from '@/entities/User/model/useAuthStore'
import styles from './styles.module.css'

export default function NewVacancyButton() {
  const { user } = useAuthStore()
  const router = useRouter()
  if (user?.is_superuser) {
    return (
      <button
        type='button'
        className={`flex items-center justify-center rounded-[12px] px-[15px] py-3 text-[18px] w-[198px] text-[#232325] font-medium cursor-pointer ${styles.button}`}
        onClick={() => router.push('/vacancies/new')}
      >
        Добавить вакансию
      </button>
    )
  }

  return
}
