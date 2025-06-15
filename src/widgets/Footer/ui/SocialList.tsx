import SocialItem from './SocialItem'
import { SOCIALS } from '../config/config'
import type { SocialType } from '../types/types'

export default function SocialList() {
  return (
    <div className='flex gap-[10px]'>
      {SOCIALS.map((social) => (
        <SocialItem type={social.type as SocialType} key={social.id} />
      ))}
    </div>
  )
}
