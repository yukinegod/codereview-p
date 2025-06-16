import Link from 'next/link'
import styles from './styles.module.css'

export default function OfferButton() {
  return (
    <Link
      href='https://jobs.yourcodereview.com/ai/'
      target='_blank'
      rel='noopener noreferrer'
      className={`flex justify-center text-[#232325] text-[18px] mt-[15px] font-medium py-[12px] px-[15px] gap-2 rounded-[12px] select-none ${styles.button}`}
    >
      Получить оффер
    </Link>
  )
}
