import Image from 'next/image'
import copyright from '../../../../public/copyright.svg'
import styles from './styles.module.css'

export default function Copyright() {
  return (
    <div className='flex gap-[10px] h-[22px] select-none'>
      <Image src={copyright} alt='copyright icon' />
      <p className={`text-[#F0F1F1] text-[16px] ${styles.copyrightText}`}>
        junior for juniors
      </p>
    </div>
  )
}
