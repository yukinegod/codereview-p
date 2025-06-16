import Link from 'next/link'
import getFirstTag from '@/shared/utils/getFirstTag'
import styles from './styles.module.css'

type Props = {
  question: string
  stack: string
  frequency: string | number
  id: number
}

export default function QuestionItem({
  question,
  stack,
  frequency,
  id,
}: Props) {
  return (
    <Link href={`interviews/${id}`} className='flex flex-col p-[15px] h-[76px]'>
      <p
        className={`text-black text-[18px] font-bold max-w-[990px] whitespace-nowrap overflow-hidden truncate cursor-pointer ${styles.question}`}
      >
        {question}
      </p>
      <p className={`text-[#636469] text-[18px] font-semibold ${styles.stack}`}>
        {getFirstTag(stack)}
        <span className='text-[#ACAEB2] mx-[7px]'>•</span>
        {frequency} упоминаний
      </p>
    </Link>
  )
}
