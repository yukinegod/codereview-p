import Image from 'next/image'
import dot from '../../../../public/dot.svg'
import Link from 'next/link'
import styles from './styles.module.css'

export default function PolicyAndOffer() {
  return (
    <div className='flex gap-[10px] max-w-[358px] h-[22px]'>
      <Link
        href='/'
        className={`text-[#F6F6F6] text-[18px] ${styles.policyText}`}
      >
        Политика конфиденциальности
      </Link>
      <Image src={dot} alt='dot image' />
      <Link
        href='/'
        className={`text-[#F6F6F6] text-[18px] ${styles.policyText}`}
      >
        Оферта
      </Link>
    </div>
  )
}
