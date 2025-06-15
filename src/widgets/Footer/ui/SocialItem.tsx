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

export default function SocialItem({ type }: Props) {
  return (
    <Link href='/' className='select-none'>
      <Image src={images[type]} alt={`${type} icon`} />
    </Link>
  )
}
