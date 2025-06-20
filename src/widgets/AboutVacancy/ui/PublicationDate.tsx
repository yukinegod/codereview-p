import styles from './styles.module.css'

type Props = {
  date: string
}

export default function PublicationDate({ date }: Props) {
  return (
    <time
      className={`text-[#636469] text-[18px] font-medium ${styles.publicationDate}`}
      dateTime={new Date(date).toISOString()}
      itemProp='datePosted'
    >
      Опубликовано {new Date(date).toLocaleDateString()}
    </time>
  )
}
