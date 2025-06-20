import Image from 'next/image'
import vacancies from '../../../../public/vacanciesPopup.svg'
import tasks from '../../../../public/tasksPopup.svg'
import itEvents from '../../../../public/itEventsPopup.svg'
import recruitersContacts from '../../../../public/recruitersContactsPopup.svg'
import resumes from '../../../../public/resumesPopup.svg'
import skills from '../../../../public/skillsPopup.svg'
import interviews from '../../../../public/interviewsPopup.svg'
import petProjects from '../../../../public/petProjectsPopup.svg'
import aiTools from '../../../../public/aiToolsPopup.svg'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { ItemType } from '../types/types'
import styles from './styles.module.css'

type Props = {
  type: ItemType
  to: string
  title: string
}

const images: Record<string, StaticImport> = {
  vacancies,
  tasks,
  itEvents,
  recruitersContacts,
  resumes,
  skills,
  interviews,
  petProjects,
  aiTools,
}

export default function PopupItem({ type, to, title }: Props) {
  return (
    <li role='menuitem' className='flex gap-[6px]'>
      <Image
        width={20}
        height={20}
        src={images[type]}
        alt={`Иконка для ${title}`}
        className='w-[20px] h-[20px]'
      />
      <Link
        href={to}
        className={`text-black text-[18px] ${styles.text}`}
        title={`Перейти на страницу: ${title}`}
      >
        {title}
      </Link>
    </li>
  )
}
