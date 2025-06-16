import Link from 'next/link'
import { TopMenuType } from '@/shared/types/types'
import styles from './styles.module.css'

type Props = {
  type: TopMenuType
}

export default function Logo({ type = 'main' }: Props) {
  return (
    <Link
      href='/'
      aria-label='На главную страницу CodeReview'
      title='Перейти на главную'
      rel='home'
    >
      <strong
        className={`text-[22px] font-semibold flex items-center h-full tracking-[-1px] w-[149px] ${
          type === 'main' ? styles.gradient : 'text-[#636469]'
        }`}
      >
        {'<'}
        <span className='font-normal'>code</span>
        {'review/>'}
      </strong>
    </Link>
  )
}
