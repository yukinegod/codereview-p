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
  const firstTag = getFirstTag(stack)

  return (
    <article
      className='flex flex-col p-[15px] h-[76px] z-10 hover:bg-gray-50 rounded-lg transition-colors'
      itemScope
      itemProp='itemListElement'
    >
      <Link href={`interviews/${id}`} className='block'>
        <h3
          className={`text-black text-[18px] font-bold max-w-[990px] whitespace-nowrap overflow-hidden truncate cursor-pointer ${styles.question}`}
          itemProp='name'
        >
          {question}
        </h3>
        <div
          className={`text-[#636469] text-[18px] font-semibold ${styles.stack}`}
          itemProp='keywords'
        >
          <span itemProp='about'>{firstTag}</span>
          <span className='text-[#ACAEB2] mx-[7px]' aria-hidden='true'>
            •
          </span>
          <span>{frequency} упоминаний</span>
        </div>
      </Link>
    </article>
  )
}
