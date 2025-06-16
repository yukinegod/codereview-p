import Link from 'next/link'
import styles from './styles.module.css'

export default function TestBlock() {
  return (
    <article
      role='link'
      aria-label='Пройти тест на зарплатные ожидания'
      className='flex flex-col justify-between w-[156px] h-[156px] bg-[#232325] rounded-[8px] p-[15px] select-none'
    >
      <Link
        href='/'
        className='flex flex-col justify-between h-full'
        title='На какую зарплату я могу претендовать?'
      >
        <p className={`text-[16px] text-[#F6F6F6] font-medium ${styles.text}`}>
          На какую зарплату я могу претендовать?
        </p>
        <p className={`text-[16px] text-[#86888E] ${styles.testText}`}>
          Пройти тест
        </p>
      </Link>
    </article>
  )
}
