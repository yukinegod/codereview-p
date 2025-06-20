import Image from 'next/image'
import dot from '../../../../public/dot.svg'
import Link from 'next/link'
import styles from './styles.module.css'

export default function PolicyAndOffer() {
  return (
    <nav
      aria-label='Политика и оферта'
      className='flex gap-[10px] max-w-[358px] h-[22px]'
    >
      <Link
        href='/'
        className={`text-[#F6F6F6] text-[18px] ${styles.policyText}`}
        title='Политика конфиденциальности'
      >
        Политика конфиденциальности
      </Link>
      <Image
        width={5}
        height={5}
        src={dot}
        alt=''
        aria-hidden='true'
        className='w-[5px] h-[5px] my-auto'
      />
      <Link
        href='/'
        className={`text-[#F6F6F6] text-[18px] ${styles.policyText}`}
        title='Оферта'
      >
        Оферта
      </Link>
    </nav>
  )
}
