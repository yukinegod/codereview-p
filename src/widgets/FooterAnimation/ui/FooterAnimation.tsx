import Image from 'next/image'
import duck from '../../../../public/duck.svg'
import styles from './styles.module.css'

const messages = [
  'Этим сайтом пользуется больше 30.000 человек каждый месяц',
  'Сайт был сделан джунами с нашего карьерного трека',
  'Этим сайтом пользуется больше 30.000 человек каждый месяц',
  'Сайт был сделан джунами с нашего карьерного трека',
]

export default function FooterAnimation() {
  return (
    <section
      role='region'
      aria-label='Новости сайта'
      className={`relative flex items-center overflow-hidden w-screen min-h-[40px] z-30 mb-[60px] ${styles.footerAnimation}`}
    >
      <div
        className={`absolute flex gap-2 animate-marquee ${styles.marqueeInner}`}
      >
        {[...messages, ...messages].map((text, index) => (
          <div key={index} className='flex items-center gap-2 shrink-0'>
            <Image
              width={18}
              height={18}
              src={duck}
              alt='Утка — анимационная иконка новости'
              className='w-[18px] h-[18px]'
            />
            <p className='text-[16px] font-medium whitespace-nowrap'>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
