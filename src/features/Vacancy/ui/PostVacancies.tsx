'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import bgShades from '../../../../public/bgShades.svg'
import styles from './styles.module.css'

export default function PostVacancies() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='relative w-[249px] h-[157px] rounded-[6px] overflow-hidden'
      aria-label='Блок размещения вакансии'
    >
      <motion.div
        className='absolute inset-0 z-50 pointer-events-none'
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={bgShades}
          alt=''
          aria-hidden='true'
          fill
          className='object-cover object-center'
        />
      </motion.div>

      <Link
        href='/'
        className='relative z-10 flex flex-col justify-between w-full h-full bg-[#414246] rounded-[6px] p-[20px] select-none'
        title='Перейти к размещению вакансии'
        aria-label='Перейти к размещению вакансии'
      >
        <span
          className={`flex items-center justify-center border border-white py-1 px-[10px] font-medium text-[14px] text-white outline-none w-[89px] h-[24px] rounded-full ${styles.text}`}
        >
          Бесплатно
        </span>
        <h3
          className={`text-[20px] text-white font-semibold max-w-[108px] ${styles.text2}`}
        >
          Разместить вакансию
        </h3>
      </Link>
    </motion.article>
  )
}
