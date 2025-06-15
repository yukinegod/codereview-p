import Image from 'next/image'
import arrowRight from '../../../../public/arrowRight.svg'
import styles from './styles.module.css'
import Link from 'next/link'

type Props = {
  currentQuestionId: number
}

export default function NextQuestionButton({ currentQuestionId }: Props) {
  return (
    <Link
      href={`/interviews/${currentQuestionId + 1}`}
      className='flex flex-col w-[300px] h-[208px] shrink-0 p-5'
    >
      <div className='flex items-center gap-[15px]'>
        <p
          className={`text-[#636469] text-[18px] font-medium w-[229px] ${styles.text}`}
        >
          Следующий вопрос
        </p>
        <Image
          width={16}
          height={16}
          src={arrowRight}
          alt='next icon'
          className='w-[16px] h-[16px]'
        />
      </div>
      <p
        className={`text-[#232325] text-[18px] font-semibold mt-[30px] ${styles.text}`}
      >
        Какие знаете шаблоны проектирования? Расскажите о двух шаблонах,
        используемых в работе.
      </p>
      <p
        className={`text-[#86888e] text-[16px] font-medium mt-2 ${styles.text2}`}
      >
        Java<span className='mx-[7px]'>•</span>1050 упоминаний
      </p>
    </Link>
  )
}
