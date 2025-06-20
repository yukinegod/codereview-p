import Image from 'next/image'
import remote from '../../../../public/remote.svg'
import office from '../../../../public/office.svg'
import internship from '../../../../public/internship.svg'
import salary from '../../../../public/salary.svg'
import minSalary from '@/shared/utils/minSalary'
import styles from './styles.module.css'

type Props = {
  type: 'remote' | 'office' | 'internship' | 'salary'
  salary?: string
}

const data = {
  remote: {
    icon: remote,
    text: 'удаленно',
    itemprop: 'jobLocationType',
  },
  office: {
    icon: office,
    text: 'в офис',
    itemprop: 'jobLocationType',
  },
  internship: {
    icon: internship,
    text: 'стажировка',
    itemprop: 'employmentType',
  },
  salary: {
    icon: salary,
    text: 'от ',
    itemprop: 'baseSalary',
  },
}

export default function Tag({ type, salary }: Props) {
  return (
    <div
      className='flex gap-[2px]'
      itemProp={data[type].itemprop}
      {...(type === 'salary' && {
        itemScope: true,
        itemType: 'https://schema.org/MonetaryAmount',
      })}
    >
      <Image
        width={18}
        height={18}
        src={data[type].icon}
        alt={`Иконка: ${data[type].text}`}
        className='w-[18px] h-[18px]'
        aria-hidden='true'
      />
      <p className={`text-[#232325] text-[16px] font-medium ${styles.text}`}>
        {data[type].text}
        {salary && (
          <span itemProp={type === 'salary' ? 'value' : undefined}>
            {minSalary(salary) + ' ₽'}
          </span>
        )}
      </p>
    </div>
  )
}
