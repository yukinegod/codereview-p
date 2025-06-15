import OwnerInfo from './OwnerInfo'
import PolicyAndOffer from './PolicyAndOffer'
import SocialList from './SocialList'

export default function FooterBottom() {
  return (
    <div className='flex flex-col w-[1180px] h-[105px] z-10 mt-[60px]'>
      <div className='flex justify-between'>
        <PolicyAndOffer />
        <SocialList />
      </div>
      <div className='w-full h-0 border-1 border-[#414246] bg-[#414246] mt-[20px] mb-[15px]' />
      <OwnerInfo />
    </div>
  )
}
