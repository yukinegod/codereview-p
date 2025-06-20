import { create } from 'zustand'
import { IPopupStore, ModalType } from '../types/types'

const useAuthModalStore = create<IPopupStore>((set) => ({
  isAuthModalOpen: false,
  modalType: 'login' as ModalType,
  setAuthModalStatus: () =>
    set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
  setModalType: (modalType) => set(() => ({ modalType })),
}))

export default useAuthModalStore
