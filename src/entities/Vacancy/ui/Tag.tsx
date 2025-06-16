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
  },
  office: {
    icon: office,
    text: 'в офис',
  },
  internship: {
    icon: internship,
    text: 'стажировка',
  },
  salary: {
    icon: salary,
    text: 'от ',
  },
}

export default function Tag({ type, salary }: Props) {
  return (
    <div className='flex gap-[2px]'>
      <Image src={data[type].icon} alt='vacancy icon' />
      <p className={`text-[#232325] text-[16px] font-medium ${styles.text}`}>
        {data[type].text}
        {salary && minSalary(salary) + '    ₽'}
      </p>
    </div>
  )
}
