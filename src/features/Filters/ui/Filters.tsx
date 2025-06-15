import AddVacancyButton from '@/features/Vacancy/ui/AddVacancyButton'
import { FILTERS_DEFAULT, FILTERS_INTERVIEWS } from '../config/config'
import FilterItem from './FilterItem'
import type { FilterType } from '../types/types'

type Props = {
  type?: 'default' | 'interviews'
}

export default function Filters({ type = 'default' }: Props) {
  if (type === 'default') {
    return (
      <div className='w-[1022px] h-[46px] mt-[50px]'>
        <div className='flex items-start w-[967px] h-full gap-5'>
          <AddVacancyButton />
          <div className='flex items-start w-[752px] h-full gap-[10px]'>
            {FILTERS_DEFAULT.map((filter) => (
              <FilterItem
                text={filter.text}
                type={filter.type as FilterType}
                key={filter.id}
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
          {FILTERS_INTERVIEWS.map((filter) => (
            <FilterItem
              text={filter.text}
              type={filter.type as FilterType}
              key={filter.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
