'use client'

import { motion } from 'framer-motion'
import PostVacancies from '@/features/Vacancy/ui/PostVacancies'
import Avatars from '@/entities/Avatars/ui/Avatars'
import Image from 'next/image'
import useRecruitmentHoverStore from '@/shared/model/useRecruitmentHoverStore'
import bgShades from '../../../../public/bgShades.svg'
import styles from './styles.module.css'

export default function RecruitmentSection() {
  const { isHovered, setHovered } = useRecruitmentHoverStore()

  return (
    <section
      aria-labelledby='recruitment-title'
      className='flex gap-2 items-center mt-2 min-w-[1020px] min-h-[157px] mb-[100px] cursor-pointer'
    >
      <motion.div
        className='relative flex h-[157px] rounded-[6px] overflow-hidden'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className='absolute z-0 top-0 left-0 pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={bgShades}
            alt=''
            aria-hidden='true'
            width={1031}
            height={357}
          />
        </motion.div>

        <div className='relative z-10 min-w-[763px] h-full flex flex-col justify-between p-[20px] gap-[25px]'>
          <h2 id='recruitment-title' className='sr-only'>
            Раздел найма и резюме
          </h2>
          <Avatars />
          <h3
            className={`max-w-[476px] max-h-[52px] text-[24px] font-semibold ${styles.text}`}
          >
            База резюме соискателей. Свяжитесь с понравившимся кандидатами
            напрямую
          </h3>
        </div>
      </motion.div>

      <PostVacancies />
    </section>
  )
}
