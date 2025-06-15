import Image from 'next/image'
import bgShades from '../../../../public/bgShades.svg'
import FooterNavigation from './FooterNavigation'
import Contacts from './Contacts'
import FooterBottom from './FooterBottom'

export default function Footer() {
  return (
    <div className='relative flex flex-col items-center w-screen h-[403px] bg-[#232325] px-[110px] pt-[60px] pb-[20px]select-none shrink-0'>
      <Image
        src={bgShades}
        alt='footer bg'
        className='absolute top-0 left-0 w-full h-[403px] select-none'
      />
      <div className='flex'>
        <FooterNavigation />
        <Contacts />
      </div>
      <FooterBottom />
    </div>
  )
}
