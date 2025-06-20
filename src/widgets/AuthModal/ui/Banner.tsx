'use client'

import Image from 'next/image'
import useAuthModalStore from '@/shared/model/useAuthModalStore'
import sophiBanner from '../../../../public/sophiBanner.svg'
import purpleGrid from '../../../../public/purpleGrid.svg'
import heartSm from '../../../shared/assets/images/heartSm.svg'
import heartMd from '../../../shared/assets/images/heartMd.svg'
import heartLg from '../../../shared/assets/images/heartLg.svg'
import { bannerImages } from '@/shared/config/bannerImages.config'
import styles from './styles.module.css'
import ImageLabel from './ImageLabel'
import clsx from 'clsx'

export default function Banner() {
  const { modalType } = useAuthModalStore()

  if (modalType === 'login') {
    return (
      <div className='flex flex-col items-center w-[380px] h-[522px] py-[30px] bg-[#F5F5F5] rounded-tl-[24px] rounded-bl-[24px]'>
        <p
          className={`text-[22px] font-medium text-center mb-[40px] w-[265px] ${styles.title}`}
        >
          Вы готовы к большему. Мы поможем начать.
        </p>
        <Image
          width={276}
          height={286}
          src={sophiBanner}
          alt='Аватар'
          className='w-[276px] h-[286px] mb-[62px]'
        />
        <p className={`text-[#636469] text-[22px] mt-auto ${styles.logo}`}>
          {`<`}code<span className='font-semibold'>review</span>
          {`/>`}
        </p>
      </div>
    )
  } else if (modalType === 'register') {
    return (
      <div className='flex flex-col items-center w-[380px] h-[682px] py-[30px] bg-[#F5F5F5] rounded-tl-[24px] rounded-bl-[24px]'>
        <p
          className={`text-[22px] font-medium text-center mb-[40px] w-[265px] ${styles.title}`}
        >
          Вы готовы к большему. Мы поможем начать.
        </p>
        <Image
          width={276}
          height={286}
          src={sophiBanner}
          alt='Аватар'
          className='w-[276px] h-[286px]'
        />
        <p className={`text-[#636469] text-[22px] mt-auto ${styles.logo}`}>
          {`<`}code<span className='font-semibold'>review</span>
          {`/>`}
        </p>
      </div>
    )
  } else if (modalType === 'subscribe') {
    return (
      <div className='relative flex flex-col items-center w-[380px] h-[532px] bg-[#F5F5F5] rounded-tl-[24px] rounded-bl-[24px] shrink-0 overflow-hidden'>
        <Image src={purpleGrid} alt='Сетка' className='absolute' />
        {bannerImages.map(
          ({ src, alt, imagePosition, label, rotate, labelPosition }) => (
            <div key={label}>
              <Image
                src={src}
                alt={alt}
                className={clsx('absolute', imagePosition)}
              />
              <ImageLabel
                label={label}
                rotate={rotate}
                position={labelPosition}
              />
            </div>
          )
        )}
      </div>
    )
  } else if (modalType === 'success') {
    return (
      <div className='relative flex flex-col items-center justify-end w-[380px] h-[532px] py-[30px] bg-[#F5F5F5] rounded-tl-[24px] rounded-bl-[24px] shrink-0'>
        <Image
          width={276}
          height={286}
          src={sophiBanner}
          alt='Аватар'
          className='w-[276px] h-[286px]'
        />
        <Image
          src={heartSm}
          alt='Сердце'
          className='absolute top-[105px] left-[218px]'
        />
        <Image
          src={heartMd}
          alt='Сердце'
          className='absolute top-[87px] left-[248px]'
        />
        <Image
          src={heartLg}
          alt='Сердце'
          className='absolute top-[41px] left-[217px]'
        />
        <p className={`text-[#636469] text-[22px] mt-[72px] ${styles.logo}`}>
          {`<`}code<span className='font-semibold'>review</span>
          {`/>`}
        </p>
      </div>
    )
  }
}
