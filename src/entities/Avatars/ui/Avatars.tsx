'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import useRecruitmentHoverStore from '@/shared/model/useRecruitmentHoverStore'
import avatar1 from '../../../../public/avatar1.svg'
import avatar2 from '../../../../public/avatar2.svg'
import avatar3 from '../../../../public/avatar3.svg'
import count from '../../../../public/count.svg'

export default function Avatars() {
  const { isHovered } = useRecruitmentHoverStore()

  return (
    <motion.div
      className='flex items-center max-w-[115px] max-h-[40px] select-none'
      initial={{ y: 0 }}
      animate={{ y: isHovered ? 5 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        width={40}
        height={40}
        src={avatar1}
        alt='avatar'
        className='rounded-full border-2 border-white'
      />
      <Image
        width={40}
        height={40}
        src={avatar2}
        alt='avatar'
        className='-ml-4 rounded-full border-2 border-white'
      />
      <Image
        width={40}
        height={40}
        src={avatar3}
        alt='avatar'
        className='-ml-4 rounded-full border-2 border-white'
      />
      <Image
        width={40}
        height={40}
        src={count}
        alt='count'
        className='-ml-4 rounded-full border-2 border-white'
      />
    </motion.div>
  )
}
