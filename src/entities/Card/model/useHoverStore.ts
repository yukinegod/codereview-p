import { create } from 'zustand'
import { IUseHoverStore } from '../types/types'

const useHoverStore = create<IUseHoverStore>((set) => ({
  hoveredCardId: null,
  setHoveredCardId: (id) => set({ hoveredCardId: id }),
}))

export default useHoverStore
