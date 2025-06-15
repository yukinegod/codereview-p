import styles from './styles.module.css'

type Props = {
  text: string
  marginTop?: number
}

export default function Text({ text, marginTop = 30 }: Props) {
  return (
    <p
      className={`text-[#232325] w-[660px] text-[18px] font-medium ${styles.text}`}
      style={{ marginTop: `${marginTop}px` }}
    >
      {text}
    </p>
  )
}
