import { VACANCIES_FILTERS, INTERVIEWS_FILTERS } from '../config/filterConfig'
import FilterItem from './FilterItem'
import NewVacancyButton from '@/features/NewVacancy/ui/NewVacancyButton'
import type { FilterType } from '../types/types'

type Props = {
  type?: 'default' | 'interviews'
}

export default function Filters({ type = 'default' }: Props) {
  if (type === 'default') {
    return (
      <div className='w-[1022px] h-[46px] mt-[50px] z-50'>
        <div className='flex items-start w-[967px] h-full gap-5'>
          <NewVacancyButton />
          <div className='flex items-start w-[752px] h-full gap-[10px]'>
            {VACANCIES_FILTERS.map((filter) => (
              <FilterItem
                key={filter.id}
                id={filter.id}
                label={filter.label}
                type={filter.type as FilterType}
                options={filter.options}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } else if (type === 'interviews') {
    return (
      <div className='w-[1022px] h-[46px] mt-[50px]'>
        <div className='flex items-start h-full gap-[10px]'>
          {INTERVIEWS_FILTERS.map((filter) => (
            <FilterItem
              key={filter.id}
              id={filter.id}
              label={filter.label}
              type={filter.type as FilterType}
              options={filter.options}
            />
          ))}
        </div>
      </div>
    )
  }
}
