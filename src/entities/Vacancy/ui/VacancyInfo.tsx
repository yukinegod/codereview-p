import styles from './styles.module.css'

type Props = {
  companyName: string
  location: string
}

export default function VacancyInfo({ companyName, location }: Props) {
  return (
    <div className='flex flex-col w-[319px]'>
      <p
        className={`text-[#232325] text-[18px] font-semibold ${styles.compnyName}`}
        itemProp='name'
      >
        {companyName}
      </p>
      <p
        className={`text-[#636469] text-[16px] font-semibold ${styles.location}`}
        itemProp='addressLocality'
      >
        {location}
      </p>
    </div>
  )
}
