import Image from 'next/image'
import arrowLink from '../../../../public/arrowLink.svg'
import yellowArrowLink from '../../../../public/yellowArrowLink.svg'
import avatar from '../../../shared/assets/images/avatar.svg'
import avatarWithoutBg from '../../../shared/assets/images/avatarWithoutBg.svg'
import tryFree from '../../../../public/tryFree.svg'
import tryFreeBlue from '../../../../public/tryFreeBlue.svg'
import yellowGrid from '../../../../public/yellowGrid.svg'
import yellowGrid2 from '../../../../public/yellowGrid2.svg'
import whiteGrid from '../../../../public/whiteGrid.svg'
import sophiCase from '../../../../public/sophiCase.svg'
import sophiCode from '../../../../public/sophiCode.svg'
import sophiCalendar from '../../../../public/sophiCalendar.svg'
import sophiSparkles from '../../../../public/sophiSparkles.svg'
import sophiCaseWhite from '../../../../public/sophiCaseWhite.svg'
import sophiCodeWhite from '../../../../public/sophiCodeWhite.svg'
import sophiCalendarWhite from '../../../../public/sophiCalendarWhite.svg'
import sophiSparklesWhite from '../../../../public/sophiSparklesWhite.svg'
import styles from './styles.module.css'
import Link from 'next/link'

type Props = {
  type:
    | 'vacancy'
    | 'vacanciesSide'
    | 'interviews'
    | 'interviewsSide'
    | 'questions'
}

