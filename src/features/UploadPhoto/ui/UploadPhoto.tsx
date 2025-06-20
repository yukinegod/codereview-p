'use client'

import Image from 'next/image'
import upload from '../../../shared/assets/images/upload.svg'

export default function UploadPhoto() {
  return (
    <label className='w-[52px] h-[52px] border border-dashed border-[#ACAEB2] flex items-center justify-center cursor-pointer rounded-[6px] shrink-0'>
      <input type='file' className='hidden' />
      <Image src={upload} alt='upload icon' className='w-[24px] h-[24px]' />
    </label>
  )
}
