import Link from 'next/link'
import styles from './styles.module.css'

export default function AnswerButton() {
  return (
    <Link
      href='/'
      className={`flex justify-center text-[#232325] text-[18px] mt-[5px] font-medium py-[13px] px-[12px] gap-2 rounded-[12px] select-none bg-[#F0F1F1] hover:bg-[#D4D5D7] ${styles.button}`}
    >
      Откликнуться
    </Link>
  )
}
