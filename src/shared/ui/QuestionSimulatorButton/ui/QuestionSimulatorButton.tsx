import Link from 'next/link'
import styles from './styles.module.css'

export default function QuestionSimulatorButton() {
  return (
    <Link
      href='/'
      className={`flex items-center py-[18px] px-[20px] rounded-[18px] text-white text-[18px] font-medium select-none ${styles.button}`}
    >
      Тренажер вопросов
    </Link>
  )
}
