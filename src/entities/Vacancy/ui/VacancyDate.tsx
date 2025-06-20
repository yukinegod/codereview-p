import styles from './styles.module.css'

type Props = {
  publicationDate: string
}

export default function VacancyDate({ publicationDate }: Props) {
  return (
    <time
      className={`flex items-end text-[#86888e] text-[16px] font-medium ${styles.date}`}
      dateTime={new Date(publicationDate).toISOString()}
      itemProp='datePosted'
    >
      {new Date(publicationDate).toLocaleDateString('ru-RU')}
    </time>
  )
}
