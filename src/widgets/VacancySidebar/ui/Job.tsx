import styles from './styles.module.css'

type Props = {
  title: string
  companyName: string
}

export default function Job({ title, companyName }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <p
        className={`text-[#232325] text-[16px] font-semibold ${styles.jobTitle}`}
      >
        {title}
      </p>
      <p
        className={`text-[#86888E] text-[16px] font-medium ${styles.jobCompanyName}`}
      >
        {companyName}
      </p>
    </div>
  )
}
