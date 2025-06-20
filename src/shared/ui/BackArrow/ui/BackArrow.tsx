import Image from 'next/image'
import arrowLeft from '../../../../../public/arrowLeft.svg'
import Link from 'next/link'
import styles from './styles.module.css'

type Props = {
  href?: string
}

export default function BackArrow({ href = '/' }: Props) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-[64px] h-[56px] rounded-[18px] select-none ${styles.backArrow}`}
    >
      <Image src={arrowLeft} alt='back icon' />
    </Link>
  )
}
