import { create } from 'zustand'
import { IUseCategoryStore } from '../types/types'

const useCategoryStore = create<IUseCategoryStore>((set) => ({
  activeCategory: 'Python',

  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
}))

export default useCategoryStore
