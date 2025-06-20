import Image from 'next/image'
import tg from '../.././../shared/assets/images/tg.svg'

export default function TgAuthButton() {
  return (
    <button
      type='button'
      className='flex items-center justify-center px-[12px] py-[13px] rounded-[12px] gap-2 cursor-pointer transition-all duration-200 bg-[#F0F1F1] hover:bg-[#D4D5D7]'
    >
      <Image src={tg} alt='Телеграм лого' />
      <p className='text-[#232325] text-[18px] font-medium leading-[20px] tracking-[-0.5px]'>
        Войти через Telegram
      </p>
    </button>
  )
}
