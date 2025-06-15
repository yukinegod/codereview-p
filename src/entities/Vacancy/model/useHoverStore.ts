import { create } from 'zustand'
import { IUseHoverStore } from '../types/types'

const useHoverStore = create<IUseHoverStore>((set) => ({
  hoveredVacancyId: null,

  setHoveredVacancyId: (hoveredVacancyId) => set(() => ({ hoveredVacancyId })),
}))

export default useHoverStore
