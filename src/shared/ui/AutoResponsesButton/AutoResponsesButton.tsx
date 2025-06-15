import Link from 'next/link'
import styles from './styles.module.css'

export default function AutoResponsesButton() {
  return (
    <Link
      href='/'
      className={`flex items-center py-[18px] px-[20px] rounded-[18px] text-white text-[18px] font-medium select-none ${styles.button}`}
    >
      Автоотклики
    </Link>
  )
}
