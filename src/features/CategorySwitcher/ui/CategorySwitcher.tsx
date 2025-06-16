import Category from '@/entities/Category/ui/Category'
import { CATEGORIES } from '../config/config'
import type { CategoryType } from '@/shared/types/types'

type Props = {
  type?: 'popup' | 'default'
}

export default function CategorySwitcher({ type = 'default' }: Props) {
  return (
    <ul
      className={`flex items-start ${
        type === 'default'
          ? 'w-[649px] h-[38px] mt-[80px]'
          : 'w-[536px] h-[34px] mb-[30px]'
      } gap-[10px] select-none`}
      role='list'
      aria-label='Список категорий'
    >
      {CATEGORIES.map((category, index) => (
        <li role='listitem' key={index}>
          <Category title={category.title as CategoryType} type={type} />
        </li>
      ))}
    </ul>
  )
}
