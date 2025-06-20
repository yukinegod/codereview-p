import Image from 'next/image'
import hh from '../.././../shared/assets/images/hh.svg'

export default function HhAuthButton() {
  return (
    <button
      type='button'
      className='flex items-center justify-center px-[12px] py-[13px] rounded-[12px] gap-2 cursor-pointer transition-all duration-200 bg-[#F0F1F1] hover:bg-[#D4D5D7]'
    >
      <Image src={hh} alt='Хедхантер лого' />
      <p className='text-[#232325] text-[18px] font-medium leading-[20px] tracking-[-0.5px]'>
        Войти через HH.ru
      </p>
    </button>
  )
}
