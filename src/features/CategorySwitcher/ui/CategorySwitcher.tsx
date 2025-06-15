import Category from '@/entities/Category/ui/Category'
import { CATEGORIES } from '../config/config'
import type { CategoryType } from '@/shared/types/types'

type Props = {
  type?: 'popup' | 'default'
}

export default function CategorySwitcher({ type = 'default' }: Props) {
  return (
    <div
      className={`flex items-start ${
        type === 'default'
          ? 'w-[649px] h-[38px] mt-[80px]'
          : 'w-[536px] h-[34px] mb-[30px]'
      } gap-[10px] select-none`}
    >
      {CATEGORIES.map((category, index) => (
        <Category
          title={category.title as CategoryType}
          type={type}
          key={index}
        />
      ))}
    </div>
  )
}
