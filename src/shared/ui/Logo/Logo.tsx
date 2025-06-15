import Link from 'next/link'
import styles from './styles.module.css'
import { TopMenuType } from '@/shared/types/types'

type Props = {
  type: TopMenuType
}

export default function Logo({ type = 'main' }: Props) {
  return (
    <Link href='/'>
      <p
        className={`text-[22px] font-semibold flex items-center h-full tracking-[-1px] w-[149px] ${
          type === 'main' ? styles.gradient : 'text-[#636469]'
        }`}
      >
        {'<'}
        <span className='font-normal'>code</span>
        {'review/>'}
      </p>
    </Link>
  )
}
