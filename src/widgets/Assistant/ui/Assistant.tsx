import Image from 'next/image'
import avatar from '../../../shared/assets/images/avatar.png'
import styles from './styles.module.css'

export default function Assistant() {
  return (
    <section
      aria-labelledby='assistant-title'
      className='flex flex-col items-center justify-center gap-[20px] w-[436px] h-[295px] mt-[156px] z-10'
    >
      <Image src={avatar} alt='Аватар ассистента' className='select-none' />
      <h1 id='assistant-title' className={styles.title}>
        Твой Ассистент по поиску работы
      </h1>
      <p className={`text-[#414246] max-w-[417px] ${styles.subtitle}`}>
        Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу
      </p>
    </section>
  )
}
