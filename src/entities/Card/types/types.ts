export interface IUseHoverStore {
  hoveredCardId: number | null
  setHoveredCardId: (cardId: number | null) => void
}

export type CardType =
  | 'vacancies'
  | 'skills'
  | 'tasks'
  | 'interviews'
  | 'itEvents'
  | 'petProjects'
  | 'recruitersContacts'
  | 'aiTools'
