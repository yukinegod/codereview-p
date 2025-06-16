import styles from './styles.module.css'

type Props = {
  label: string
}

export default function SeoKeyItem({ label }: Props) {
  return (
    <p className={`text-[#232325] text-[14px] font-medium mx-2 ${styles.tag}`}>
      {label}
    </p>
  )
}
