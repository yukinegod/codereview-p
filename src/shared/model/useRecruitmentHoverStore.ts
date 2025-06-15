import { create } from 'zustand'
import { IUseRecruitmentHoverStore } from '../types/types'

const useRecruitmentHoverStore = create<IUseRecruitmentHoverStore>((set) => ({
  isHovered: false,
  setHovered: (state) => set({ isHovered: state }),
}))

export default useRecruitmentHoverStore
