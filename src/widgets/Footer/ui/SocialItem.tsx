import Image from 'next/image'
import Link from 'next/link'
import tg from '../../../../public/tg.svg'
import yt from '../../../../public/yt.svg'
import linked from '../../../../public/linked.svg'
import type { SocialType } from '../types/types'

type Props = {
  type: SocialType
}

const images = {
  tg,
  yt,
  linked,
}

const labels: Record<SocialType, string> = {
  tg: 'Telegram',
  yt: 'YouTube',
  linked: 'LinkedIn',
}

export default function SocialItem({ type }: Props) {
  return (
    <Link
      href='/'
      aria-label={`Ссылка на ${labels[type]}`}
      title={`Перейти на ${labels[type]}`}
      className='select-none'
    >
      <Image src={images[type]} alt={`${labels[type]} icon`} />
    </Link>
  )
}
