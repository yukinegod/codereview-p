export type ModalType = 'login' | 'register' | 'subscribe' | 'success'

export type CategoryType =
  | 'Python'
  | 'Java'
  | 'JavaScript'
  | 'Data Science'
  | 'QA'
  | 'C#'

export type TopMenuType = 'main' | 'secondary' | 'arrow'

export interface IUseRecruitmentHoverStore {
  isHovered: boolean
  setHovered: (state: boolean) => void
}

export interface IPopupStore {
  isAuthModalOpen: boolean
  modalType: ModalType
  setModalType: (modalType: ModalType) => void
  setAuthModalStatus: () => void
}
