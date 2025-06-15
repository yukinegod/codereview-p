import type { CategoryType } from '@/shared/types/types'

export interface IUseCategoryStore {
  activeCategory: CategoryType

  setActiveCategory: (category: CategoryType) => void
}