export default function SophiPromoBlock({ type }: Props) {
  if (type === 'vacancy') {
    return (
      <Link
        href='https://jobs.yourcodereview.com/ai/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center px-[15px] pr-[30px] mt-[30px] h-[65px] gap-[15px] bg-[#ECF0FF] rounded-[12px] select-none'
      >
        <Image
          width={49}
          height={49}
          src={avatar}
          alt='avatar icon'
          className='w-[49px] h-[49px]'
        />
        <p
          className={`flex flex-col w-[520px] h-[40px] text-[#232325] text-[16px] font-medium ${styles.text}`}
        >
          Подключи автоотклики — и пусть Софи работает за тебя 24/7
          <span className='font-bold text-[#0560C9]'>
            Попробовать бесплатно
          </span>
        </p>
        <Image
          width={16}
          height={16}
          src={arrowLink}
          alt='link icon'
          className='w-[16px] h-[16px]'
        />
      </Link>
    )
  } else if (type === 'vacanciesSide') {
    return (
      <Link
        href='https://jobs.yourcodereview.com/ai/'
        target='_blank'
        rel='noopener noreferrer'
        className={`relative flex flex-col w-[300px] h-[245px] rounded-[8px] p-[20px] select-none overflow-hidden ${styles.sophiBlock}`}
      >
        <Image src={yellowGrid} alt='grid' className='absolute top-0 left-0' />
        <Image
          src={sophiCase}
          alt='grid'
          className='absolute top-[2px] left-[70px]'
        />
        <Image
          src={sophiCode}
          alt='grid'
          className='absolute top-[7px] right-[51px]'
        />
        <Image
          src={sophiCalendar}
          alt='grid'
          className='absolute top-[80px] right-[52px]'
        />
        <Image
          src={sophiSparkles}
          alt='grid'
          className='absolute bottom-[60px] left-[71px]'
        />
        <Image
          width={60}
          height={60}
          src={avatar}
          alt='avatar icon'
          className='w-[60px] h-[60px] mb-[15px]'
        />
        <p className='text-[18px] font-bold w-[260px] mb-[50px]'>
          Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту
          Софи
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-[#976E0B] text-[18px] font-bold'>
            Попробовать бесплатно
          </p>
          <Image
            width={16}
            height={16}
            src={tryFree}
            alt='link icon'
            className='w-[16px] h-[16px]'
          />
        </div>
      </Link>
    )
  } else if (type === 'interviews') {
    return (
      <Link
        href='https://jobs.yourcodereview.com/ai/'
        target='_blank'
        rel='noopener noreferrer'
        className={`flex items-center justify-between p-[15px] pr-[20px] mt-[20px] h-[65px] gap-[15px] rounded-[8px] select-none ${styles.sophiInterviews}`}
      >
        <Image
          width={47}
          height={47}
          src={avatarWithoutBg}
          alt='avatar icon'
          className='w-[47px] h-[47px]'
        />
        <p
          className={`flex flex-col w-[542px] h-[40px] text-[#232325] text-[16px] font-medium ${styles.text}`}
        >
          Софи собрала все вопросы — тренируйся и получай офферы быстрее!
          <span className='font-bold text-[#0560C9]'>
            Попробовать бесплатно
          </span>
        </p>
        <Image
          width={16}
          height={16}
          src={arrowLink}
          alt='link icon'
          className='w-[16px] h-[16px]'
        />
      </Link>
    )
  } else if (type === 'interviewsSide') {
    return (
      <Link
        href='https://jobs.yourcodereview.com/ai/'
        target='_blank'
        rel='noopener noreferrer'
        className={`relative flex flex-col w-[300px] h-[245px] rounded-[8px] p-[20px] select-none overflow-hidden ${styles.sophiInterviewsSide}`}
      >
        <Image src={whiteGrid} alt='grid' className='absolute top-0 left-0' />
        <Image
          src={sophiCaseWhite}
          alt='grid'
          className='absolute top-[2px] left-[70px]'
        />
        <Image
          src={sophiCodeWhite}
          alt='grid'
          className='absolute top-[7px] right-[51px]'
        />
        <Image
          src={sophiCalendarWhite}
          alt='grid'
          className='absolute top-[80px] right-[52px]'
        />
        <Image
          src={sophiSparklesWhite}
          alt='grid'
          className='absolute bottom-[60px] left-[71px]'
        />
        <Image
          width={60}
          height={60}
          src={avatarWithoutBg}
          alt='avatar icon'
          className='w-[60px] h-[60px] mb-[15px] z-10'
        />
        <p className='text-[18px] font-semibold w-[244px] mb-[50px] z-10'>
          Софи собрала все вопросы. Тренируйся и получай офферы быстрее!
        </p>
        <div className='flex justify-between items-end z-10'>
          <p className={`text-[#0560C9] text-[18px] font-bold ${styles.text}`}>
            Попробовать бесплатно
          </p>
          <Image
            width={16}
            height={16}
            src={tryFreeBlue}
            alt='link icon'
            className='w-[16px] h-[16px]'
          />
        </div>
      </Link>
    )
  } else if (type === 'questions') {
    return (
      <Link
        href='https://jobs.yourcodereview.com/ai/'
        target='_blank'
        rel='noopener noreferrer'
        className={`relative flex items-center justify-between pl-[29px] pr-[32px] h-[80px] gap-[15px] rounded-[8px] select-none bg-[#FDF6E2] overflow-hidden`}
      >
        <Image src={yellowGrid2} alt='grid icon' className='absolute right-0' />
        <Image
          src={sophiCode}
          alt='code icon'
          className='absolute left-[403px] bottom-[7px]'
        />
        <Image
          src={sophiCalendar}
          alt='calendar icon'
          className='absolute left-[602px] top-[10px]'
        />
        <Image
          src={sophiCase}
          alt='case icon'
          className='absolute left-[801px] bottom-[7px]'
        />
        <p
          className={`flex flex-col w-[542px] h-[40px] text-[#232325] text-[16px] font-bold leading-[20px] tracking-[-0.5px]`}
        >
          Софи собрала все вопросы — тренируйся и получай офферы быстрее!
          <span className='text-[#8E521E]'>Попробовать бесплатно</span>
        </p>
        <Image
          width={16}
          height={16}
          src={yellowArrowLink}
          alt='link icon'
          className='w-[16px] h-[16px]'
        />
      </Link>
    )
  }
}
