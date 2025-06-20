import styles from './styles.module.css'

type Props = {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <p
      className={`text-[#232325] text-[26px] font-bold mt-[10px] max-w-[541px] ${styles.title}`}
    >
      {title}
    </p>
  )
}
