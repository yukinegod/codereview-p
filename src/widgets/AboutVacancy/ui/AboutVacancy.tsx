import VacancyTags from '@/entities/Vacancy/ui/VacancyTags'
import PublicationDate from './PublicationDate'
import Title from '@/entities/Item/ui/Title'

export default function AboutVacancy() {
  return (
    <div className='flex flex-col'>
      <PublicationDate />
      <Title />
      <div className='mt-[30px]'>
        <VacancyTags remote={true} internship={true} salary='50000-10000' />
      </div>
      <div className='mt-5 mb-[30px] w-[660px] h-[1px] border-1 border-[#D4D5D7]' />
    </div>
  )
}
