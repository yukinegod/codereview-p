import Image from 'next/image'
import profile from '../../../../public/profile.svg'
import styles from './styles.module.css'

export default function LoginButton() {
  return (
    <div className='flex items-center gap-[6px] min-w-[77px]'>
      <Image src={profile} alt='login image' />
      <p className={`text-[18px] ${styles.login}`}>Войти</p>
    </div>
  )
}
