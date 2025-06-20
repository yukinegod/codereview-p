import Tag from './Tag'

type Props = {
  remote: boolean
  internship: boolean
  salary: string
  type?: 'preview' | 'vacancy'
}

export default function VacancyTags({
  remote,
  internship,
  salary,
  type = 'preview',
}: Props) {
  return (
    <div className='flex items-center gap-3 mt-[10px]' itemProp='jobBenefits'>
      {remote ? <Tag type='remote' /> : <Tag type='office' />}
      {internship && <Tag type='internship' />}
      {salary && <Tag type='salary' salary={salary} />}
    </div>
  )
}
