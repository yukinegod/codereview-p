import Image from 'next/image'
import bgShades from '../../../../public/bgShades.svg'
import FooterNavigation from './FooterNavigation'
import Contacts from './Contacts'
import FooterBottom from './FooterBottom'
import FooterAnimation from '@/widgets/FooterAnimation/ui/FooterAnimation'

export default function Footer() {
  return (
    <footer
      role='contentinfo'
      aria-labelledby='footer-heading'
      className='relative flex flex-col items-center w-screen h-[443px] bg-[#232325] px-[110px] pb-[20px] select-none shrink-0 mt-auto'
    >
      <h2 id='footer-heading' className='sr-only'>
        Футер сайта
      </h2>

      <FooterAnimation />

      <Image
        src={bgShades}
        alt=''
        aria-hidden='true'
        className='absolute top-[40px] left-0 w-full h-[403px] select-none'
      />

      <div className='flex'>
        <FooterNavigation />
        <Contacts />
      </div>

      <FooterBottom />
    </footer>
  )
}
