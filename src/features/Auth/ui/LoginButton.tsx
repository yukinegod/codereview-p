import Image from 'next/image'
import profile from '../../../../public/profile.svg'
import styles from './styles.module.css'

export default function LoginButton() {
  return (
    <button
      type='button'
      aria-label='Войти в профиль'
      className='flex items-center gap-[6px] min-w-[77px]'
    >
      <Image src={profile} alt='Иконка профиля' />
      <span className={`text-[18px] ${styles.login}`}>Войти</span>
    </button>
  )
}
