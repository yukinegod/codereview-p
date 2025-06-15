import formatDate from '@/shared/utils/formatDate'
import styles from './styles.module.css'

type Props = {
  publicationDate: string
}

export default function VacancyDate({ publicationDate }: Props) {
  return (
    <p
      className={`flex items-end text-[#86888e] text-[16px] font-medium ${styles.date}`}
    >
      {formatDate(publicationDate)}
    </p>
  )
}
