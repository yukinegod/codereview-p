import SocialItem from './SocialItem'
import { SOCIALS } from '../config/config'
import type { SocialType } from '../types/types'

export default function SocialList() {
  return (
    <ul
      aria-label='Социальные сети'
      className='flex gap-[10px] list-none p-0 m-0'
    >
      {SOCIALS.map((social) => (
        <li key={social.id}>
          <SocialItem type={social.type as SocialType} />
        </li>
      ))}
    </ul>
  )
}
