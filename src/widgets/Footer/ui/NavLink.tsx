import Link from 'next/link'
import styles from './styles.module.css'

type Props = {
  to: string
  text: string
}

export default function NavLink({ to, text }: Props) {
  return (
    <Link href={to} className={`text-[#F6F6F6] text-[18px] ${styles.link}`}>
      {text}
    </Link>
  )
}
