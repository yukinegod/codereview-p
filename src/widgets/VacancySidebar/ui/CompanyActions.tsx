import Image from 'next/image'
import styles from './styles.module.css'
import OfferButton from '@/shared/ui/OfferButton/ui/OfferButton'
import AnswerButton from '@/shared/ui/AnswerButton/ui/AnswerButton'

type Props = {
  image: string
  companyName: string
  location: string
}

export default function CompanyActions({
  image,
  companyName,
  location,
}: Props) {
  return (
    <div className='flex flex-col w-[300px] h-[202px] rounded-[8px] p-[20px]'>
      <div className='flex gap-[15px]'>
        <Image
          src={image}
          width={50}
          height={50}
          alt='company icon'
          className='w-[50px] h-[50px] rounded-[8px] bg-cyan-300'
        />
        <div className='flex flex-col justify-center'>
          <p
            className={`text-[#232325] text-[18px] font-medium ${styles.companyName}`}
          >
            {companyName}
          </p>
          <p
            className={`text-[#636469] text-[16px] font-medium ${styles.location}`}
          >
            {location}
          </p>
        </div>
      </div>
      <OfferButton />
      <AnswerButton />
    </div>
  )
}
