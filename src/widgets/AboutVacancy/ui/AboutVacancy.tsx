import VacancyTags from '@/entities/Vacancy/ui/VacancyTags'
import PublicationDate from './PublicationDate'
import Title from '@/entities/Item/ui/Title'

type Props = {
  date: string
  title: string
  salary: string
  remote: boolean
  internship: boolean
}

export default function AboutVacancy({
  date,
  title,
  salary,
  remote,
  internship,
}: Props) {
  return (
    <div className='flex flex-col'>
      <PublicationDate date={date} />
      <Title title={title} />
      <div className='mt-[30px]'>
        <VacancyTags remote={remote} internship={internship} salary={salary} />
      </div>
      <div className='mt-5 mb-[30px] w-[660px] h-[1px] border-1 border-[#D4D5D7]' />
    </div>
  )
}
