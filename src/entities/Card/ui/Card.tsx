'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import useHoverStore from '../model/useHoverStore'
import vacancies from '../../../../public/vacancies.svg'
import skills from '../../../../public/skills.svg'
import tasks from '../../../../public/tasks.svg'
import interviews from '../../../../public/interviews.svg'
import itEvents from '../../../../public/itEvents.svg'
import petProjects from '../../../../public/petProjects.svg'
import recruitersContacts from '../../../../public/recruitersContacts.svg'
import aiTools from '../../../../public/aiTools.svg'
import grid from '../../../../public/grid.svg'
import type { CardType } from '../types/types'
import styles from './styles.module.css'
import Link from 'next/link'

type Props = {
  type: CardType
  title: string
  description: string
  index: number
}

const images = {
  vacancies,
  skills,
  tasks,
  interviews,
  itEvents,
  petProjects,
  recruitersContacts,
  aiTools,
}

export default function Card({ type, title, description, index }: Props) {
  const { hoveredCardId, setHoveredCardId } = useHoverStore()
  const isHovered = hoveredCardId === index

  return (
    <Link href={`/${type}`} title={`Перейти в раздел: ${title}`}>
      <motion.article
        className={`relative flex flex-col justify-between min-w-[249px] h-[280px] max-h-[280px] pb-[20px] px-[20px] rounded-[6px] cursor-pointer select-none overflow-hidden
        ${type === 'tasks' ? `${styles.tasksBg}` : ''}
        ${type === 'itEvents' ? `${styles.itEventsBg}` : ''}`}
        onMouseEnter={() => setHoveredCardId(index)}
        onMouseLeave={() => setHoveredCardId(null)}
        aria-label={`Карточка категории: ${title}`}
      >
        <motion.div
          className='absolute top-0 left-0 pointer-events-none'
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 100,
            x: isHovered ? 0 : -100,
          }}
          transition={{ duration: 0.22 }}
          style={{
            width: '448px',
            height: '512px',
            transform: 'rotate(45deg)',
          }}
        >
          <Image src={grid} alt='Графическая сетка' />
        </motion.div>

        <motion.div
          initial={{ marginTop: 20 }}
          animate={{ marginTop: isHovered ? 30 : 20 }}
          transition={{ duration: 0.2 }}
          className='z-10'
        >
          <Image src={images[type]} alt={`Иконка категории: ${title}`} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, marginTop: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? 14 : 10,
          }}
          transition={{ duration: 0.2 }}
          className={`max-w-[209px] max-h-[80px] text-[16px] font-medium mb-auto z-10 ${styles.description}`}
        >
          {description}
        </motion.p>

        <h2
          className={`font-semibold text-[20px] max-w-[173px] tracking-[-0.5px] z-10 ${styles.cardText}`}
        >
          {title}
        </h2>
      </motion.article>
    </Link>
  )
}
